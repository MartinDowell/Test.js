#Monty Test 3

shop = {
    'apples' : [2, 11],
    'pears': 7,
    'bananas' : 5,
    'raspberries' : 8,
    'strawberries' : 9}

gash = shop.keys()
print (gash)

foo=[]
for a,b in shop.items():
    foo.append(b)
print (foo)
