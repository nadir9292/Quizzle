import { Model } from "objection"
import hashPassword from "../method/hashPassword.js"

class UserModel extends Model {
  static tableName = "user"

  checkPassword(password) {
    const [passwordHash] = hashPassword(password, this.passwordSalt)

    return passwordHash === this.passwordHash
  }

  static findUserByPseudo(pseudo) {
    return UserModel.query().findOne({ pseudo })
  }
}

export default UserModel
