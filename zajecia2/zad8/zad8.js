
function addItem(event) 
{
    event.preventDefault();

    const itemInput = document.getElementById("itemInput");
    const itemValue = itemInput.value.trim();

    if (itemValue) 
    {
        const newItem = document.createElement("li");
        newItem.textContent = itemValue;
        document.getElementById("itemList").appendChild(newItem);
        itemInput.value = "";
    }
}

document.getElementById("itemForm").addEventListener("submit", addItem);
