//Retorna as informações sobre o navegador
var navegador = navigator.userAgent;

if((navegador.indexOf("Opera") || navegador.indexOf('OPR')) != -1 ) {
    $('body').addClass('opera')
}
else if(navegador.indexOf("Chrome") != -1 ){
    $('body').addClass('chrome');
}
else if(navegador.indexOf("Safari") != -1 && navegador.indexOf("Chrome") == -1){
    $('body').addClass('safari');
}
else if(navegador.indexOf("Firefox") != -1 ) {
    $('body').addClass('firefox');
}
else if((navegador.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
    $('body').addClass('IE'); 
}  


