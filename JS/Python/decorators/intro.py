def my_deco(func):
    def wrapper():
        print("Before we call the function")
        func()
        print("After we call the function")
    return wrapper

def hello():
    print("Hello world func executes")
    print("Hello world") 

@my_deco
def french_hello():
    print("French hello func") 
    print("Bonjour world")

french_hello()             