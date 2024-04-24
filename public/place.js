

  function filterCountries(event) {
    const searchTerm = event.target.value.toLowerCase();
    const countriesList = document.getElementById("countriesList");
    const countryItems = countriesList.querySelectorAll("li");
  
    for (let i = 0; i < countryItems.length; i++) {
      const countryName = countryItems[i].textContent.toLowerCase();
      countryItems[i].style.display = countryName.includes(searchTerm) ? "" : "none";
    }
  }
  
  function selectCountry(event) {
    const selectedCountry = event.target.textContent;
    const searchInput = document.getElementById("searchBar");
    searchInput.value = selectedCountry;
    countriesList.style.display = "none";
  }
  
  function submitForm() {
    // Get the selected country, date, and combo box value
    const selectedCountry = document.getElementById("searchBar").value;
    const selectedDate = document.getElementById("dateInput").value;
    const selectedComboBoxValue = document.getElementById("comboBox").value;
  
    // Implement your code to save the selected data
    // For example, you might use AJAX to send it to a server
    console.log("Selected Country:", selectedCountry);
    console.log("Selected Date:", selectedDate);
    console.log("Selected ComboBox Value:", selectedComboBoxValue);
  }
  