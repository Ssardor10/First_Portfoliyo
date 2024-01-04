const design_card_butttons = document.querySelectorAll('.design-card');
const introduction_text = document.querySelectorAll('.introduction-text');

const single_profile_card = document.querySelectorAll('.single-profile-card');
const testimonial_card = document.querySelectorAll('.testimonial-card');

design_card_butttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        introduction_text.forEach((introduction, introductionIndex) => {
            if (index === introductionIndex) {
                introduction.style.display = 'block';
            } else {
                introduction.style.display = 'none';
            }
        });
        design_card_butttons.forEach((btn, btnIndex) => {
            if (index === btnIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
                
            }
        });
    });
});

single_profile_card.forEach((btn, index) => {
    btn.addEventListener('click', ()=> {
        testimonial_card.forEach((testimonialCard, testimonialCardIndex) => {
            if (index === testimonialCardIndex) {
                testimonialCard.style.display = 'block';
            } else {
                testimonialCard.style.display = 'none';
            }
        });
        single_profile_card.forEach((cardBtn, cardIndex) => {
            if (index === cardIndex) {
                cardBtn.classList.add('profile-card-active');
            } else {
                cardBtn.classList.remove('profile-card-active');
            }
        });
    });
});


const card_icon_1 = document.querySelector('.card_icon_1')
const card_icon_2 = document.querySelector('.card_icon_2')
const bars_menu = document.querySelector('.bars_menu')
const inline = document.querySelector('.inline')

card_icon_1.addEventListener('click', function () {
    bars_menu.style.display = 'block'
    inline.style.display = 'block'
    card_icon_1.style.display = 'none'
    card_icon_2.style.display = 'block'
});

card_icon_2.addEventListener('click', function () {
    bars_menu.style.display = 'none'
    inline.style.display = 'none'
    card_icon_2.style.display = 'none'
    card_icon_1.style.display = 'block'
});

inline.addEventListener('click', function () {
    bars_menu.style.display = 'none'
    inline.style.display = 'none'
    card_icon_2.style.display = 'none'
    card_icon_1.style.display = 'block'
})