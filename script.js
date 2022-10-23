const newQuoteButton = document.getElementById('js-new-quote-btn')

newQuoteButton.addEventListener('click', getQuote)

const endpoint = 'https://api.quotable.io/random?minLength=100&tags=history';

async function getQuote() {
    try {
        const response = await fetch(endpoint)

        if (!response.ok){
            throw Error(response.statusText)
        }

        const json = await response.json();
        displayQuote(json.content)
        displayAuthor(json.author)
    } catch (err) {
        console.log(err)
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote) {
    const quoteText = document.getElementById('js-quote-text')
    quoteText.textContent = quote;
}

function displayAuthor(author) {
    const quoteAuthor = document.getElementById('js-author-text')
    quoteAuthor.textContent = '- '+author;
}

getQuote();