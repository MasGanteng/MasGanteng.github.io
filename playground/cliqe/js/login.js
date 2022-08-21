import { baseUrl, baseUrlApi } from "./env.js";
const login = baseUrlApi+'api/login'

const loginBtn = document.querySelector("#login");
const form = document.querySelectorAll("#formData input")

const header = new Headers()
header.append("Accept", "application/json, text/plain, */*")
header.append("Content-type", "application/json")

const data = new FormData()

loginBtn.addEventListener("click", function(event){
    event.preventDefault()
    form.forEach((item, index, array) => {
        data.append(item.name, item.value)
    })

    const formDataObj = {};
    data.forEach((value, key) => (formDataObj[key] = value))

    const options = {
        method: 'POST',
        headers: header,
        body: JSON.stringify(formDataObj),
        redirect: 'follow'
    };

    fetch(login, options)
    .then(
        response => response.json()
    )
    .then((result) => {
        // console.log(result)
        if(result.token){
            localStorage.setItem('token', result.token)
            localStorage.setItem('token_type', result.token_type)
            localStorage.setItem('expired', result.expired_in)
            window.location.href = baseUrl+'/playground/cliqe/pages/dashboard.html'
        }else{
            const error_response = document.createElement('p')
            error_response.innerText = result.errors.email[0]
            console.log(error_response)
            document.getElementById('error').appendChild(error_response)
        } 
    }).catch((error) => {
        console.log(error)     
    })
})