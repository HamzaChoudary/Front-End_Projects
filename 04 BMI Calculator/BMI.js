const height = document.querySelector('#BMI_height');
const weight = document.querySelector('#BMI_weight');
const bmi_value = document.querySelector('#bmi_value');
const bmi_status = document.querySelector('#bmi_status');
const calculator = document.querySelector('#calculate_bmi');


calculator.addEventListener('click', () => {
    if (height.value === "" || weight.value ==="") {
        alert("please enter your height and weight ");
        return;
        }else{
            let height_value = height.value;
            let weight_value = weight.value;
            let height_value_meters = height_value / 100;
            let bmi = weight_value / (height_value_meters * height_value_meters);
            bmi_value.textContent = bmi.toFixed(2);
            if ( bmi <= 18.5) {
                bmi_status.textContent = 'Underweight';
            } else if (bmi >= 18.5 && bmi <= 24.9){
                bmi_status.textContent = 'Normal';
            } else if ( bmi >= 25 && bmi <= 39.9) {
                bmi_status.textContent = 'Overweight';
            } else if ( bmi >= 40 ) {
                bmi_status.textContent = 'Obses';
            }
            console.log(bmi);
        }
});