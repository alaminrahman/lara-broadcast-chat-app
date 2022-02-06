require('./bootstrap');

const message_el = document.getElementById('message')
const username = document.getElementById('username')
const message_input = document.getElementById('message_input')
const message_form = document.getElementById('message_form')
const sound = document.getElementById("audio");

message_form.addEventListener('submit', function(e){
    e.preventDefault();

    let has_errors = false;

    if(username.value == ''){
        alert('Please Enter a username')
        has_errors = true;
    }

    if(message_input.value == ''){
        alert('Please Enter a message')
        has_errors = true;
    }

    if(has_errors){
       return;
    }

    const options = {
        method: 'post',
        url: '/send-message',
        data:{
            username: username.value,
            message: message_input.value
        },
    }

    axios(options);
});

window.Echo.channel('chat')
    .listen('.message', (e) => {
        message_el.innerHTML +=  '<div class="message"><strong>'+ e.username +'  </strong>'+e.message+'</div'
        message_input.value = ''
        var audio = 'http://127.0.0.1:8000/audio/mixkit-positive-notification-951.wav';
        sound.setAttribute('src', audio)
        // sound.play();
    })