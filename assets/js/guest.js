// Sample Guest Data
const guestData = [
    { id: 101, name: "John Doe", contact: "123-456-7890", roomType: "Deluxe Suite", checkIn: "2024-12-01", checkOut: "2024-12-05", status: "Checked In", paymentStatus: "Paid" },
    { id: 102, name: "Jane Smith", contact: "234-567-8901", roomType: "Standard Room", checkIn: "2024-12-02", checkOut: "2024-12-06", status: "Checked Out", paymentStatus: "Paid" },
    { id: 103, name: "Methuseli", contact: "345-678-9012", roomType: "Standard Room", checkIn: "2024-12-02", checkOut: "2024-12-21", status: "Checked In", paymentStatus: "Unpaid" },
    { id: 104, name: "Randy", contact: "456-789-0123", roomType: "Standard Room", checkIn: "2024-12-02", checkOut: "2024-12-23", status: "Checked In", paymentStatus: "Paid" },
    { id: 105, name: "Nuwan", contact: "456-789-0123", roomType: "Standard Room", checkIn: "2024-12-02", checkOut: "2024-12-23", status: "Checked In", paymentStatus: "Paid" },
    { id: 106, name: "Robin", contact: "456-789-0123", roomType: "Standard Room", checkIn: "2024-12-02", checkOut: "2024-12-23", status: "Checked In", paymentStatus: "Paid" }
];

// Load Guests into Table
function loadGuests(filterText = "") {
    const guestListBody = document.getElementById("guest-list-body");
    guestListBody.innerHTML = "";

    // Filter guests by name or ID if filter text is provided
    const filteredGuests = guestData.filter(guest => 
        guest.name.toLowerCase().includes(filterText.toLowerCase()) || 
        guest.id.toString().includes(filterText)
    );

    // If no guests found, display a message
    if (filteredGuests.length === 0) {
        guestListBody.innerHTML = "<tr><td colspan='8'>No guests found matching the criteria.</td></tr>";
    } else {
        // Populate the table with filtered or all guest data
        filteredGuests.forEach(guest => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${guest.id}</td>
                <td>${guest.name}</td>
                <td>${guest.contact}</td>
                <td>${guest.roomType}</td>
                <td>${guest.checkIn}</td>
                <td>${guest.status}</td>
                <td>${guest.paymentStatus}</td>
                <td>
                    <button class="action-btn" onclick="viewDetails(${guest.id})">View</button>
                </td>
            `;
            guestListBody.appendChild(row);
        });
    }
}

// Navigate to Add Guest Page
function navigateToAddGuest() {
    window.location.href = "addguest.html";
}

// Navigate to Edit Guest Page
function viewDetails(guestId) {
    alert('Are you sure you want to view this guest?');
    window.location.href = `Editguest.html?guestId=${guestId}`;
}

// Logout Functionality
function logout() {
    alert("Logging out...");
    window.location.href = "index.html";
}

// Search Functionality
function searchGuests() {
    const searchBar = document.getElementById("search-bar");
    loadGuests(searchBar.value);
}

// Initialize Guest List and Attach Search Event Listener
window.onload = () => {
    loadGuests(); // Load all guests initially

    // Attach event listener for search bar
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", searchGuests);
};
