
    fetch("http://localhost:3000/Doctors")
    .then (response => response.json())
    .then (data =>{
     const Kona = document.querySelector(".services");
     for(let i=0;i<data.length;i++){
         let name = data[i].name;
         let gender = data[i].gender;
         let phone=data[i].phone;
         let price = data[i].price;
         let image= data[i].image;
         const cards =document.createElement("div");
         cards.classList.add('cards');
         cards.innerHTML+=`
         <ol><p style = "color:white">${name}</p>
         <p style = "color:white">${gender}</p>
         <p style = "color:white">${phone}</p>
         <p style = "color:white">${price}</p>
         <img src='${image}'style= "height:200px;width:200px" ><ol>
         `
         Kona.appendChild(cards);
         }
  })

