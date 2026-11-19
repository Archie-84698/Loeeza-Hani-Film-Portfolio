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

const infoCards = document.querySelectorAll(".info-card, .project-card");

let slideshowInterval = null;
let currentSlide = 0;


// ART IMAGES

const artImages = [
  "images/art 7.jpg",
  "images/aer 2.jpg",
  "images/art 3.jpg"
];

const artCaptions = [
  "I recently started sketching and this is my first sketch piece, I decided to make an artpiece inspired by 'Dead Poet's Society'.",
  "Recently I took an interest in semi realistic portraits and this is my first art piece in that medium as well.",
  "This is another digital art piece inspired by a book charachter."
];


// POPUP CONTENT

const popupData = {

  art: {
    title: "Art.",
    content: `
      <p>
        Many people learn the alphabet, then how to communicate, and then how to write it down; it's a normal way of how communication is embedded into our very being.
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
      Reading has been one of my earliest habits and hobbies. I have always loved to sit in a quiet corner and read a good book and imagine the story playing out like a movie in my head. And I distinctly remember it was the eve of 2022; I was reading an R.L. Stine book from his Goosebumps series, and I thought to myself, if he can write such fascinating stories, why can’t I? And after thinking about it for a week or two, I picked up my laptop and Google Docs and started writing the first few chapters of a story inspired to be mysterious and creepy like his books, but with my own flair of imagination and storyline. And to this day, I am determined to finish writing what I began as a 14-year-old with an inferiority complex into a novel that I hope people read and genuinely enjoy.
      </p>

      <p>
       And by the age of 16, I was practically bursting with ideas, and I couldn’t hold the discipline of finishing my first one that I started working on another one simultaneously. Both the novels became something that lived rent-free in my head all day long, during classes, before I slept, while I ate, or just stared into space. However, after I started O-level studies, I did not have ample time to give to my studies and my hobbies simultaneously. So, to this day, I am struggling with writing them both down but I know once I graduate, I will hopefully have the time to complete both novels from just drafts to full-length novels.
      </p>

      <h3>Novel name: Puer Bellator</h3>

      <p>
        "I am helpless, homeless, penniless and hunger is devouring my strength.
The cold streets I have been walking on have numbed my bare feet. I hope I find…hope.
I’ve passed many busy streets, but no one even looked at me…That’s a good sign.
​
But it was getting colder, and I needed a shelter desperately. But what if someone recognizes me and sends me back? I noticed a poster about me a few streets back, but they looked old, and I looked different, healthier back then.
​                      
“It'd be impossible for anyone to recognize me now”
           ​
I look totally different, I'm not the same pretty boy anymore…
​My stomach growls again. I need to eat something. Hunger made my vision go black, and the sickening pain in my stomach is getting unbearable. Ugh. Clutching my stomach, I kept walking silently in the little streets until I came across a small alley surrounded by two large brown buildings. It had two old dumpsters that reeked strongly of trash juice, but at least it was warmer than the other, more open allies I just passed. Looking around, I found a box big enough to fit me. Exhausted and weak from hunger, I lay inside. It was cold, but at least it was dry. My stomach growled again. I groaned this time. It hurts.  Out of desperation, I stood up again and walked around the dumpsters trying to find something edible, anything. Instead, I hear footsteps; someone is heading towards this alley. Scared, I hid behind the dumpster near me, and I was correct, someone was walking this way. A woman was passing by, and she had a bag, and to my surprise and horror, she threw it in the box that was supposed to be my bed and walked away, never once looking in my direction.
​
As soon as she disappeared, I rushed towards my box. The bag was definitely not filled with food as I had hoped, so I threw it away, and I lay back inside. If I can’t find food, I can sleep the hunger away, right?
​
Soon exhaustion took its toll, replacing my pain with deep sleep.
                                                               …
​
“Oh ho ho, look what we got here”, someone says. My eyes flutter open. I adjust my vision as a man comes into my view. I gasped. Not only was he huge and bulky enough to squeeze me to death in a second, but he was also ugly, and everything about him screamed evil.
He definitely did NOT look like a good person. I jolt up, jumping out of the box, nearly tripping myself, looking straight at the man, the fear inside me restrained me from running away.
​
“Look at you, such pretty eyes”, he sneers, bending down, until I could feel his bad breath hitting my face.
​
“Black and Blue, eh? ” he continues smiling creepily, “You must be worth a fortune” That is what made my breath stop. Same disgusting monsters everywhere.
Everywhere.
​
“ I escaped once, I'm not going again”.
​
I ran as fast as my numb feet could carry me.
​
“Hey! Get back here!” He barks, running after me. I glanced behind once, and he was gaining on me. But lucky for me, I’m petite and can fit through small spaces. I turn down a few streets, adrenaline rushing in my veins as I climb a fenced wall, not once looking behind me.
It has to be them; they must’ve sent him to find me.
Not a single person was out on the streets, just me and that monster. I ran harder and faster, I turned through many streets, I was running out of breath, still hungry and tired, but it wasn’t worth losing my freedom. I kept running.
       
 “I escaped once, not again. I escaped once I am not getting caught again.”
​
I don't know how long I ran, until I started to realize that I didn't recognize when I reached a quiet neighborhood. Finally, I came to a halt in a backstreet; there was nowhere else to run. I looked behind me, but no one was there. I was safe.
I slump against a wall, huffing and gasping for air, relief washing over my nerves.
I close my eyes, calming my nerves. My thoughts race. Who could it have been? Was it really-
​
“H-hello? A voice calls out. It was definitely a man.
​
Oh no, they found me!                                     
​
I couldn’t tell who it was, but I am not taking any chances.
​Out of fear, I quickly looked around me for anything, any weapon for my defense.

I'm not going down this time.

Bags of trash, rags and aha! GLASS!  A broken glass bottle lay near my feet. I picked it up, but I still didn't look behind me to see who it was. I couldn’t face whoever it was.
​
The only thing that mattered to me was my freedom.
​
I escaped once, and I am not going back there to suffer again…       
​
Hot tears well in my eyes. I don’t want to hurt anyone, but I don’t really have a choice.
​
“Who is it?” It was the same voice, he sounded near, and then a torch reflected on my back, I prepared myself. I closed my eyes before I turned behind, facing my opponent.
​
Don’t look until you strike. Don’t look until you strike!


And I ran towards that person.


It all happened in a flash…
My eyes flew open as soon as I jumped, and what I saw before me made me regret my choice.
It wasn't the vile man from earlier, nor was it someone from that orphanage. Instead, it was a boy, a bit older than me. Blonde Curly hair falling on his eyes, delicate features decorated his pale almond face. I looked up in his alarmed eyes, blue eyes, they were kind. For a second, he reminded me of my brother. I  could not control my momentum as I flew towards him.
​
Stop Adam! Stop!...please don’t hurt him…
​
SLASH
​
But it was too late…

The glass pierced the boy’s hand.
He yells out in pain, the phone slips from his grasp as he clutches the wound I carved. He didn’t look up at me, still wincing, just clutching his hand and steadying his breath. Blood drips down his fingers onto the concrete.
​
“I-I am sorry, I-” Tears dared to spill from my eyes, something about him reminded me of Abi…
He looks up at me, as if reading my expression.
“Did you mistake me for someone else?” he asks. There was no anger in his voice; he sounded concerned. How can someone be so calm after what I just did?
​
Why is he not hitting me? Why? The bottle slips from my grasp, crashing on my feet, the shards piece my feet as blood spilt everywhere, but I did not care, for what I saw in that boy’s eyes was Kindness.
​
“Oh my god, are you okay?” he rushed forward, stepping carefully. Ignoring his own bloody hand, ignoring what I just did...to ask for my well-being? Me? A cursed child like me?..
​
Nobody even cared about my existence after I lost everything….
​
Suddenly, I wanted to hug him. I wanted his comfort. Because I know one thing for sure, he won’t hurt me… mindlessly, I took a step forward. I want to hug him. But as soon as I did, the broken shards of glass pierced my flesh, and pain surged through me, bringing me back to reality. I yell in pain, but before I could do anything. The boy picks me up and runs.
“Don’t worry, I've got you. I won’t hurt you'' he pants as he runs with me in his arms. He saw. He cared.
​
“Why?” I wanted to ask. But the hunger and the pain and sheer exhaustion rushed back to me, I closed my eyes.
Why…? I caused you pain, yet you still decided to help me…      
​
The blonde-haired boy ran with me in his arms. I could feel his trembling arms as he ran. His bloody hand wrapped around me. It was clear his hand was hurting, but he did not care. And after what felt like an eternity, I finally felt safe and let myself drift into unconsciousness.
"
      </p>

      <p>
      -The end-.
      </p>
    `
  },

  film: {
    title: "Memories || An AS level opening sequence",
    content: `
      <p>
       I started A levels last year, and among my three subjects was Media Studies.  From the beginning of my first year, I took media seriously; it was that one subject I looked forward to because of how interesting it was and becuse it was on my bucket list to make a film one day. This was my chance to make that dream come true. 
      </p>

      <p>
      This was my chance to make that dream come true. And so, like that, I started working on my AS opening sequence, and during that time, making a 2-minute sequence with my desired topic, which was psychological mystery, was a huge challenge.  
      </p>

      <p><iframe width="560" height="315" src="https://www.youtube.com/embed/LJtCEt_WNfE?si=bZUc9hYuXOMwPUoy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><p>

      <p>
      My as opening was basically based on the concept of the 7 minutes of memories passing through a person's head before they pass away. Even though that was just the inspiration, I wanted it to show how dementia affects memory, but with a touch of unease. As Riyaz [the character] receives his pictures from the past in a box, as his memories go back to his younger years they're covered in blood or tainted in some sorts to show how his memories are not realiable anymore, in the end he reaches a picture of his own funeral, and before he can decipher that it hinted at his own death, a door knocks, meaning death has arrived.
      </p>

      <p>
        
      </p>
    `
  },
 a2film: {
    title: "A2 Film.",
    content: `
      <p>
        Now that I'm in A2, the caie recquirement is for a 5 minute length film. I really wanted to highlight the academic pressure and its impact on us; students' mental health. 
      </p>
      
     <img src="WIGU.jpg" alt="Film postcard">

      <h3> "When I grow up" An Synopsis of an A-level media studies short film </h3>

      <p>
       The story follows a talented young individual with diverse hobbies who has aspired to be a pilot from a young age. Throughout childhood, they consistently achieved outstanding grades and was praised as a gifted child with a bright future. However, as they enters the critical stage of grades 11 / 12, essential for college acceptance and choosing a degree to pursue based on grades.

Their grades start to slip from outstanding to average, and ultimately below average. Confused and overwhelmed, the student sacrifices their passions and hobbies in a desperate effort to focus solely on their studies. Despite these sacrifices, there is no improvement in their performance. The pressure mounts as disappointment from parents grows, and disapproval from teachers, along with financial stress, weighs heavily on them.

As midterms approach, they studies diligently, hopeful for a turnaround. After finishing an exam, they clean their room and discover an old toy airplane. Picking it up brings back a rush of nostalgia and memories of the promises made to their younger self about becoming a pilot.
      </p>

      <p>
        The screen cuts to black, and then we see results day. They failed by just two marks. The crushing blow takes a toll on their health, leading to severe panic attack and a heart crisis that lands them in the hospital for an extended period of time.

Confronting the reality of mortality during that time in the hospital prompts a significant realization that life does not end with one failed dream. As they recovers, they pick up a nearby booklet and a dried-up pen and begins to draw a plane. They realize that if they can’t be a pilot in this life, they can still achieve so many other things. Perhaps, in this new perspective, the people around them will come to agree.
      </p>

    
    `
  },

  ivs: {
    title: "IVS Film Festival.",
    content: `
      <p>
        This september, Indus Valley of Arts & Architecture, hosted a 4-day bootcamp + film festival, in association with SOC. I attended this event with my friends and we went together as a group naming ourselves 'Canon Event'. During these three days we learned alot more perspectives about filming, which not only increased my skills and confidence but taught me that filming can be fun. We debated long about what our film should be about, in the end we decided that for a 2 minute film with the creative freedom we have why don't we make something meaningful? We chose the topic of percentages. We wanted to highlight the issue that despite getting good grades, if your percentage isn't suffiicent to your desired university's recquirements they will not accept you nor treat you as anything above a percentage. It is a mark that defines you before you do by your actions. We were really doubtful about our work while we shot and edited it. What if it turns out wrong? What is the message doesn't go across to the audience? What if our hardwork goes to waste along with our spirits? But despite all that, we won the film festival. It was the biggest achievement of our lives, and it gave me the confidence to keep working towards this goal of highlighting socail issues and making films, because they really DO have an impact.
      </p>

      <h3> 78.4% </h3>

      <p> <iframe width="560" height="315" src="https://www.youtube.com/embed/Mrj4jdeQzDQ?si=KVhLWnw4-ahFfyzL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
      </p>

    
      <p>
       This accomplishment was a milestone for me, I'm grateful for that opportunity and I hope I get such opportunities in future as well.
      </p>
    `
  },

  otherprojects: {
    title: "Other projects.",
    content: `
      <p>
        Other than film making and story publishing, I have another project planned for future. 
      </p>

      <h3>Publishing my Own comic</h3>

      <p>
        As you know, I possess artistic skills that I beleive should take a form of story telling as well, and I want it to take form as a comic, I have many original charachter plans laid out for this project and I plan on making a small team of artists with similar art to mine and writers to refine my narrative into a more immersive storyline.
      </p>

      <p>
        The name of the comic will be "Earth 3.0". While this is a more fun leaning project, I want to show characters from different nations surviving in a world where people with an infection survive against masses despite belonging from different backgrounds. I want it to promote a friendly relation between charachters from different nations. I beleive in the concept of "We are what we consume" so if we consume content promoting positivity, ultimately it will impact our behaviour as a society.
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
