// JavaScript for Edit Booking Form
document.getElementById("edit-booking-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    // Get form values
    const bookingId = document.getElementById("booking-id").value;
    const guestName = document.getElementById("guest-name").value;
    const contactNumber = document.getElementById("contact-number").value;
    const roomType = document.getElementById("room-type").value;
    const checkInDate = document.getElementById("check-in").value;
    const checkOutDate = document.getElementById("check-out").value;

    // Validate input (basic example)
    if (!guestName || !contactNumber || !roomType || !checkInDate || !checkOutDate) {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate saving the booking
    alert(`Booking ${bookingId} updated successfully for ${guestName}!`);

    // Navigate back to the booking list
    navigateToBookingList();
});

function navigateToBookingList() {
    window.location.href = "bookinglist.html";
}
