// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement("div"),
    dateSpan = document.createElement("span"),
    headerTag = document.createElement("h1"),
    temp = document.createElement("span");

    dateSpan.textContent = "SMARCH 28, 2019";
    headerTag.textContent = "Lambda Times";
    temp.textContent = "98°"
    header.classList.add("header");
    dateSpan.classList.add("date");
    temp.classList.add("temp");

    header.appendChild(dateSpan);
    header.appendChild(headerTag);
    header.appendChild(temp);
    
    return header;

}
const headerEntryPoint = document.querySelector(".header-container");
headerEntryPoint.appendChild(Header());
