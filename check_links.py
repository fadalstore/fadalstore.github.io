import os
from bs4 import BeautifulSoup

def check_links():
    root_dir = "/home/ubuntu/fadalstore.github.io"
    index_path = os.path.join(root_dir, "index.html")
    
    with open(index_path, "r") as f:
        soup = BeautifulSoup(f, "html.parser")
        
    links = soup.find_all("a")
    broken_links = []
    
    for link in links:
        href = link.get("href")
        if not href:
            continue
            
        # Skip external links and anchors
        if href.startswith("http") or href.startswith("#") or href.startswith("mailto:") or href.startswith("tel:"):
            continue
            
        # Normalize path
        if href.startswith("/"):
            target_path = os.path.join(root_dir, href[1:])
        else:
            target_path = os.path.join(root_dir, href)
            
        # Handle directories (index.html)
        if os.path.isdir(target_path):
            target_path = os.path.join(target_path, "index.html")
            
        if not os.path.exists(target_path):
            broken_links.append(href)
            
    if broken_links:
        print(f"Found {len(broken_links)} broken links:")
        for bl in set(broken_links):
            print(f"- {bl}")
    else:
        print("No broken internal links found in index.html.")

if __name__ == "__main__":
    check_links()
