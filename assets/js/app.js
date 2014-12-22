Object.prototype.$$ = function(){
  return $(this);
}


function loadImage(image){


      var lazySrc = image.attr('lazy-src');
      image.attr('src', lazySrc);




}


function randomList(){
  var list = [];

  function generateList(lowEnd,highEnd){
    var glist = [];
    for (var i = lowEnd; i <= highEnd; i++) {
      glist.push(i);
    }
    return glist;
  }

  function shuffleList(_list) {
    var i = _list.length, t, j;
    _list = _list.slice();
    while (--i) t = _list[i], _list[i] = _list[j = ~~(Math.random() * (i+1))], _list[j] = t;
    return _list;
  }

  function shuffle_FisherYates(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  return {

    init: function(size){
      list = generateList(0,size);
      list = shuffle_FisherYates(list);
      return list;
    },
    pull: function(){
      return list.pop();
    }

  }


}

$(document).ready(function(){
  var schedule = randomList();
  var images = $('.container img');

      schedule.init(images.length);

      images.each(function(index,it){

    setTimeout(function() {

      loadImage(it.$$());

    },  schedule.pull() +'99');

  });


});
