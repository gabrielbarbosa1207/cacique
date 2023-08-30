document.querySelector("a").addEventListener("click", function(event) {
    event.preventDefault(); // prevent the default action (navigation) of the link

    // Disable the button and change its appearance
    const button = event.target;
    button.style.backgroundColor = "gray";
    button.textContent = "aguarde 30s...";
    button.removeEventListener("click", arguments.callee);  // Remove the click event listener

    // Generate random number between 5 and 45, then append "X" to it
    let normalValue = Math.floor(Math.random() * (35 - 5 + 1) + 5) + "X";
    let turboValue = Math.floor(Math.random() * (25 - 5 + 1) + 5) + "X";

    // Generate the current time and add 5 minutes
    let date = new Date();
    date.setMinutes(date.getMinutes() + 5);
    let validadeValue = date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0');

    // Set the generated values to the spans
    document.getElementById("normal").textContent = normalValue;
    document.getElementById("turbo").textContent = turboValue;
    document.getElementById("validade").textContent = validadeValue;

    // Start the countdown
    let counter = 30;
    const interval = setInterval(function() {
        counter--;
        button.textContent = "Aguarde " + counter + "s...";
        if (counter <= 0) {
            clearInterval(interval);
            button.style.backgroundColor = "green";
            button.textContent = "GERAR NOVO SINAL";
            button.addEventListener("click", arguments.callee);  // Re-add the click event listener
        }
    }, 1000);  // This function will be executed every second
});
