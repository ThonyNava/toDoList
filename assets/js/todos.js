// Check off specific ToDos by clicking

$("ul").on("click", "li", function(){
    $(this).children(".li-text").toggleClass("completed");
});

// Click on X to delete To do
$("ul").on("click", "span",function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        // grabbing new To Do text from input
       var todoText = $(this).val();
       // create new li and add to ul
       $("ul").append('<li><span class="d-flexCC"> <svg class="fa-trash" viewBox="0 0 448 512" preserveAspectRatio="xMidYMid meet"> <path class="icon" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"> </path> </svg> </span>' + '<p class="li-text">' + todoText + '</p>' + '<p class="mobileButton">•••</p></li>');
       $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").toggleClass("inputOut");
    $(".fa-plus").toggleClass("rotation-45");
});

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth > 767.98) {
    
    $("ul").on("mouseenter", "li",function(e){
        $(this).addClass("li-hover");
    });
    
    $("ul").on("mouseleave", "li",function(e){
        $(this).removeClass("li-hover");
    });
}


$("ul").on("click", ".mobileButton",function(e){
    $(".mobileButton").removeClass("mobileButton-clicked");
    if($(this).parent().hasClass("li-hover")){
        $(this).parent().removeClass("li-hover");
        $(this).removeClass("mobileButton-clicked");
    } else {
        $(this).parent().addClass("li-hover");
        $(this).addClass("mobileButton-clicked");
    }
    e.stopPropagation();
});
