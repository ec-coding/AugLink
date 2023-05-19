import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = (req, res) => {
    // CHECK IF USER EXISTS

    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length) return res.status(409).json("User already exists!")
        // CREATE A NEW USER
        // HASH PASSWORD
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)"

        const values = [req.body.username, req.body.email, hashedPassword, req.body.name]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("User has been created.");
        })
    })
}

export const login = (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found.")

        // Checks if the entered password matches the stored hashed password
        // If a match is detected, it returns true; otherwise, it returns falsy
        const checkPassword = bcrypt.compareSync(
            req.body.password,
            data[0].password
        )

        if (!checkPassword)
            return res.status(400).json("Wrong password or username.");

        // Generates a JSON web token with a specific ID
        // The first argument ensures the id property of the first item in the data array is included
        // The second argument, the "secretkey", is an encryption key only the back-end can decode
        // Overall, this function returns a token string that can be sent back to the client and stored locally
        const token = jwt.sign({ id: data[0].id }, "secretkey");

        // Destructuring to extract properties from the first object in the data array
        // Password gets its own value, while all other properties are labeled as "others"
        // This is meant to separate sensitive data from other data that can be safely set to the front-end
        const { password, ...others } = data[0]

        // Stores access token as a cookie
        // Access tokens contain info about the user's permissions and access rights
        // These allow the user to access specific resources and functionality within the app
        res.cookie("accessToken", token, {
            // Prevents access by client-side JS
            httpOnly: true,
        }).status(200).json(others)
    })
}

export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("User has logged out.")
}