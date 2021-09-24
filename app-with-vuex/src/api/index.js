const fakeRequest = (url) => {
    console.log(`🚀 sending a request to ${url}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.random()
            if (num > 0.2) {
                resolve('success')
            } else {
                reject('connection lost!!!')
            }
        }, 500)
    })
}

const deleteTextFromDB = () => {
    return fakeRequest('https://some-url.com/delete')
}

export default deleteTextFromDB