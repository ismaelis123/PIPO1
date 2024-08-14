const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 20 },
    { id: 3, nombre: 'Producto 3', precio: 30 },
    { id: 4, nombre: 'Producto 4', precio: 40 },
    { id: 5, nombre: 'Producto 5', precio: 50 },
    { id: 6, nombre: 'Producto 6', precio: 60 },
    { id: 7, nombre: 'Producto 7', precio: 70 },
    { id: 8, nombre: 'Producto 8', precio: 80 },
    { id: 9, nombre: 'Producto 9', precio: 90 },
    { id: 10, nombre: 'Producto 10', precio: 100 },
    { id: 11, nombre: 'Producto 11', precio: 110 },
    { id: 12, nombre: 'Producto 12', precio: 120 },
    { id: 13, nombre: 'Producto 13', precio: 130 },
    { id: 14, nombre: 'Producto 14', precio: 140 },
    { id: 15, nombre: 'Producto 15', precio: 150 },
];

function mostrarSeccion(seccion) {
    document.querySelectorAll('main section').forEach(section => section.style.display = 'none');
    document.getElementById(seccion).style.display = 'block';
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const carrito = document.getElementById('carrito');
    const item = document.createElement('li');
    item.textContent = `${producto.nombre} - $${producto.precio}`;
    carrito.appendChild(item);
    actualizarTotal(producto.precio);
}

function actualizarTotal(precio) {
    const total = document.getElementById('total');
    total.textContent = parseFloat(total.textContent) + precio;
}

function descargarFactura() {
    const carrito = document.getElementById('carrito').innerHTML;
    const total = document.getElementById('total').textContent;
    const factura = `
        <html>
        <head>
            <title>Factura</title>
        </head>
        <body>
            <h1>Factura</h1>
            <ul>${carrito}</ul>
            <p>Total: $${total}</p>
        </body>
        </html>
    `;
    const blob = new Blob([factura], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'factura.html';
    link.click();
}

document.addEventListener('DOMContentLoaded', () => {
    const contenedorProductos = document.querySelector('.productos');
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        contenedorProductos.appendChild(div);
    });
});
