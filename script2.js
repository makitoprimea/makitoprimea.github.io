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
    const anchoProducto = filaProductos.children[0].offsetWidth;

    // Aumentamos el desplazamiento hacia la derecha
    desplazamiento[fila] += anchoProducto;

    // Limitamos el desplazamiento para que no sobrepase el primer elemento
    if (desplazamiento[fila] > 0) {
        desplazamiento[fila] = 0;
    }

    filaProductos.style.transform = `translateX(${desplazamiento[fila]}px)`;
}

function desplazarDerecha(fila) {
    const filaProductos = document.querySelector(`.fila-${fila}`);
    const totalProductos = filaProductos.children.length;
    const anchoProducto = filaProductos.children[0].offsetWidth;
    const maxDesplazamiento = -anchoProducto * (totalProductos - 1);

    // Disminuimos el desplazamiento hacia la izquierda
    desplazamiento[fila] -= anchoProducto;

    // Limitamos el desplazamiento para que no sobrepase el último elemento
    if (desplazamiento[fila] < maxDesplazamiento) {
        desplazamiento[fila] = maxDesplazamiento;
    }

    filaProductos.style.transform = `translateX(${desplazamiento[fila]}px)`;
}

// Función para mostrar detalles de un producto en el modal
function mostrarDetalles(producto) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-title").textContent = producto.titulo;
    document.getElementById("modal-description").textContent = producto.descripcion;
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

function desplazarDerecha(fila) {
    const filaElement = document.querySelector(`.fila-${fila}`);
    const anchoProducto = filaElement.children[0].offsetWidth;
    const totalProductos = filaElement.children.length;

    // Desplazar el scroll
    filaElement.scrollBy({ left: anchoProducto, behavior: 'smooth' });

    // Comprobar si el scroll llegó al final
    setTimeout(() => {
        if (filaElement.scrollLeft + filaElement.clientWidth >= filaElement.scrollWidth) {
            // Mover el primer producto al final para simular el bucle
            const primerProducto = filaElement.children[0];
            filaElement.appendChild(primerProducto);

            // Ajustar el scroll manualmente para mantener la continuidad
            filaElement.scrollLeft -= anchoProducto;
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


function mostrarDetalles({ titulo, descripcion }) {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";

    // Asegúrate de que el título sea una imagen
    const modalTitle = document.getElementById("modal-title");
    modalTitle.innerHTML = `<img src="${titulo}" alt="Detalle del Producto" style="max-width: 100%; height: auto;">`;

    // Reemplazar la descripción por múltiples líneas de texto
    const modalDescription = document.getElementById("modal-description");
    modalDescription.innerHTML = descripcion.map(linea => `<p>${linea}</p>`).join("");
}











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








function irASeccion(event) {
    event.preventDefault(); // Evita la redirección inmediata
    // Lógica adicional aquí, si es necesario
    window.location.href = "productos.html"; // Redirige manualmente
}