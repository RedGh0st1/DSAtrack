
# Your task is simply to count the total number of lowercase letters in a string.

# Examples
# "abc" ===> 3

# "abcABC123" ===> 3

# "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

# "" ===> 0;

# "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

# "abcdefghijklmnopqrstuvwxyz" ===> 26

import re
def lowercase_count(strng):
    count = re.findall(r"[a-z]", strng)
    return len(count)





print(lowercase_count("abc"), 3)
print(lowercase_count("abcABC123"), 3)
print(lowercase_count("abcABC123!@#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3)
print(lowercase_count(""), 0)
print(lowercase_count("ABC123!@#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
print(lowercase_count("abcdefghijklmnopqrstuvwxyz"), 26)


# another verson2
# def lowercase_count(strng):
#     # create variable to store count 
#     count = 0
#     for str in strng:
#         if str.islower():    
#             count += 1 
#     return count


# def lowercase_count(s):
    # return sum(c.islower() for c in s)



#     import re
# def lowercase_count(string):
#     return len(re.findall('[a-z]',string))

# def lowercase_count(strng):
#     return len([ch for ch in strng if ch.islower()])