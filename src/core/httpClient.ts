// const axios = require('axios').default;
export enum Method{
  Post="post",
  Get="get",
}
interface RequestPram{
  url:string,
  body?:string,
}
export async function Get({url}:RequestPram){
    console.log(url);
}
export async function Post({url,body}:RequestPram){
  console.log(url);
  console.log(body);
}


