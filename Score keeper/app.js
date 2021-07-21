let p1Button = document.querySelector('#p1Button');
let p2Button = document.querySelector('#p2Button');
let reset = document.querySelector('#reset');
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let select = document.querySelector('#select');



let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;
let a;

select.addEventListener('change', () => {
    winningScore = parseInt(select.value);
    clear();


})

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('win');
            p2Display.classList.add('lose');
            a = 'Player One';
            let star=document.createElement('img')
            star.src="star.jpeg";
            star.classList.add('star')
            let li = document.createElement('li');
            li.append(star);
            li.append(`${a} wins`);
            ul.append(li);
            hide();

        }
        p1Display.textContent = p1Score;
    }
})


p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('win');
            p1Display.classList.add('lose');
            a = 'Player Two';
            let star=document.createElement('img')
            star.src="star.jpeg";
            star.classList.add('star')
            let li = document.createElement('li');
            li.append(star)
            li.append(`${a} wins`);
            ul.append(li);
            hide();
        }

        p2Display.textContent = p2Score;
    }
})


reset.addEventListener('click', clear)

function clear() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    isGameOver = false;
    p1Display.classList.remove('win', 'lose');
    p2Display.classList.remove('lose', 'win');
    let p=document.querySelector('li')
    p.remove();
    dis.classList.remove('qwerty');

}

const dis=document.querySelector('#bold')

function hide(){
   dis.classList.add('qwerty');
}




