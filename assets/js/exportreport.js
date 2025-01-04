// Function to handle report export
function exportReport(format) {
    // Log the selected format (can be replaced with actual export logic)
    console.log(`Exporting report as ${format}`);

    // For now, just show an alert based on the selected format
    alert(`The report is being exported as ${format}...`);

    // Depending on the format, replace with actual report export logic:
    if (format === 'pdf') {
        // Export as PDF logic
        console.log('Exporting as PDF...');
    } else if (format === 'csv') {
        // Export as CSV logic
        console.log('Exporting as CSV...');
    } else if (format === 'excel') {
        // Export as Excel logic
        console.log('Exporting as Excel...');
    }
}

function back(){
    alert('Are you sure you want to go back?');
    window.location.href = "viewreport.html";
}
