//? 3.Task: Function Composition

//? Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const squareNum = (num)=>{
    return num * num
}

const dobuleNum = (num)=>{
    return num * 2
}

const addFiveNum = (num)=>{
    return num + 5
}

const composeFunction = (num) =>{
    const num1= squareNum(num)
    const num2 = dobuleNum(num1)
    const num3 = addFiveNum(num2)

    return num3
 }

 const totalNumber = composeFunction(2)

 console.log(totalNumber)