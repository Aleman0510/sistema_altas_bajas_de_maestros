// Obtener el formulario de registro
const form = document.getElementById('registro-maestro');

// Evento para manejar el submit del formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido_paterno = document.getElementById('apellido_paterno').value;
    const apellido_materno = document.getElementById('apellido_materno').value;
    const numero_empleado = document.getElementById('numero_empleado').value;
    const especialidad = document.getElementById('especialidad').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const correo_electronico = document.getElementById('correo_electronico').value;
    const fecha_ingreso = document.getElementById('fecha_ingreso').value;

    // Mostrar los datos del maestro en la consola (esto se puede modificar para enviarlo a un servidor)
    console.log('Nuevo Maestro Registrado:');
    console.log('Nombre:', nombre);
    console.log('Apellido Paterno:', apellido_paterno);
    console.log('Apellido Materno:', apellido_materno);
    console.log('Número de Empleado:', numero_empleado);
    console.log('Especialidad:', especialidad);
    console.log('Dirección:', direccion);
    console.log('Teléfono:', telefono);
    console.log('Correo Electrónico:', correo_electronico);
    console.log('Fecha de Ingreso:', fecha_ingreso);

    // Limpiar el formulario
    form.reset();
});
