import os
import re

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

posts_dir = '_posts'
for filename in os.listdir(posts_dir):
    if filename.endswith('.md') and 'article' in filename:
        path = os.path.join(posts_dir, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            title_match = re.search(r'^title:\s*"(.*)"', content, re.MULTILINE)
            if title_match:
                title = title_match.group(1)
                slug = slugify(title)
                date = filename[:10]
                new_filename = f"{date}-{slug}.md"
                new_path = os.path.join(posts_dir, new_filename)
                
                if path != new_path:
                    print(f"Renaming {filename} to {new_filename}")
                    os.rename(path, new_path)

if __name__ == "__main__":
    pass
