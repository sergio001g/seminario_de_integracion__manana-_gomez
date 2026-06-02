def calcular_bono(ventas):
    bono = 0
    for venta in ventas:
        if venta > 250:
            bono += 20
        else:
            bono += 10
    return bono

ventas = [120, 80, 200, 50, 300]

total = 0
for venta in ventas:
    if venta > 100:
        total += venta

print("Total de ventas mayores a 100:", total)

bono = calcular_bono(ventas)
print("Total de bono:", bono)