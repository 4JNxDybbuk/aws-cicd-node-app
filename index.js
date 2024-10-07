const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        succeded: true,
        msg: "API working!!"
    })
})

app.listen(5000, () => console.log("Server running.."))