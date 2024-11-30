
const ipApiUrl = 'https://api.ipify.org?format=json';

async function fetchIPAddress() {
    try {
        const response = await fetch(ipApiUrl);
        const data = await response.json();
        document.getElementById('ip').textContent = data.ip; 
    } catch (error) {
        console.error('Error fetching IP:', error);
        document.getElementById('ip').textContent = 'Unable to fetch IP.';
    }
}

fetchIPAddress();
