/*****************
    Scroll Nav
*****************/

$( window ).scroll(function() {
    var width = window.innerWidth;

    if(width >= 1024){

        var nav = $('nav');
        var orgElementTop = 70;
        var icon = $(".icon-simbolo_nospacing");
        var summary = $("summary ul li");

        var logoTop = icon.offset().top,
            logoLeft = icon.offset().left,
            logoWidth = icon.width(),
            logoHeight = icon.height();  

        var navTop = nav.offset().top,
            navLeft = nav.offset().left,
            navWidth = nav.width(),
            navHeight = nav.height();                

        $('section').each(function(e){
            var self = $(this),
            selfLeft = self.offset().left,
            selfTop = self.offset().top,
            selfWidth = self.width(),
            selfHeight = self.height();
            
            //Valida o logo
            if((logoLeft + logoWidth) > selfLeft && logoLeft < (selfLeft + selfWidth) && (logoTop + logoHeight) > selfTop && logoTop < (selfTop + selfHeight)){
                if(self.hasClass("background") || self.hasClass("dark-background")){
                    icon.removeClass("color");
                }else{
                    icon.addClass("color");
                }
            }
            
            //Valida o navegação
            if((navLeft + navWidth) > selfLeft && navLeft < (selfLeft + selfWidth) && (navTop + navHeight) > selfTop && navTop < (selfTop + selfHeight)){
                if(self.hasClass("background") || self.hasClass("dark-background")){
                    nav.find(".main-nav").removeClass("color");
                }else{
                    nav.find(".main-nav").addClass("color");
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

        if ($(this).scrollTop() >= orgElementTop) { 
            nav.addClass("fixed");
        } else if ($(this).scrollTop() < orgElementTop){ 
            nav.removeClass("fixed");
        } 
    }
  
});

$(document).ready(function(){

    var aside = $("aside .form");
    var asideDefaultTop = parseInt(aside.css("top").replace("px",""));
    var width = window.innerWidth;

    if(width >= 1024){

        $("aside .form > .header, #central_vendas").click(function(){        
            var operator = "-";
            var top = aside.css("top").replace("px","");
            var height = (parseInt(aside.height()) + asideDefaultTop) - parseInt($("aside").height());

            $("aside .callout").hide();

            //alert("Top: " + asideDefaultTop + " Height: " + height);

            if(top < 0){
                height = Math.abs(height);
                operator = "+";
            }

            aside.animate({
                top: operator + "=" + height + "px"
            }, 200, function() {
                aside.find(".header > span")
                    .toggleClass("icon-arrow-up")
                    .toggleClass("icon-arrow-down");
            });
            
        });

        $("summary ul > li").click(function(){          
            var id = $(this).attr("data-id");

            if($("nav").hasClass("locked")){
                window.location.href="/#"+id;
            }else{
                scrollTo(id);
            }
            
            return false;
        });
        
    }

    $(".main-nav > li > a").click(function(){          
        var id = $(this).attr("href"); 

        if($("nav").hasClass("locked")){
            window.location.href="/#"+id;
        }else{
            scrollTo(id);
        }

        if(width <= 1023){
            toggleMenu();
        }
        
        return false;
    });

    $(".icon-simbolo_nospacing").click(function(){

        if($("nav").hasClass("locked")){
            window.location.href="/#home";
        }else{
            scrollTo("home");
        }
        
        return false;
    });

    $(".icon-menu,.icon-x-circle").click(function(){
        toggleMenu();
    });

});