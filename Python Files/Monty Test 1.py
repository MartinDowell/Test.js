# The Monty test

def divide(p,q):
    divis = a / b
    rem = a % b
    return divis,rem

a = input('Input number a:')
a = int(a)
b = input('Input number b:')
b = int(b)

print ('Dividing %i by %i gives: ' % (a,b))

print ('%i remainder %i' % (divide(a,b)))
