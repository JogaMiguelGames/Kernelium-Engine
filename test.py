values = []

while True:
    try:
        line = input()
    except EOFError:
        break

    if line == "END":
        break

    if line.startswith("v "):
        values.extend(line.split()[1:4])

print("const vertices = new Float32Array([")
for i, v in enumerate(values):
    if i % 3 == 0:
        print("  ", end="")
    print(v, end="")
    if i < len(values) - 1:
        print(", ", end="")
    if (i + 1) % 3 == 0:
        print()
print("]);")