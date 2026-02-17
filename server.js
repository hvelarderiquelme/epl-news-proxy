import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = expres();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.NEWS_API_KEY;

//EPL News endpoint
app.get("/epl-news", async (req, res) => {
    try{
        const response = await fetch(`https://newsapi.org/v2/everything?q=English%20Premier%20League&language=en&sortBy=publishedAt&apiKey=${API_KEY}`);
        const data = await response.json();
        res.json(data);
    }catch(error){
        res.status(500).json({error:"Failed to fetch EPL news"});
    }
});
app.listen(PORT,() =>{
    console.log(`EPL Proxy running on port ${PORT}`);
});
