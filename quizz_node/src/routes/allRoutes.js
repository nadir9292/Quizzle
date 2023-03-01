import questionRoute from "./questionRoute.js"
import userRoute from "./userRoute.js"

const allRoutes = ({ app, db }) => {
  questionRoute({ app, db })
  userRoute({ app, db })
}

export default allRoutes
