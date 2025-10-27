import {Method,Get,Post} from "./httpClient.js"
export function parse(data:string){
  const inputs:string[]=data.split(' ');
  // console.log(inputs);   Result--[ 'api', 'GET', 'https://reqres.in/api/users' ]
  if (inputs[0]=="api"){
    const method=inputs[1].toLowerCase();
    const url=inputs[2];
    const data=inputs[3];
    if(method===Method.Post){
    if (data==="--data"){
    const body=inputs[4];
      Post({url,body});
      }else{
        Post({url});
      }
    }else if (method===Method.Get){
      Get({url});
    }
  }
}
