import subprocess
import os
import sys

public_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public')

# Find all PNG textures (exclude cursors and favico)
png_files = []
for root, dirs, files in os.walk(os.path.join(public_dir, 'textures')):
    for f in files:
        if f.endswith('.png'):
            png_files.append(os.path.join(root, f))

print(f'Found {len(png_files)} PNG textures to convert')
total_before = 0
total_after = 0
converted = []
failed = []

for png in sorted(png_files):
    webp = png.rsplit('.', 1)[0] + '.webp'
    
    # Skip if webp already exists with similar or newer timestamp
    size_before = os.path.getsize(png)
    total_before += size_before
    
    # Convert using sharp-cli
    cmd = ['npx', '-y', 'sharp-cli', '-i', png, '-o', webp, '--format', 'webp', '--quality', '85']
    result = subprocess.run(cmd, capture_output=True, text=True, shell=True)
    
    if os.path.exists(webp):
        size_after = os.path.getsize(webp)
        total_after += size_after
        saving = (1 - size_after / size_before) * 100
        print(f'{os.path.relpath(png, public_dir):55s} {size_before/1024:8.1f} KB -> {size_after/1024:8.1f} KB ({saving:.0f}% saved)')
        converted.append(png)
    else:
        print(f'FAILED: {os.path.relpath(png, public_dir)}')
        print(f'  stderr: {result.stderr[:200]}')
        failed.append(png)
        total_after += size_before  # count original size for failed ones

print(f'\nConverted: {len(converted)}/{len(png_files)}')
if failed:
    print(f'Failed: {len(failed)}')
print(f'Total: {total_before/1024/1024:.2f} MB -> {total_after/1024/1024:.2f} MB ({(1-total_after/total_before)*100:.0f}% saved)')
