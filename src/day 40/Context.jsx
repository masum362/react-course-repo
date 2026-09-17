import { createContext } from "react"

export const userContext = createContext(null)

const ContexProvider = ({children}) => {
    const user = {
        id:1,
        name:"Riyad",
        phone:"094043403940"
    }
  return (
     <userContext.Provider value={user}>
      {children}
    </userContext.Provider>
  )
}

export default ContexProvider