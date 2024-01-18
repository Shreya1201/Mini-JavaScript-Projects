//const height=document.getElementById("height")
//console.log(height.value)
//const weight=document.getElementById("weight")
//console.log(weight.value)

const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    console.log(height)
    const weight=parseInt(document.querySelector('#weight').value)
    console.log(weight)
    const result=document.querySelector('#results')
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `<h4>Please give a valid height</h4>`;
      } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight`;
      }
      else{
        const answer=(weight / ((height * height) / 10000)).toFixed(2);
    console.log(answer)
    result.innerHTML=`Result: ${answer}`
      }


})
