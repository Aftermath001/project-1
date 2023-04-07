document.addEventListener('DOMContentLoaded', function(){

    fetch(" http://localhost:3000/Doctors")
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
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <ol>
         `
         Kona.appendChild(cards);
         }
  })
 
 let form =document.getElementById("myForm");
  form.addEventListener("submit", alertFunction);
  function alertFunction() {
    alert("The form was submitted");
    form.reset();
  }
  let Doctors = 
    //filter// )
  function filterDoctors(value){
    let buttons = document.querySelectorAll(".button-value");
   //  buttons.addEventListener()
    buttons.forEach((button) => {
        //check if value is equal to innertext
       if(value.toUpperCase() == button.innerText.toUpperCase()){

           button.classList.add("active");
       }
       else{
           button.classList.remove("active");
       }
    })
    //select all cards
    let elements = document.querySelectorAll(".cards");
//loop through all cards
    elements.forEach((elements) => {
        //dispaly all cards on 'all' button click
       if (value == "All"){
           elements.classList.remove("hide")
       }
    });
}
//search button
document.getElementById("search").addEventListener("click",() =>{
 //initialization
 let submitInput = document.Elementbyid("search-input").value;
 let elements = document.querySelectorAll("Doctors-name");
 let card = document.querySelectorAll(".cards")
 //loop through the elements
 elements.forEach((element,index)=>{
    if(element.innerText.includes (searchInput.toUpperCase())){
        //dipsplay matching cards
        card[index].classList.remove("hide");
    }
 })

}
);
//Initially display all Doctors
     window.onload = () => {
   // filterDoctors ('all'
   // );
}
  
//   let form = document.getElementById("Insert")
//   form.addEventListener('book',function(event){
//        event.preventDefault()// prevents the form from auto submitting.
//       let jina = document.getElementById("name").value
//       console.log(jina);
//       let eMail = document.getElementById("email").value
//       console.log(eMail);
//       form.reset();
//   })

// for (i of doctors.data){
//     //Create card
//  let cards = document.createElement ("div");
//  //Give card speciality
//  cards.classList.add("cards","i.speciality");
//  //image div
//  let imgContainer = document.createElement("div");
//  imgContainer.classList.add("image-container");
//  //img tag
//  let image = document.createElement("img");
//  image.setAttribute("src",i.image);
//  cards.appendChild(imgContainer);

 
//  document.getElementById("Ourservices").appendChild(cards);




// }


// // document.getElementById("search").addEventListener("click",() => {
   
// //     let searchInput = document.getElementById("search-input").value;
// //     let elements = document.querySelectorAll ("Doctor-name");
// //     let card2 = document.querySelectorAll(".cards");
// //     console.log(Search-input);

     




// // }




// // )
// // window.onload = () => {
// //     filterDoctors ("All")
// }
});
function changeText(id) {
    id.innerHTML = "0797246096!";
}