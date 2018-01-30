f = []

def create_series(n1, n2, sl):
    for x in range (0,sl-2):
        f.append((n1+n2))
        r = n2 / n1
        print (r)
        n1 = f[x + 1]
        n2 = f[x + 2]




n1 = input('Enter the first starting number:')
n2 = input('Enter the second starting number:')
sl = input('Enter the length of the generated series:')
print ('-' * 50)

n1 = int(n1)
n2 = int(n2)
sl = int(sl)

f = [n1, n2]
create_series(n1, n2, sl)
print ('-' * 50)
print ('Fibonacci series generated: %s' % (f))
