def theKwargs(**kwargs):
    print("Kwargs is", type(kwargs))
    print(kwargs)

theKwargs(name="soreni", email="soreni2cool@gmail.com")

def area_rect(length, width):
    area = length*width
    print(f"for rectangle with length {length} and width{width} area is {area}")

area_rect(12, 3)    