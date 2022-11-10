class Hero:

    def __init__(self, name, health, attackPower, armorNumber):
        self.name = name
        self.health = health
        self.attackPower = attackPower
        self.armorNumber = armorNumber

    def serang(self):
        print(self.name + " menyerang")

    def diserang(self):
        print(self.name + " diserang")


sniper = Hero("sniper", 100, 10, 5)
rikimaru = Hero("rikimaru", 100, 5, 10)

sniper.serang()
