// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!

let alert_button = document.getElementById('fetch-alerts')
let input = document.getElementById('state-input')
let err = document.getElementById('error-message')

alert_button.addEventListener('click', async () => {
    try{
        let state = input.value.toUpperCase()
        const response = await fetch(`${weatherApi}${state}`)
    if(!response.ok ){
        throw new Error("Network Issue")
    }
    else{
        alert("Request sent")
    }
    const data = await response.json();
    displayAlerts(data)

    input.value = ""

    err.classList.remove('hidden')
    

    }catch(errorObject){
        console.log(errorObject.message)
        document.getElementById('error-message')
    }
})

function displayAlerts(data){
        let html = 
        `<title>Alert: ${data.title}</title>
        <p>${data.alerts}</p>`
        document.getElementById('alerts-display').append(html)
    }

