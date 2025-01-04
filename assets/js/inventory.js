// Sample function to edit an inventory item
function editItem(itemId) {
    // Redirect to edit page for the selected item
    window.location.href = `editinventory.html?id=${itemId}`;
}

// Logout Functionality
function logout() {
    alert("Logging out...");
    window.location.href = "index.html";
}

function addInventory(){
    alert("Adding new inventory item...");
    window.location.href = "addinventory.html";
}
