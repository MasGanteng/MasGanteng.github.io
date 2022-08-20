import { baseUrl, baseUrlApi } from "./env.js";

const profile = baseUrlApi+'api/user'
const link = baseUrlApi+'api/profile/links'
const token = 'Bearer '+localStorage.getItem('token')

const header = new Headers()
header.append("Content-type", "application/json")
header.append("Authorization", token)

const options = {
    method: 'GET',
    headers: header,
    redirect: 'follow'
};

const regionNames = new Intl.DisplayNames(['ID'], {type: 'region'});

fetch(profile, options)
    .then(
        response => response.json()
    ).then((result) => {
        localStorage.setItem('user_id', result.id)

        document.getElementById('full_name').innerHTML = result.full_name
        document.getElementById('location').innerHTML = regionNames.of(result.location)
        document.getElementById('job_title').innerHTML = (result.job_title != null) ? result.job_title : '-'
        document.getElementById('personal_bio').innerHTML = (result.personal_bio != null) ? result.personal_bio : '-'

        const img = document.createElement("img")
        img.src = (result.profile_pic != null) ? result.profile_pic : '../../assets/img/default_avatar.png'
        
        document.getElementById("img-profile").appendChild(img)
        var qrcode = new QRCode(document.getElementById("qrcode"), result.qr_path)
        document.getElementById("label_qr").innerHTML = result.profile_link
    }).catch(
        error => console.log('error', error)
    )