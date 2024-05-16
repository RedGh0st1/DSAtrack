# Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

# Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

# Make sure to round off the result to two decimal points.

# Some useful associations relevant to this kata:


def converter(mpg):
    # 1 Imperial Gallon = 4.54609188 litres
    # 1 Mile = 1.609344 kilometres
    # whats my input? number in mpg(miles per gallon)
    # 10 miles is equal to approximately 16.09344 / 4.54609188 = 3.54006044 litre
   return round((mpg * 1.609344)/4.54609188, 2)

print(converter(10) == 3.54)
print(converter(30) == 10.62)
print(converter(24) ==  8.50)
print(converter(36) == 12.74)