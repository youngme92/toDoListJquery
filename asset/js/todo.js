$('ul').on("click","li", clickTodo);

function clickTodo(){
    $(this).toggleClass("checked");
}

$('ul').on("click","span", clickDelete);

function clickDelete(event){
    $(this).parent().fadeOut(500, deleteLi);
    event.stopPropagation();
}

function deleteLi(){
    $(this).remove();
}

$('.fa-plus').on("click", clickPlus);

function clickPlus(){
    $("input").fadeToggle();
}

$("input").keypress(presskey);

function presskey(event){
    if(event.which === 13){
    var value = $(this).val();
    $("ul").append("<li><span><i class='fas fa-trash'></i></span>"+value+"</li>");    
    $(this).val("");
    }
}