//? 4.Task: Sorting Objects

//? Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
    {
        make:'Ford',
        model:'2025 F-150 Raptor',
        year: 2003
    },
    {
        make:'Mercedes-Benz',
        model:'GLC',
        year: 2010
    },
    {
        make:'BMW',
        model:'2025 X5',
        year: 2007
    },
]

const sortingCar = (cars)=>{
    const sortedAllCar = cars.sort((a,b)=>a.year - b.year)
 console.log(sortedAllCar)
}

console.log(sortingCar(cars))