// Using onClick Event listener

//Getting the HTML Elements

const messageButton = document.getElementById("messageBtn");

// Message
messageButton.addEventListener("mouseover", () => {
    const message = document.createElement("p");
    message.textContent = "Endure to the End";          //Message to be Displayed
    message.style.color = "red";
    message.style.fontsize = "25px";
    document.body.appendChild(message);
});
