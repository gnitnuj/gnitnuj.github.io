eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"gnitnuj/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"gnitnuj/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=gnitnuj/app.js");

;eval("define(\"gnitnuj/initializers/export-application-global\", \n  [\"ember\",\"gnitnuj/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=gnitnuj/initializers/export-application-global.js");

;eval("define(\"gnitnuj/router\", \n  [\"ember\",\"gnitnuj/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=gnitnuj/router.js");

;eval("define(\"gnitnuj/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      data.buffer.push(\"<div id=\'zoolander-header\'>\\n	<span>\\n		JavaScript | Ruby | Rails | Node.js | Ember.js \\n	</span>\\n</div>\\n\\n<div id=\'headshot\' class=\'fadeIn\'>\\n</div>\\n\\n<div id=\'social-icon-container\' class=\'slideExpandUp\'>\\n	<ul>\\n		<li><a href=\'//github.com/gnitnuj\' class=\'icon icon-github\'></a></li>\\n		<li><a href=\'//linkedin.com/in/junting\' class=\'icon icon-linkedin\'></a></li>\\n		<li><a href=\'mailto:junting.lu+whatsajunting@gmail.com\' class=\'icon icon-mail\'></a></li>\\n		<li><a href=\'skype:juntinglu\' class=\'icon icon-skype\'></a></li>\\n		<li><a href=\'//plus.google.com/+JuntingLu/about\' class=\'icon icon-gplus\'></a></li>\\n		<li><a href=\'//instagram.com/whatsajunting\' class=\'icon icon-instagrem\'></a></li>\\n		<li><a href=\'//facebook.com/juntinglu\' class=\'icon icon-facebook\'></a></li>\\n	</ul>\\n</div>\\n\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=gnitnuj/templates/application.js");

;eval("define(\"gnitnuj/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=gnitnuj/tests/app.jshint.js");

;eval("define(\"gnitnuj/tests/gnitnuj/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - gnitnuj/tests/helpers\');\n    test(\'gnitnuj/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'gnitnuj/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=gnitnuj/tests/gnitnuj/tests/helpers/resolver.jshint.js");

;eval("define(\"gnitnuj/tests/gnitnuj/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - gnitnuj/tests/helpers\');\n    test(\'gnitnuj/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'gnitnuj/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=gnitnuj/tests/gnitnuj/tests/helpers/start-app.jshint.js");

;eval("define(\"gnitnuj/tests/gnitnuj/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - gnitnuj/tests\');\n    test(\'gnitnuj/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'gnitnuj/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=gnitnuj/tests/gnitnuj/tests/test-helper.jshint.js");

;eval("define(\"gnitnuj/tests/helpers/resolver\", \n  [\"ember/resolver\",\"gnitnuj/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=gnitnuj/tests/helpers/resolver.js");

;eval("define(\"gnitnuj/tests/helpers/start-app\", \n  [\"ember\",\"gnitnuj/app\",\"gnitnuj/router\",\"gnitnuj/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      return App;\n    }\n  });//# sourceURL=gnitnuj/tests/helpers/start-app.js");

;eval("define(\"gnitnuj/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=gnitnuj/tests/router.jshint.js");

;eval("define(\"gnitnuj/tests/test-helper\", \n  [\"gnitnuj/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    var containerVisibility = QUnit.urlParams.nocontainer ? \'hidden\' : \'visible\';\n    document.getElementById(\'ember-testing-container\').style.visibility = containerVisibility;\n  });//# sourceURL=gnitnuj/tests/test-helper.js");

/* jshint ignore:start */

define('gnitnuj/config/environment', ['ember'], function(Ember) {
  var prefix = 'gnitnuj';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */



});

if (runningTests) {
  require("gnitnuj/tests/test-helper");
} else {
  require("gnitnuj/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}



/* jshint ignore:end */
