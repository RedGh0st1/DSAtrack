#  Complete the function which returns the weekday according to the input number:

#  1 returns "Sunday"
#  2 returns "Monday"
#  3 returns "Tuesday"
#  4 returns "Wednesday"
#  5 returns "Thursday"
#  6 returns "Friday"
#  7 returns "Saturday"
#  Otherwise returns "Wrong, please enter a number between 1 and 7"
def whatday(num):
    if num == 1 :
        return "Sunday"
    elif num == 2:
        return "Monday"
    elif num == 3:
        return "Tuesday"
    elif num == 4:
        return "Wednesday"
    elif num == 5:
        return "Thursday"
    elif num == 6:
        return "Friday"
    elif num == 7:
        return "Saturday"
    else: 
        return "Wrong, please enter a number between 1 and 7"

print(whatday(1) == 'Sunday')
print(whatday(2) ==  'Monday')
print(whatday(3) == 'Tuesday')
print(whatday(8) == 'Wrong, please enter a number between 1 and 7')
print(whatday(20) == 'Wrong, please enter a number between 1 and 7')



# another version
# def whatday(num):
    # days = ('Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur')
    # return days[num-1] + 'day' if 0 < num < 8 else 'Wrong, please enter a number between 1 and 7' 

# another version2
# def whatday(num):
#   switcher = {
#       1:'Sunday',
#       2:'Monday',
#       3:'Tuesday',
#       4:'Wednesday',
#       5:'Thursday',
#       6:'Friday',
#       7:'Saturday'
#   }
#   return switcher.get(num, 'Wrong, please enter a number between 1 and 7')

# another version 
# WEEKDAYS = {
#     1: 'Sunday',
#     2: 'Monday',
#     3: 'Tuesday',
#     4: 'Wednesday',
#     5: 'Thursday',
#     6: 'Friday',
#     7: 'Saturday' }
# ERROR = 'Wrong, please enter a number between 1 and 7'


# def whatday(n):
#     return WEEKDAYS.get(n, ERROR)
