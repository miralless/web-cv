document.addEventListener('DOMContentLoaded', function() {

    // EDUCACIÓN Y FORMACIÓN

    document.querySelector('.fecha2021').addEventListener('mouseover', function() {
        document.querySelector('.bach').style.border = '5px solid #d1a7e3';
        document.querySelector('.fecha2021').style.border = '5px solid #d1a7e3';
    });

    document.querySelector('.fecha2021').addEventListener('mouseout', function() {
        document.querySelector('.bach').style.border = '5px solid transparent';
        document.querySelector('.fecha2021').style.border = '5px solid transparent';
    });

    document.querySelector('.bach').addEventListener('mouseover', function() {
        document.querySelector('.fecha2021').style.border = '5px solid #d1a7e3';
        document.querySelector('.bach').style.border = '5px solid #d1a7e3';
    });

    document.querySelector('.bach').addEventListener('mouseout', function() {
        document.querySelector('.fecha2021').style.border = '5px solid transparent';
        document.querySelector('.bach').style.border = '5px solid transparent';
    });

    // -------------------------------------------

    document.querySelector('.fecha2023').addEventListener('mouseover', function() {
        document.querySelector('.dam').style.border = '5px solid #d1a7e3';
        document.querySelector('.fecha2023').style.border = '5px solid #d1a7e3';
    });

    document.querySelector('.fecha2023').addEventListener('mouseout', function() {
        document.querySelector('.dam').style.border = '5px solid transparent';
        document.querySelector('.fecha2023').style.border = '5px solid transparent';
    });

    document.querySelector('.dam').addEventListener('mouseover', function() {
        document.querySelector('.fecha2023').style.border = '5px solid #d1a7e3';
        document.querySelector('.dam').style.border = '5px solid #d1a7e3';
    });

    document.querySelector('.dam').addEventListener('mouseout', function() {
        document.querySelector('.fecha2023').style.border = '5px solid transparent';
        document.querySelector('.dam').style.border = '5px solid transparent';
    });

    // -------------------------------------------

    document.querySelector('.fecha2024').addEventListener('mouseover', function() {
        document.querySelector('.daw').style.border = '5px solid #d1a7e3';
        document.querySelector('.fecha2024').style.border = '5px solid #d1a7e3';
    });

    document.querySelector('.fecha2024').addEventListener('mouseout', function() {
        document.querySelector('.daw').style.border = '5px solid transparent';
        document.querySelector('.fecha2024').style.border = '5px solid transparent';
    });

    document.querySelector('.daw').addEventListener('mouseover', function() {
        document.querySelector('.fecha2024').style.border = '5px solid #d1a7e3';
        document.querySelector('.daw').style.border = '5px solid #d1a7e3';
    });

    document.querySelector('.daw').addEventListener('mouseout', function() {
        document.querySelector('.fecha2024').style.border = '5px solid transparent';
        document.querySelector('.daw').style.border = '5px solid transparent';
    });

    // COMPETENCIA DE IDIOMAS

    document.querySelectorAll('.nivelEspanol .a1').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelEspanol .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEspanol .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEspanol .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEspanol .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEspanol .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#f4f4f4';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelEspanol .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#bb88d1';
            });
            document.querySelectorAll('.nivelEspanol .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#a76abf';
            });
            document.querySelectorAll('.nivelEspanol .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#9250a6';
            });
            document.querySelectorAll('.nivelEspanol .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#7e338d';
            });
            document.querySelectorAll('.nivelEspanol .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#48007b';
            });
        });
    });

    document.querySelectorAll('.nivelEspanol .a2').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelEspanol .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEspanol .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEspanol .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEspanol .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#f4f4f4';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelEspanol .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#a76abf';
            });
            document.querySelectorAll('.nivelEspanol .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#9250a6';
            });
            document.querySelectorAll('.nivelEspanol .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#7e338d';
            });
            document.querySelectorAll('.nivelEspanol .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#48007b';
            });
        });
    });

    document.querySelectorAll('.nivelEspanol .b1').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelEspanol .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEspanol .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEspanol .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#f4f4f4';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelEspanol .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#9250a6';
            });
            document.querySelectorAll('.nivelEspanol .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#7e338d';
            });
            document.querySelectorAll('.nivelEspanol .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#48007b';
            });
        });
    });

    document.querySelectorAll('.nivelEspanol .b2').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelEspanol .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEspanol .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#f4f4f4';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelEspanol .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#7e338d';
            });
            document.querySelectorAll('.nivelEspanol .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#48007b';
            });
        });
    });

    document.querySelectorAll('.nivelEspanol .c1').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelEspanol .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#f4f4f4';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelEspanol .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#48007b';
            });
        });
    });

    // -------------------------------------------

    document.querySelectorAll('.nivelEuskera .a1').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelEuskera .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEuskera .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEuskera .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEuskera .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEuskera .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#f4f4f4';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelEuskera .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#bb88d1';
            });
            document.querySelectorAll('.nivelEuskera .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#a76abf';
            });
            document.querySelectorAll('.nivelEuskera .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#9250a6';
            });
        });
    });

    document.querySelectorAll('.nivelEuskera .a2').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelEuskera .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEuskera .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEuskera .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEuskera .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#f4f4f4';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelEuskera .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#a76abf';
            });
            document.querySelectorAll('.nivelEuskera .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#9250a6';
            });
        });
    });

    document.querySelectorAll('.nivelEuskera .b1').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelEuskera .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEuskera .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEuskera .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#f4f4f4';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelEuskera .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#9250a6';
            });
        });
    });

    document.querySelectorAll('.nivelEuskera .b2').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelEuskera .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelEuskera .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#f4f4f4';
            });
        });
    });

    document.querySelectorAll('.nivelEuskera .c1').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            element.style.backgroundColor = '#7e338d';
        });

        element.addEventListener('mouseout', function() {
            element.style.backgroundColor = '#f4f4f4';
        });
    });

    document.querySelectorAll('.nivelEuskera .c2').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            element.style.backgroundColor = '#48007b'
            document.querySelectorAll('.nivelEuskera .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#7e338d';
            });
        });

        element.addEventListener('mouseout', function() {
            element.style.backgroundColor = '#f4f4f4';
            document.querySelectorAll('.nivelEuskera .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#f4f4f4';
            });
        });
    });

    // -------------------------------------------

    document.querySelectorAll('.nivelIngles .a1').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelIngles .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelIngles .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelIngles .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelIngles .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#f4f4f4';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelIngles .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#bb88d1';
            });
            document.querySelectorAll('.nivelIngles .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#a76abf';
            });
            document.querySelectorAll('.nivelIngles .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#9250a6';
            });
            document.querySelectorAll('.nivelIngles .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#7e338d';
            });
        });
    });

    document.querySelectorAll('.nivelIngles .a2').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelIngles .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelIngles .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelIngles .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelIngles .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#f4f4f4';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelIngles .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#a76abf';
            });
            document.querySelectorAll('.nivelIngles .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#9250a6';
            });
            document.querySelectorAll('.nivelIngles .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#7e338d';
            });
        });
    });

    document.querySelectorAll('.nivelIngles .b1').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelIngles .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelIngles .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#f4f4f4';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelIngles .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#9250a6';
            });
            document.querySelectorAll('.nivelIngles .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#7e338d';
            });
        });
    });

    document.querySelectorAll('.nivelIngles .b2').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelIngles .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelIngles .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#f4f4f4';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelIngles .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#7e338d';
            });
        });
    });

    document.querySelectorAll('.nivelIngles .c1').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelIngles .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#f4f4f4';
            });
        });
    });

    document.querySelectorAll('.nivelIngles .c2').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            element.style.backgroundColor = '#48007b';
        });

        element.addEventListener('mouseout', function() {
            element.style.backgroundColor = '#f4f4f4';
        });
    });

    // -------------------------------------------
        
    document.querySelectorAll('.nivelFrances .a2').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelFrances .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#bb88d1';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelFrances .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#f4f4f4';
            });
        });
    });

    document.querySelectorAll('.nivelFrances .b1').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelFrances .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#bb88d1';
            });
            document.querySelectorAll('.nivelFrances .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#a76abf';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelFrances .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelFrances .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#f4f4f4';
            });
        });
    });

    document.querySelectorAll('.nivelFrances .b2').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelFrances .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#bb88d1';
            });
            document.querySelectorAll('.nivelFrances .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#a76abf';
            });
            document.querySelectorAll('.nivelFrances .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#9250a6';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelFrances .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelFrances .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelFrances .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#f4f4f4';
            });
        });
    });

    document.querySelectorAll('.nivelFrances .c1').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelFrances .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#bb88d1';
            });
            document.querySelectorAll('.nivelFrances .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#a76abf';
            });
            document.querySelectorAll('.nivelFrances .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#9250a6';
            });
            document.querySelectorAll('.nivelFrances .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#7e338d';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelFrances .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelFrances .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelFrances .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelFrances .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#f4f4f4';
            });
        });
    });

    document.querySelectorAll('.nivelFrances .c2').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            document.querySelectorAll('.nivelFrances .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#bb88d1';
            });
            document.querySelectorAll('.nivelFrances .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#a76abf';
            });
            document.querySelectorAll('.nivelFrances .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#9250a6';
            });
            document.querySelectorAll('.nivelFrances .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#7e338d';
            });
            document.querySelectorAll('.nivelFrances .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#48007b';
            });
        });
    
        element.addEventListener('mouseout', function() {
            document.querySelectorAll('.nivelFrances .a2').forEach(function(a2) {
                a2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelFrances .b1').forEach(function(b1) {
                b1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelFrances .b2').forEach(function(b2) {
                b2.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelFrances .c1').forEach(function(c1) {
                c1.style.backgroundColor = '#f4f4f4';
            });
            document.querySelectorAll('.nivelFrances .c2').forEach(function(c2) {
                c2.style.backgroundColor = '#f4f4f4';
            });
        });
    });

    // COMPETENCIAS DIGITALES ----------------------------------------

    const container = document.querySelector('.containerCompetencias');
    const draggableElements = document.querySelectorAll('.draggable');

    draggableElements.forEach(el => {
        el.addEventListener('mousedown', (e) => {
            // Evitar que el texto sea seleccionado mientras se arrastra
            e.preventDefault();

            // Capturamos la posición del mouse y la del div
            const offsetX = e.clientX - el.getBoundingClientRect().left;
            const offsetY = e.clientY - el.getBoundingClientRect().top;

            // Función para mover el div
            function moveAt(mouseX, mouseY) {
                let newX = mouseX - offsetX;
                let newY = mouseY - offsetY;

                // Limitar el movimiento para que no se salga del contenedor
                const containerRect = container.getBoundingClientRect();
                const elRect = el.getBoundingClientRect();

                // Restringir los movimientos a los límites del contenedor
                if (newX < containerRect.left) {
                    newX = containerRect.left;
                }
                if (newY < containerRect.top) {
                    newY = containerRect.top;
                }
                if (newX + elRect.width > containerRect.right) {
                    newX = containerRect.right - elRect.width;
                }
                if (newY + elRect.height > containerRect.bottom) {
                    newY = containerRect.bottom - elRect.height;
                }

                // Aplicar la nueva posición
                el.style.left = newX - containerRect.left + 'px';
                el.style.top = newY - containerRect.top + 'px';
            }

            // Mover el div con el mouse
            function onMouseMove(e) {
                moveAt(e.clientX, e.clientY);
            }

            // Dejar de mover el div cuando se suelta el mouse
            function onMouseUp() {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }

            // Escuchar el movimiento del ratón
            document.addEventListener('mousemove', onMouseMove);
            // Cuando se suelta el ratón, detener el movimiento
            document.addEventListener('mouseup', onMouseUp);
        });
    });

    // MÁS INFORMACIÓN ----------------------------------------

    const vehiculoDiv = document.querySelector('.vehiculo');
    const deporteDiv = document.querySelector('.deporte');
    
    // Función para revelar el contenido gradualmente con el ratón
    function revealTextOnMouseMove(event) {
        const target = event.target;
        const rect = target.getBoundingClientRect(); // Obtener las dimensiones del div
        const mouseX = event.clientX - rect.left; // Coordenada X del ratón dentro del div
        const mouseY = event.clientY - rect.top; // Coordenada Y del ratón dentro del div

        // Crea un "rascado" dinámico usando un gradiente que sigue al ratón
        target.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, transparent 7%, #48007b 20%)`;
    }

    // Añadir el evento de mover el ratón para activar el efecto "rasca"
    vehiculoDiv.addEventListener('mousemove', revealTextOnMouseMove);
    deporteDiv.addEventListener('mousemove', revealTextOnMouseMove);
    
});