const express = require("express");
const router = express();
const axios = require("axios");

router.get("/getInstaUser/:username", async (req, res) => {
    const username = req.params.username;

    const options = {
        method: "GET",
        url: "https://easy-instagram-service.p.rapidapi.com/username-with-base64-image",
        params: { username: username },
        headers: {
            "X-RapidAPI-Key":
                "b83241f3fdmsh199600a3dcd45e6p16a45bjsn390fefbd448b",
            "X-RapidAPI-Host": "easy-instagram-service.p.rapidapi.com",
        },
    };

    axios
        .request(options)
        .then(function (response) {
            return res
                .status(200)
                .send({ data: response.data, message: "user fetched" });
        })
        .catch(function (error) {
            return res.status(504).send({ message: "user not found" });
        });
});

module.exports = router;
