const fnWhithError = () => {
    throw new Error('Some Error!')
}

// fnWhithError()

try {
    fnWhithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('Continue...')