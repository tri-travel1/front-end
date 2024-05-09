const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('/customer/'); // Replace with your back-end server URL
    const data = response.data;

    // Process or display the fetched data here (replace with your logic)
    console.log('Fetched Data:', data);

    // Example: Update the DOM with fetched data (assuming basic HTML structure)
    const dataContainer = document.getElementById('data-container');
    dataContainer.textContent = JSON.stringify(data, null, 2); // Pretty-print for readability

  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle errors in the UI (optional)
  }
}

fetchData(); // Call the function to fetch data on page load
