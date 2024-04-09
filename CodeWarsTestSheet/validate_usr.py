# Write a simple regex to validate a username. Allowed characters are:

# lowercase letters,
# numbers,
# underscore
# Length should be between 4 and 16 characters (both included).


def validate_usr(username):
    #your code here

        print(validate_usr('asddsa') == True)
        print(validate_usr('a') == False)
        print(validate_usr('Hass') == False)
        print(validate_usr('Hasd_12assssssasasasasasaasasasasas') == False)
        print(validate_usr('') == False)
        print(validate_usr('____') == True)
        print(validate_usr('012') == False)
        print(validate_usr('p1pp1') ==True)
        print(validate_usr('asd43 34') == False)
        print(validate_usr('asd43_34') == True)
        print(validate_usr('too_long_username_with_only_valid_characters_123') == False)
    