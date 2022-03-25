const registervalidation = {
  async regValidation(req, res, next) {
    const { name, email, password } = req.body;
    try {
      if (email.length === 0) {
        return res.status(404).send("you should fill required fields");
      }
      next();
    } catch (error) {
      console.error(error.meassage);
      console.log(error);
    }
  },
};
module.exports = registervalidation;
