function cambiarTema(color) {
    if (color === 'rojo') {
        document.body.style.backgroundColor = '#ff0000';
        document.body.style.color = '#ffffff';
    } else if (color === 'azul') {
        document.body.style.backgroundColor = '#0000ff';
        document.body.style.color = '#ffffff';
    } else if (color === 'verde') {
        document.body.style.backgroundColor = '#00ff00';
        document.body.style.color = '#ffffff';
    } else {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
    }
}
