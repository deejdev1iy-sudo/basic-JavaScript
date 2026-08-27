def args_kwargs(*args, **kwargs):
    print("All args", args)
    print("All kwargs", kwargs)

args_kwargs(120, 250, j="feaven", k='orange')