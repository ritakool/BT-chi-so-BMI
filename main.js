function trand(){
    let a=document.getElementById('weight').value;
    let b=document.getElementById('height').value;
    let c= a / (Math.pow(b,2));
    console.log('data',c);
    if (c<18){
        document.write("Underweight");
    } else if (c<25){
        document.write("Normal");
    } else if (c<30){
        document.write("Overweight");
    }
    else {
        document.write("Obese");
    }
}