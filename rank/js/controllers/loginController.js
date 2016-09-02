define(['views/loginView', 'GS', 'services/openTypeService'], function (View, GS, OTS) {

	var bindings = [{
		element: '.login-submit',
		event: 'click',
		handler: loginSubmit
	}];

	function init(query) {

		View.init({
			bindings: bindings
		});
	}


	function isMobile(str) {
		var reg = /^[1][34578]\d{9}$/;
		return reg.test(str);
	}

	function isVaildCode(str) {
		var reg = /^\d{4}$/;
		return reg.test(str);
	}

	function resetCountdown() {
		if (timer) {
			clearTimeout(timer);
		}
		View.resetBtn();
	}

	function loginSubmit() {
		var valMobile = $$('.username').val();
		var valPassword = $$('.password').val();

		if (valMobile != 'healthbok') {
			rankApp.alert('用户名有误，请重新输入');
		}else if (valPassword != 'phuket') {
			rankApp.alert('密码有误，请重新输入');
		}else {
			rankApp.showIndicator();

			$$.ajax({
				url: 'api/login.json',
				type: 'GET',
				data: {
					'mobile': valMobile,
					'password': valPassword
				},
				success: function (data) {
					data = JSON.parse(data);
					if (data.errorNo === 0) {
						View.inputBlur();
            GS.setCurrentUser(data.sid, data.user);

						mainView.loadPage('setting.html');
						rankApp.hideIndicator();
					} else {
						rankApp.hideIndicator();
						rankApp.alert(data.errorInfo);
					}
					// resetCountdown();
				}
			});
		}
	}

	return {
		init: init
	};
});
