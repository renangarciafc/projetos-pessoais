
function menu(){
        $('.menu-table').css('display', 'block');
        show();
}

function show(){
    $('.menu').click(function(){
        $('.menu-table').css('display', 'none');
        $(this).unbind('click', show());
    })
}