const set_name_btn = document.querySelector('#set_name');
const bg = document.querySelector('.modal-bg');
const submit_name_btn = document.querySelector('#submit_name');
const username_block = document.querySelector('.username');
const body = document.querySelector('body');
const arrows = document.querySelectorAll('.arrows-container > div');

let name = 'Guest';
let bg_index = 0;

const bg_images_urls = ['static/bg1.jpg', 'static/bg2.jpg', 'static/bg3.jpg'];

body.style = `background: url(${bg_images_urls[bg_index]});`;

arrows[0].addEventListener('click', () => {
    changeBg(-1);
});
arrows[1].addEventListener('click', () => {
    changeBg(1);
});
submit_name_btn.addEventListener('click', () => {
    name = document.querySelector('#new_name').value;
    username_block.innerHTML = name;
    document.querySelector('.modal-bg').classList.add('hidden');
});
set_name_btn.addEventListener('click', () => {
    document.querySelector('.modal-bg').classList.remove('hidden');
});

/*Task 1 */
const img = document.querySelector('#img');

img.addEventListener('click', () => {
    if (img.attributes.src.nodeValue === 'static/Google_Chrome_Material_Icon-450x450.png') {
        img.src = 'static/fb.png';
    } else {
        img.src = 'static/Google_Chrome_Material_Icon-450x450.png';
    }
});
/*Task 2+3 */
const btn = document.querySelector('.btn>button');
const par = document.querySelector('.btn>p');

btn.addEventListener('click', () => {
    if (btn.innerHTML === 'START') {
        par.innerHTML = 'Process is STARTED!';
        btn.innerHTML = 'STOP';
    } else {
        par.innerHTML = 'Process is SROPPED!';
        btn.innerHTML = 'START';
    }
});

function changeBg(direction) {
    bg_index += direction;
    if (bg_index > bg_images_urls.length - 1) {
        bg_index = 0;
    } else if (bg_index < 0) {
        bg_index = bg_images_urls.length - 1;
    }
    body.style = `background: url(${bg_images_urls[bg_index]});`;
}
