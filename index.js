var NODE_RATIFY = require('node-ratify');

function fetchValues(obj, values, deep) {
    if (NODE_RATIFY.isObject(obj)) {
        // Get the object keys
        var objKeys = Object.keys(Object(obj));

        for (var idx = 0; idx < objKeys.length; idx++) {
            if (deep && NODE_RATIFY.isObject(obj[objKeys[idx]])) {
                fetchValues(obj[objKeys[idx]], values, deep);
            } else {
                values.push(obj[objKeys[idx]]);
            }
        }
    }
}

exports = module.exports = {
    values      : function (obj, opts) {
        if (!opts || !NODE_RATIFY.isObject(opts))
            opts = {
                deep : false
            };

        var values = [],
            deep   = opts['deep'];

        fetchValues(obj, values, deep);

        return values;
    }
};