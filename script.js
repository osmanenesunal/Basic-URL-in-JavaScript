const baseUrl = "https://localhost";
const urlParams ={
    "type" : "authorization_code",
    "code" : "2324"
};
const url = new URL(baseUrl);
url.search = new URLSearchParams(urlParams)
url.port = "2000"
url.toString(); 