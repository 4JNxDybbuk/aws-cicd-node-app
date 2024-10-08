const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        succeded: true,
        msg: "Build CI/CD pipeline using AWS services like CodeBuild , CodePipeline , CodeDeploy...."
    })
})

app.listen(5000, () => console.log("Server running.."))