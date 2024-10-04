// 1.Take four parameters. Multiply the four numbers and then return the result
function first(a,b,c,d) {
    multiplication = a*b*c*d
    return multiplication
}
const result = first(3,3,3,3)
console.log(result)

// 2. Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function firstCondition(Number) {
    
    if(Number % 2 === 0){
        console.log('This is even number')
    }
    else{
        console.log('This is odd number')
    }

}
firstCondition(99)

function secondCondition(number) {

    if(number % 2 === 0){
        console.log('This is even number')
    }
    else{
        console.log('This is odd number')
    }

}
secondCondition(100)


// 3. Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(array) {
    let sum = 0;
    for(let ARR of array){
        sum = sum + ARR
        average = sum/array.length
    }
    return average
}
const results = [10,5,8,3,6,25,20,15,9,2]
console.log(make_avg(results))


// 4. Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. 
function count_zero(binary) {
    for(let i = 0; i< binary.length; i++){
        // console.log(binary[i])
        if(binary[i] % 2 === 0){
            console.count('zero')
        }
        else{
            console.log('none')
        }
    }
}
count_zero('01101110110110111001101')


// 5. Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(integer) {
    for(const values of integer){
        if(values % 2 === 0){
            console.log('Even')
        }
        else{
            console.log('Odd')
        }
    }
}
odd_even([1,10,11,20,21,30,31,40,41])