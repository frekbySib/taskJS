import average from './math.js';
import _ from 'lodash';

export default (...nums) => (nums.length > 0 ? _.sum(nums) / nums.length : null);

console.log(average(0)); // 0
console.log(average(0, 10)); // 5
console.log(average(-3, 4, 2, 10)); // 3.25
console.log(average()); // null

