// const axios = require('axios').default;
export var Method;
(function (Method) {
    Method["Post"] = "post";
    Method["Get"] = "get";
})(Method || (Method = {}));
export async function Get({ url }) {
    console.log(url);
}
export async function Post({ url, body }) {
    console.log(url);
    console.log(body);
}
