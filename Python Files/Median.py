def median(numbers):
    sl = sorted(numbers)
    if len(sl) % 2 == 1:
        mp = int((len(sl)-1) / 2)
        m = sl[mp]

    else:
        mp = int(len(sl) / 2)
        m = (int(sl[mp-1]) + int(sl[mp])) / 2


    print (m)
    return m

numbers = input('Enter a list of numbers:')
median(numbers)
