const { Router } = require("express");
const useRouter = Router();

const { signupUser } = require("./controllers");

useRouter.post("/users/signup");

module.exports = userRouter;
