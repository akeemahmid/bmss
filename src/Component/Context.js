import React, { createContext, useContext, useEffect, useState } from 'react'


const Bmsdata = createContext()
const Context = ({children}) => {
   const [currency, setCurrency] = useState('USD')
   const [symbol, setSymbol] = useState('$')
   useEffect(() => {
      if (currency === 'USD') {
        setSymbol('$')
      }
      else{
        setSymbol('#')
      }
   
    
   }, [currency])
   
  return (
    <Bmsdata.Provider value={{currency, setCurrency, symbol}}>
        {children}
    </Bmsdata.Provider>
  )
}

export default Context
export const ContextApi = (() =>{
     return useContext(Bmsdata)
}

)