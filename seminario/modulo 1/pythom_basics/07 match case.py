print("Opciones: iniciar, parar, reiniciar")
opcion = input("Ingresa una opción: ")

match opcion:
    case "iniciar":
        print("Sistema iniciado")
    case "parar":
        print("Sistema detenido")
    case "reiniciar":
        print("Sistema reiniciado")
    case _:
        print("Opción no válida")