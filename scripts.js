const form = document.getElementById('form');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
const button = document.getElementById('submit');
const terms = document.getElementById('terms');
const date = document.getElementById('date');

const formValid = {
    mail: false,
    password: false,
    terms: false,
    date: false,
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

mail.addEventListener('change', (e)=>{
    if(e.target.value.trim().length > 0) formValid.mail = true
})

password.addEventListener('change', (e)=>{
    if(e.target.value.trim().length > 0) formValid.password = true
})

terms.addEventListener('change', (e)=>{
    if(e.target.value.trim().length > 0) formValid.password = true
})

