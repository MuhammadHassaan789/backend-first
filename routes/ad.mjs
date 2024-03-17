import express from 'express'
import Ad from '../models/Ad.mjs'
import verifyToken from '../middlewares/verifyToken.mjs'

const router = express.Router()

router.post('/postad', verifyToken, async (req, res) => {
    try {
        await Ad.create(req.body)
        res.status(200).send({ message: "Ad added successfully!" })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const ads = await Ad.find()
        res.send(ads)
    } catch (e) {
        res.status(404).send({ message: e.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const ad = await Ad.findById(req.params.id);
        console.log(req.params.id)
        if (!ad) {
            return res.status(404).json({ message: "Ad not found" });
        }
        res.json(ad);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});

export default router