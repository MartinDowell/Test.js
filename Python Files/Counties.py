cities = {
    'Birmingham' : 'West Midlands',
    'Stratford-upon-Avon' : 'Warwickshire',
    'Oxford' : 'Oxfordshire',
    'Leicester' : 'Leicestershire',
    'Nind' : 'Shropshire',
    'Leyburn' : 'Herefordshire',
    'Matlock' : 'Derbyshire',
    'Manchester' : 'Cheshire',
    'Newcastle' : 'Tyne and Wear'
}

print ('-  ' * 10)
print ('The number of counties are: %d' % len(cities))
print ('-  ' * 10)

print('List of towns and cities: %s' % cities.keys())
print ('-  ' * 10)

print('List of counties: %s' % cities.values())
print ('-  ' * 10)

c = input ('Find town or city...')
print ('%s is located in the county of %s' % (c, cities.get(c)))
