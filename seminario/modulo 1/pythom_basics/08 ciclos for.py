numeros = [5, 8, 12, 3, 7, 10]
suma = 0
pares = 0
impares = 0

for numero in numeros:
    print("Número:", numero)
    
    suma += numero
    
    if numero % 2 == 0:
        print("Es par")
        pares += 1
    else:
        print("Es impar")
        impares += 1

print("Suma total:", suma)
print("Cantidad de pares:", pares)
print("Cantidad de impares:", impares)