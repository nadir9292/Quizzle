import NavBar from "../src/components/NavBar"
import { Formik } from "formik"
import {
  pseudoValidator,
  passwordValidator,
} from "../src/components/validators/validators"
import * as yup from "yup"
import { useCallback, useContext, useState } from "react"
import { AppContext } from "../src/components/AppContext"
import Text from "../src/components/Text"
import FormField from "../src/components/formUI/FormField"
import Button from "../src/components/Button"
import Link from "next/link"
import { makeClient } from "../src/services/makeClient"
import { useRouter } from "next/router"
import Popup from "../src/components/Popup"

const initialValues = {
  pseudo: "",
  password: "",
}
const validationSchema = yup.object().shape({
  pseudo: pseudoValidator.required(),
  password: passwordValidator.required(),
})

const Login = () => {
  const router = useRouter()
  const [error, setError] = useState("")
  const { jwt, logout, saveJwt } = useContext(AppContext)
  const goToHomePage = () => {
    router.push("/")
    // attendre une petite seconde pour que la redirection soit effective
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }
  const handleFormSubmit = useCallback(async ({ pseudo, password }) => {
    try {
      setError(null)
      const {
        data: { jwt, userId },
      } = await makeClient().post("/login", { pseudo, password })

      if (!jwt) {
        throw new Error("Missing jwt")
      }

      saveJwt(jwt, userId)
      setError(null)
      goToHomePage()
    } catch (err) {
      const { response: { data } = {} } = err
      if (data.error) {
        setError(data.error)
        return
      }
      setError("Something went wrong...")
    }
  }, [])

  return (
    <>
      <NavBar jwt={jwt} logout={logout} />
      <div className="max-w-2xl  mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-4xl lg:px-8">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, isValid, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              {error && <Popup msg={error} btnMsg="Retry" color="bg-red-400" />}
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
                variant="btnValidation"
                size="lg"
              >
                Sign Up
              </Button>
              <Text variant="info" sizes="sm">
                Don't have an account ?&nbsp;
                <Link href="/register">
                  <Text variant="link">Sign Up</Text>
                </Link>
              </Text>
            </form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default Login
