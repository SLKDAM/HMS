// Sample guest data to populate the form
const guestData = {
    id: "101",
    name: "John Doe",
    room: "Deluxe Suite",
    checkIn: "2024-12-01",
    status: "Checked In", // Added status as part of the data
    paymentStatus: "Paid", // Added payment status
};

// Function to populate guest data into the form fields
function populateGuestDetails() {
    document.getElementById("editGuestId").value = guestData.id;
    document.getElementById("editGuestName").value = guestData.name;
    document.getElementById("editGuestRoom").value = guestData.room;
    document.getElementById("editCheckIn").value = guestData.checkIn;
    // Set status and payment status (optional, can add if needed)
    document.getElementById("editStatus").value = guestData.status;
    document.getElementById("editPaymentStatus").value = guestData.paymentStatus;
}

// Call this function on page load
window.onload = populateGuestDetails;

// Function to update guest details
function updateGuest() {
    const updatedGuest = {
        id: document.getElementById("editGuestId").value,
        name: document.getElementById("editGuestName").value,
        room: document.getElementById("editGuestRoom").value,
        checkIn: document.getElementById("editCheckIn").value,
        status: document.getElementById("editStatus").value, // Added status to update
        paymentStatus: document.getElementById("editPaymentStatus").value, // Added payment status to update
    };
    console.log("Guest updated:", updatedGuest);
    alert("Guest details updated successfully!");
}

// Function to delete guest
function deleteGuest() {
    if (confirm("Are you sure you want to delete this guest?")) {
        console.log("Guest deleted:", guestData.id);
        alert("Guest deleted successfully!");
        goBack();
    }
}

// Function to navigate back to the Guest List
function goBack() {
    window.location.href = "guest.html"; // Adjust the filename as per your structure
}
