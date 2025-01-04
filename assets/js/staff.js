// Sample data for demonstration
const staffData = [
    { id: "S001", name: "Saman Gunasekara", position: "Manager", contact: "076 567 3498", status: "Active" },
    { id: "S002", name: "Ramesh Pathirana", position: "Receptionist", contact: "091 674 9834", status: "Active" },
    { id: "S003", name: "Asanka Priyamantha", position: "Housekeeping", contact: "074 888 4940", status: "On Leave" },
    { id: "S004", name: "Munasinghe", position: "Chef", contact: "077 435 7741", status: "Active" },
];

// Function to populate the staff table
function populateStaffTable() {
    const tableBody = document.getElementById("staffTableBody");
    tableBody.innerHTML = ""; // Clear existing content

    staffData.forEach((staff) => {
        const row = document.createElement("tr");

        // Add table cells
        row.innerHTML = `
            <td>${staff.id}</td>
            <td>${staff.name}</td>
            <td>${staff.position}</td>
            <td>${staff.contact}</td>
            <td>${staff.status}</td>
            <td>
                <button class="action-btn edit" onclick="editStaff('${staff.id}')">Edit</button>
                <button class="action-btn delete" onclick="deleteStaff('${staff.id}')">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Function to handle the Edit action
function editStaff(staffId) {
    const staff = staffData.find((s) => s.id === staffId);
    if (staff) {
        // Redirect to Edit Staff page with staff ID as a query parameter
        window.location.href = `editstaff.html?id=${staff.id}`;
    } else {
        alert("Staff member not found.");
    }
}

// Function to handle the Delete action
function deleteStaff(staffId) {
    if (confirm("Are you sure you want to delete this staff member?")) {
        const index = staffData.findIndex((s) => s.id === staffId);
        if (index !== -1) {
            staffData.splice(index, 1); // Remove the staff member
            alert("Staff member deleted successfully.");
            populateStaffTable(); // Refresh the table
        } else {
            alert("Staff member not found.");
        }
    }
}

// Call populateStaffTable on page load
window.onload = populateStaffTable;


function logout() {
    alert("Logging out...");
    // Here you can add actual logout logic
    window.location.href = "index.html"; // Redirect to login page
}
