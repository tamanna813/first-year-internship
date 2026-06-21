const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote() {

    try {

        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        );

        const data = await response.json();

        quote.innerText = `"${data.quote}"`;
        author.innerText = `— ${data.author}`;

    } catch(error) {

        quote.innerText =
            "Unable to fetch quote.";
    }
}

function copyQuote() {

    navigator.clipboard.writeText(
        quote.innerText + " " + author.innerText
    );

    alert("Quote copied!");
}

function shareQuote() {

    const text =
        quote.innerText + " " + author.innerText;

    const url =
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
}

getQuote();