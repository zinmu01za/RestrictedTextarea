const textarea = document.querySelector('.txtarea');
const counter = document.querySelector('.counter');
const maxChars = 250;

textarea.addEventListener('input', () =>{

    if (textarea.value.length > maxChars) {
        textarea.value = textarea.value.slice(0, maxChars);
    }
    const length = textarea.value.length;
    counter.textContent = `${length} / ${maxChars}`;

    if (length >= maxChars){
        textarea.style.bordorColor = 'red';
        counter.style.color = 'red';
    }else{
           textarea.style.bordorColor = 'black';
        counter.style.color = '#555';
    }
});