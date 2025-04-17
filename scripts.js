// === ABRIR EL SOBRE Y MOSTRAR LA CARTA ===
document.addEventListener('DOMContentLoaded', () => {
    const sobre = document.getElementById('sobre');
    const audio = document.getElementById('magia');
  
    // Al hacer clic en el sobre
    sobre.addEventListener('click', () => {
      // Reproduce el audio mágico (si el navegador lo permite)
      audio.play().catch(e => console.log('No se pudo reproducir el audio:', e));
  
      // Agrega la clase al body para mostrar la carta
      document.body.classList.add('abierto');
    });
  });
  
  // === CONTADOR HACIA EL EVENTO ===
  // Fecha del evento que se mostrará como ejemplo
  // Puedes cambiar esta fecha por la del cliente fácilmente
  const fechaEvento = new Date("April 17, 2025 00:00:00").getTime();
  const elementoTiempo = document.getElementById("tiempo-restante");
  
  // Función que actualiza el contador cada segundo
  setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;
  
    // Si la fecha ya pasó, mostramos un mensaje
    if (distancia <= 0) {
      elementoTiempo.innerText = "¡Ya comenzó la fiesta! 🎉";
      return;
    }
  
    // Cálculo de tiempo restante
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
  
    // Mostrar el tiempo restante en pantalla
    elementoTiempo.innerText = `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
  }, 1000);
  