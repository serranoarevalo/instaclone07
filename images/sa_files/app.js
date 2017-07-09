$(document).ready(function(){
    
    var $heart = $('.heart'),
        $addComment = $('.photo__add-comment');

    $heart.click(function(){
        $(this).toggleClass('fa-heart-o fa-heart');
    })

    $addComment.keydown(function(event){
        if(event.keyCode ==  13){
            console.log(event.target.value)
            $(this).val('')
        }

    })


})

































