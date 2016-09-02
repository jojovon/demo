define(['views/settingView', 'GS'], function (View, GS) {

  var bindings = [{
    element: '.ok-submit',
    event: 'click',
    handler: okSubmit
  },{
    element: '.total-submit',
    event: 'click',
    handler: totalSubmit
  }];

	function init() {

    // var lastRank = GS.getCurrentRank();

      $$.ajax({
        url: 'api/set.json',
        type: 'GET',
        success: function (data) {
          data = JSON.parse(data);
          if (data.errorNo === 0) {

            View.init({
              model: data.model,
              bindings: bindings
            });

          }
        }
      });
	}


  function okSubmit() {
    var leng = $$('li.scores').length;
    var $sum = $$('li.scores').find('.sub');

    var setRank = [];
    var rankObj = {};
    var name = '';

    var score = '';
    var sum = '';

    var currentObj = {};

    for (var i = 0; i <leng; i++) {
      name = $$('.in-name').eq(i).val();
      score = parseInt($$('.in-score').eq(i).val());

      sum = parseInt($$('.sub').eq(i).val());
      sum = sum+score;

      $$('.sub').eq(i).val(sum);

      /*if(score == 0) {
        rankApp.alert('有未填写分值');
        return;
      }else {*/
        rankObj = {"name": name, "score": sum};
        setRank.push(rankObj);
      // }
    }

    currentObj.rank = setRank;
    // console.log(currentObj);

    rankApp.alert('积分已录入');
    $$('.in-score').val('');

    GS.setCurrentRank(currentObj);
  }

  function totalSubmit() {
    var modelRank = localStorage.getItem('rankPage');

    if(modelRank == null || modelRank == undefined) {
      rankApp.alert('请录入积分');
      return;
    }

    mainView.loadPage('rank.html');
  }

	return {
		init: init
	};

});
