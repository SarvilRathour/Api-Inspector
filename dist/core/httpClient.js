// const axios = require('axios').default;
import axios from "axios";
// import { console } from "node:inspector/promises";
export var Method;
(function (Method) {
    Method["Post"] = "post";
    Method["Get"] = "get";
})(Method || (Method = {}));
export async function Get({ url }) {
    try {
        console.log(`Sending Get request to:${url}`);
        const response = await axios.get(url);
        console.log(`Response Status:${response.status}`);
        console.log(response.data);
    }
    catch (error) {
        console.log(error.message);
    }
}
export async function Post({ url, body }) {
    try {
        console.log(`Sending POST request to:${url}`);
        if (!body) {
            console.log("no body provided");
            return;
        }
        const parsed_body = JSON.parse(body);
        const data = await axios.post(url, parsed_body);
        console.log("Response Status:", data.status);
        console.log("Response Data:", data.data);
    }
    catch (error) {
        console.log(error.message);
    }
}
