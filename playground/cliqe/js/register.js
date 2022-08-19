import { baseUrl, baseUrlApi } from "./env.js";
const login = baseUrlApi+'api/register'

const loginBtn = document.querySelector("#signup");
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
    ).then((result) => {
        // console.log(result)
        if(result.token){
            localStorage.setItem('token', result.token)
            localStorage.setItem('token_type', result.token_type)
            localStorage.setItem('expired', result.expired_in)
            window.location.href = baseUrl+'/playground/cliqe/pages/profile/index.html'
        }else{
            deleteDiv('email')
            deleteDiv('name')
            deleteDiv('phone')
            deleteDiv('password')
            deleteDiv('confirm')

            createDiv(result.errors.email[0], 'email')
            createDiv(result.errors.full_name[0], 'name')
            createDiv(result.errors.phone[0], 'phone')
            createDiv(result.errors.password[0], 'password')
            createDiv(result.errors.password_confirmation[0], 'confirm')
            console.log(result.errors)
        }
    }).catch((error) => {
        console.log(error)
    })
})

function createDiv(text, dom){
    const error_response = document.createElement('p')
    error_response.innerText = text
    document.getElementById('error-'+dom).appendChild(error_response)
}

function deleteDiv(dom){
    var resource = document.getElementById("error-"+dom);
    resource.removeAttribute('p');
}