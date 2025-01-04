// Function to handle the form submission
document.getElementById('editInventoryForm').addEventListener('submit', function(e) {
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

    // Update the item (In a real scenario, you might send this data to the server for updating)
    console.log("Inventory Updated:");
    console.log(`Name: ${itemName}, Category: ${category}, Quantity: ${quantity}, Status: ${status}`);

    // Show a success message
    alert('Inventory item updated successfully!');
});
