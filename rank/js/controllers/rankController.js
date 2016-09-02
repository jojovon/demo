define(['views/rankView', 'GS'], function (View, GS) {

  function init(query) {

    // var last = {};
    // var currentData = {};

    var currentData = localStorage.getItem('rankPage');
        currentData = JSON.parse(currentData);

    var rank = currentData.rank;
        rank = rank.sort(compare("score"));

    console.log(rank);

    // one
    $$('.one').find('em.name').html(rank[0].name);
    $$('.one').find('em.score').html(rank[0].score+'分');

    // two
    $$('.two').find('em.name').html(rank[1].name);
    $$('.two').find('em.score').html(rank[1].score+'分');

    // three
    $$('.three').find('em.name').html(rank[2].name);
    $$('.three').find('em.score').html(rank[2].score+'分');

      View.init({
        model: currentData
      });

      var leng = $$('li.rank-item').length;
      for (var i = 0; i <leng; i++) {
        $$('li.rank-item').eq(i).find('.sort span').html(i+1);
        $$('li.rank-item').eq(0).hide();
        $$('li.rank-item').eq(1).hide();
        $$('li.rank-item').eq(2).hide();

        $$('li.rank-item').eq(13).addClass('red');
      }
  }


//定义比较器
function compare(propertyName) {
  return function (object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];
    if (value2 < value1) {
      return -1;
    }else if (value2 > value1) {
      return 1;
    }else {
      return 0;
    }
  }
}

  return {
    init: init
  };

});
