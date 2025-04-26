import { Request, Response } from "express";
import axios from "axios"
import { JSDOM } from "jsdom";

export const getProducts = async (req: Request, res: Response) => {
  try {
    // Amazon can ban you even with a few requests. 
    // Had to add the User-Agent (and use a VPN in some cases) to keep testing the code.  
    const headers: Record<string, string> = {
      "User-Agent": 
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0",
    };
    //Replace all spaces of the received string with a "+"
    const rawKeywords:string = req.params.keyword; 
    const formattedKeywords:string = rawKeywords.replace(/ /g, "+"); 
    console.log("Retrieving products for: " + formattedKeywords);
    const response = await axios.get("https://www.amazon.com/s?k="+ formattedKeywords, { headers });
    const html = response.data;
    //Receive the HTML and create a JSDOM object
    const dom = new JSDOM(html);
    const document = dom.window.document;
    //Get the products' elements
    const list = document.querySelectorAll('[data-component-type="s-search-result"]'); 
    //Define the index of the product
    let index = 1;
    //Define the type of the products array
    interface Products { 
      Title: string;
      Rating: string;
      Reviews: string;
      Image: string;
    }
    const products: Products[] = []; 

    //And start iterating each product element
    list.forEach((product) => {
      //Check if the list has - for whatever reason - null products
      if (!product) {
        console.log("No product");
        return;} 

      // Elements can have one or two h2 titles, being the second one the product's title/name.
      const h2Array = [...product.querySelectorAll("h2")];
      const title:string = h2Array.at(-1)?.textContent.trim();
      const rating:string = product.querySelector("I")?.textContent?.trim() || "No rating available";
      const reviews:string = product.querySelector('[data-csa-c-slot-id="alf-reviews"]')?.textContent?.trim() || "No reviews available";
      const image:string = product.querySelector(".s-image")?.getAttribute("src") || "Couldn't find image";
      //Save the product data into an object
      const productData: Products = { 
        Title:title,
        Rating:rating,
        Reviews:reviews,
        Image:image,
      };

      products.push(productData); //And push it into the products array
      index++;
    })
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Server connection error" });
  }
}