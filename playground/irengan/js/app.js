import { datas } from "./data.js"

const box = document.querySelector('.box ul')

datas.map(data=>{
    box.innerHTML +=`
        <li>
            <section class="dark">
                <h1 class="section-title">${data.title}</h1>
            </section>
            <section class="light">
                <p>${data.content}</p>
            </section>
        </li>    
    `
})