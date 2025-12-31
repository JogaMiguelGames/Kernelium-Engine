indices = []

while True:
    line = input()
    if line == "END":
        break

    if line.startswith("f "):
        parts = line.split()[1:]
        for p in parts:
            idx = p.split("/")[0]
            indices.append(str(int(idx) - 1))

print("const indices = new Uint16Array([")
for i, v in enumerate(indices):
    if i % 3 == 0:
        print("  ", end="")
    print(v, end="")
    if i < len(indices) - 1:
        print(", ", end="")
    if (i + 1) % 3 == 0:
        print()
print("]);")