<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Chat App</title>

  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>

  <div class="app">
    <header>
      <h3>Real Time Chatting</h3>
      <input type="text" name="username" id="username" placeholder="Username" autocomplete="off">
    </header>

    <div id="message"></div>

    <form id="message_form">
      <input type="text" name="message" id="message_input" placeholder="Message" autocomplete="off">
      <button type="submit" id="message_send">Send</button>
    </form>
  </div>
  <audio id="audio" autoplay="true" ></audio>

  
  <script src="{{ asset('js/app.js') }}"></script>
  
  

</body>
</html>