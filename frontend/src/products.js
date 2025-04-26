export function getProducts(element) {
    // Get the form
    const form = document.getElementById('searcher')
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default page reload
        const keywords = event.target.keywords.value; // Access the input value
        try {
            fetch(`http://localhost:8080/api/scrape/${keywords}`) //Local API endpoint
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                const products = Array.isArray(data) ? data : []; //Check if data is an array
                element.innerHTML = ''; // Clear previous results
                products.forEach(product => {
                    //Proceeds to create an HTML element for each product 
                    const productCard = document.createElement('div')
                    productCard.classList.add('product')
                    productCard.innerHTML = `
                    <img src=${product.Image} alt=${product.Title} title=${product.Title}>
                    <h3>${product.Title}</h3>
                    <div class="product-meta">
                    <p><strong>Rating:</strong><span class="icon">⭐</span> ${product.Rating}</p>
                    <p><strong>Reviews:</strong><span class="icon">📝</span> ${product.Reviews}</p>
                    </div>
                    `;
                    element.appendChild(productCard); //Add the product HTML to the DOM
                })
            })
        } catch (error) {
            console.error('Error fetching data: ', error);
            element.innerHTML = '<p>Failed to load products. Please try again.</p>';
        }
    });
}