import { Field } from "formik"
import Input from "./Input"

const FormField = (props) => {
  const { children, ...otherProps } = props

  return (
    <Field {...otherProps}>
      {({ field, meta: { touched, error } }) => (
        <div className="relative z-0 w-full mb-6 group">
          <Input
            className="block py-2.5 px-0 w-full font-montserrat text-lg text-neutral-800 bg-transparent  border-0 border-b-2 border-yellow-300 appearance-none  dark:border-yellow-400 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            {...field}
            {...otherProps}
          />
          <label className="peer-focus:font-medium font-montserrat absolute text-xl text-neutral-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-neutral-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            {children}
          </label>
          {touched && error ? (
            <p className="text-red-400 p-2 text-md">{error}</p>
          ) : null}
        </div>
      )}
    </Field>
  )
}

export default FormField
