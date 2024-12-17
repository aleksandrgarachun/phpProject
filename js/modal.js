document.addEventListener('DOMContentLoaded', () => {
  const openModalButton = document.querySelector('.header-menu-btn.menu-toggle'); 
  const closeModalButton = document.querySelector('.modal-close'); 
  const backdrop = document.querySelector('.backdrop'); 

  if (openModalButton && backdrop) {
    openModalButton.addEventListener('click', () => {
      backdrop.classList.add('is-open'); 
    });
  }

  if (closeModalButton && backdrop) {
    closeModalButton.addEventListener('click', () => {
      backdrop.classList.remove('is-open'); 
    });
  }

  window.addEventListener('click', (event) => {
    if (event.target === backdrop) {
      backdrop.classList.remove('is-open');
    }
  });

  function sendRequest(type, email) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "process.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    var data = "type=" + encodeURIComponent(type) + "&email=" + encodeURIComponent(email);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          console.log(xhr.responseText);
        } else {
          console.error("Помилка запиту: " + xhr.status);
        }
      }
    };

    xhr.send(data);
  }

  const emailLink = document.querySelector('a[href="mailto:info@devstudio.com"]');
  if (emailLink) {
    emailLink.addEventListener('click', (event) => {
      event.preventDefault(); 
      sendRequest('email');
    });
  }

  const phoneLink = document.querySelector('a[href="tel:+110001111111"]');
  if (phoneLink) {
    phoneLink.addEventListener('click', (event) => {
      event.preventDefault(); 
      sendRequest('phone');  
    });
  }

  const subscribeForm = document.querySelector('.subscribe-footer form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const emailInput = subscribeForm.querySelector('input[name="email"]');
      const email = emailInput.value.trim();

      if (email) {
        sendRequest('subscribe', email);
      } else {
        console.error("Будь ласка, введіть правильну email-адресу.");
      }
    });
  }
});
