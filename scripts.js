

// Función para el desplazamiento suave al hacer clic en los enlaces del navbar
const toLinks = document.querySelectorAll('.to-link');

toLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        
        const targetId = link.getAttribute('href'); // Obtiene el ID del objetivo del enlace
        const targetElement = document.querySelector(targetId); // Encuentra el elemento con el ID correspondiente

        // Realiza el desplazamiento suave hacia el objetivo
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Botón volver al inicio
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
    }
}

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

scrollToTopBtn.addEventListener("click", () => {
    // Animación suave al hacer clic en el botón
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Obtener el botón y el modal por su ID
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');

// Agregar evento al botón para abrir el modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block'; // Mostrar el modal
});

// Agregar evento al botón de cierre del modal
const closeModalBtn = document.querySelector('.close');
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Ocultar el modal
});

//slider
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('#slider');
    setTimeout(function moveSlide() {
        const max = slider.scrollWidth - slider.clientWidth;
        const left = slider.clientWidth;

        if (max === slider.scrollLeft) {
            slider.scrollTo({left: 0, behavior: 'smooth'})
        } else {
            slider.scrollBy({left, behavior: 'smooth'})
        }

        setTimeout(moveSlide, 3000)
    }, 3000)

})