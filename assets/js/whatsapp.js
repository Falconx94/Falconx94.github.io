function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://api.whatsapp.com/send/?text='; //'https://web.whatsapp.com/'https://api.whatsapp.com/send/?text=
const urlMobile = 'whatsapp://';
const telefono = '526871732226';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let email = document.querySelector('#email').value
        let asunto = document.querySelector('#asunto').value
        let message = document.querySelector('#message').value
        let mensaje = 'send?phone=' + telefono + '&text=Hola soy ' + nombre + '%0ATe escribo por el asunto de: ' + asunto + '%0AMi correo electrónico es: ' + email + '%0A%0A' + message +''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});
