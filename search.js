document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("producerSearch");
    const producerCards = document.querySelectorAll(".producer-card");

    searchInput.addEventListener("input", function () {

        const searchValue = searchInput.value.toLowerCase().trim();

        producerCards.forEach(function (card) {

            const text = card.textContent.toLowerCase();

            if (text.includes(searchValue)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});
