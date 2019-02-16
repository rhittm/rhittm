const circleRight = (arr, amount) => arr.slice(arr.length - amount).concat(arr.slice(0, arr.length - amount))
const circleLeft = (arr, amount) => arr.slice(amount).concat(arr.slice(0, amount))
export default (arr, amount) => amount > 0 ? circleRight(arr, amount) : circleLeft(arr, Math.abs(amount))
