// Get the date of birth input field, calculate button, and result paragraph
const dobInput = document.getElementById('dob');
const calculateBtn = document.getElementById('calculate-btn');
const resultPara = document.getElementById('result');

// Add event listener to calculate button
calculateBtn.addEventListener('click', calculateAge);

// Function to calculate age
function calculateAge() {
    const dob = new Date(dobInput.value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    resultPara.textContent = `You are ${age} years old.`;
}
