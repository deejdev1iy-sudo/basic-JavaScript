class House:
    architect = 'Sonnia'
    bedrooms = 4
    bathrooms = 4
    floors = 3
    area = 150
    owner = ''
    location = ''

    def __init__(self, owner, location):
        print("Class house created. Initializer called")
        self.owner = owner
        self.location = location
    
    def config(self, owner, location):
        self.owner=owner
        self.location=location

    def print_self(self):
        print(self)
        print(self.__dict__)    

Dees_House = House(owner='Mooney', location='Tigoni')

print(f"Dees House owner, {Dees_House.owner}")
print(f"Dees House location, {Dees_House.location}")
print(f"Dees House bedrooms, {Dees_House.bedrooms}")
print(f"Dees House bathrooms, {Dees_House.bathrooms}")
Dees_House.print_self()

