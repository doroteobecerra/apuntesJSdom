/**
 * Seleccionar elementos del doc html con java script
 */


/**
 * querySelector
 * selecciona 0 o 1 elemento funciona para seleccionar a un solo elemento 
 * puede seleccionar etiquetas, clases, id
 */
const titulo = document.querySelector('h2')

console.log(titulo)

/**
 * querySelectorAll
 * selecciona varios elementos del documento y los devueleve en un arreglo, 
 * podremos acceder a cada uno de ellos desde el indice
 */

const enlaces = document.querySelectorAll('.navegacion a')
enlaces[0].textContent = 'nuevo texto para enlace'
//agregar una clase
enlaces[0].classList.add('nueva_clase')
//eliminar una clase
//enlaces[0].classList.remove('navegacion__enlace')

/**
 * getElementById
 * metodo anterior de seleccionar elementos 
 */

const titulo2 = document.getElementById('h2')

/**
 * Eventos
 * 
 * Los eventos son las interacciones de los usuarios con la pagina web,
 * o sucesos automaticos como cargar la pagina
 */

window.addEventListener('load', () => { // 'load' se ejecuta cuando se carga html, css y img
    console.log(2)
})

window.addEventListener('DOMContentLoaded', () => {// se ejecuta cuando se carga solo el html
    console.log(1)
})

window.onscroll = () => {
    console.log('scroll...')
}

//seleccionar un elemento y asociarles un evento
const btn = document.querySelector('.boton--primario')


/**
 * rellenar datos de un objeto
 */

const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}

const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const manesaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario')

nombre.addEventListener('input', leerTxt)
email.addEventListener('input', leerTxt)
mensaje.addEventListener('input', leerTxt)


function leerTxt(e){
    datos[e.target.id] = e.target.value
    //console.log(datos)
}

// validaciones de formulario

formulario.addEventListener('submit', function(e){
    e.preventDefault()

    const {nombre,email,mensaje} = datos

    if(nombre === '' || email === '' || mensaje === ''){
        mostarError('Completa todos los campos')
        return // corta la ejecucion del codigo
    }

    mostrarSucces('Mensaje enviado')


})

function mostarError(mensaje){
    const error = document.createElement('P')
    error.textContent = mensaje
    error.classList.add('error')
    formulario.appendChild(error)

    setTimeout(() => {
        error.remove()
    }, 3000);

    clear()¡¡
}

function mostrarSucces(mensaje){
    const succes = document.createElement('p')
    succes.textContent = mensaje
    succes.classList.add('succes')
    formulario.appendChild(succes)

    setTimeout(() => {
        succes.remove()
    }, 3000);

    clear()
}

function clear(){
    nombre.value = ''
    email.value = ''
    mensaje.value = ''
}