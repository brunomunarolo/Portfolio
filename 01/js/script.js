//  Add Google Maps
function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Accordion
// Accordion
document.addEventListener("DOMContentLoaded", function () {
  var acc = document.getElementsByClassName("accordion");

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      panel.classList.toggle("active");

      // Dispara um evento para indicar que o estado da lista foi alterado
      var event = new Event("accordionStateChanged");
      window.dispatchEvent(event);
    });
  }

  // Ouça o evento accordionStateChanged e ajuste o estilo do conteúdo abaixo
  window.addEventListener("accordionStateChanged", function () {
    var contentBelow = document.querySelector(".content-below");
    contentBelow.style.marginTop = getMarginTop();
  });

  // Função para verificar se há algum accordion ativo
  function hasActiveAccordion() {
    var activeAccordion = document.querySelector(".accordion.active");
    return !!activeAccordion;
  }

  // Função para calcular a margem superior com base no estado dos acordions
  function getMarginTop() {
    var activeAccordion = document.querySelector(".accordion.active");
    if (activeAccordion) {
      var activePanel = activeAccordion.nextElementSibling;
      var nestedContentBelow = activePanel.querySelector(".content-below");
      return nestedContentBelow ? "20px" : "0px";
    }
    return "0px";
  }
});