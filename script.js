const cardholder = document.getElementById("cardholder_input");
const cardnumber = document.getElementById("cardnumber_input");
const exp_date_MM = document.querySelector(".exp_date_MM_input");
const exp_date_YY = document.querySelector(".exp_date_YY_input");
const cvc = document.getElementById("cvc_input");

const cardholder_example = document.querySelector(".cardholder_example");
const cardnumber_example = document.querySelector(".card_number_example");
const exp_date_MM_example = document.querySelector(".exp_date_example_MM");
const exp_date_YY_example = document.querySelector(".exp_date_example_YY");
const cvc_example = document.querySelector(".cvc_example");

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const complete_section = document.querySelector('.complete_section');
const complete_section_close = document.querySelector('.continue_btn')


function typing1() {
    cardholder_example.innerHTML = cardholder.value;
   
} 
function typing2() {
    cardnumber_example.innerHTML = cardnumber.value;
   
} 
function typing3() {
    exp_date_MM_example.innerHTML = exp_date_MM.value;
   
} 
function typing4() {
    exp_date_YY_example.innerHTML = exp_date_YY.value;
   
} 
function typing5() {
    cvc_example.innerHTML = cvc.value;
   
} 


form.addEventListener('submit', (e) => {
    e.preventDefault();
    complete_section.style.display = "flex"; 
    complete_section.style.position = "relative";
    form.style.display = "none"; 
    inputs.forEach(input => {
      if (input.classList.contains('cardholder_input')) {
        containsNameInput(input)
      } else if (input.classList.contains('date')) {
        containsDateInput(input)
      } else {
        containsOtherInput(input)
      }
  
      if (input.parentElement.classList.contains('error-empty') ||
        input.parentElement.classList.contains('error-invalid') ||
        input.parentElement.parentElement.classList.contains('error-invalid') ||
        input.parentElement.parentElement.classList.contains('error-empty')) {
        complete_section.style.display = 'none'; // act when they do not
        form.style.display = "block"; 
      }
    })
    
  })

  const containsNameInput = function(input) {
    if (input.value === '') {
      input.parentElement.classList.add('error-empty');
      input.parentElement.classList.remove('error-invalid');
    } else if (input.value !== '' && input.value.match(/^[0-9]+$/) !== null) {
      input.parentElement.classList.remove('error-empty');
      input.parentElement.classList.add('error-invalid');
    } else {
      input.parentElement.classList.remove('error-empty');
      input.parentElement.classList.remove('error-invalid');
    }
  }
  
  const containsDateInput = function(input) {
    if (input.value === '') {
      input.parentElement.parentElement.classList.add('error-empty');
      input.parentElement.parentElement.classList.remove('error-invalid');
    } else if (input.value !== '' && input.value.match(/^[0-9]+$/) === null) { // wil return null if value has anything accept number
      input.parentElement.parentElement.classList.remove('error-empty');
      input.parentElement.parentElement.classList.add('error-invalid');
    } else {
      input.parentElement.parentElement.classList.remove('error-empty');
      input.parentElement.parentElement.classList.remove('error-invalid');
    }
  }
  
  const containsOtherInput = function(input) {
    if (input.value === '') {
      input.parentElement.classList.add('error-empty');
      input.parentElement.classList.remove('error-invalid');
    } else if (input.value !== '' && input.value.match(/^[0-9]+$/) === null) {
      input.parentElement.classList.remove('error-empty');
      input.parentElement.classList.add('error-invalid');
    } else {
      input.parentElement.classList.remove('error-empty');
      input.parentElement.classList.remove('error-invalid');
    }
  }
  
  complete_section_close.addEventListener('click', () => {
    complete_section.style.display = "none";
    // form.style.display = "block";
  })
