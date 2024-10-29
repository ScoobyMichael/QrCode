const container =document.querySelector(".container")
const qrCodBtn = document.querySelector(".qr-form button")
const qrCodeInput = document.querySelector(".qr-form input")
const qrCodeImg = document.querySelector(".qr-form img")

qrCodBtn.addEventListener("click", ()=>{
    generateQrCode()
})

qrCodeInput.addEventListener("keydown", (e)=>{
    if(e.code === "Enter"){
    generateQrCode()
    }
})

function generateQrCode(){
    const qrCode = qrCodeInput.value 

    if(!qrCode)return;

    qrCodBtn.innerHTML = "gerando codigo..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCode}`

    qrCodeImg.addEventListener("load", ()=>{
        container.classList.add("active")
        qrCodBtn.innerHTML = "Codigo Criado"
    })

}

qrCodeInput.addEventListener("keyup", ()=>{
    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodBtn.innerHTML = "Gera QR Code"
    }
})