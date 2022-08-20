import { baseUrl} from "./env.js";

const expired_time  = localStorage.getItem('expired_time')

if(expired_time){
    const date_now  = new Date()
    const time_expired = new Date(expired_time)
    if(date_now.getTime() >= time_expired.getTime()){
        window.location.href = baseUrl+'/playground/cliqe/login.html'
    }
}else{
    window.location.href = baseUrl+'/playground/cliqe/login.html'
}