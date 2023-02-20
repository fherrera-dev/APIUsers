
const boton = document.querySelector('#boton');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');
const foto = document.querySelector('#foto');
const url = 'https://randomuser.me/api/';

const callAPI = async () => {

    const respuesta = await fetch(`${url}`);
    const { results } = await respuesta.json();
    const datos = results[0];

    foto.src = datos.picture.large;
    nombre.textContent = datos.name.first;
    apellido.textContent = datos.name.last;
    correo.textContent = datos.email;
    telefono.textContent = datos.phone;
    console.log(datos);
    
}



document.addEventListener('DOMContentLoaded', callAPI);
boton.addEventListener('click', callAPI);