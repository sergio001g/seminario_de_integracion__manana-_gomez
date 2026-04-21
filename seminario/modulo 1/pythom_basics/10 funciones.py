print("funciones en python")
print("funcion basica")
def saludar():
    print("hola desde la UTE")

saludar()
print("funcion con parametros")

def saludarconnombre(nombre):
    print(f"hola: {nombre}, que tal")

saludarconnombre("leo")

print("funcion que devuelve valor con return")
def sumar(a,b):
    return a+b

print(sumar(5,6))

print("funcion parametros por posicion y por nombre")
def presentar(nombre, edad, ciudad):
    print(f"{nombre}, {edad},{ciudad}")

presentar("leo", 25, "quito")

presentar("leo",23, "quito")#por posicion
presentar(ciudad="guayaquil",nombre="leo",edad=22)#por nombre

print("funcion parametros ppr defecto")
def saludarconparametrospordefecto(nombre, saludos="hola", puntuacion="!"):
    print(f"{saludos} {nombre} {puntuacion}")

saludarconparametrospordefecto("pedro","buenos dias","...")
saludarconparametrospordefecto("juan", puntuacion="...")
saludarconparametrospordefecto("carlos","buenas tardes")
print("Funcion con parametros posicionales")

def sumar_todos(*numeros):
    print(f"Numeros a sumar: {numeros}")
    return sum(numeros)

print(sumar_todos(1, 2, 3, 4, 5))
print(sumar_todos(10, 20))
print(sumar_todos(5, 10, 15))