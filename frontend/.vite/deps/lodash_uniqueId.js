import {
  require_toString
} from "./chunk-KANEKIQS.js";
import "./chunk-2ZZJVIHG.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/lodash/uniqueId.js
var require_uniqueId = __commonJS({
  "node_modules/lodash/uniqueId.js"(exports, module) {
    var toString = require_toString();
    var idCounter = 0;
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }
    module.exports = uniqueId;
  }
});
export default require_uniqueId();
//# sourceMappingURL=lodash_uniqueId.js.map
