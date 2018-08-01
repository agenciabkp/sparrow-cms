
function scrollTo(id){
    var width = window.innerWidth;

    if (id == "home"){
        position = $("body").offset().top;
    }else{
        position = $('#'+id).offset().top;      
    }

    if(width <= 1023){
        position = position - 100;
    }
    
    jQuery('html, body').animate({ scrollTop: position }, 'slow');

}

function toggleMenu(){
    $("nav").toggleClass("on");
    $(".main-nav").toggleClass("on");
    $(".icon-menu").toggleClass("off");
    $(".icon-x-circle").toggleClass("on");
}

function validaForm(){
    var required = 0;
    $("#contato .callout.warning").hide();
    $("#contato .callout.success").hide();

    if($("input[name=nome]").val() == ""){
        required ++;
        $("#contato .callout.warning > .callout-text").html($("input[name=nome]").attr("data-required"));
    }

    else if($("input[name=telefone]").val() == ""){
        required ++;
        $("#contato .callout.warning > .callout-text").html($("input[name=telefone]").attr("data-required"));
    }

    else if($("input[name=email]").val() == ""){
        required ++;
        $("#contato .callout.warning > .callout-text").html($("input[name=email]").attr("data-required"));
    }

    else if($("textarea[name=coments]").val() == ""){
        required ++;
        $("#contato .callout.warning > .callout-text").html($("textarea[name=coments]").attr("data-required"));
    }

    if(required){
        $("#contato .callout.warning").focus();
        $("#contato .callout.warning").slideDown();
    }else{
        $("#contato input, #contato select, #contato textarea").val("");
        $("#contato .callout.success").focus();
        $("#contato .callout.success").slideDown();
    }
}

function validaCentral(){
    var required = 0;
    $("aside .callout.warning").hide();
    $("aside .callout.success").hide();

    if($("input[name=cv_nome]").val() == ""){
        required ++;
        $("aside .callout.warning > .callout-text").html($("input[name=cv_nome]").attr("data-required"));
    }

    else if($("input[name=cv_email]").val() == ""){
        required ++;
        $("aside .callout.warning > .callout-text").html($("input[name=cv_email]").attr("data-required"));
    }

    else if($("input[name=cv_telefone]").val() == ""){
        required ++;
        $("aside .callout.warning > .callout-text").html($("input[name=cv_telefone]").attr("data-required"));
    }

    if(required){
        $("aside .callout.warning").focus();
        $("aside .callout.warning").slideDown();
    }else{
        $("aside input, aside select, aside textarea").val("");
        $("aside .callout.success").focus();
        $("aside .callout.success").slideDown();
    }
}

function contact(tipo){

    switch(tipo){
        case "1": //Vender
            $("select[name=assunto]").val('Quero vender meu terreno');
        break;

        case "2": //Comprar
            $("select[name=assunto]").val('Quero comprar meu imóvel');
        break;

        case "3": //Investir
            $("select[name=assunto]").val('Quero investir');
        break;
    }

    if($("nav").hasClass("locked")){
        window.location.href="/?q="+tipo+"#contato";
    }else{
        scrollTo("contato");
    }

}