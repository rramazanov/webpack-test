async function start() {
    return Promise.resolve('it working')
}

start().then(console.log)

class Util {
    static id = Date.now()
}

console.log('Util', Util.id)
