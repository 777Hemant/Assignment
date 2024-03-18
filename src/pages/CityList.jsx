import React from 'react'

const cities = [
  'Delhi',
  'Mumbai',
  'Bengaluru',
  'Chennai',
  'Hyderabad',
  'Ahmedabad',
  'Jaipur',
  'Shimla',
  'Patna',
  'Shinta',
  'Pama',
]

function CityList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900 leading-tight">
          Top Cities
        </h1>
        <ul className="flex flex-wrap justify-start">
          {cities.map((city) => (
            <li
              key={city}
              className="px-3 py-2 rounded-md bg-gray-200 shadow-sm hover:bg-gray-300"
            >
              {city}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold text-gray-900 leading-tight">
          Other Cities
        </h2>
        <ul className="flex flex-wrap justify-start">
          {cities.map((city) => (
            <li
              key={city}
              className="px-3 py-2 rounded-md bg-gray-200 shadow-sm hover:bg-gray-300"
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CityList