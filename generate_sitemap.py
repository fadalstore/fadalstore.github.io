import os
from datetime import datetime

def generate_sitemap():
    base_url = "https://fadalstore.github.io/"
    root_dir = "/home/ubuntu/fadalstore.github.io"
    
    # Files to exclude from sitemap
    exclude_files = [
        "admin.html",
        "google250c51e5fea180e9.html",
        "googled378bcbdc246f969.html",
        "404.html"
    ]
    
    # Directories to scan
    scan_dirs = [
        ".",
        "courses",
        "courses/programming",
        "courses/security"
    ]
    
    urls = []
    
    for d in scan_dirs:
        current_dir = os.path.join(root_dir, d)
        if not os.path.exists(current_dir):
            continue
            
        for file in os.listdir(current_dir):
            if file.endswith(".html") or file.endswith(".htm"):
                if file in exclude_files:
                    continue
                
                # Construct relative path
                rel_path = os.path.join(d, file)
                if rel_path.startswith("./"):
                    rel_path = rel_path[2:]
                
                # Special case for index files
                if rel_path == "index.html" or rel_path == "index.htm":
                    loc = base_url
                    priority = "1.00"
                elif rel_path.endswith("/index.html"):
                    loc = base_url + rel_path[:-10]
                    priority = "0.90"
                else:
                    loc = base_url + rel_path
                    priority = "0.80"
                
                # Get last modified time
                full_path = os.path.join(root_dir, rel_path)
                lastmod = datetime.fromtimestamp(os.path.getmtime(full_path)).strftime('%Y-%m-%d')
                
                urls.append({
                    "loc": loc,
                    "lastmod": lastmod,
                    "priority": priority
                })
    
    # Sort URLs by priority and then by location
    urls.sort(key=lambda x: (x['priority'], x['loc']), reverse=True)
    
    # Generate XML
    xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    for url in urls:
        xml_content += f'  <url>\n'
        xml_content += f'    <loc>{url["loc"]}</loc>\n'
        xml_content += f'    <lastmod>{url["lastmod"]}</lastmod>\n'
        xml_content += f'    <priority>{url["priority"]}</priority>\n'
        xml_content += f'  </url>\n'
        
    xml_content += '</urlset>\n'
    
    with open(os.path.join(root_dir, "sitemap.xml"), "w") as f:
        f.write(xml_content)
    
    print(f"Sitemap generated with {len(urls)} URLs.")

if __name__ == "__main__":
    generate_sitemap()
