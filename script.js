const cards = [
        { src: "cards/chariot.jpg", meaning: "New beginnings, adventure, spontaneity" },
        { src: "cards/death.jpg", meaning: "Transformation, endings, new beginnings" },
        { src: "cards/devil.jpg", meaning: "Temptation, bondage, materialism" },
        { src: "cards/emperor.jpg", meaning: "Authority, structure, control" },
        { src: "cards/empress.jpg", meaning: "Nurturing, abundance, creation" },
        { src: "cards/fool.jpg", meaning: "Spontaneity, new journey, innocence" },
        { src: "cards/hangedman.jpg", meaning: "Pause, surrender, letting go" },
        { src: "cards/hermit.jpg", meaning: "Introspection, guidance, solitude" },
        { src: "cards/hierophant.jpg", meaning: "Tradition, spirituality, education" },
        { src: "cards/highpriestess.jpg", meaning: "Intuition, subconscious mind, mystery" },
        { src: "cards/judgement.jpg", meaning: "Awakening, reflection, reckoning" },
        { src: "cards/justice.jpg", meaning: "Fairness, truth, law" },
        { src: "cards/lovers.jpg", meaning: "Union, harmony, choices" },
        { src: "cards/magician.jpg", meaning: "Manifestation, resourcefulness, power" },
        { src: "cards/moon.jpg", meaning: "Illusion, fear, subconscious" },
        { src: "cards/star.jpg", meaning: "Hope, inspiration, serenity" },
        { src: "cards/strength.jpg", meaning: "Courage, patience, inner strength" },
        { src: "cards/sun.jpg", meaning: "Success, vitality, joy" },
        { src: "cards/temperance.jpg", meaning: "Balance, moderation, purpose" },
        { src: "cards/tower.jpg", meaning: "Sudden change, upheaval, chaos" },
        { src: "cards/wheeloffortune.jpg", meaning: "Cycles, fate, karma" },
        { src: "cards/world.jpg", meaning: "Completion, accomplishment, travel" },
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

    
