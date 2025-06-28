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
    alert('Resume will be downloaded in PDF format.');
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

  
  




const intents = {
  greet: ["hi", "hello", "hey", "good morning", "good evening"],
  about_me: ["who are you", "tell me about yourself", "about you", "introduce yourself"],
  skills: ["your skills", "what can you do", "what are you good at", "tell me your skills", "skills?"],
  projects: ["your projects", "projects" "what have you built", "show me your work", "portfolio", "your work"],
  contact: ["how to contact you", "your email", "contact info", "reach you", "email?"],
  education: ["your education", "where did you study", "education background", "studies", "college"]
};

  function normalize(text) {
    return text.toLowerCase().replace(/[^\w\s]/gi, '');
  }

  function getIntent(text) {
    const normText = normalize(text);
    for (const [intent, patterns] of Object.entries(intents)) {
      for (const pattern of patterns) {
        if (normText.includes(normalize(pattern))) {
          return intent;
        }
      }
    }

    const words = normText.split(/\s+/);
    if (words.includes("contact") || words.includes("email") || words.includes("reach")) return "contact";
    if (words.includes("skill")) return "skills";
    if (words.includes("project") || words.includes("work") || words.includes("portfolio")) return "projects";
    if (words.includes("who") && words.includes("you")) return "about_me";
    if (["hi", "hello", "hey"].some(w => words.includes(w))) return "greet";
    if (words.includes("education") || words.includes("study") || words.includes("college") || words.includes("background")) return "education";

    return "unknown";
  }

  function generateResponse(intent) {
    switch (intent) {
      case "projects":
        return `Here are some projects I've built:\n
Real-Time Multiplayer Chess: https://github.com/chaitanya170505/RealTime-PERN-Chess\n
MovieVault: https://github.com/chaitanya170505/MovieVault\n
Task Management App: https://github.com/chaitanya170505/task-management-app\n
Book Finder: https://github.com/chaitanya170505/book_finder\n
Amazon Clone: https://chaitanya170505.github.io/chai_pj7/\n
Disney+ Hotstar Clone: https://chaitanya170505.github.io/chai_pj4/\n
QR Code Generator: https://github.com/chaitanya170505/chai_pj9`;
      case "education":
        return `Intermediate (2020–2022) at Sri Chaitanya Junior College - Completed.\n
B.Tech in CSE (2022–Present) at Sir C.R. Reddy College of Engineering - Currently pursuing.`;
      case "skills":
        return `Frontend: HTML, CSS, JavaScript, Bootstrap, jQuery, React\n
Backend: Node.js, Express.js, REST APIs, PostgreSQL, Socket.io\n
Programming: C, C++, Python\n
Tools: Canva, Postman, Git\n
Specialization: NLP`;
      case "about_me":
        return `I'm a full-stack developer passionate about building real-world applications using React and Node.js. I enjoy solving problems with code.`;
      case "contact":
        return `Email: mogallachaitanya@gmail.com\nGitHub: https://github.com/chaitanya170505`;
      case "greet":
        return `Hello! I'm your portfolio assistant. You can ask about my skills, projects, education, or contact info.`;
      default:
        return `I'm not sure how to answer that. Try asking about my skills, projects, or education.`;
    }
  }

  const chatToggleBtn = document.getElementById("chatToggleBtn");
  const chatWidget = document.getElementById("chatWidget");
  const userInput = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");
  const chatBody = document.getElementById("chatBody");

  chatToggleBtn.addEventListener("click", () => {
    chatWidget.style.display = chatWidget.style.display === "flex" ? "none" : "flex";
  });

  sendBtn.addEventListener("click", handleUserInput);
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") handleUserInput();
  });

  function handleUserInput() {
    const input = userInput.value.trim();
    if (!input) return;

    appendMessage("You", input, "user");
    const intent = getIntent(input);
    const response = generateResponse(intent);
    appendMessage("Bot", response, "bot");

    userInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function appendMessage(sender, text, className) {
    const msg = document.createElement("div");
    msg.className = className;
    msg.innerHTML = `<strong>${sender}:</strong> ${text.replace(/\n/g, '<br>')}`;
    chatBody.appendChild(msg);
  }
