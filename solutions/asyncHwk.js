// code along with youtube video

// function makeRequest(location){
//     return new Promise((resolve, reject) => {
//         console.log(`Making Request to ${location}`)
//         if (location === 'Google'){
//             resolve ('Google says hi')
//         } else {
//             reject('We can only talk to Google')
//         }
//     })
// }

// function processRequest(response){
//     return new Promise((resolve, reject) => {
//         console.log(`Processing respone`)
//         resolve (`Extra Information + ${response}`)
//     })
// }

// makeRequest('Google').then(response => {
//     console.log('Response Receieved')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })

// async function doWork() {
//     try{
//         const response = await makeRequest('Google')
//         console.log("Response Received")
//         const processedResponse = await processRequest(response)
//         console.log(processedResponse)
//     } catch (err){
//         console.log(err)
//     }
    
// }
// doWork()

// Create 4 functions which are using async/await and with New Promises 

function taxiRequest(order){
    return new Promise( (resolve, reject) => {
        console.log(`Waiting for drivers to accept job`)
        if (order === "Croydon"){
            resolve (`Driver has accepted job for ${order}`)
        } else {
            reject (`This Driver has declined your order, please search for another driver.`)
        }
        
    })
}

function recievedTaxiRequest(response){
    return new Promise((resolve, reject) => {
        // console.log(`The Driver is not far away from you`)
        resolve (`${response}`)
        console.log(`A near by Driver is not far away from you`)
        reject (`Driver declined job`)
    })
}

async function driverWork() {
    try{
        const order = await taxiRequest(`Croy`)
        const driverResponse = await recievedTaxiRequest(order)
        console.log(driverResponse)
        console.log(`Driver is on the way`)
    } catch (err){
        console.log(err)
    }
}
driverWork()

