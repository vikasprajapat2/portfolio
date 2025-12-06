
from bs4 import BeautifulSoup
import os

file_path = r'd:\portfolio\templates\index.html'

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    soup = BeautifulSoup(content, 'html.parser')
    print("HTML Parsing Successful")
    
    # Check for specific elements
    if soup.find('body'):
        print("Body tag found")
    else:
        print("Body tag MISSING")
        
    if soup.find('head'):
        print("Head tag found")
    else:
        print("Head tag MISSING")
        
except Exception as e:
    print(f"HTML Parsing Failed: {e}")
