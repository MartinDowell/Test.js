class Car(object):
    def __init__(self, model, colour, mpg):
        self.model = model
        self.colour = colour
        self.mpg = mpg

metro = Car('Metro', 'opal', 54)
fiesta = Car('Fiesta', 'blue', 48)
focus = Car('Focus', 'green', 46)

print (('First car is a %s %s that does %i mpg.') % (metro.colour, metro.model, metro.mpg))
print (('Second car is a %s %s that does %i mpg.') % (fiesta.colour, fiesta.model, fiesta.mpg))
print (('Third car is a %s %s that does %i mpg.') % (focus.colour, focus.model, focus.mpg))

class Diesel(Car):
    def __init__(self, model, colour, mpg, engine):
        self.model = model
        self.colour = colour
        self.mpg = mpg
        self.engine = engine

verso = Diesel('Toyota', 'white', 61, 'diesel')
print (('Fourth car is a %s %s that does %i mpg and uses a %s engine.') % (verso.colour,verso.model,verso.mpg,verso.engine))
