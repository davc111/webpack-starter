import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';

export const Saludo = ( nombre = 'sin nombre') => {
    console.log( "Creando un h1 con webpack");
    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;
    document.body.append(h1);

    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img );
}