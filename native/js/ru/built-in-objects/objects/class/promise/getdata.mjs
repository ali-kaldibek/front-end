const getData = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then((response) => response.json())
            .then((json) => resolve(json))
            .then((error) => reject(error)),
    );

export default getData;