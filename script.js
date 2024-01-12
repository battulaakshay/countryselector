
const locationData = [
    {
        country: "IND",
        states: [
            { name: "TS", cities: ["Hyderabad"] },
            { name: "AP", cities: ["Vizag"] },
            { name: "TN", cities: ["Chennai"] }
        ]
    },
    {
        country: "AUS",
        states: [
            { name: "Queensland", cities: ["Brisbane"] },
            { name: "Tasmania", cities: ["Hobart"] },
            { name: "NewSouthWales", cities: ["Sydney"] }
        ]
    },
    {
        country: "AMERICA",
        states: [
            { name: "California", cities: ["Los Angeles", "San Francisco"] },
            { name: "Texas", cities: ["Houston", "Dallas"] },
            { name: "Florida", cities: ["Miami", "Orlando"] }
        ]
    }
];

function getStates() {
    const countrySelect = document.getElementById("country");
    const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");

    const selectedCountry = countrySelect.value;
    const selectedLocation = locationData.find(item => item.country === selectedCountry);

    // Clear previous state and city options
    stateSelect.innerHTML = "<option value=''>Select State</option>";
    citySelect.innerHTML = "<option value=''>Select City</option>";

    // Populate state options
    for (const state of selectedLocation.states) {
        const option = document.createElement("option");
        option.value = state.name;
        option.text = state.name;
        stateSelect.add(option);
    }
}

function getCities() {
    const countrySelect = document.getElementById("country");
    const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");

    const selectedCountry = countrySelect.value;
    const selectedState = stateSelect.value;
    const selectedLocation = locationData.find(item => item.country === selectedCountry);

    // Clear previous city options
    citySelect.innerHTML = "<option value=''>Select City</option>";

    // Populate city options based on the selected state
    const cities = selectedLocation.states.find(state => state.name === selectedState)?.cities || [];

    for (const city of cities) {
        const option = document.createElement("option");
        option.value = city;
        option.text = city;
        citySelect.add(option);
    }
}
