// importing Glossary
// import GlossaryItem from "./glossary";

let container = document.querySelector("#query-results");

document.addEventListener("DOMContentLoaded", () => {
    terms.forEach(term => {
        container.innerHTML += `
            <div class="query">
                <h1 class="query-keyword">${term.term}</h1>
                <p class="reference-section">
                    According to 
                    <span class="reference-item">${term.citation.author}</span>
                </p>
                <p class="query-definition">
                    ${term.definition}
                </p>
            </div>`;
    });
});