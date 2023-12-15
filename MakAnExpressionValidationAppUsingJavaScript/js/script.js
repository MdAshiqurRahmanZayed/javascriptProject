function validateExpression() {
     const option = document.getElementById('option').value;
     const inputValue = document.getElementById('input').value;

     let regex;

     switch (option) {
          case 'email':
               regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
               break;
          case 'phone':
               regex = /^\d{11}$/;
               break;
          case 'postcode':
               regex = /^\d{4}$/;
               break;
          default:
               regex = /^.*$/; 
     }

     const isValid = regex.test(inputValue);

     const resultElement = document.getElementById('result');
     resultElement.innerHTML = isValid ? 'Valid' : 'Invalid';
}