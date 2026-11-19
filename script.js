const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

// Highlight the navigation item for the section currently in view.
const sections = document.querySelectorAll('.page-section[id]');
const navLinks = document.querySelectorAll('nav a');
if ('IntersectionObserver' in window && sections.length && navLinks.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
        });
      }
    });
  }, { rootMargin: '-25% 0px -55% 0px' });
  sections.forEach(section => observer.observe(section));
}


// POPUP SYSTEM

const popupOverlay = document.getElementById("popupOverlay");
const popupClose = document.getElementById("popupClose");
const popupTitle = document.getElementById("popupTitle");
const popupBody = document.getElementById("popupBody");

const infoCards = document.querySelectorAll(".info-card");

let slideshowInterval = null;
let currentSlide = 0;


// ART IMAGES

const artImages = [
  "images/art1.jpg",
  "images/art2.jpg",
  "images/art3.jpg"
];

const artCaptions = [
  "image uno",
  "image zwei.",
  "teesra chitr"
];


// POPUP CONTENT

const popupData = {

  art: {
    title: "art.",
    content: `
      <p>
        any people learn the alphabet, then how to communicate, and then how to write it down; it's a normal way of how communication is embedded into our very being.
        However, I began my journey with scribbles that weren’t the alphabet, not even close. I started my communication through art. 
        You see at the ripe age of 2, my mother brought a set of wonderful books, the book set was a project by Total Development Program (TDP) Values books; A Child's First Library of Values, which was a 15-volume storybook collection published by ETL Learning, and she made me a bedtime routine where she would pick a book each day and read me a bedtime story until I fell asleep, the very first books I read were filled with beautiful and colorful illustrations and even more beautiful messages. 
        Though I never understood the stories or their depths at such a young age, I was able to process the art. And that’s how the butterfly effect began for me. 
      </p>

      <p>
        Reading and Drawing became my best friends. From what began as messy doodles in the books of the characters from the stories to actual cartoon characters like the Powerpuff Girls on my father’s work papers, now takes shape as character designs, experimenting with digital art, traditional art, painting, clay work, crafting and so much more. It is safe to say that my hobby of art has become something I can envision as something worth professionally pursuing. My purpose started with art, and it shall remain art.
      </p>

      <p>
        Here are some of my recent art pieces. I love to draw characters. Mostly, humans. For some reason, the idea of having free will to draw humans however I please with just a few strokes of a pen is so fascinating.  I can’t help but draw faces, new characters or existing ones, perfecting how I draw them, developing my own style until I am satisfied, and it has inspired me to be what I am today. 
      </p>

      <p>
        As a self-taught artist, I have developed my skills through consistent practice, experimentation, and a continuous desire to improve. Much of what I know has come from independently exploring different techniques and refining my work through trial and errors.
      </p>

      <div class="art-slideshow">
        <img id="artSlide" src="" alt="Artwork slideshow">
        <div class="slide-caption" id="slideCaption"></div>
      </div>
    `
  },

  writing: {
    title: "My writing.",
    content: `
      <p>
        yap
      </p>

      <p>
       yap.
      </p>

      <h3>A little excerpt</h3>

      <p>
        "Socki da greatest."
      </p>

      <p>
        cool summary.
      </p>
    `
  },

  film: {
    title: "thing i forgor.",
    content: `
      <p>
        zap
      </p>

      <p>
        zap2
      </p>

      <h3>subheading if needed</h3>

      <p>
        yap
      </p>

      <p>
        yap
      </p>
    `
  }

};


// OPEN POPUP

function openPopup(type) {

  const data = popupData[type];

  if (!data) return;

  clearInterval(slideshowInterval);

  popupTitle.textContent = data.title;
  popupBody.innerHTML = data.content;

  popupOverlay.classList.add("active");
  document.body.style.overflow = "hidden";

  if (type === "art") {
    startSlideshow();
  }
}


// CLOSE POPUP

function closePopup() {

  popupOverlay.classList.remove("active");

  document.body.style.overflow = "";

  clearInterval(slideshowInterval);
}


// CARD CLICK EVENTS

infoCards.forEach(card => {

  card.addEventListener("click", () => {
    openPopup(card.dataset.popup);
  });

  card.addEventListener("keydown", event => {

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPopup(card.dataset.popup);
    }

  });

});


// CLOSE BUTTON

popupClose.addEventListener("click", closePopup);


// CLICK OUTSIDE POPUP

popupOverlay.addEventListener("click", event => {

  if (event.target === popupOverlay) {
    closePopup();
  }

});


// ESCAPE KEY

document.addEventListener("keydown", event => {

  if (event.key === "Escape" && popupOverlay.classList.contains("active")) {
    closePopup();
  }

});


// AUTOMATIC ART SLIDESHOW

function startSlideshow() {

  currentSlide = 0;

  showSlide();

  slideshowInterval = setInterval(() => {

    currentSlide = (currentSlide + 1) % artImages.length;

    showSlide();

  }, 3000);

}


function showSlide() {

  const slide = document.getElementById("artSlide");
  const caption = document.getElementById("slideCaption");

  if (!slide || artImages.length === 0) return;

  slide.src = artImages[currentSlide];
  slide.alt = `Artwork ${currentSlide + 1}`;

  caption.textContent = artCaptions[currentSlide];

}
