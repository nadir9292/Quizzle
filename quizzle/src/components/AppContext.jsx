import { createContext, useCallback, useEffect, useState } from "react"

export const AppContext = createContext(null)

const AppContextProvider = (props) => {
  const [jwt, setJwt] = useState(null)
  useEffect(() => setJwt(localStorage.getItem("session_jwt")), [])
  const [userId, setUserId] = useState(null)
  useEffect(() => setUserId(localStorage.getItem("id")), [])

  const saveJwt = useCallback((jwt, userId) => {
    localStorage.setItem("session_jwt", jwt)
    localStorage.setItem("id", userId)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem("session_jwt")
    localStorage.removeItem("id")
    setJwt(null)
    setUserId(null)
  }, [])

  return (
    <AppContext.Provider
      {...props}
      value={{ saveJwt, setUserId, logout, jwt, userId }}
    />
  )
}

export default AppContextProvider
