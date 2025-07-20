// Diccionario de textos ES/EN
const textos = {
  es: {
    inicio: { titulo: 'SAM S.L.', subtitulo: 'Renova tu obra' },
    pintura: { titulo: 'Pintura', texto: 'Servicio profesional de pintura para viviendas y locales.' },
    fontaneria: { titulo: 'Fontanería', texto: 'Instalaciones y reparaciones de fontanería.' },
    electricidad: { titulo: 'Electricidad', texto: 'Montaje y reparación de instalaciones eléctricas.' },
    banos: { titulo: 'Baños y Cocinas', texto: 'Reformas completas de baños y cocinas.' },
    pladur: { titulo: 'Pladur', texto: 'Tabiques, techos y soluciones en pladur.' },
    integrales: { titulo: 'Reformas Integrales', texto: 'Proyectos llave en mano para tu hogar o negocio.' },
    contacto: { titulo: 'Contacto', nombre: 'Nombre:', email: 'Email:', mensaje: 'Mensaje:', enviar: 'Enviar', direccion: 'Dirección:', telefono: 'Teléfono:' }
  },
  en: {
    inicio: { titulo: 'SAM S.L.', subtitulo: 'Renew your project' },
    pintura: { titulo: 'Painting', texto: 'Professional painting service for homes and businesses.' },
    fontaneria: { titulo: 'Plumbing', texto: 'Plumbing installations and repairs.' },
    electricidad: { titulo: 'Electricity', texto: 'Assembly and repair of electrical installations.' },
    banos: { titulo: 'Bathrooms and Kitchens', texto: 'Complete renovations of bathrooms and kitchens.' },
    pladur: { titulo: 'Drywall', texto: 'Partitions, ceilings, and drywall solutions.' },
    integrales: { titulo: 'Full Renovations', texto: 'Turnkey projects for your home or business.' },
    contacto: { titulo: 'Contact', nombre: 'Name:', email: 'Email:', mensaje: 'Message:', enviar: 'Send', direccion: 'Address:', telefono: 'Phone:' }
  }
};

let idioma = 'es';

function cambiarIdioma(nuevo) {
  idioma = nuevo;
  // Inicio
  document.querySelector('#inicio h1').textContent = textos[idioma].inicio.titulo;
  document.querySelector('#inicio p').textContent = textos[idioma].inicio.subtitulo;
  // Pintura
  document.querySelector('#pintura h2').textContent = textos[idioma].pintura.titulo;
  document.querySelector('#pintura p').textContent = textos[idioma].pintura.texto;
  // Fontanería
  document.querySelector('#fontaneria h2').textContent = textos[idioma].fontaneria.titulo;
  document.querySelector('#fontaneria p').textContent = textos[idioma].fontaneria.texto;
  // Electricidad
  document.querySelector('#electricidad h2').textContent = textos[idioma].electricidad.titulo;
  document.querySelector('#electricidad p').textContent = textos[idioma].electricidad.texto;
  // Baños/Cocinas
  document.querySelector('#banos-cocinas h2').textContent = textos[idioma].banos.titulo;
  document.querySelector('#banos-cocinas p').textContent = textos[idioma].banos.texto;
  // Pladur
  document.querySelector('#pladur h2').textContent = textos[idioma].pladur.titulo;
  document.querySelector('#pladur p').textContent = textos[idioma].pladur.texto;
  // Integrales
  document.querySelector('#integrales h2').textContent = textos[idioma].integrales.titulo;
  document.querySelector('#integrales p').textContent = textos[idioma].integrales.texto;
  // Contacto
  document.querySelector('#contacto h2').textContent = textos[idioma].contacto.titulo;
  document.querySelector('label[for="nombre"]').textContent = textos[idioma].contacto.nombre;
  document.querySelector('label[for="email"]').textContent = textos[idioma].contacto.email;
  document.querySelector('label[for="mensaje"]').textContent = textos[idioma].contacto.mensaje;
  document.querySelector('#contact-form button').textContent = textos[idioma].contacto.enviar;
  document.querySelector('.contact-info p strong').textContent = textos[idioma].contacto.direccion;
  document.querySelectorAll('.contact-info p strong')[1].textContent = textos[idioma].contacto.telefono;
}

document.getElementById('es-btn').addEventListener('click', () => cambiarIdioma('es'));
document.getElementById('en-btn').addEventListener('click', () => cambiarIdioma('en'));

// Scroll suave para navegación
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.getElementById(this.getAttribute('href').substring(1));
    if(section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// (Opcional) Validación simple del formulario
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert(idioma === 'es' ? '¡Mensaje enviado!' : 'Message sent!');
  form.reset();
}); 