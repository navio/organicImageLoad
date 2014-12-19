
$(document).ready(function(){

  $('.container img').each(function(index, it){

    var image_src = it.attr('lazy-src');
    it.attr('src',image_src);
    
    console.log(it,index);

  });


})
