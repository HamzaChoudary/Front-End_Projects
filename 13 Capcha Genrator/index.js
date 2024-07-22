
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const captcha = document.querySelector("#res")
const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const refresh = document.querySelector("#refresh")

submit.addEventListener("click",()=>{
    const inp = input.value;
    const cap = captcha.textContent.trim();
    // console.log(inp)
    // console.log(cap)
    if( inp == cap ){
        alert("Captcha is Matched")
    }else {
        alert("Captcha is not Matched")
    }
})


refresh.addEventListener("click",()=>{
    captcha.textContent = generateCaptcha();
})
function generateCaptcha(){
    let captcha_gen = "";
    for(let i=0;i<6;i++){
        captcha_gen+= chars[Math.floor(Math.random()*chars.length)]
    }
    return captcha_gen
}

console.log(generateCaptcha())