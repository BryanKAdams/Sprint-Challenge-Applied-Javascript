// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function ArticleCards(item) {
    const newCard = document.createElement("div"),
        headline = document.createElement("div"),
        author = document.createElement("div"),
        imageContainer = document.createElement("div"),
        newImage = document.createElement("img"),
        authorsName = document.createElement("span");

    newCard.appendChild(headline);
    newCard.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(newImage);
    author.appendChild(authorsName);

    //classes
    newCard.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imageContainer.classList.add("img-container");
    newImage.src = item.authorPhoto;
    headline.textContent = item.headline;
    authorsName.textContent = 'by ' + item.authorName;


    //content 



    return newCard;
}
const cardEntryPoint = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        Object.values(response.data.articles).forEach(item => {
            item.forEach(articles => {
                cardEntryPoint.append(ArticleCards(articles))
            })
        })
    })
    .catch(error => {
        console.log(error);
    })


//The Object.values() method returns an array of a given object's own enumerable property values, 
//in the same order as that provided by a for...in loop (the difference being that a for-in loop 
// enumerates properties in the prototype chain as well).

//Thank goodness for MDNs and Stackoverflow

//

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

//https://stackoverflow.com/questions/14929819/why-is-there-no-foreach-method-on-object-in-ecmascript-5