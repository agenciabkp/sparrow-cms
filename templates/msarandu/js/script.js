
/*****************
    Scroll Nav
*****************/

$( window ).scroll(function() {

    var nav = $(".icon-simbolo_nospacing");
    var summary = $("summary ul li");

    var logoTop = nav.offset().top,
        logoLeft = nav.offset().left,
        logoWidth = nav.width(),
        logoHeight = nav.height();                

    $('section').each(function(e){
        var self = $(this),
        selfLeft = self.offset().left,
        selfTop = self.offset().top,
        selfWidth = self.width(),
        selfHeight = self.height();
        
        //Valida o logo
        if((logoLeft + logoWidth) > selfLeft && logoLeft < (selfLeft + selfWidth) && (logoTop + logoHeight) > selfTop && logoTop < (selfTop + selfHeight)){
            if(self.hasClass("background") || self.hasClass("dark-background")){
                nav.removeClass("color");
            }else{
                nav.addClass("color");
            }
        }

        summary.each(function(event){
            var item = $(this),
            itemLeft = item.offset().left,
            itemTop = item.offset().top,
            itemWidth = item.width(),
            itemHeight = item.height();
            
            //Valida o Itens
            if((itemLeft + itemWidth) > selfLeft && itemLeft < (selfLeft + selfWidth) && (itemTop + itemHeight) > selfTop && itemTop < (selfTop + selfHeight)){
                if(self.hasClass("background") || self.hasClass("dark-background")){
                    item.removeClass("color");
                }else{
                    item.addClass("color");
                }

                if(self.attr("id") == item.attr("data-id")){
                    $("summary ul > li").removeClass("on");
                    item.addClass("on");
                }
            }

        });

    });
  
});

$("summary ul > li").click(function(){          
    var id = $(this).attr("data-id"); 

    scrollTo(id);
    
    return false;
});

function scrollTo(id){

    if (id == "home"){
        position = $("body").offset().top;
    }else{
        position = $('#'+id).offset().top;      
    }
    
    jQuery('html, body').animate({ scrollTop: position }, 'slow');

}
