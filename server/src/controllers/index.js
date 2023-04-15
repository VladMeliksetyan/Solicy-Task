const userData = require("../data/users");

/**
 * get all users and send it as response
 * @param {Express Request} req
 * @param {Expreess Response} res
 */

const getUsers = (req, res) => {
  try {
    const data = userData;

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send("Not able to find users");
  }
};

/**
 * get user based on his Id
 * @param {Express Request} req
 * @param {Express Response} res
 */

const getUserById = (req, res) => {
  try {
    const userId = req.params.id;
    const user = userData.find((user) => user.id == userId);
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getUsers,
  getUserById,
};
