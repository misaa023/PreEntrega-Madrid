// calcular pagos en cuotas
function calcularCuotas(monto, cuotas) {
    const pagoPorCuota = monto / cuotas;
    return pagoPorCuota;
}

function ingresarMonto() {
    // le pide al usuario que ingrese una opcion
    let opcion = parseInt(
        prompt(
            ' elegir opcion que desea realizar: \n 1- calcular cuotas \n 2- salir',
        ),
    );
    while (opcion == 1) {
        // ingresar el monto y la cantidad de cuotas
        const montoTotal = parseFloat(prompt('Ingrese el monto total:'));
        const cantidadCuotas = parseInt(
            prompt('Ingrese la cantidad de cuotas:'),
        );

        // compruebo que sean valores numericos
        if (isNaN(montoTotal) || isNaN(cantidadCuotas)) {
            alert('Por favor, ingrese valores numéricos válidos.');
        } else {
            const pagoPorCuota = calcularCuotas(montoTotal, cantidadCuotas);
            alert('El pago por cuota es:' + ' ' + pagoPorCuota);
        }
        // vuelvo a preguntar si quiere calcular o no
        opcion = parseInt(prompt('1- calcular otra cuota \n 2- salir'));
    }
}
