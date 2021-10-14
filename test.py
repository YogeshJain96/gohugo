version_list = ["abc = xyz:1.2.3", "abc1 = ccc:1.3.3", "abc2 = pqr:4.2.3"]
# print(repr("\n- ".join(version_list)))
for v in version_list:
    print("- " + v)
    with open(f"version_info.txt", "a") as outfile:
        outfile.write("- " + v + "\n")
