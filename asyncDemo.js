console.log('starting weather app')

var printuser = (id, callback) => {

    var user = {
        id,
        name : 'Purush'
    }
    setTimeout(() =>{
        console.log('Print after some time')
        callback(user)
    }, 3000)

}

printuser('650853', (userobj) => {
    console.log(userobj);
})