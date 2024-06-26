import axios from "axios"
import { createContext, useCallback, useEffect, useState } from "react"

export const AppContext = createContext(null)

const AppContextProvider = (props) => {
  const [jwt, setJwt] = useState(null)
  useEffect(() => setJwt(localStorage.getItem("access_token")), [])
  const [userId, setUserId] = useState(null)
  useEffect(() => setUserId(localStorage.getItem("id")), [])
  const [user, setUser] = useState(null)
  useEffect(() => setUser(localStorage.getItem("user")), [])
  const [isError, setIsError] = useState(false)
  const [role, setRole] = useState(null)
  useEffect(() => setRole(localStorage.getItem("role")), [])

  const saveJwt = useCallback((jwt, userId) => {
    localStorage.setItem("access_token", jwt)
    localStorage.setItem("id", userId)
    setJwt(jwt)
    setUserId(userId)
  }, [])

  const saveUser = useCallback((user) => {
    if (user) {
      localStorage.setItem("user", user.name)
      setUser(user.name)
      localStorage.setItem("role", user.role)
      setRole(user.role)
    } else {
      return console.error("error in user data name !")
    }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("id")
    localStorage.removeItem("user")
    setJwt(null)
    setUserId(null)
    setUser(null)
    setRole(null)
  }, [])

  const changeIsError = () => {
    setIsError(!isError)
  }

  // surveiller les changements dans le localStorage et mettre à jour les valeurs du contexte en conséquence
  useEffect(() => {
    const updateContext = () => {
      setJwt(localStorage.getItem("access_token"))
      setUserId(localStorage.getItem("id"))
      setUser(localStorage.getItem("user"))
      setRole(localStorage.getItem("role"))
    }
    window.addEventListener("storage", updateContext)
    return () => window.removeEventListener("storage", updateContext)
  }, [])

  const [levels, setLevels] = useState([])
  useEffect(() => {
    const fetchLevels = async () => {
      if (!jwt) return
      try {
        const response = await axios.get(
          "http://localhost:3002/api/v1/levels",
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        )
        setLevels(response.data)
      } catch (error) {
        console.error("Error fetching levels:", error)
        setLevels([])
      }
    }

    fetchLevels()
  }, [jwt])

  const [domains, setDomains] = useState([])
  useEffect(() => {
    const fetchLevels = async () => {
      if (!jwt) return
      try {
        const response = await axios.get(
          "http://localhost:3002/api/v1/domains",
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        )
        setDomains(response.data)
      } catch (error) {
        console.error("Error fetching domains:", error)
        setDomains([])
      }
    }

    fetchLevels()
  }, [jwt])

  return (
    <AppContext.Provider
      {...props}
      value={{
        saveJwt,
        setUserId,
        logout,
        jwt,
        userId,
        saveUser,
        user,
        isError,
        changeIsError,
        role,
        levels,
        domains,
      }}
    />
  )
}

export default AppContextProvider
