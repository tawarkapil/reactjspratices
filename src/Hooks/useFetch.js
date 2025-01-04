import { useEffect,useState } from "react";


export default function useFetch(url){
    
    const [data,setData] = useState(null); 
    
    const [err,setError] =  useState(null);  
    
    useEffect(()=>{
        fetch(url).then((res)=>res.json())
        .then((result)=> setData(result))
        .catch((err)=>setError(err));
    },[url])
    
    return [data,err];
} 