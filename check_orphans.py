import os
from bs4 import BeautifulSoup

def check_orphans():
    root_dir = "/home/ubuntu/fadalstore.github.io"
    index_path = os.path.join(root_dir, "index.html")
    
    with open(index_path, "r") as f:
        soup = BeautifulSoup(f, "html.parser")
        
    links = soup.find_all("a")
    linked_files = set()
    
    for link in links:
        href = link.get("href")
        if not href:
            continue
        if href.startswith("http") or href.startswith("#") or href.startswith("mailto:") or href.startswith("tel:"):
            continue
        
        # Normalize path
        if href.startswith("/"):
            rel_path = href[1:]
        else:
            rel_path = href
            
        linked_files.add(rel_path)
        
    # Check for articles not linked
    all_articles = [f for f in os.listdir(root_dir) if f.startswith("article") and f.endswith(".html")]
    orphans = [a for a in all_articles if a not in linked_files]
    
    if orphans:
        print(f"Found {len(orphans)} orphaned articles:")
        for o in sorted(orphans):
            print(f"- {o}")
    else:
        print("No orphaned articles found.")

if __name__ == "__main__":
    check_orphans()
