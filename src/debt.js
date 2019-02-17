import suncalc from 'suncalc'


// Get human-readable day based on JS output
export const labelDay = dayNumber => ({
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday'
})[dayNumber]


// calculate integer GMT offset based on JS output
export const getOffset = date => parseInt(
  date.toString()
  .split('GMT')[1]
  .split(' ')[0]
  .replace('0', '')
  .replace('00', '')
  .replace('+', '')
)


// circle an array to the left or to the right
const circleRight = (arr, amount) => arr
  .slice(arr.length - amount)
  .concat(arr.slice(0, arr.length - amount))

const circleLeft = (arr, amount) =>
  arr.slice(amount)
  .concat(arr.slice(0, amount))

export const circle = (arr, amount) => amount > 0 ?
  circleRight(arr, amount) :
  circleLeft(arr, Math.abs(amount))


// transform hello_world to Hello World
export const transformText = text => text
  .split('_')
  .map(word =>
    word.charAt(0).toUpperCase() +
    word.slice(1)
  ).join(' ')


// get data by day and map it for rechart
export const transformData = (data, day) => data[day]
  .map((amount, index) => ({
    uv: amount
  }))


// get data for current day and calculate its offset based on current datetime
export const getGraphData = (data, date) => circle(
  transformData(
    data,
    labelDay(
      date.getDay()
    )
  ),
  getOffset(date)
)


// locate user the standard way
const locateNative = new Promise(
  (resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject)
)


// calculate sunrise and sunset based on date
const calculateSunriseAndSunset = (date, position) => {
  const times = suncalc.getTimes(date, position.lat, position.lng)
  return {
    sunrise: times.sunrise.getHours(),
    sunset: times.sunset.getHours()
  }
}


// get sunrise and sunset times based on native geolocation
export async function getSunriseAndSunset (date) {
  let position = {}
  try {
    position = await locateNative.then(pos => ({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
    }))
  } catch (e) {
    console.warn(e)
  }

  return ('lat' in position) && ('lng' in position) ? calculateSunriseAndSunset(date, position) : null
}


// get sunrise and sunset roughly, based on timezone
export const getRoughSunriseAndSunset = date => calculateSunriseAndSunset(date, {
  lat: 0,
  lng: 15 * Math.abs(getOffset(date) - 1)
})
