function scrollContent(distance){
    const lista = document.querySelector('.lista-productos');

    lista.scrollBy({
        left: distance,
        behavior: "smooth"
    });
}