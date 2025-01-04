function navigateTo(page) {
    window.location.href = page;
}

function searchReports() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const reportList = document.getElementById('report-list-body');
    const reports = reportList.getElementsByTagName('tr');

    Array.from(reports).forEach(report => {
        const reportText = report.textContent || report.innerText;
        if (reportText.toLowerCase().includes(searchInput)) {
            report.style.display = '';
        } else {
            report.style.display = 'none';
        }
    });
}

function logout(){
    alert("Logging out...");
    window.location.href = "index.html";
}