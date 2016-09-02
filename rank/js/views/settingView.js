define(['utils'], function (Utils) {
	function init(params) {
    var template = $$('#settingTemplate').html();
    var compiledTemplate = Template7.compile(template);
    var renderTemplate = compiledTemplate({model: params.model});

    $$('#settingContent').append(renderTemplate);

		Utils.bindEvents(params.bindings);
	}

	return {
		init: init
	}
});
