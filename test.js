// Write a JavaScript function that checks if a string is a palindrome (reads the same backward as forward).
function ispalindrome(input){
    
    let first=input.toLocaleLowerCase().split('').join('')
    let secon=input.toLocaleLowerCase().split('').reverse().join('')
    if(first===secon){
        return true
    }
    return false
}

const input = [
    1, 2, "hello", "world", { name: "Alice", age: 30 }, { name: "Alice", age: 30 },
    [1, 2, 3], [1, 2, 3], "hello", 3, [4, 5, { nested: "object" }],
    [4, 5, { nested: "object" }], { nested: [1, 2, 3] }, { nested: [1, 2, 3] }
];
function removeDuplicates(arr) {
    const uniqueItems = new Map();
for (let item of arr) {
        let key = typeof item === 'object' ? JSON.stringify(item) : item;
        uniqueItems.set(key, item); 
    }

    return Array.from(uniqueItems.values());
}

const result = removeDuplicates(input);
console.log(result);

// Write a JavaScript class Animal with a method speak(). Then, create a subclass Dog that overrides the speak() method.
class Animal{
    constructor(name){
        this.name=name
    }
    speak(){
        console.log('this is Animal class')
    }
}
class Dog extends Animal{
    constructor(name){
        this.name=name
    }
    speak(){
        console.log('this is Dog Class')
    }
}
let animal=new Animal('memals')
console.log(animal.speak())
let dog=new Dog('dog')
console.log(animal.speak())


document.getElementById("btn").addEventListener("click", function() {
    const paragraph = document.getElementById("paragraph");
    let newPar = document.createElement('p');
    newPar.textContent = "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'";
    paragraph.style.display = 'block'; 
paragraph.style.color='black'
    paragraph.appendChild(newPar);
})


      
