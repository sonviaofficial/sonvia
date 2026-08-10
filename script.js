const producerBtn = document.querySelectorAll('button')[0];
const artistBtn = document.querySelectorAll('button')[1];

producerBtn.addEventListener('click', () => {
    alert('Producer registration page coming soon on SONVIA!');
});

artistBtn.addEventListener('click', () => {
    window.location.href = 'artist.html';
});
