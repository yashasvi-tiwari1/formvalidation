import express from "express";
import { Info } from "../model/dataSchema.js";
import bcrypt from "bcrypt";

const router = express.Router();
bcrypt;

router.post("/", async (req, res) => {
    let data = req.body;
    let fname = data.fname;
    let lname = data.lname;
    let username = data.username;
    let email = data.email;
    let password = data.password;
    let confirmPassword = data.confirmPassword;
    const newdata = new Info(data);
    if (
        fname !== "" &&
        lname !== "" &&
        username !== "" &&
        email !== "" &&
        password !== "" &&
        confirmPassword !== ""
    ) {
        if (email.match(/(^\w{0,100}@gmail.com$|^\w{0,100}@outlook.com$)/g)) {
            if (password === confirmPassword) {
                if (password.length > 7) {
                    if (password.match(/([0-9,A-Z])/g)) {
                        try {
                            await newdata.save();
                            res.status(201).send({ data: "user created successfully" });
                        } catch (err) {
                            res.send(err);
                        }
                    }
                } else {
                    res.send({ data: "password must have at least 8 characters" });
                }
            } else {
                res.send({ data: "password and confirm password doesnot match" });
            }
        } else {
            res.send({ data: "email format doesnot match" });
        }
    } else {
        res.send({ data: "Please fillup the form" });
    }
});
export { router as signupRouter };