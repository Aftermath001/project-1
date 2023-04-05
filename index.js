

    fetch("http://localhost:3000/Doctors")
    .then (response => response.json())
    .then (data =>{
     const Kona = document.querySelector(".services");
     for(let i=0;i<data.length;i++){
         let name = data[i].name;
         let gender = data[i].gender;
         let speciality=data[i].speciality;
         let price = data[i].price;
         let image= data[i].image;
         const cards =document.createElement("div");
         cards.classList.add('cards',"i.category");
         cards.innerHTML+=`
         <ol>
         <img src='${image}'style= "height:200px;width:200px" >
         <p style = "color:white">${name}</p>
         <p style = "color:white">${gender}</p>
         <p style = "color:white">${speciality}</p>
         <p style = "color:white">${price}</p>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         <ol>
         `
         Kona.appendChild(cards);
         }
  })


function filterDoctors(value){

     let buttons = document.querySelectorAll(".button-value");
      
     buttons.forEach((button) => {

        if(value.toUpperCase() == button.innerText.toUpperCase()){

            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
     })
     let elements = document.querySelectorAll(".cards");

     elements.forEach((elements) => {
         
        if (value == "All"){
            elements.classList.remove("hide")
        }
     })
}
document.getElementById("Search").addEventListener("click",() => {
   
    let searchInput = document.getElementById("Search-input").value;
    let elements = document.querySelectorAll ("Doctor-name")

     




}




)
window.onload = () => {
    filterDoctors ("All")
}

  