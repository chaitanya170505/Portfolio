const texts = ["Programmer", "Student", "Learner"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100; 
const erasingSpeed = 50; 
const newTextDelay = 1000; 

function type() {
    if (charIndex < texts[index].length) {
        document.getElementById('typewriter').textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        document.getElementById('typewriter').textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(type, newTextDelay);
    }
}

type();

let resume_btn = document.getElementById("resume-btn");

resume_btn.addEventListener('click',()=>{
    alert('Working on it.');
})



/*document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.1 
    });

    document.querySelectorAll('.hidden-content').forEach(element => {
        observer.observe(element);
    });
});

*/


// scroll content for the skill section
  function scrollLeft1() {
    const scrollContainer = document.querySelector(`.scroll-content1`);
    scrollContainer.scrollBy({
      left: -200, 
      behavior: 'smooth'
    });
  } 

  function scrollLeft2() {
    const scrollContainer = document.querySelector(`.scroll-content2`);
    scrollContainer.scrollBy({
      left: -200, 
      behavior: 'smooth'
    });
  } 

  function scrollLeft3() {
    const scrollContainer = document.querySelector(`.scroll-content3`);
    scrollContainer.scrollBy({
      left: -200, 
      behavior: 'smooth'
    });
  } 
  
  function scrollRight(x) {
    const scrollContainer = document.querySelector(`.scroll-content${x}`);
    scrollContainer.scrollBy({
      left: 200, 
      behavior: 'smooth'
    });
  }  



// current year
function displayCurrentYear() {
    const currentYear = new Date().getFullYear(); 
    document.getElementById('current-year').textContent = currentYear; 
}

displayCurrentYear();

  
  