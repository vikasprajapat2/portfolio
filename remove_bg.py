
file_path = r'd:\portfolio\templates\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Filter out the lines we want to remove
new_lines = []
skip = False
for line in lines:
    if '<!-- 4K Background Image -->' in line:
        skip = True
    
    if not skip:
        new_lines.append(line)
    
    if skip and '</div>' in line and 'style="background-image' not in line: # End of the div
        skip = False

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Removed fixed background div.")
