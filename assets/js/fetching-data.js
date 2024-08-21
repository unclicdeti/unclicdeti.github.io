
function CargarProductosTendencia(data){
    const container = document.getElementById("tendencias-tiendas");

    const fragment = document.createDocumentFragment();

    data.forEach(item => {
        const div = document.createElement("div");


        div.innerHTML = `
            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.tienda}">
            <img src="${item.img_uri}" class="img-fluid" alt="${item.nombre}">
            <div class="portfolio-info">
                <h4>$${item.precio}</h4>
                <p>${item.nombre}<br>ID: ${item.id}</p>
                <a href="${item.img_uri}" title="${item.nombre}" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="${item.enlace}" target="_blank" title="Ir al detalle..." class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div>
            </div>
        `;

        fragment.appendChild(div);
    });

    container.appendChild(fragment);

    // Refrescar Isotope para reconocer los nuevos elementos
    const iso = new Isotope(container, {
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry'
    });
    
    // Reorganizar el layout con los nuevos elementos
    imagesLoaded(container, function() {
        iso.appended(container.children);
        iso.layout();
    });

    // Iniciar Glightbox para los nuevos elementos
    const lightbox = GLightbox({
        selector: '.glightbox'
    });
}

function redirigirWhatsapp() {
    const urlProducto = document.getElementById('url-cotizacion').value;
    const uri = "https://wa.me/50558461202?text?=Hola! Quiero cotizar este producto: " + urlProducto;
    // Verifica que la URL no esté vacía
    if (urlProducto) {
        document.getElementById('url-cotizacion').value = '';
        //alert('Tu orden ha sido recibida, te contactaremos muy pronto! Gracias por elegirnos!');
        // Abre la nueva pestaña y redirige al enlace proporcionado
      window.open(uri, '_blank');
    } else {
      alert('Por favor, introduce un enlace válido.');
    }
  }
