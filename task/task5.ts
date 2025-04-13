//? 5.Task: Find and Modify

//? Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

interface IPerson {
    name: string,
    age:number
}

const allPersons:IPerson[] = [
    {
        name:'Subir',
        age:22,
    },
    {
        name:'Joy',
        age:25
    },
    {
        name:'Durjoy',
        age:20
    }
]


const personUpdate = (persons:IPerson[],name:string):IPerson[]=>{

    const findPerson = persons.map((person)=>{
        if(person.name === name){
            return {...person, age:27}
        }
        return person
    })
    return findPerson
}


const updatedPersons = personUpdate(allPersons,'Subir')

console.log(updatedPersons)