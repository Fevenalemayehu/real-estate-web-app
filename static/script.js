// Function to show login modal
function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

// Function to close login modal
function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

// Function to show signup form (for future use)
function showSignup() {
    alert('Sign up functionality coming soon!');
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target == modal) {
        closeLogin();
    }
}

// This function fetches the property data from our server
async function fetchProperties() {
    try {
        const response = await fetch('/api/properties');
        const properties = await response.json();
        displayProperties(properties);
    } catch (error) {
        console.error('Error fetching properties:', error);
        document.getElementById('properties-container').innerHTML = '<p>Failed to load properties.</p>';
    }
}

// This function takes the data and displays it on the page
function displayProperties(properties) {
    const container = document.getElementById('properties-container');
    container.innerHTML = ''; // Clear the "Loading..." text

    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        
        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="property-image">
            <div class="property-info">
                <h3 class="property-title">${property.title}</h3>
                <p class="property-price">${property.price}</p>
                <p class="property-details">${property.bedrooms} beds • ${property.bathrooms} baths</p>
            </div>
        `;
        
        container.appendChild(propertyCard);
    });
}

// Start the process when the webpage finishes loading
document.addEventListener('DOMContentLoaded', fetchProperties);