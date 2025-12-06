
file_path = r'd:\portfolio\templates\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

count = 0
for i, line in enumerate(lines):
    if '{{' in line or '}}' in line:
        print(f"{i+1}: {line.strip()}")
        count += 1
        if count >= 20:
            break
