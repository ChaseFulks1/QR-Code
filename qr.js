let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
function generateQR(){ 
    if(qrText.value.length > 0){//if there is something typed, there will be a QR generated...
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add("show-img")
    }else{//...anything else, the text box will shake (empty text box)
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error')
        },1000);
    }
}