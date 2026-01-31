let expression

expression = "Test"

function name() {

}

const a = new Set([1, 2, 3]);

const b = new Map([
    [1, "one"],
    [2, "two"],
    [4, "four"],
]);

let jsDataTypes = {
    privatDataTypes: {
        numericType: {
            number:  123,
            bigInt: 1234567890123456789012345n,
        },
        nonNumericType: {
            string1: 'ABC',
            string2: "ABC",
            string3: `ABC`,
            boolean1: true,
            boolean2: false,
            null: null,
            undefined: undefined,
            symbol: Symbol(),
        },
    },
    nonPrivatDataTypes: {
        Objects: {
            object: {},
            array: [],
            function: name(),
            date: "YYYY-MM-DDTHH:mm:ss.sssZ",
            regExp: "/.../",
            set: a,
            map: b,
        },
    },
};

console.log(jsDataTypes);

console.dir(jsDataTypes)