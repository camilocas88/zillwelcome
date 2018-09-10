var miImage = document.querySelector ('img')

miImage.onclick = ()=>{
    var miSrc = miImage.getAttribute('src')
    if (miSrc === 'img/deals.jpg') {
        miImage.setAttribute('src','img/deals2.jpg')
    }else{
        miImage.setAttribute('src','img/deals.jpg')
    }
}


// bienvenida

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Bienvenikdo a DealsDevice, ' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenido a DealsDevice, ' + nombreAlmacenado;
}

// evento click
miBoton.onclick = function() {
    estableceNombreUsuario();
}