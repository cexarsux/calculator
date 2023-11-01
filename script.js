function calcularInsectos() {
    const insectosForm = document.getElementById('insectosForm');
    const resultadoTable = document.getElementById('resultado');
    resultadoTable.innerHTML = '<tr><th>Estrellas</th><th>Cantidad de Insectos</th></tr>';

    let insectos = [];
    for (let i = 1; i <= 9; i++) {
        const input = insectosForm.elements['stars' + i];
        const cantidad = parseInt(input.value) || 0;
        insectos.push(cantidad);
    }

    for (let i = 1; i <= 9; i++) {
        while (insectos[i - 1] >= 2) {
            insectos[i - 1] -= 2;
            if (i < 9) {
                insectos[i]++;
            }
        }
    }

    for (let i = 1; i <= 9; i++) {
        resultadoTable.innerHTML += `<tr><td>${i} estrellas</td><td>${insectos[i - 1]}</td></tr>`;
    }
}

function limpiarValores() {
            const insectosForm = document.getElementById('insectosForm');
            for (let i = 1; i <= 9; i++) {
                const input = insectosForm.elements['stars' + i];
                input.value = 0;
            }
            calcularInsectos(); // Actualizar la tabla después de limpiar.
        }
