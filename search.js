const searchInput = document.getElementById('producerSearch');
const producerCards = document.querySelectorAll('.producer-card');

searchInput.addEventListener('keyup', function () {
    const searchValue = this.value.toLowerCase();

    producerCards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
