define([], function () {

	function getTypeData(type) {
		for (var i = 0; i < typeData.length; i++) {
			if (type === typeData[i].type) {
				return typeData[i];
			}
		}
	}

	function setStartPage() {
		return 'login.html';
	}

	return {
		setStartPage: setStartPage
	};
});
