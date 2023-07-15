// const express = require("express");
// const cookie = require("cookie");

// const router = express.Router();

// router.post('%5Eauth/users/login', async (req, res) => {
//     const {email, password } = req.body;

//     const body = JSON.stringify({email, password});

//     try{
//         const apiRes = await fetch("http://127.0.0.1:8000/%5Eauth/token/login", {
//             method: "POST",
//             header: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body
//         })

//         const data = await apiRes.json();

//         if(apiRes.status === 200) {
//             res.setHeader("Set-Cookie", [
//                 cookie.serialize('access', data.access, {
//                     httpOnly: true,
//                     maxAge: 60 * 30,
//                     path: "",
//                     sameSite: "strict",
//                     secure: process.env.NODE_ENV === "production",
//                 }),
//                 cookie.serialize('access', data.refresh, {
//                     httpOnly: true,
//                     maxAge: 60 * 60 * 24,
//                     path: "",
//                     sameSite: "strict",
//                     secure: process.env.NODE_ENV === "production",
//                 }),
                
//             ])
//             return res.status(200).json({success: "Logged in successfully"})
//         } else{ 
//             return res.status(apiRes.status).json(data)
//         }
//     } catch(err) {
//         return res.status(500).json({
//             error: "Something went wrong when logging in"
//         })
//     }
// })

// user login not working
// can you help me with this?

const express = require("express");
const cookie = require("cookie");
const fetch = (...args) =>
	import('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();

router.post('%5Eauth/users/login', async (req, res) => {
    const {email, password } = req.body;

    const body = JSON.stringify({email, password});

    try{

        const apiRes = await fetch("http://127.0.0.1:8000/%5Eauth/token/login", {
            method: "POST",
            header: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body
        })

        const data = await apiRes.json();

        if(apiRes.status === 200) {
            res.setHeader("Set-Cookie", [
                cookie.serialize('access', data.access, {
                    httpOnly: true,
                    maxAge: 60 * 30,
                    path: "/%5Eauth/",
                    sameSite: "strict",
                    secure: true,
                }),
                cookie.serialize('access', data.refresh, {
                    httpOnly: true,
                    maxAge: 60 * 60 * 24,
                    path: "/%5Eauth/",
                    sameSite: "strict",
                    secure: true,
                }),
                
            ])
            return res.status(200).json({success: "Logged in successfully"})
        }
        else{
            return res.status(apiRes.status).json(data)
        }
    } catch(err) {
        return res.status(500).json({
            error: "Something went wrong when logging in"
        })
    }
})

// this error comes out: Authentication credentials were not provided."
// can you help me with this?

module.exports = router;