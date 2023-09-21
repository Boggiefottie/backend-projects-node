//const sessionIdToUserMap = new Map();
const jwt = require("jsonwebtoken");
const secret = "Bhavya$123@$";
// this fun will create tokens
function setUser(user) {
  //sessionIdToUserMap.set(id, user);
  return jwt.sign(
    {
      _id: user.id,
      email: user.email,
      role: user.role,
    },
    secret
  );
}
function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
