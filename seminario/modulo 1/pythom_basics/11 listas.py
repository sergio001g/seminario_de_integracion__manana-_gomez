print("Listas en Python")

# Creación de una lista
frutas = ["manzana", "banana", "cereza", "pera"]
print(f"Lista original: {frutas}")

# Acceso a elementos
print(f"Primer elemento: {frutas[0]}")
print(f"Último elemento: {frutas[-1]}")

# Modificación de elementos
frutas[1] = "mora"
print(f"Lista modificada: {frutas}")

# Métodos de listas
print("\nMétodos de listas:")
frutas.append("naranja") # Agregar al final
print(f"Después de append: {frutas}")

frutas.insert(1, "uva") # Insertar en posición específica
print(f"Después de insert: {frutas}")

frutas.remove("cereza") # Eliminar por valor
print(f"Después de remove: {frutas}")

ultimo = frutas.pop() # Eliminar y devolver el último elemento
print(f"Elemento eliminado con pop: {ultimo}")
print(f"Lista después de pop: {frutas}")

# Slicing (rebanado)
print("\nSlicing:")
print(f"Primeros dos: {frutas[:2]}")
print(f"Desde el segundo: {frutas[1:]}")

# Ordenar la lista
frutas.sort()
print(f"Lista ordenada: {frutas}")

# Longitud de la lista
print(f"Cantidad de elementos: {len(frutas)}")

# Iterar sobre una lista
print("\nIterando sobre la lista:")
for fruta in frutas:
    print(f"- {fruta}")

# Listas con diferentes tipos de datos
mixta = [1, "hola", True, 3.14]
print(f"\nLista mixta: {mixta}")
