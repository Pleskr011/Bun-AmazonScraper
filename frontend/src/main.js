import './style.css'
import { getProducts } from './products.js'

document.querySelector('#app').innerHTML = `
  <main>
    <h1>Amazon Scraper</h1>
    <form id="searcher">
      <input type="text" id="search" name="keywords" placeholder="Search for a product...">
      <span class="search-icon">🔍</span>
      <div class="card">
        <button id="search" type="submit">Search</button>
      </div>
    </form>
    <div class="products-container"></div>
  </main>
  
`
getProducts(document.querySelector('.products-container'))
