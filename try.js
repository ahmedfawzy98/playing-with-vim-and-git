_ = require('underscore');

const array = _.map([1,2,3,4,5], item => item + 10);

console.log(`These are the items ${array}`);

_.each(array, item => console.log(`This is number ${item}`));

console.log(_.find(array, item => item >= 15));

console.log(`THIS IS GOOD WITH coc-nvim plugin`);
