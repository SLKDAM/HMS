// Function to handle the form submission
document.getElementById('addInventoryForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default form submission

    // Get the values from the form
    const itemName = document.getElementById('itemName').value;
    const category = document.getElementById('category').value;
    const quantity = document.getElementById('quantity').value;
    const status = document.getElementById('status').value;

    // Basic validation
    if (!itemName || !category || !quantity || !status) {
        alert("Please fill out all fields.");
        return;
    }

    // Save the new item (You can send this data to a server via an API in a real project)
    console.log("Item Added:");
    console.log(`Name: ${itemName}, Category: ${category}, Quantity: ${quantity}, Status: ${status}`);

    // Clear the form
    document.getElementById('addInventoryForm').reset();

    // Show a success message
    alert('Inventory item added successfully!');
});

function goBack(){
    alert('Are you sure you want to go back?');
    window.location.href= "inventory.html";
}
