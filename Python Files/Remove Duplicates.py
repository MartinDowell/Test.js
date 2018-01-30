def remove_duplicates(numbers):
    dr = []
    count = 0
    for n in numbers:
        if n not in dr:
            dr.append(n)


    print (dr)
    return dr

numbers = input('Enter a list of numbers:')
remove_duplicates(numbers)
