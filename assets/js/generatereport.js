// Function to handle report generation form submission
document.getElementById('generate-report-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const reportType = document.getElementById('report-type').value;
    const reportMonth = document.getElementById('report-month').value;
    const reportYear = document.getElementById('report-year').value;

    // Simulate generating the report (could be replaced with actual logic)
    generateReport(reportType, reportMonth, reportYear);
});

// Function to simulate report generation
function generateReport(type, month, year) {
    // Log report details (for simulation)
    console.log(`Generating ${type} for ${month}-${year}`);
    
    // For now, just show an alert that the report is generated
    alert(`Report Type: ${type}\nMonth: ${month}\nYear: ${year}\n\nThe report is being generated...`);
    
    // You can replace the alert with code to generate and display the actual report
}

function back(){
    alert('Are you sure you want to go back?');
    window.location.href = "viewreport.html";
}
