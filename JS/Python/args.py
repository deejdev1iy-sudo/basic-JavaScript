def the_args(*args):
    print(f"Args type of {type(args)}")
    print(args)

the_args(4, 8, 3)
the_args("fake", False, 2.25)

def sum(a, b):
    result= a*b

def sum2(*args):
    results= 0
    for n in args:
        print(f"n is {n}")
        results += n
    print(f"sum is {results}")
sum2(4, 6, 90, 25, 100)        