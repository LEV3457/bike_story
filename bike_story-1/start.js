document.getElementById("myButton").addEventListener("click", () => {
    alert("Кнопка нажата из внешнего файла!");
  });


    document.querySelector('.j1').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.style.display = 'block';
    
    // Скрываем сообщение через 3 секунды
    setTimeout(() => {
      message.style.display = 'none';
    }, 3000);
  });