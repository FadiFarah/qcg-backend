"use strict";
const express = require("express")
const app = express();
const { auth } = require("express-openid-connect");

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: "Y59xQUUlJI9gQ6LLnaNeS67fyx3muK1ygXWdsQIE4zspw6kkc0J9OZHBKKujU7ju",
    baseURL: "https://blueberry-tart-87900.herokuapp.com",
    clientID: "0MwOH7bgkNl8oWE2tywjwsPrKRR75KG3",
    issuerBaseURL: "https://frosty-snowflake-1729.us.auth0.com"
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (request, response) => {
    response.send(request.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.listen(3000, function(){
    console.log("Server Started on Port 3000");
});
