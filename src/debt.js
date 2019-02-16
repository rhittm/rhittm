export const labelDay = dayNumber => ({
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday'
})[dayNumber]

export const getOffset = date => parseInt(date.toString().split('GMT')[1].split(' ')[0].replace('0', '').replace('00', '').replace('+', ''))

const circleRight = (arr, amount) => arr.slice(arr.length - amount).concat(arr.slice(0, arr.length - amount))
const circleLeft = (arr, amount) => arr.slice(amount).concat(arr.slice(0, amount))
export const circle = (arr, amount) => amount > 0 ? circleRight(arr, amount) : circleLeft(arr, Math.abs(amount))

export const transformText = text => text.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
