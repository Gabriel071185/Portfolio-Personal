let menuVisible = false;

//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function downloadFile() {
    const link = document.createElement('a');
    link.href = 'cv/Curriculum Vitae Etchegoyen Gabriel Python Developer.pdf';
    link.download = 'Curriculum Vitae Etchegoyen Gabriel Python Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function redirigir() {
    window.location.href = 'https://github.com/Gabriel071185';
}  



