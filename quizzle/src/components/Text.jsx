import classNames from "classnames"

const className = "font-bold"

const variants = {
  login_register:
    "text-neutral-800 underline decoration-yellow-400 underline-offset-2 font-montserrat font-bold text-center mb-10",
  nav_bar_text: "text-zinc-200 hover:text-zinc-300 text-center",
  popup:
    "flex justify-center text-gray-900 font-semibold font-family: Consolas",
  info: "text-neutral-800 font-montserrat font-medium pt-2 mt-2 text-center",
  link: "underline underline-offset-2 text-yellow-500 font-semibold font-montserrat",
  card_name: "text-amber-500 font-bold text-left",
  card_title: "text-zinc-100 font-montserrat font-bold text-center",
  card_category: "text-zinc-200 text-left",
  card_price: "text-zinc-200 text-left",
  card_rating: "text-zinc-200 text-center",
  detail_name: "text-amber-500 font-bold text-left",
  detail_category: "text-zinc-200 text-left my-2",
  detail_description: "text-zinc-200 text-left mt-5",
  detail_price: "text-zinc-200 text-left",
  detail_rating: "text-zinc-200 text-center",
}

const sizes = {
  sm: "text-xs",
  md: "text-md",
  lg: "text-lg",
  xl: "text-3xl",
  xxl: "text-5xl",
}

const Text = (props) => {
  const { variant, size, ...otherProps } = props

  return (
    <h1
      {...otherProps}
      className={classNames(className, variants[variant], sizes[size])}
    />
  )
}

export default Text
