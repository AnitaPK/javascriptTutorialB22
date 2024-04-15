//2
function iterateObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

// Example usage:
const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};

iterateObject(myObject);


// 3
function cloneObject(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return primitives and null as is
    }

    const cloned = Array.isArray(obj) ? [] : {}; // Determine if obj is an array or object

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = cloneObject(obj[key]); // Recursively clone nested objects
        }
    }

    return cloned;
}

// Example usage:
const originalObj = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['reading', 'cooking']
};

const clonedObj = cloneObject(originalObj);
console.log(clonedObj); // Output: { name: 'John', age: 30, address: { city: 'New York', country: 'USA' }, hobbies: [ 'reading', 'cooking' ] }

// Verify if they are distinct objects
console.log(originalObj === clonedObj); // Output: false
console.log(originalObj.address === clonedObj.address); // Output: false
console.log(originalObj.hobbies === clonedObj.hobbies); // Output: false
