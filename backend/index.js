const app = require('./bin/express')
const Parking = require('./modules/parking/parkingSchema')
const moment = require('moment')

const port = 3030

app.listen(port, () => {
    console.log(`Api initialize succes in port ${port}`)
})

app.get('/', async (req, res) => {
    /*const pk = await Parking.create({
        vehicle: 'Prisma Preto',
        vehiclePlate: 'IUX-8180',
        parkingStartAt: moment(),
        pricePerHour: 10
    })*/

    const all = await Parking.find()
    res.status(200).send(all)
})



