// Submit form data to Microsoft Excel sheet const form = document.querySelector('form');

form.addEventListener('submit', (event) => { event.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://sheet.best/api/sheets/50f1f2f7-9a80-4f46-a1d4-85f58803ff5a', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({Name: name, Email: email, Message: message}));
    
    form.reset();
    alert('Thank you for your message!');
    });
    