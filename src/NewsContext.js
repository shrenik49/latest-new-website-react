import React,{createContext, useEffect, useState} from "react";
import axios from "axios";

export const NewsContext=createContext()

export const NewsContextProvider=(props)=>{
    const [data,setData]=useState();
    const apiKey ="5271d8e1c55f428a82402576b3413a02";

    useEffect(()=>{
        axios
        .get(
        `https://newsapi.org/v2/everything?q=apple&from=2022-04-09&to=2022-04-09&sortBy=popularity&apiKey=${apiKey}`
        )
        .then((response)=>setData(response.data))
        .catch((error)=>console.log(error));
    },[])

    return(
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    );
};