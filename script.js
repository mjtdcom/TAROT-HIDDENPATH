const cards = [
        { src: "chariot.jpg", meaning: "New beginnings, adventure, spontaneity" },
        { src: "death.jpg", meaning: "Transformation, endings, new beginnings" },
        { src: "devil.jpg", meaning: "Temptation, bondage, materialism" },
        { src: "emperor.jpg", meaning: "Authority, structure, control" },
        { src: "empress.jpg", meaning: "Nurturing, abundance, creation" },
        { src: "fool.jpg", meaning: "Spontaneity, new journey, innocence" },
        { src: "hangedman.jpg", meaning: "Pause, surrender, letting go" },
        { src: "hermit.jpg", meaning: "Introspection, guidance, solitude" },
        { src: "hierophant.jpg", meaning: "Tradition, spirituality, education" },
        { src: "highpriestess.jpg", meaning: "Intuition, subconscious mind, mystery" },
        { src: "judgement.jpg", meaning: "Awakening, reflection, reckoning" },
        { src: "justice.jpg", meaning: "Fairness, truth, law" },
        { src: "lovers.jpg", meaning: "Union, harmony, choices" },
        { src: "magician.jpg", meaning: "Manifestation, resourcefulness, power" },
        { src: "moon.jpg", meaning: "Illusion, fear, subconscious" },
        { src: "star.jpg", meaning: "Hope, inspiration, serenity" },
        { src: "strength.jpg", meaning: "Courage, patience, inner strength" },
        { src: "sun.jpg", meaning: "Success, vitality, joy" },
        { src: "temperance.jpg", meaning: "Balance, moderation, purpose" },
        { src: "tower.jpg", meaning: "Sudden change, upheaval, chaos" },
        { src: "wheeloffortune.jpg", meaning: "Cycles, fate, karma" },
        { src: "world.jpg", meaning: "Completion, accomplishment, travel" },
    ];
const flipSound = document.getElementById('flip-sound');

function revealCard(cardElement) {
    let randomCard = cards[Math.floor(Math.random() * cards.length)];
    let isReversed = Math.random() < 0.5;

    cardElement.style.backgroundImage = `url('${randomCard.src}')`;
    cardElement.style.transform = isReversed ? "rotate(180deg)" : "rotate(0deg)";
    cardElement.classList.remove("hidden-card");
    cardElement.classList.add("revealed-card");

    let cardMeaning = document.getElementById('card-meaning');
    cardMeaning.textContent = isReversed ? `${randomCard.meaning} (reversed)` : randomCard.meaning;

    if (flipSound) {
        flipSound.play();
    }
}

function resetCards() {
    let cards = document.querySelectorAll('.tarot-card');
    cards.forEach(card => {
        card.style.backgroundImage = "url('fd.jpg')";
        card.style.transform = "rotate(0deg)";
        card.classList.remove("revealed-card");
        card.classList.add("hidden-card");
    });

    document.getElementById('card-meaning').textContent = "";
}

    
