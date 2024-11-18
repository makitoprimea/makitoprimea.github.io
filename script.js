const menu = document.querySelector('.menu');

    window.addEventListener('scroll', function(){
        menu.classList.toggle('active', window.scrollY >0)
    })





var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});


var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        }
    }

});


let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {

    input.addEventListener('change', function(){
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});









let desplazamiento = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
};

function desplazarIzquierda(fila) {
    const filaProductos = document.querySelector(`.fila-${fila}`);
    const totalProductos = filaProductos.children.length;
    const anchoProducto = filaProductos.children[0].offsetWidth;
    const maxDesplazamiento = -anchoProducto * (totalProductos - 1);

    desplazamiento[fila] += anchoProducto;

    if (desplazamiento[fila] > 0) {
        desplazamiento[fila] = maxDesplazamiento;  // Si estamos en el primer producto, salta al último
    }

    filaProductos.style.transform = `translateX(${desplazamiento[fila]}px)`;
}

function desplazarDerecha(fila) {
    const filaProductos = document.querySelector(`.fila-${fila}`);
    const totalProductos = filaProductos.children.length;
    const anchoProducto = filaProductos.children[0].offsetWidth;
    const maxDesplazamiento = -anchoProducto * (totalProductos - 1);

    // Si el desplazamiento actual es igual al máximo (último producto), no se mueve hasta que el usuario haga clic nuevamente
    if (desplazamiento[fila] > maxDesplazamiento) {
        desplazamiento[fila] -= anchoProducto;
    } else {
        desplazamiento[fila] = 0;  // Regresa al primer producto solo cuando esté en el último y el usuario hace clic nuevamente
    }

    filaProductos.style.transform = `translateX(${desplazamiento[fila]}px)`;
}




function mostrarDetalles(producto) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-title").textContent = producto;
    document.getElementById("modal-description").textContent = `Información detallada sobre ${producto}.`;
}

// Cerrar el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Ir a una sección específica
function irASeccion(seccion) {
    cerrarModal();
    window.location.href = seccion;
}

// Función para desplazar a la derecha en el carrusel circularmente
function desplazarDerecha(fila) {
    const filaElement = document.querySelector(`.fila-${fila}`);
    filaElement.scrollBy({ left: 250, behavior: 'smooth' });
    setTimeout(() => {
        if (filaElement.scrollLeft + filaElement.clientWidth >= filaElement.scrollWidth) {
            filaElement.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, 300);
}

// Función para desplazar a la izquierda en el carrusel circularmente
function desplazarIzquierda(fila) {
    const filaElement = document.querySelector(`.fila-${fila}`);
    if (filaElement.scrollLeft === 0) {
        filaElement.scrollTo({ left: filaElement.scrollWidth, behavior: 'smooth' });
    }
    filaElement.scrollBy({ left: -220, behavior: 'smooth' });
} 





let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    if (index >= slides.length) {
        currentSlide = 0; // Reinicia al primer slide si llega al final
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Va al último slide si va hacia atrás desde el primer slide
    } else {
        currentSlide = index;
    }
    
    // Mueve el contenedor de slides al slide actual
    document.querySelector(".slides").style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Inicializar el primer slide
showSlide(currentSlide);