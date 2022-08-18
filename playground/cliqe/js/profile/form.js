import { baseUrl, baseUrlApi } from "../env.js";

const dataToAppend = new Array(['name','location','job_title','personal_bio'])

const profile   = baseUrlApi+'api/user'
const link      = baseUrlApi+'api/profile/links'
const update    = baseUrlApi+'api/profile/update'

const token = 'Bearer '+localStorage.getItem('token')

const header = new Headers()
header.append("Content-type", "application/json")
header.append("Authorization", token)

// console.log(token)
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
        console.log(result)
        if(result.profile_pic == null){
            // render incomplete
        }else{
            // render complete
        }
        document.getElementById('full_name').innerHTML = result.full_name
        document.getElementById('location').innerHTML = regionNames.of(result.location)
        document.getElementById('job_title').innerHTML = (result.job_title != null) ? result.job_title : '-'
        document.getElementById('personal_bio').innerHTML = (result.personal_bio != null) ? result.personal_bio : '-'

        const img = document.createElement("img")
        img.src = (result.profile_pic != null) ? result.profile_pic : ''
        
        document.getElementById("img-profile").appendChild(img)
        var qrcode = new QRCode(document.getElementById("qrcode"), result.qr_path)
        var qrcode2 = new QRCode(document.getElementById("qrcode2"), result.qr_path)
        document.getElementById("label_qr").innerHTML = result.profile_link
        document.getElementById("label_qr2").innerHTML = result.profile_link

        const imgProfile = document.createElement("img");
        imgProfile.src =(result.profile_pic != null) ? result.profile_pic : ''
        imgProfile.height = 25;
        document.getElementById("profil-picture").appendChild(imgProfile)
    }).catch(
        error => console.log('error', error)
    )

fetch(link, options)
    .then(
        response => response.json()
    ).then((result) => {
        // console.log(result)
    }).catch(
        error => console.log('error', error)
    )

document.querySelector("#add-profile-picture").addEventListener('change',handle, false)

function handle() {
    const fileList = this.files;
    const urlImg = URL.createObjectURL(this.files[0]).split('blob:')

    const options = {
        method: 'POST',
        headers: header,
        body: JSON.stringify({
            "profile_pic": this.files[0].name
        }),
        redirect: 'follow'
    };

    fetch(update, options)
        .then(
            response => response.json()
        ).then((result) => {
            if(result.status == true){
                var img_before =  document.getElementById("profil-picture")  
                img_before.removeChild(img_before.firstElementChild)

                var profile_before =  document.getElementById("img-profile")  
                profile_before.removeChild(profile_before.firstElementChild)

                const img = document.createElement("img")
                img.src = (result.profile_pic != null) ? result.profile_pic : '../../assets/img/default_avatar.png'
                
                document.getElementById("img-profile").appendChild(img)

                const imgUpdate = document.createElement("img");
                imgUpdate.src = URL.createObjectURL(this.files[0]);
                imgUpdate.height = 25;
                imgUpdate.onload = () => {
                    URL.revokeObjectURL(this.src);
                }
                document.getElementById("profil-picture").appendChild(imgUpdate)
            }
        }).catch(
            error => console.log('error', error)
        )
    console.log(urlImg[1])
}
