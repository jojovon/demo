define(['utils'], function (Utils) {
  function init(params) {
    var template = $$('#rankTemplate').html();
    var compiledTemplate = Template7.compile(template);
    var renderTemplate = compiledTemplate({model: params.model});

    $$('#rankList').html(renderTemplate);

    Utils.bindEvents(params.bindings);
  }

  return {
    init: init
  }
});
