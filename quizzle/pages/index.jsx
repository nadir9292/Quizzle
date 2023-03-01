import { useContext } from "react"
import { AppContext } from "../src/components/AppContext"
import NavBar from "../src/components/NavBar"

const Home = () => {
  const { jwt, logout } = useContext(AppContext)

  return (
    <>
      <NavBar jwt={jwt} logout={logout}></NavBar>
      <div>
        <h1>Wellcome</h1>
      </div>
    </>
  )
}

export default Home
