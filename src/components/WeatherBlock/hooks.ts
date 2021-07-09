import { useState } from 'react'

export const useWeatherFields = () => {
  const [city, setCity] = useState<string>()
  const selectCity = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setCity(event.target.value)
  }

  const [date, setDate] = useState<string>()
  const selectDate = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDate(event.target.value)
  }

  let coordinatesOfTheCurrentPosition: string;

  const checkCurrentLocation = new Promise(function(resolve, reject) {
    if (city === 'Current geo') {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (location) {
          resolve(coordinatesOfTheCurrentPosition = `lat=${location.coords.latitude.toFixed(2)}&lon=${location.coords.longitude.toFixed(2)}`)
        });
      }
    }
  })

  checkCurrentLocation.then(() => {
    setCity(coordinatesOfTheCurrentPosition)
  })

  return {
    city,
    selectCity,
    date,
    selectDate
  }
}


