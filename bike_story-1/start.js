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
    showMessage('message', 3000);
    showMessage('message2', 3000);
  });

  document.querySelector('.j1').addEventListener('click', function() {
    showMessage('message', 3000);
    showMessage('message2', 3000);
  });
});