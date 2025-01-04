// Simulated staff data - typically fetched from a database
const staffData = [
    { id: 1, name: "John Doe", position: "Manager", contact: "123-456-7890", status: "Active" },
    { id: 2, name: "Jane Smith", position: "Receptionist", contact: "234-567-8901", status: "Active" },
    { id: 3, name: "Michael Brown", position: "Housekeeping", contact: "345-678-9012", status: "On Leave" },
];

// Fetch staff ID from the query string
const urlParams = new URLSearchParams(window.location.search);
const staffId = parseInt(urlParams.get("id"));

// Find the staff member data
const staff = staffData.find(s => s.id === staffId);

// Populate the form with the staff member's data
window.onload = function() {
    if (staff) {
        document.getElementById("editStaffName").value = staff.name;
        document.getElementById("editStaffPosition").value = staff.position;
        document.getElementById("editStaffContact").value = staff.contact;
        document.getElementById("editStaffStatus").value = staff.status;
    } else {
        
        window.location.href = "editstaff.html"; // Redirect if no data found
    }
};

// Handle form submission to update the staff details
document.getElementById("editStaffForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Update the staff details
    staff.name = document.getElementById("editStaffName").value;
    staff.position = document.getElementById("editStaffPosition").value;
    staff.contact = document.getElementById("editStaffContact").value;
    staff.status = document.getElementById("editStaffStatus").value;

    alert("Staff details updated successfully!");
    window.location.href = "staff.html"; // Redirect back to the staff list
});
