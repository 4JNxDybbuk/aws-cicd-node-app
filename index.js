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

app.get('/api/deploy', (req, res) => {
    return res.json({
        succeded: true,
        msg: "Successfully implements & run CI/CD pipline using AWS sevices(Code-Build, Code-Deploy, Code-Pipeline)...."
    })
})

app.listen(5000, () => console.log("Server running at port.."))
