import NavBar from "../src/components/NavBar"
import { Field, Formik } from "formik"
import FormField from "../src/components/formUI/FormField"
import Button from "../src/components/Button"
import Text from "../src/components/Text"
import {
  pseudoValidator,
  passwordValidator,
} from "../src/components/validators/validators"
import * as yup from "yup"
import { useCallback, useContext, useState } from "react"
import { makeClient } from "../src/services/makeClient"
import { AppContext } from "../src/components/AppContext"
import Link from "next/link"
import Popup from "../src/components/Popup"

const initialValues = {
  pseudo: "",
  password: "",
}
const validationSchema = yup.object().shape({
  pseudo: pseudoValidator.required(),
  password: passwordValidator.required(),
})

const Register = () => {
  const { jwt, logout } = useContext(AppContext)
  const [error, setError] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const handleFormSubmit = useCallback(async ({ pseudo, password }) => {
    try {
      setError(null)
      const { data } = await makeClient().post("/register", {
        pseudo,
        password,
      })
      console.log("Data = " + data)
    } catch (err) {
      const { response: { data } = {} } = err
      if (data.error) {
        setError(data.error)
        console.log("Data error = " + data.error)
        return
      }
      setError("Something went wrong...")
    }
  }, [])

  return (
    <div className="bg-mobile bg-cover md:bg-normal md:bg-cover h-screen">
      <NavBar jwt={jwt} logout={logout} />
      <div className="flex justify-center mt-20">
        <div className="bg-zinc-100 shadow w-2/3 md:w-1/2 lg:w-1/3 h-2/3 md:h-96 p-5">
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ isSubmitting, isValid, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                {error && (
                  <Popup btnMsg="Retry" msg={error} color="bg-red-400" />
                )}
                {showPopup && !error && (
                  <Popup
                    msg="Your account has been created 🎉"
                    btnMsg="OK"
                    color="bg-green-400"
                  />
                )}
                <Text variant="login_register" size="xl">
                  Welcome
                </Text>
                <FormField name="pseudo" type="text" placeholder=" ">
                  Pseudo
                </FormField>
                <FormField name="password" type="password" placeholder=" ">
                  Password
                </FormField>
                <Button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  onClick={() => setShowPopup(true)}
                  variant="btnValidation"
                  size="lg"
                >
                  Sign Up
                </Button>
                <Text variant="info" sizes="sm">
                  You already have an account ?&nbsp;
                  <Link href="/register">
                    <Text variant="link">Sign in</Text>
                  </Link>
                </Text>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Register
