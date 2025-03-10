import { createContext, useState } from "react";

export let mycontext=createContext();

import React from 'react'

const GlobalContext = ({children}) => {

    let [token,setToken]=useState();
    let [allbootcamps,setAllbootcamps]=useState()


  return (
    <mycontext.Provider value={{token,setToken,allbootcamps,setAllbootcamps}}>{children}</mycontext.Provider>
  )
}

export default GlobalContext

