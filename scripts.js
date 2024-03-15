
gridmaker = function(number){
    const container = document.querySelector(".container");
    container.innerHTML=''
    for (i=0;i<number;i++){
    divrow = document.createElement('div');
    divrow.classList.add('divrow');
    divrow.style.width = '1000px'
    divrow.style.height = 1000/number + 'px'
    for (j=0;j<number;j++){
        divcube = document.createElement('div');
        divcube.classList.add('divcube');
        divcube.style.width = 1000/number + 'px';
        divcube.style.height = 1000/number + 'px';
        divrow.appendChild(divcube);
    }
    container.appendChild(divrow);
}}

 function generateRandomColor() {
                // Generate random R, G, and B values between 0 and 255
                var r = Math.floor(Math.random() * 256);
                var g = Math.floor(Math.random() * 256);
                var b = Math.floor(Math.random() * 256);

                // Convert RGB values to hexadecimal format
                var hexColor = "#" + r.toString(16) + g.toString(16) + b.toString(16);

                return hexColor;
            }

gridmaker(16);
   
const btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
  var userInput = prompt("Please enter number of squares per side :");
  if (userInput !== null) {
    alert("You entered: " + userInput);
  }
  gridmaker(userInput);

})


// Add event listener for hover
var divcubes = document.querySelectorAll(".divcube");
    
divcubes.forEach((element)=>{
    element.addEventListener("mouseenter", function() {
        element.style.backgroundColor = generateRandomColor(); // Change background color on hover
    });   
})

    