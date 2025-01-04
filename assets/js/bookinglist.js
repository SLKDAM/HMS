// Example Data for Bookings
const bookings = [
    {
        id: 'B001',
        name: 'John Doe',
        contact: '123456789',
        roomType: 'Deluxe',
        checkIn: '2024-12-01',
        checkOut: '2024-12-10',
        paymentStatus: 'Paid',
    },
    {
        id: 'B002',
        name: 'Jane Smith',
        contact: '987654321',
        roomType: 'Suite',
        checkIn: '2024-12-05',
        checkOut: '2024-12-15',
        paymentStatus: 'Pending',
    },
];

// Populate Booking List in Table
function loadBookings() {
    const bookingListBody = document.getElementById('booking-list-body');
    bookingListBody.innerHTML = '';

    bookings.forEach((booking) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.id}</td>
            <td>${booking.name}</td>
            <td>${booking.contact}</td>
            <td>${booking.roomType}</td>
            <td>${booking.checkIn}</td>
            <td>${booking.checkOut}</td>
            <td>${booking.paymentStatus}</td>
            <td>
                <button class="action-btn edit-btn" onclick="navigateToEditBooking('${booking.id}')">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteBooking('${booking.id}')">Delete</button>
            </td>
        `;
        bookingListBody.appendChild(row);
    });
}

// Navigate to Add Booking Page
function navigateToAddBooking() {
    window.location.href = 'addbooking.html';
}

// Navigate to Edit Booking Page
function navigateToEditBooking(bookingId) {
    const booking = bookings.find((b) => b.id === bookingId);

    if (booking) {
        const params = new URLSearchParams({
            id: booking.id,
            name: booking.name,
            contact: booking.contact,
            roomType: booking.roomType,
            checkIn: booking.checkIn,
            checkOut: booking.checkOut,
            paymentStatus: booking.paymentStatus,
        });
        window.location.href = `editbooking.html?${params.toString()}`;
    } else {
        alert('Booking not found!');
    }
}

// Delete Booking Functionality
function deleteBooking(bookingId) {
    const index = bookings.findIndex((b) => b.id === bookingId);
    if (index !== -1) {
        if (confirm(`Are you sure you want to delete booking ID ${bookingId}?`)) {
            bookings.splice(index, 1);
            loadBookings(); // Refresh the list
            alert('Booking deleted successfully!');
        }
    } else {
        alert('Booking not found!');
    }
}

// Initialize Bookings on Page Load
window.onload = loadBookings;

// Logout Functionality
function logout() {
    alert("Logging out...");
    window.location.href = "index.html";
}
