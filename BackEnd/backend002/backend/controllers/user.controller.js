function getUser(req, res) {
  res.send("Hello User!");
}

function getRegister(req, res) {
  res.send("Hello Register!");
}
function getLogin(req, res) {
  res.send("Hello Login!");
}

export { getUser, getLogin, getRegister };
