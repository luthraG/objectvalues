# objectvalues
To get all the values of all the keys of an object. It provides options to fetch values of nested keys as well.

### Installation

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install objectvalues --save
```

### Usage

```javascript
var OBJECT_VALUES = require('objectvalues');

var object = {
    'California' : 'CA',
    'Texas'      : 'TX',
    'NEW YORK'   : 'NY' 
};

OBJECT_VALUES.values(object);
//=> ['CA', 'TX', 'NY']

var days = {
    'SUNDAY'    : 'First',
    'MONDAY'    : 'Second',
    'TUESDAY'   : 'Third',
    'WEDNESDAY' : 3
};

OBJECT_VALUES.values(days);
//=> ['First', 'Second', 'Third', 3]

```

### Clone the repo

```bash
$ git clone https://github.com/luthraG/objectvalues.git
```

### API

#### values(obj, [options])

This API takes two parameters:
1. Object whose values to be fetched and 
2. options object. This argument is optional


**Options**

Various options supported by this API are :
- **deep** - To specify if values of nested keys should also be fethced. Default is false.

**Example with options**

```javascript
var OBJECT_VALUES = require('objectvalues');

var days = {
    'SUNDAY'    : 'First',
    'MONDAY'    : 'Second',
    'TUESDAY'   : 'Third',
    'WEDNESDAY' : 3,
    'WEEK_END'  : {
    	'SUNDAY' : {
    		'CODE' : {
    			'ABBR' : 'SAT'
    		}
    	}
	}
};

OBJECT_VALUES.values(days, { deep : true});
//=> [ 'First', 'Second', 'Third', 3, 'SAT' ]

```

### Related projects

You might also be interested in these projects:

* [uppercase-values](https://www.npmjs.com/package/uppercase-values): Convert the values of all the keys of an object into uppercase. | [homepage](https://github.com/luthraG/uppercase-values.git)
* [lowercase-values](https://www.npmjs.com/package/lowercase-values): Convert the values of all the keys of an object into lowercase. | [homepage](https://github.com/luthraG/lowercase-values.git)
* [object-lowerkeys](https://www.npmjs.com/package/object-upperkeys): Convert the keys of an object into lowercase. | [homepage](https://github.com/luthraG/object-lowerkeys.git)
* [object-upperkeys](https://www.npmjs.com/package/object-upperkeys): Convert the keys of an object into uppercase. | [homepage](https://github.com/luthraG/object-upperkeys.git)

### Author

**Gaurav Luthra**

* [github/luthraG](https://github.com/luthraG)

## License

MIT © [Gaurav Luthra](luthra.zenith@gmail.com)


