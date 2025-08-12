$(document).ready(function () {
    $("#Enviar").click(function (e) {
        e.preventDefault();
        $("#form-2").html("<b>Nombre: </b>" + $("#Nombre").val() + "<br>");
        $("#form-2").append("<b>Telefono: </b>" + $("#Telefono").val() + "<br>");
        $("#form-2").append("<b>Gmail: </b>" + $("#Gmail").val() + "<br>");
        $("#form-2").append("<b>Direccion:</b> " + $("#Direccion").val() + "<br>");
        $("#form-2").append("<b>Tipo de Mascota: </b>"+$("#Seleccion").val()+"<br>");
    });
    $("#Nombre").focus(function (e) {
        e.preventDefault();
        $("#Nombre").addClass("inputactivo");
    });
    $("#Nombre").blur(function (e) {
        e.preventDefault();
        $("#Nombre").removeClass("inputactivo");
        if($("#Nombre").val()=== ""){
         $("#Nombre").addClass("inputerror");
         $(".notificacion").html("Campo Requerido");
         $(".notificacion").css("display", "block");
         $(".notificacion").css("background-color", "red");
         setTimeout(function(){
            $(".notificacion").fadeOut(1500);
         }, 1500);
        }
    });
    $("#Telefono").focus(function (e) {
        e.preventDefault();
        $("#Telefono").addClass("inputactivo");
    });
    $("#Telefono").blur(function (e) {
        e.preventDefault();
        $("#Telefono").removeClass("inputactivo");
        if($("#Telefono").val()=== ""){
         $("#Telefono").addClass("inputerror");
         $(".notificacion").html("Campo Requerido");
         $(".notificacion").css("display", "block");
         $(".notificacion").css("background-color", "red");
         setTimeout(function(){
            $(".notificacion").fadeOut(1500);
         }, 1500);
        }
    });
    $("#Gmail").focus(function (e) {
        e.preventDefault();
        $("#Gmail").addClass("inputactivo");
    });
    $("#Gmail").blur(function (e) {
        e.preventDefault();
        $("#Gmail").removeClass("inputactivo");
        if($("#Gmail").val()=== ""){
         $("#Gmail").addClass("inputerror");
         $(".notificacion").html("Campo Requerido");
         $(".notificacion").css("display", "block");
         $(".notificacion").css("background-color", "red");
         setTimeout(function(){
            $(".notificacion").fadeOut(1500);
         }, 1500);
        }
    });
    $("#Direccion").focus(function (e) {
        e.preventDefault();
        $("#Direccion").addClass("inputactivo");
    });
    $("#Direccion").blur(function (e) {
        e.preventDefault();
        $("#Direccion").removeClass("inputactivo");
        if($("#Direccion").val()=== ""){
         $("#Direccion").addClass("inputerror");
         $(".notificacion").html("Campo Requerido");
         $(".notificacion").css("display", "block");
         $(".notificacion").css("background-color", "red");
         setTimeout(function(){
            $(".notificacion").fadeOut(1500);
         }, 1500);
        }
    });
});
function Adopto() {
    swal('Adopto','Su solicitud esta en proceso','success')
}