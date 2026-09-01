def log_deco(func):
    def wrapper(*args, **kwargs):
        print("----------")
        print("Args", args)
        print("Kwargs", kwargs)
        results = func(*args, **kwargs)
        print(f"Function called was {func.__name__}")
        print("results", results)
        print("----------")
    return wrapper

@log_deco
def hello():
    print("Hello world!")
    return 123

@log_deco
def sunm(a,b):
    ans = a+b
    return ans

sum(a=10, b=30)
sum(10, 120)
