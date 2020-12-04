// importing Glossary
// import GlossaryItem from "./glossary";

let container = document.querySelector("#query-results");

document.searchGlossary.query.addEventListener("input", () => {
    container.innerHTML = ""

    if (document.searchGlossary.query.value !== "") {
        terms.forEach((term) => {
            if (term.term.includes(document.searchGlossary.query.value)) {
                container.innerHTML += `
                    <div class="query">
                        <div class="dot-pulse"></div>
                        <h1 class="query-keyword"
                            >${term.term}</h1>
                        <p class="reference-section">
                            according to 
                            <span class="reference-item">${term.citation.author.join(", ")}</span>
                        </p>
                        <p class="query-definition">
                            ${term.definition}
                        </p>
                    </div>
                `;
            }
        });
    } else {
        container.innerHTML = "<h1>type the keyword for insights drillin' </h1>"
    }
});