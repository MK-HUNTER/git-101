// Dashboard initialization
console.log('Dashboard loaded successfully!');

//Functions
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM ready - dashboard is active')
});

// Dashboard initialization
console.log('Dashboard loaded successfully!');

// Data loading function
async function loadData() {
    try {
        const response = await fetch('./data/sample-data.json');
        if (!response.ok) {
            throw new Error('Failed to load data');
        }
        const data = await response.json();
        console.log('Data loaded:', data);
        return data;
    } catch (error) {
        console.error('Error loading data:', error);
        return null;
    }
}

// Display data on the page
function displayDataSummary(data) {
    const container = document.getElementById('dashboard-container');
    
    const summary = document.createElement('div');
    summary.innerHTML = `
        <h2>📈 Sales Overview</h2>
        <p>Total months tracked: ${data.sales.length}</p>
        <p>Categories: ${data.categories.length}</p>
        <p style="color: green; margin-top: 10px;">✅ Data loaded successfully!</p>
    `;
    
    container.appendChild(summary);
}

// Initialize dashboard when page loads
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM ready - loading data...');
    const data = await loadData();
    
    if (data) {
        displayDataSummary(data);
    } else {
        console.error('Failed to load dashboard data');
    }
});