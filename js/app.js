// Función de splash
/* splash fadeOut para ocultar*/
$(document).ready(function(){
    setTimeout(function() {
        $(".splash").fadeOut(1500);
    },1500);
/* splash fadeIn para mostrar*/
    setTimeout(function() {
          $(".content").fadeIn(2500);
    }, 2500);

});

$("#input-phone").intlTelInput();


  /* Variables */
    var $inputPhone = $("#input-phone");
    var $buttonNext = $("#btn-next");
    var $inputCod = $("#input-cod");
    var $buttonCod = $("#btn-cod");

// Habilitar botón con 10 digitos
$inputPhone.keyup(function() {
  if ($(this).val().trim().length >= 10) {
    $buttonNext.removeAttr("disabled");
  } else {
    $buttonNext.attr("disabled", true);
  }
});

//validar número y desplegar código lab
$buttonNext.click(function(e){
  e.preventDefault();
  var cod = Math.floor (Math.random() * 900) + 100;
  alert ("tu código LAB es " + cod);
  console.log(cod);
})

/*$inputCod.keyup(function(){
  var cod = Math.floor (Math.random() * 900) + 100;

  if ($(this).val().trim() === cod) {
    $buttonCod.removeAttr("disabled");
  } else {
    $buttonCod.attr("disabled", true);
  }
})*/
