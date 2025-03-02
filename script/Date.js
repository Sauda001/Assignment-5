const today = new Date();

const week=document.getElementById('week');

const weekday = today.toLocaleDateString('en-US', {
    weekday: 'short'
});

week.innerText=weekday;

const date=document.getElementById('realDate');

const realTime = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
});

date.innerText=realTime;

