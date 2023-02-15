function saludar() {
    const fecha = new Date();
    const hora = fecha.getHours();
  
    if (hora < 14) {
      return "BUENOS DIAS, BIENVENID@ A MI CURRICULUM";
    } else if (hora < 20) {
      return "BUENAS TARDES, BIENVENID@ A MI CURRICULUM";
    } else {
      return "BUENAS NOCHES, BIENVENID@ A MI CURRICULUM";
    }
  }
  window.addEventListener("load", function() {
    const saludo = document.getElementById("saludo");
    saludo.textContent = saludar();
  });


