/* */ 
"format cjs";
"use strict";

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _apiNode = require("../../api/node");

var node = _interopRequireWildcard(_apiNode);

var _messages = require("../../messages");

var messages = _interopRequireWildcard(_messages);

var _util = require("../../util");

var util = _interopRequireWildcard(_util);

var PluginManager = (function () {
  function PluginManager() {
    var _ref = arguments[0] === undefined ? { transformers: {}, before: [], after: [] } : arguments[0];

    var file = _ref.file;
    var transformers = _ref.transformers;
    var before = _ref.before;
    var after = _ref.after;

    _classCallCheck(this, PluginManager);

    this.transformers = transformers;
    this.file = file;
    this.before = before;
    this.after = after;
  }

  PluginManager.memoisePluginContainer = function memoisePluginContainer(fn) {
    for (var i = 0; i < PluginManager.memoisedPlugins.length; i++) {
      var plugin = PluginManager.memoisedPlugins[i];
      if (plugin.container === fn) return plugin.transformer;
    }

    var transformer = fn(node);
    PluginManager.memoisedPlugins.push({
      container: fn,
      transformer: transformer
    });
    return transformer;
  };

  PluginManager.prototype.subnormaliseString = function subnormaliseString(name, position) {
    // this is a plugin in the form of "foobar" or "foobar:after"
    // where the optional colon is the delimiter for plugin position in the transformer stack

    var match = name.match(/^(.*?):(after|before)$/);
    if (match) {
      ;

      var _temp = match;
      name = _temp[1];
      position = _temp[2];
      _temp;
    }var loc = util.resolveRelative("babel-plugin-" + name) || util.resolveRelative(name);
    if (loc) {
      return {
        position: position,
        plugin: require(loc)
      };
    } else {
      throw new ReferenceError(messages.get("pluginUnknown", name));
    }
  };

  PluginManager.prototype.validate = function validate(name, plugin) {
    // validate transformer key
    var key = plugin.key;
    if (this.transformers[key]) {
      throw new ReferenceError(messages.get("pluginKeyCollision", key));
    }

    // validate Transformer instance
    if (!plugin.buildPass || plugin.constructor.name !== "Transformer") {
      throw new TypeError(messages.get("pluginNotTransformer", name));
    }

    // register as a plugin
    plugin.metadata.plugin = true;
  };

  PluginManager.prototype.add = function add(name) {
    var position;
    var plugin;

    if (name) {
      if (typeof name === "object" && name.transformer) {
        var _temp2 = name;
        plugin = _temp2.transformer;
        position = _temp2.position;
        _temp2;
      } else if (typeof name !== "string") {
        // not a string so we'll just assume that it's a direct Transformer instance, if not then
        // the checks later on will complain
        plugin = name;
      }

      if (typeof name === "string") {
        var _temp3 = this.subnormaliseString(name, position);

        plugin = _temp3.plugin;
        position = _temp3.position;
        _temp3;
      }
    } else {
      throw new TypeError(messages.get("pluginIllegalKind", typeof name, name));
    }

    // default position
    position = position || "before";

    // validate position
    if (PluginManager.positions.indexOf(position) < 0) {
      throw new TypeError(messages.get("pluginIllegalPosition", position, name));
    }

    // allow plugin containers to be specified so they don't have to manually require
    if (typeof plugin === "function") {
      plugin = PluginManager.memoisePluginContainer(plugin);
    }

    //
    this.validate(name, plugin);

    // build!
    var pass = this.transformers[plugin.key] = plugin.buildPass(this.file);
    if (pass.canTransform()) {
      var stack = position === "before" ? this.before : this.after;
      stack.push(pass);
    }
  };

  _createClass(PluginManager, null, [{
    key: "memoisedPlugins",
    value: [],
    enumerable: true
  }, {
    key: "positions",
    value: ["before", "after"],
    enumerable: true
  }]);

  return PluginManager;
})();

exports["default"] = PluginManager;
module.exports = exports["default"];