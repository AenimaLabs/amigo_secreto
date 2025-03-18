// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias a los elementos del DOM
    const inputAmigo = document.getElementById('amigo'); // Campo de texto para ingresar nombres
    const listaAmigos = document.getElementById('listaAmigos'); // Lista donde se mostrarán los nombres
    const resultado = document.getElementById('resultado'); // Área para mostrar el resultado del sorteo
    let amigos = []; // Array para almacenar los nombres de los amigos

    // Función para agregar un amigo a la lista
    window.agregarAmigo = () => {
        // Obtener el valor del campo de texto y eliminar espacios en blanco al inicio y final
        const nombre = inputAmigo.value.trim();

        // Validar que el campo no esté vacío
        if (nombre === '') {
            alert('Por favor, ingresa un nombre válido.'); // Mostrar alerta si el campo está vacío
            return; // Salir de la función si no hay nombre válido
        }

        // Agregar el nombre al array de amigos
        amigos.push(nombre);

        // Limpiar el campo de texto después de agregar el nombre
        inputAmigo.value = '';

        // Actualizar la lista de nombres en la interfaz
        actualizarLista();
    };

    // Función para actualizar la lista de nombres en la interfaz
    const actualizarLista = () => {
        // Limpiar la lista actual para evitar duplicados
        listaAmigos.innerHTML = '';

        // Recorrer el array de amigos y crear un elemento <li> para cada nombre
        amigos.forEach((nombre, index) => {
            const li = document.createElement('li'); // Crear un nuevo elemento <li>
            li.textContent = `${index + 1}. ${nombre}`; // Asignar el texto del <li> (número y nombre)
            listaAmigos.appendChild(li); // Agregar el <li> a la lista
        });
    };

    // Función para sortear un amigo secreto
    window.sortearAmigo = () => {
        // Validar que haya nombres en la lista
        if (amigos.length === 0) {
            alert('No hay nombres en la lista para sortear.'); // Mostrar alerta si no hay nombres
            return; // Salir de la función si no hay nombres
        }

        // Generar un índice aleatorio basado en la longitud del array de amigos
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Obtener el nombre del amigo secreto usando el índice aleatorio
        const amigoSecreto = amigos[indiceAleatorio];

        // Mostrar el resultado del sorteo en la interfaz
        resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
    };
});