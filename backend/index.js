const app = require('./bin/express')
const bodyParser = require('body-parser')
const routerParking = require('./modules/parking/routes')
const port = 3030

app.use(bodyParser.json())
app.use('/api/parking', routerParking)


app.listen(port, () => {
    console.log(`Api initialize succes in port ${port}`)
})



