// JavaScript for Add Booking Form
document.getElementById("add-booking-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    // Get form values
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

    // Simulate adding the booking
    alert(`Booking added successfully for ${guestName}!`);

    // Optionally reset form
    document.getElementById("add-booking-form").reset();
});
