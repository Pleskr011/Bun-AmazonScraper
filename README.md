A Full-Stack scraper (Backend with Bun, Frontend with vanilla JS & Vite) that can return Amazon product listings from the first page of search results for a given keyword.

<h1>SETUP</h1>
To run this project first you need to clone this repository:
    In your terminal: <code>git clone https://github.com/Pleskr011/Bun-AmazonScraper.git</code>

<h2>For the backend setup:</h2>

1. Install Bun (if it's not already installed):
    Using <code>curl -fsSL https://bun.sh/install | bash</code> for Linux and macOS.
    Or
    Using <code>powershell -c "irm bun.sh/install.ps1 | iex"</code> in a powershell terminal for Windows.
2. Install the required dependencies:
    - Go to the Amazon-scraper folder and open a terminal from there (You can open it from VSCode too.)
    - Run in the terminal:  <code>bun add axios express jsdom</code>
3. Run the backend project:
   - In the same folder run <code>bun run index.ts</code>

And that's it! The backend is already running.

<h2>For the frontend setup:</h2>

1. Install Node.js (if it's not already installed):
   - Visit the official Node.js website: https://nodejs.org.
   - Download the LTS version for your current OS and install it.
2. Install dependencies (in this case, only Vite):
    - Same as installing Bun dependencies. Run <code>npm install</code> in the frontend folder.
3. Run the frontend project:
    - In the same folder run <code>npm run dev</code>

And now the frontend app is running. 

Now, with both the backend and frontend running, go to localhost:5173 in your browser to use it.

Try to search something and look at the results! C:

<h1>ABOUT</h1>
The Amazon-scraper manages to access Amazon with only axios and a User-Agent. Since there is no proxy or - more important - a browser automation library (Selenium, Puppeteer...) this scrape tool could be banned by Amazon with a few uses (which you can workaround with a VPN, but not ideal). Still, really useful to learn from it, and can be of benefit for some use cases.


<h3>Points of interest:</h3>

- The userController.ts file in the Amazon-scraper/controllers/ folder. Contains all the logic for the scraping process.

- The products.js file in the frontend/src/ folder. It has the logic to receive and process the resulting scraping data from the backend to the frontend user.

- It has a dark mode/light mode depending on your browser configuration.

<h1>IMPROVEMENTS FOR THE FUTURE</h1>

- Solve the "Could not find a declaration file for module" errors. It needs to install types dependencies for express and jsdom.

- Add prices and URL to the received product listing.
