const data = {
  product: [
    {
      name: "Kamonggay",
      image: "./images/kamonggay.jpg",
      description: "Utanon",
      price: "15",
    },
    {
      name: "Alugbati",
      image: "./images/alugbati.jpg",
      description: "Utanon",
      price: "25",
    },
    {
      name: "Kalabasa",
      image: "./images/kalabasa.jpg",
      description: "Utanon",
      price: "35",
    },
    {
      name: "Okra",
      image: "./images/okra.jpg",
      description: "Utanon",
      price: "5",
    },
    {
      name: "Saloyot",
      image: "./images/saloyot.jpg",
      description: "Utanon",
      price: "45",
    },
    {
      name: "Sikwa",
      image: "./images/sikwa.jpg",
      description: "Utanon",
      price: "55",
    },
    {
      name: "Sili",
      image: "./images/sili.jpg",
      description: "Utanon",
      price: "60",
    },
    {
      name: "Talong",
      image: "./images/talong.jpg",
      description: "Utanon",
      price: "75",
    },
  ],
};

gulayCount = document.querySelectorAll(".gulay").length;

for (var i = 0; i < gulayCount; i++) {
  // click dectection
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    gulayId = this.id;
    displayId(gulayId);
  });
}
//  initialize variable
var id0 = 0;
var id1 = 0;
var id2 = 0;
var id3 = 0;
var id4 = 0;
var id5 = 0;
var id6 = 0;
var id7 = 0;
var totalOrder = 0;
document.querySelector(".navigation>p").classList.add("hide");

//order counter function
function displayId(gulayId) {
  switch (gulayId) {
    case "0":
      id0 += 1;
      console.log(id0);
      break;
    case "1":
      id1 += 1;
      console.log(id1);
      break;
    case "2":
      id2 += 1;
      console.log(id2);
      break;
    case "3":
      id3 += 1;
      console.log(id3);
      break;
    case "4":
      id4 += 1;
      console.log(id4);
      break;
    case "5":
      id5 += 1;
      console.log(id5);
      break;
    case "6":
      id6 += 1;
      console.log(id6);
      break;
    case "7":
      id7 += 1;
      console.log(id7);
      break;

    default:
      break;
  }
  totalOrder = id0 + id1 + id2 + id3 + id4 + id5 + id6 + id7;
  console.log("Total order: " + totalOrder);

  document.querySelector(".navigation>p").innerHTML = totalOrder;

  if (totalOrder > 0) {
    document.querySelector(".navigation>p").classList.remove("hide");
  }
}
