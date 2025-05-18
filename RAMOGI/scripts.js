
  // Smooth scroll for navigation anchors
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const targetId = anchor.getAttribute("href").substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Contact form submission handling
  function submitContactForm(event) {
    event.preventDefault();
    alert("Thank you for contacting Ramogi Innovations. We'll get back to you soon!");
    event.target.reset();
  }

  // Live chat modal controls
  const liveChatBtn = document.getElementById("liveChatBtn");
  const chatModal = document.getElementById("chatModal");
  const chatCloseBtn = document.getElementById("chatCloseBtn");
  const chatSendBtn = document.getElementById("chatSendBtn");
  const chatMessages = document.getElementById("chatMessages");
  const chatInput = document.getElementById("chatInput");

  liveChatBtn.addEventListener("click", () => {
    chatModal.classList.add("active");
    chatModal.setAttribute("aria-hidden", "false");
    chatInput.focus();
  });

  chatCloseBtn.addEventListener("click", () => {
    chatModal.classList.remove("active");
    chatModal.setAttribute("aria-hidden", "true");
  });

  chatSendBtn.addEventListener("click", sendChatMessage);
  chatInput.addEventListener("keypress", e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendChatMessage();
    }
  });

  function sendChatMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;
    appendMessage("You", msg);
    chatInput.value = "";
    // Simulated bot response
    setTimeout(() => {
      appendMessage("Ramogi Innovations", "Thank you for your message. We will respond shortly.For better convenience contact us through whatsapp");
    }, 1000);
  }

  function appendMessage(sender, msg) {
    const messageElem = document.createElement("div");
    messageElem.style.marginBottom = "12px";
    messageElem.innerHTML = `<strong>${sender}:</strong> ${msg}`;
    chatMessages.appendChild(messageElem);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Booking modal controls
  const bookingBtn = document.getElementById("bookingBtn");
  const bookingModal = document.getElementById("bookingModal");
  const bookingCloseBtn = document.getElementById("bookingCloseBtn");
  const bookingForm = document.getElementById("bookingForm");

  bookingBtn.addEventListener("click", () => {
    bookingModal.classList.add("active");
    bookingModal.setAttribute("aria-hidden", "false");
    bookingForm.name.focus();
  });

  bookingCloseBtn.addEventListener("click", () => {
    bookingModal.classList.remove("active");
    bookingModal.setAttribute("aria-hidden", "true");
  });

  bookingForm.addEventListener("submit", submitBookingForm);
  function submitBookingForm(event) {
    event.preventDefault();
    alert("Thank you for booking a meeting! We will contact you shortly to confirm.");
    bookingForm.reset();
    bookingModal.classList.remove("active");
    bookingModal.setAttribute("aria-hidden", "true");
  }
const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dots = document.querySelectorAll('.dot');
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;
    slidesContainer.style.transform = 'translateX(' + (-index * 100) + '%)';
    updateDots();
  }
  function updateDots() {
    dots.forEach((dot, idx) => {
      const selected = idx === currentIndex;
      dot.classList.toggle('active', selected);dot.setAttribute('aria-selected', selected);
      dot.tabIndex = selected ? 0 : -1;
    });
  }
  prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });
  nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
    });
  });
  // Auto slide every 5 seconds
  let autoSlideInterval = setInterval(() => {
    showSlide(currentIndex + 1); }, 5000);
  // Pause auto sliding on mouse enter, resume on mouse leave
  document.querySelector('.slider').addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });
  document.querySelector('.slider').addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 5000);
  });
  // Initialize
  showSlide(0);