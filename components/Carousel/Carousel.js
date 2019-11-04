/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let carouselContainer = document.querySelector(".carousel-container")
function carousel() {
  const carousel = document.createElement("div"),
    leftbutton = document.createElement("div"),
    img1 = document.createElement("img"),
    img2 = document.createElement("img"),
    img3 = document.createElement("img"),
    img4 = document.createElement("img"),
    rightbutton = document.createElement("div");

  carousel.appendChild(leftbutton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightbutton);

  //classes
  carousel.classList.add("carousel");
  leftbutton.textContent = "<"
  rightbutton.textContent = ">"
  leftbutton.classList.add("left-button");
  rightbutton.classList.add("right-button");
  img1.classList.add("hide-btn");
  img2.classList.add("hide-btn");
  img3.classList.add("hide-btn");
  img4.classList.add("hide-btn");

  //content

  img1.src = "./assets/carousel/mountains.jpeg"
  img2.src = "./assets/carousel/computer.jpeg"
  img3.src = "./assets/carousel/trees.jpeg"
  img4.src = "./assets/carousel/turntable.jpeg"

img1.classList.toggle('toggle-on');
  leftbutton.addEventListener("click", () => {
    if (img1.classList.length != 2 && img2.classList.length != 2 && img3.classList.length != 2 & img4.classList.length != 2) {
      img1.classList.toggle('toggle-on')
      console.log(img1.classList)
    } else if (img2.classList.length != 2 && img1.classList.length == 2 && img3.classList.length != 2) {
      img1.classList.toggle('toggle-on');
      img2.classList.toggle('toggle-on');
      console.log(img1.classList)
      console.log(img2.classList)
    } else if (img1.classList.length != 2 && img2.classList.length == 2 && img3.classList.length != 2) {
      img2.classList.toggle('toggle-on');
      img3.classList.toggle('toggle-on');
      console.log(img2.classList.length)
    }else if (img1.classList.length != 2 && img2.classList.length != 2 && img3.classList.length == 2) {
      img3.classList.toggle('toggle-on');
      img4.classList.toggle('toggle-on');
      console.log(img2.classList.length)
    } else{
      img1.classList.toggle('toggle-on');
      img4.classList.toggle('toggle-on');
    }
  });
  rightbutton.addEventListener("click", () => {
    if (img1.classList.length != 2 && img2.classList.length != 2 && img3.classList.length != 2 & img4.classList.length != 2) {
      img1.classList.toggle('toggle-on')
      console.log(img1.classList)
    } else if (img2.classList.length != 2 && img1.classList.length == 2 && img3.classList.length != 2) {
      img1.classList.toggle('toggle-on');
      img4.classList.toggle('toggle-on');
      console.log(img1.classList)
      console.log(img2.classList)
    } else if (img1.classList.length != 2 && img2.classList.length == 2 && img3.classList.length != 2) {
      img2.classList.toggle('toggle-on');
      img1.classList.toggle('toggle-on');
      console.log(img2.classList.length)
    }else if (img1.classList.length != 2 && img2.classList.length != 2 && img3.classList.length == 2) {
      img3.classList.toggle('toggle-on');
      img2.classList.toggle('toggle-on');
      console.log(img2.classList.length)
    } else{
      img3.classList.toggle('toggle-on');
      img4.classList.toggle('toggle-on');
    }
    
  });

  return carousel;

}

carouselContainer.append(carousel());

