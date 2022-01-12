
// Variables
const toggle = document.querySelector(".toggle-switch");
const switchInput = document.getElementById("switch-input");
basicPlan = document.getElementById('basic')
proPlan = document.getElementById('professional')
masterPlan = document.getElementById('master')

// Event Listeners
toggle.addEventListener("click", () => {
    if(switchInput.checked) {
        basicPlan.textContent = '$19.99'
        proPlan.textContent = '$24.99'
        masterPlan.textContent = '$39.99'
    } else {
        console.log('Checkbox is not checked')
        basicPlan.textContent = '$199.99'
        proPlan.textContent = '$249.99'
        masterPlan.textContent = '$399.99'
}
});
