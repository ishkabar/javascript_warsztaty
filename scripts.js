var arr = [1,2,3,4,5];


function validate(force, mass, acceleration) {
    if(mass * acceleration == force) return true;
    else return false;
}

function calculate() {
    force = document.getElementById("force").value;
    mass = document.getElementById("mass").value;
    acc = document.getElementById("acc").value;

    if (force != "" && mass != "" && acc != "") {
        
        if (validate(force, mass, acc)) {
            alert((validate(force, mass, acc)))
          }
        else if (!(validate(force, mass, acc))) {
            alert((validate(force, mass, acc)) + '\nPoprawna wartosc to: ' + mass * acc);
          }

    } 
        else alert('Wprowadz wartosci');
  }


function act() {
    console.log("click");
}
var button = document.getElementById("button1")
if (button) {
    button.addEventListener("click", act);
}


function mapping(){
    var ret = arr.map(x=>x+1);
    console.log(arr);
    console.log(ret);
}

function filter() {
    var ret = arr.filter(i => i >= 3);
    console.log(arr);
    console.log(ret);
}


function car() {
    var car = {
        make: "Koenigsegg ",
        model: "Jesko",
        drive: function () {console.log("Driving")}
    }
    car.drive()
}