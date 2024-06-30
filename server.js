const express = require('express')
const boardRouter = require('./router.js')

const app =express();

app.listen(3000, () => {
    console.log('server onload');
})
