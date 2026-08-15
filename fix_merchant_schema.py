import os
import re
import json

def fix_schema(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the JSON-LD script block
    pattern = re.compile(r'(<script type="application/ld\+json">)(.*?)(</script>)', re.DOTALL)
    match = pattern.search(content)
    
    if not match:
        return False

    prefix, json_text, suffix = match.groups()
    
    try:
        data = json.loads(json_text)
    except json.JSONDecodeError:
        print(f"Error decoding JSON in {file_path}")
        return False

    # Handle both single object and list of objects
    if isinstance(data, list):
        items_to_process = data
    else:
        items_to_process = [data]

    modified = False
    
    for item_data in items_to_process:
        if not isinstance(item_data, dict) or item_data.get("@type") != "Review":
            continue

        # 1. Add description to root if missing
        if "description" not in item_data:
            desc = item_data.get("reviewBody", "")[:150]
            if not desc:
                desc = "Comprehensive review and analysis of " + item_data.get("itemReviewed", {}).get("name", "this product")
            item_data["description"] = desc
            modified = True

        # 2. Add hasMerchantReturnPolicy and shippingDetails to offers
        item = item_data.get("itemReviewed", {})
        if not isinstance(item, dict):
            continue
            
        offers = item.get("offers")
        
        if isinstance(offers, dict):
            if "hasMerchantReturnPolicy" not in offers:
                offers["hasMerchantReturnPolicy"] = {
                    "@type": "MerchantReturnPolicy",
                    "applicableCountry": "US",
                    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnPeriod",
                    "merchantReturnDays": 30,
                    "returnMethod": "https://schema.org/ReturnByMail",
                    "returnFees": "https://schema.org/FreeReturn"
                }
                modified = True
            
            if "shippingDetails" not in offers:
                offers["shippingDetails"] = {
                    "@type": "OfferShippingDetails",
                    "shippingRate": {
                        "@type": "MonetaryAmount",
                        "value": 0,
                        "currency": "USD"
                    },
                    "shippingDestination": {
                        "@type": "DefinedRegion",
                        "addressCountry": "US"
                    }
                }
                modified = True

    if modified:
        new_json_text = json.dumps(data, indent=2, ensure_ascii=False)
        # Indent the JSON block slightly for readability in the markdown file
        new_json_text = "\n" + new_json_text + "\n"
        new_content = content[:match.start()] + prefix + new_json_text + suffix + content[match.end():]
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    
    return False

posts_dir = "/home/ubuntu/fadalstore_repo_new/_posts"
count = 0
for filename in os.listdir(posts_dir):
    if filename.endswith(".md"):
        path = os.path.join(posts_dir, filename)
        if fix_schema(path):
            print(f"Fixed: {filename}")
            count += 1

print(f"Total files fixed: {count}")
