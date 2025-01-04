// Sample Guest Data
const guestData = [
    { id: 101, name: "John Doe", contact: "123-456-7890", room: "Deluxe Suite", checkIn: "2024-12-01", status: "Checked In", paymentStatus: "Paid" },
    { id: 102, name: "Jane Smith", contact: "234-567-8901", room: "Standard Room", checkIn: "2024-12-02", status: "Checked Out", paymentStatus: "Unpaid" },
    { id: 103, name: "Methuseli", contact: "345-678-9012", room: "Executive Suite", checkIn: "2024-12-02", status: "Checked In", paymentStatus: "Paid" },
    { id: 104, name: "Jack", contact: "456-789-0123", room: "Presidential Suite", checkIn: "2024-12-02", status: "Checked In", paymentStatus: "Unpaid" }
];

// Handle form submission to add a new guest
document.getElementById("add-guest-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const guestName = document.getElementById("guest-name-input").value;
    const guestContact = document.getElementById("guest-contact-input").value;
    const roomType = document.getElementById("room-type").value;
    const checkInDate = document.getElementById("check-in").value;
    const status = document.getElementById("status").value;
    const paymentStatus = document.getElementById("payment-status").value;

    const newGuest = {
        id: guestData.length + 1, // New ID based on current length of guestData
        name: guestName,
        contact: guestContact,
        room: roomType,
        checkIn: checkInDate,
        status: status,
        paymentStatus: paymentStatus
    };

    guestData.push(newGuest); // Add new guest to the array

    // Optionally, you can refresh the list or update the UI here

    // Reset the form fields
    document.getElementById("add-guest-form").reset();
    alert("Guest added successfully!");
});

// Go back to the guest list
function goBackToGuests() {
    window.location.href = "guest.html"; // Navigate back to guest list page
}
