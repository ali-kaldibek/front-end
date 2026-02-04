const testObject = {
    "string": "Hello, World!",
    "number": 42,
    "boolean": true,
    "nullValue": null,
    "array": [1, 2, 3, "four", false],
    "object": {
        "nestedString": "Nested",
        "nestedNumber": 100
    }
};

console.log("Original Object:", testObject); 

const objectToJson = JSON.stringify(testObject);

console.log("JSON String:", objectToJson);

const jsonToObject = JSON.parse(objectToJson);

console.log("Parsed Object:", jsonToObject);