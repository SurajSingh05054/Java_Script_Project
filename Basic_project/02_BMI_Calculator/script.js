const form = document.querySelector('form');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result')
    const conclusion = document.querySelector('#conclusion')

    if(height ===''||height<0 || isNaN(height))
    {
        result.innerHTML = ` Please Enter a valid height.`;
    }else if(weight ===''||weight<0 || isNaN(weight)){
        result.innerHTML = ` Please Enter a valid weight.`;
    } else{
       const  bmi =(weight/((height*height)/10000)).toFixed(2);

        // Show the result

        result.innerHTML = `<span> "Result"</span>`;
    

    if(bmi<18.6)
    {
        conclusion.innerHTML = `The BMI is ${bmi}, so you are UNDER WEIGHT`;
    }else if(bmi>18.6 && bmi<24.9){
    conclusion.innerHTML = `The BMI is ${bmi}, so you are PERFECT`;
    }else
    {
        conclusion.innerHTML = `The BMI is ${bmi}, so you are OVER WEIGHT`;

    }
}


});