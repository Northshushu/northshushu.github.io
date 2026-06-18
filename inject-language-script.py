#!/usr/bin/env python3
"""Inject language-switcher.js script tag into all HTML files in _site/"""
import os
import sys
import re

def inject_script():
    site_dir = '_site'
    script_tag = '  <script src="/assets/js/language-switcher.js"></script>\n'
    
    count = 0
    for root, dirs, files in os.walk(site_dir):
        for f in files:
            if f.endswith('.html'):
                path = os.path.join(root, f)
                try:
                    with open(path, 'r', encoding='utf-8') as fp:
                        content = fp.read()
                    
                    # Only inject if not already present
                    if 'language-switcher.js' in content:
                        continue
                    
                    # Find </body> and inject before it
                    # Handle possible whitespace variations
                    body_match = re.search(r'</body>\s*$', content, re.MULTILINE)
                    if body_match:
                        # Inject before </body>
                        content = content[:body_match.start()] + script_tag + content[body_match.start():]
                        with open(path, 'w', encoding='utf-8') as fp:
                            fp.write(content)
                        count += 1
                        print(f'Injected: {path}')
                    else:
                        print(f'WARN: </body> not found in {path}', file=sys.stderr)
                
                except Exception as e:
                    print(f'Error processing {path}: {e}', file=sys.stderr)
    
    print(f'\nTotal files injected: {count}')

if __name__ == '__main__':
    inject_script()
