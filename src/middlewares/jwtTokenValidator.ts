const { auth } = require("express-oauth2-jwt-bearer");

const jwtTokenValidator = auth({
    audience: "https://www.qcg-api.com",
    issuerBaseURL: "https://odd-bush-5963.us.auth0.com"
});

export { jwtTokenValidator };