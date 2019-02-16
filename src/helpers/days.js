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
