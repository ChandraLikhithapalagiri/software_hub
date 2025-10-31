/*
document.addEventListener("DOMContentLoaded", () => {
  // Chat Functionality
  const sendBtn = document.getElementById("send-btn");
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");

  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const message = chatInput.value.trim();
      if (message) {
        const userMsg = document.createElement("div");
        userMsg.classList.add("message", "user");
        userMsg.textContent = message;
        chatMessages.appendChild(userMsg);
        chatInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
          const reply = document.createElement("div");
          reply.classList.add("message", "mentor");
          reply.textContent = "Got it! Our mentor will reach out soon.";
          chatMessages.appendChild(reply);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 800);
      }
    });
  }

  // Booking button alert
  const bookBtns = document.querySelectorAll(".book-btn");
  bookBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("✅ Your service booking request has been received!");
    });
  });
});

*/

document.getElementById("sendBtn").addEventListener("click", function() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();
  if (message) {
    const msgElement = document.createElement("p");
    msgElement.classList.add("student", "bg-primary", "text-white", "p-2", "rounded", "mt-2");
    msgElement.textContent = message;
    document.querySelector(".messages").appendChild(msgElement);
    input.value = "";
    document.querySelector(".messages").scrollTop = document.querySelector(".messages").scrollHeight;
  }
});
