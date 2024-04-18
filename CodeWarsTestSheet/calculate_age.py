# Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

# Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

# Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

# "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

# Good Luck!

def calculate_age(birth, curr):
    if birth == curr:
        return "You were born this very year!"
    
    age = abs(curr - birth)
    year = "year" if age == 1 else "years"
    
    if birth < curr:
        return f"You are {age} {year} old."
    if birth > curr:
        return f"You will be born in {age} {year}."

print(calculate_age(2012, 2016) == "You are 4 years old.")
print(calculate_age(1989, 2016) == "You are 27 years old.")
print(calculate_age(2000, 2090) == "You are 90 years old.")
print(calculate_age(2000, 1990) == "You will be born in 10 years.")
print(calculate_age(2000, 2000) == "You were born this very year!")
print(calculate_age(900, 2900) == "You are 2000 years old.")
print(calculate_age(2010, 1990) == "You will be born in 20 years.")
print(calculate_age(2010, 1500) == "You will be born in 510 years.")
print(calculate_age(2011, 2012) == "You are 1 year old.")
print(calculate_age(2000, 1999) == "You will be born in 1 year.")