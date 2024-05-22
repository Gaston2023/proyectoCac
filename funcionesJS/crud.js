
// AGREGAR ELIMINAR Y EDITAR

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const tabla = document.getElementById('tabla');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const modelo = document.getElementById('modelo').value;
        const marca = document.getElementById('marca').value;
        const anio = document.getElementById('anio').value;
        const color = document.getElementById('color').value;

        const fila = `
            <tr>
                <td>${nombre}</td>
                <td>${modelo}</td>
                <td>${marca}</td>
                <td>${anio}</td>
                <td>${color}</td>
                <td>
                    <button class="editar">Editar</button>
                    <button class="eliminar">Eliminar</button>
                </td>
            </tr>
        `;

        tabla.insertAdjacentHTML('beforeend', fila);
        resetFormulario();
    });

    function resetFormulario() {
        formulario.reset();
    }

    tabla.addEventListener('click', function(event) {
        if (event.target.classList.contains('eliminar')) {
            Swal.fire({
                title: '¿Está seguro de eliminar?',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'Cancelar',
                icon: 'warning'
            }).then((result) => {
                if (result.isConfirmed) {
                    const fila = event.target.closest('tr');
                    fila.remove();
                    Swal.fire('¡Eliminado!', 'El registro ha sido eliminado.', 'success');
                }
            });
        } else if (event.target.classList.contains('editar')) {
            const fila = event.target.closest('tr');
            const celdas = fila.querySelectorAll('td');

            const nombre = celdas[0].textContent;
            const modelo = celdas[1].textContent;
            const marca = celdas[2].textContent;
            const anio = celdas[3].textContent;
            const color = celdas[4].textContent;

            Swal.fire({
                title: 'Editar Coche',
                html:
                    `<input id="nombreModal" class="swal2-input" value="${nombre}" placeholder="Nombre">
                    <input id="modeloModal" class="swal2-input" value="${modelo}" placeholder="Modelo">
                    <input id="marcaModal" class="swal2-input" value="${marca}" placeholder="Marca">
                    <input id="anioModal" class="swal2-input" value="${anio}" placeholder="Año">
                    <input id="colorModal" class="swal2-input" value="${color}" placeholder="Color">`,
                showCancelButton: true,
                confirmButtonText: 'Guardar cambios',
                cancelButtonText: 'Cancelar',
                icon: 'info'
            }).then((result) => {
                if (result.isConfirmed) {
                    const nombreModal = document.getElementById('nombreModal').value;
                    const modeloModal = document.getElementById('modeloModal').value;
                    const marcaModal = document.getElementById('marcaModal').value;
                    const anioModal = document.getElementById('anioModal').value;
                    const colorModal = document.getElementById('colorModal').value;

                    celdas[0].textContent = nombreModal;
                    celdas[1].textContent = modeloModal;
                    celdas[2].textContent = marcaModal;
                    celdas[3].textContent = anioModal;
                    celdas[4].textContent = colorModal;

                    Swal.fire('¡Actualizado!', 'Los cambios han sido guardados.', 'success');
                }
            });
        }
    });
});


// pal menu tipo hamburguesa
function toggleMenu() {
    var menu = document.querySelector('.nav-menu');
    var hamburger = document.querySelector('.hamburger');


    menu.classList.toggle('active');
    hamburger.classList.toggle('change');
}