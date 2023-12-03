
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // This is just a hard-coded example for testing purposes, 
    if (email === 'demo@example.com' && password === 'password') {
        console.log('Authentication successful');
        window.location.href = 'dashboard.html'; // Redirect to the dashboard or home page (may or may not make one)
    } else {
        console.error('Authentication failed');
        document.getElementById('errorMessage').innerText = 'Authentication failed. Please check your credentials.';
    }
}

function storeUserPreferences() {
    const selectedGenre = document.getElementById('favoriteGenre').value;

    // Simulate user authentication (replace with your actual authentication logic)
    const userId = 'user123';

    // Send user preferences to the server
    fetch('http://localhost:3000/storePreferences', {       // Update this to actual server
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, favoriteGenre: selectedGenre }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.error('Error storing user preferences:', error);
    });
}

// Used to retrieve songs according to data stored
function getRecommendations() {
    const selectedGenre = document.getElementById('favoriteGenre').value; // This only gathers by favorite genre, have to define what that means

    // Hard coded user authentication again for testing purposes
    const userId = 'user123';

    // Send user preferences to AWS Lambda function
    fetch('YOUR_API_GATEWAY_URL/recommendations', {  // Update this line once AWS things are figured out
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, favoriteGenre: selectedGenre }),
    })
    .then(response => response.json())
    .then(data => {
        // Display the recommendations on the page
        const recommendationsList = document.getElementById('recommendationsList');
        recommendationsList.innerHTML = ''; // Clear previous recommendations

        data.forEach(song => {
            const listItem = document.createElement('li');
            listItem.textContent = `${song.title} - ${song.artist}`;
            recommendationsList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching recommendations:', error);
    });
}
