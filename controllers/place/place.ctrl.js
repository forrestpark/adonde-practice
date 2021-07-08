const {models, Place} = require('../../models')

exports.findall_places = async (req, res) => {
    try {
        const places = await Place.findAll()
        return res.json(places)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}

exports.create_places = async (req, res) => {
    const {name, type, latitude, longitude} = req.body
    try {
        const place = await Place.create({name, type, latitude, longitude})
        return res.json(place)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}