password_correcta = "1234"
password = ""

while password != password_correcta:
    password = input("Ingresa la contraseña: ")
    if password != password_correcta:
        print("Contraseña incorrecta")

print("Acceso concedido")