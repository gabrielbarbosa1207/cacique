document.addEventListener("DOMContentLoaded", function() {
    let data = [];

    // Fetch data from data.json
    fetch('./data.json')
    .then(response => response.json())
    .then(json => {
        data = json;
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });

    document.getElementById("randomBtn").addEventListener("click", function(event) {
        event.preventDefault();  // Prevent default action (like page reload)

        if (data.length > 0) {
            let randomIndex = Math.floor(Math.random() * data.length);
            let randomItem = data[randomIndex];

            document.getElementById("randomImage").src = randomItem.img;
            document.getElementById("randomText").textContent = randomItem.text;
        } else {
            console.error('No data available to display.');
        }
    });
});
