const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        succeded: true,
        msg: "Build CI/CD pipeline using AWS services like CodeBuild , CodePipeline , CodeDeploy...."
    })
})

app.get('/api', (req, res) => {
    return res.json({
        succeded: true,
        msg: "Testing CI/CD pipline...."
    })
})


app.listen(5000, () => console.log("Server running.."))