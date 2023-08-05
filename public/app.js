const form = document.querySelector("form");
const messageInput = document.getElementById("message");
const responseEl = document.getElementById("response");
const messageBtn = document.getElementById("message-btn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log(messageInput.value);

  messageBtn.disabled = true;
  messageBtn.innerHTML = "Sending...";

  try {
    const res = await fetch("/api/flowise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: messageInput.value }),
    });

    const data = await res.json();

    responseEl.innerHTML = data.message;
  } catch (error) {
    responseEl.innerHTML = error.message;
  } finally {
    messageBtn.disabled = false;
    messageBtn.innerHTML = "Send";
    messageInput.value = "";
  }
});
