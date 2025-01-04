document.getElementById("addStaffForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("staffName").value;
    const position = document.getElementById("staffPosition").value;
    const contact = document.getElementById("staffContact").value;
    const status = document.getElementById("staffStatus").value;

    const newStaff = {
        id: Date.now(), // Unique ID based on the current timestamp
        name: name,
        position: position,
        contact: contact,
        status: status
    };

    // Add the new staff to the staff data
    // You can add logic to push the new staff to the staffData array
    alert("New staff member added successfully!");
    window.location.href = "staff.html"; // Redirect to staff list
});
