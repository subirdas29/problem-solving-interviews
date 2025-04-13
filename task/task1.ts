//? 1.Task: Array Filtering and Mapping

//? Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

// interface IPerson {
//     name:string,
//     age:number,
//     gender: string
// }

const persons = [
    {
        name:'Joy',
        age: 26,
        gender: 'male'
    },
    {
        name:'Kanta',
        age: 25,
        gender: 'female'
    },
    {
        name:'Subir',
        age:27,
        gender:'male'
    },
    {
        name:'Borsha',
        age:18,
        gender:'female'
    },
    {
        name:'Durjoy',
        age:24,
        gender:'male'
    },
    {
        name:'Kanka',
        age:30,
        gender:'female'
    }  
]


const females = persons.filter((person)=>person.gender === 'female')

const femalesName = females.map((female)=>female.name)

console.log(femalesName)
