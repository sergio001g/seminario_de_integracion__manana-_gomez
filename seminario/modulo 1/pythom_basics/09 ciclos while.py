contador = 1
while (contador <=5):
    print(f"contador: {contador}")
    contador +=1

print("control de ciclo")
print("continue")
i = 1
while (i <=5):
    i += 1
    if i == 3:
        continue
    print(f"contador: {i}")
print("break")
i = 1
while (i <=5):
    i += 1
    if i == 3:
        break
    print(f"contador: {i}")

numero = int(input("INGRESE NUMERO: "))
while numero !=0:
    print("Ingresaste:", numero)
    numero = int(input("INGRESE NUMERO: "   ))



contador = 1
while (contador <=5):
    print(f"contador: {contador}")
    contador +=1
else:
    print("Fin del ciclo")


pswd = int(input("INGRESE NUMERO: "))
while pswd !=123:
    print("contraseña incorrecta")    
    
else:
    print(" Acceso permitido")