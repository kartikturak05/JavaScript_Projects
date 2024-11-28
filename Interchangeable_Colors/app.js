const btns = document.querySelectorAll('.btn');
const body = document.body;

btns.forEach(function (btn) {
    btn.addEventListener('click', () => {
        let color = btn.value;
        changeBackground(color);
    })
});

function changeBackground(color) {
    body.className = '';

    switch (color) {
        case  'red' :
            body.classList.add('red');
            break;
        case  'green' :
            body.classList.add('green');
            break;
        case  'blue' :
            body.classList.add('blue');
            break;  
        case  'yellow' :
            body.classList.add('yellow');
            break;
        case  'purple' :
            body.classList.add('purple');
            break;
        case  'orange' :
            body.classList.add('orange');
            break;
        default :
            break;
            
    }
}
