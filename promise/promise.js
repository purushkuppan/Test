// var  setPromise = new Promise((resolve, reject)=> {
// setTimeout(() => {
//    // resolve('Hey promise worked')
//    // reject('Hey promise not worked')
//     reject('Hey promasndklaslkdlkaise not worked')
// }, 2000)
//
// })
//
// setPromise.then((msg) => {
//     console.log('Success:', msg )
// }, (errMsg) => {
//     console.log('ErrorMessage:', errMsg )
// })


var addNumber = (a,b) => {
   return new Promise((resolve,reject)=> {


            if (typeof a == 'number' && typeof b == 'number'  )
            resolve(a+b)
            else
                reject('Input should be in number')

    })
}

addNumber(2,7).then(
    (result) => {
        console.log("Result :", result);
        return addNumber(result,'result').then();
    }
).then(
    (result) => {
        console.log("Result :", result);
    }
).catch(
    (result) => {
        console.log("Result :", result);
    }, (errorMsg) => {
        console.log("ErrorMsg :", errorMsg);
    }

)
