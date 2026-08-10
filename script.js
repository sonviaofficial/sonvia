const producerBtn = document.querySelectorAll('button')[0];
const artistBtn = document.querySelectorAll('button')[1];

producerBtn.addEventListener('click', () => {
    window.location.href = 'producer.html';
});

artistBtn.addEventListener('click', () => {
    window.location.href = 'artist.html';
});
