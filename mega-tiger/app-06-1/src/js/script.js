document.querySelector(".signal").addEventListener('click', function(event) {
    event.preventDefault();

    // Generate the values for the spans
    document.getElementById('normal').innerText = Math.floor(Math.random() * (45 - 5 + 1) + 5) + "X";
    document.getElementById('turbo').innerText = Math.floor(Math.random() * (45 - 5 + 1) + 5) + "X";

    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 5);
    let timeString = currentDate.getHours().toString().padStart(2, '0') + ':' + currentDate.getMinutes().toString().padStart(2, '0');
    document.getElementById('validade').innerText = timeString;

    // Handle the button countdown
    let button = event.currentTarget;
    button.innerText = "Aguarde 30s..";
    button.style.backgroundColor = "gray";
    button.style.pointerEvents = "none"; // Make it unclickable

    let counter = 30;

    let interval = setInterval(function() {
        if(counter <= 0) {
            clearInterval(interval);

            button.innerText = "GERAR NOVO SINAL";
            button.style.backgroundColor = "green";
            button.style.pointerEvents = "auto"; // Make it clickable again

            // Clear the values in the spans
            document.getElementById('normal').innerText = "--.";
            document.getElementById('turbo').innerText = "";
            document.getElementById('validade').innerText = "";
        } else {
            button.innerText = `Aguarde ${counter}s..`;
            counter--;
        }
    }, 1000);
});
