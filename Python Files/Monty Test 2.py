# Monty Test 2

inventory = {
    'Books' : [10, 3],
    'Jugs' : [15, 1.5],
    'Carpet' : [4, 22.5],
    'Plates' : [22, 14.25],
    'Flowers' : [3, 8]
}

def num_items(prices):
    l = len(inventory)
    return l

def total_items(num):
    ti = 0
    for (c,d) in inventory.values():
        ti = ti + c
    return ti

def stock_value(prices):
    total = 0
    for (a,b) in inventory.values():
        tc = a * b
        total = total + tc
        total = round(total,2)
    return total

def average_price(numbers):
    trp = 0
    for (e,f) in inventory.values():
        tc = e * f
        trp = trp + tc
        avg = trp / total_items(inventory)
        avg = round(avg,2)
    return avg

print('The number of different items in your shop is %i' % num_items(inventory))
print ('Total number of items is %i' % total_items(inventory))
print('The value of your stock is: £%s' % stock_value(inventory))
print ('Average item price is £%s' % average_price(inventory))
