# As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!
# You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!
# You are given 5 variables;

# sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.
# sharkSpeed = how fast it can move in metres/second.
# pontoonDistance = how far you need to swim to safety in metres.
# youSpeed = how fast you can swim in metres/second.
# dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
# The pontoon, you, and the shark are all aligned in one dimension.
# If you make it, return "Alive!", if not, return "Shark Bait!".


def shark(pontoon_distance, shark_distance, you_speed, shark_speed, dolphin):
    if dolphin:
        you_speed *=2
    if abs(pontoon_distance / you_speed) > abs(shark_distance / shark_speed):
        return "Shark Bait!"
    else:
        return "Alive!"
    

print(shark(12, 50, 4, 8, True) == "Alive!");
print(shark(7, 55, 4, 16, True) == "Alive!");
print(shark(24, 0, 4, 8, True) == "Shark Bait!");


# another version 1
# def shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin):
    # return 'Alive!' if (pontoonDistance / youSpeed < sharkDistance / (sharkSpeed - 0.5*sharkSpeed*dolphin)) else 'Shark Bait!'

# another version 2
#  def shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin):
#     if dolphin:
#         sharkSpeed /= 2
#     return "Alive!" if pontoonDistance / youSpeed <= sharkDistance / sharkSpeed else "Shark Bait!"   