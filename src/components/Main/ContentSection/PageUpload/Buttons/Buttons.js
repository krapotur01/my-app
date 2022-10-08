const form = document.querySelector('.form');
const btnDownload1 = form.querySelector('.form__download_btn-1');
const btnDownload2 = form.querySelector('.form__download_btn-2');
const btnUpload1 = form.querySelector('.form__upload_btn-1');
const btnUpload2 = form.querySelector('.form__upload_btn-2');
const btnApltn = form.querySelector('.form__btn-apltn');
const input1 = form.querySelector('#file1');
const input2 = form.querySelector('#file2');

btnDownload1.addEventListener('click', () => window.location = './doc/Письмо-1.docx');
btnDownload2.addEventListener('click', () => window.location = './doc/Письмо-2.docx');

const iconReplacement = (item, objKey) => item.style.background = objKey;
const triggerInput = (input) => {
    input.click();
    input.addEventListener('change', (event) => {
        if(event.target.files.length >= 0 && input == input1) {
            iconReplacement(btnUpload1, obj.upload1);
        };
        if(event.target.files.length >= 0 && input == input2) {
            iconReplacement(btnUpload2, obj.upload2);
        };
        if(input1.value && input2.value) {
            btnApltn.classList.remove('form__btn-apltn_disabled');
            // formSubmitHandler();
        }
    })
}

const obj = {
    upload1: 'url(./image/upload_button_1.svg) no-repeat',
    upload2: 'url(./image/upload_button_2.svg) no-repeat'
}

btnUpload1.addEventListener('click', () => triggerInput(input1));
btnUpload2.addEventListener('click', () => triggerInput(input2));

function formSubmitHandler(evt) {
    evt.preventDefault();
}