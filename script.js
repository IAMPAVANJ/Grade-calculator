let button = document.getElementById('btn')

//marks
let english = document.getElementById('english')
let math = document.getElementById('math')
let physics = document.getElementById('physics')
let chemistry = document.getElementById('chemistry')
let computer = document.getElementById('computer')

//grade total and average
let gradeVal = document.getElementById('final-grade')
let average = document.getElementById('grade-average')
let total = document.getElementById('grade-total')

button.addEventListener('click',function calculateGrade(){
    let totalValue
    let averageValue;
    let grade;
    if(english.value!=="" || math.value!=="" || physics.value!=="" || chemistry.value!=="" || computer.value!==""){
        totalValue = parseInt(math.value)+parseInt(english.value)+parseInt(physics.value)+parseInt(chemistry.value)+parseInt(computer.value)
    }
    total.innerHTML = `<p>Total is: ${totalValue}</p>`
    averageValue = totalValue/5;
    average.innerHTML = `<p>Total is: ${averageValue}</p>`

    grade = (totalValue/500)*100;
    if(grade>=90){
        gradeVal.innerHTML = "A"
    }else if(grade>=80 && grade<=89){
        gradeVal.innerHTML = `<p>you Got A grade</p>`
    }else if(grade>=70 && grade<=79){
        gradeVal.innerHTML = `<p>you Got B grade</p>`
    }else if(grade>=60 && grade<=69){
        gradeVal.innerHTML = `<p>you Got C grade</p>`
    }else if(grade>=35 && grade<=59){
        gradeVal.innerHTML = `<p>you Got D grade</p>`
    }else{
        gradeVal.innerHTML = `<p>you are Failed</p>`
    }

})


