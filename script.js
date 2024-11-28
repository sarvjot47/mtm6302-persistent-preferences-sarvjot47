document.addEventListener("DOMContentLoaded", () => {
    const itemList = document.getElementById("item-list");
    const colorSchemeSelect = document.getElementById("color-scheme");
    const listStyleSelect = document.getElementById("style-option");
    const applySettingsButton = document.getElementById("apply-settings");

    // Add items dynamically to the list
    const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        itemList.appendChild(listItem);
    });

    // Apply theme to the body
    function applyTheme(theme) {
        document.body.classList.remove("theme-light", "theme-dark", "theme-ocean");
        document.body.classList.add(theme); 
    }

    // Apply list style to the list
    function applyListStyle(style) {
        itemList.className = `list-style ${style}`; 
    }

    // Load preferences from localStorage
    const savedTheme = localStorage.getItem("colorScheme");
    const savedListStyle = localStorage.getItem("listStyle");

    if (savedTheme) {
        applyTheme(savedTheme); 
        colorSchemeSelect.value = savedTheme;
    }

    if (savedListStyle) {
        applyListStyle(savedListStyle); 
        listStyleSelect.value = savedListStyle;
    }

    // Save and apply settings on button click
    applySettingsButton.addEventListener("click", () => {
        const selectedTheme = colorSchemeSelect.value;
        const selectedListStyle = listStyleSelect.value;

        applyTheme(selectedTheme); 
        applyListStyle(selectedListStyle);

        localStorage.setItem("colorScheme", selectedTheme);
        localStorage.setItem("listStyle", selectedListStyle);
    });
});
