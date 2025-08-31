document.addEventListener('DOMContentLoaded', function() {
  // Общая функция для показа сообщений
  function showMessage(elementId, duration) {
    const message = document.getElementById(elementId);
    if (message) {
      message.style.display = 'block';
      setTimeout(() => {
        message.style.display = 'none';
      }, duration);
    }
  }

  // Обработчики кликов
  document.querySelector('.a2').addEventListener('click', function() {
    showMessage('message', 4500);
    showMessage('message2', 4500);
  });

  document.querySelector('.j1').addEventListener('click', function() {
    showMessage('message', 4500);
    showMessage('message2', 4500);
  });


  document.querySelector('.j2').addEventListener('click', function() {
    showMessage('message', 4500);
    showMessage('message2', 4500);
  });

    document.querySelector('.j3').addEventListener('click', function() {
    showMessage('message', 4500);
    showMessage('message2', 4500);
  });

    document.querySelector('.j4').addEventListener('click', function() {
    showMessage('message', 4500);
    showMessage('message2', 4500);
  });


  

});