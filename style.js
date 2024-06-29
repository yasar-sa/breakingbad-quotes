let quote=document.getElementById("quote")
let author=document.getElementById("author")

const api_url= "https://api.breakingbadquotes.xyz/v1/quotes"

async function getQuote(url){
    const response= await fetch(url)
    var data = await response.json()

    quote.innerText=data[0].quote
    author.innerText= data[0].author
}

getQuote(api_url);

function tweet() {
  window.open("https://twitter.com/intent/tweet?text="+ quote.innerText +"------by" + author.innerText, "Tweet Window", "width=600,height=300");
}




// let quote = document.getElementById("quote");
// let author = document.getElementById("author");

// const api_url = "https://api.breakingbadquotes.xyz/v1/quotes";

// async function getQuote(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     var data = await response.json();
//     quote.textContent = data[0].quote; // Assuming the API returns an array of quotes
//     author.textContent = data[0].author; // Assuming the API returns an array of quotes
//   } catch (error) {
//     console.error('Error fetching the quote:', error);
//     quote.textContent = "Could not fetch quote. Please try again later.";
//     author.textContent = "";
//   }
// }

// getQuote(api_url);
