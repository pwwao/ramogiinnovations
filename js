
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
      appendMessage("Ramogi Innovations", "Thank you for your message. We will respond shortly.");
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
