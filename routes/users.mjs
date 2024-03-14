import express from 'express'
import Users from '../models/Users.mjs'
import verifyToken from '../middlewares/verifyToken.mjs'

const router = express.Router()

router.get('/', async (req, res) => {
    const user = await Users.find()
    res.status(200).send({ message: "User fetched successfully!", data: user })
})

router.post('/register', async (req, res) => {
    try {
        await Users.create(req.body)
        res.status(200).send({ message: "User registered successfully!" })
    } catch (e) {
        res.status(401).send({ message: e.message })
    }
})

router.put('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        // check if email exists
        const user = await Users.findOne({ email })
        if (!user) {
            res.status(401).send({ message: 'Email not found!' })
            return
        }

        // check password
        const isCorrectedPassword = user.comparePassword(password)
        if (!isCorrectedPassword) {
            res.status(401).send({ message: 'Wrong password!' })
            return
        }

        // generate token
        const token = user.generateToken()
        user.tokens.push(token)
        await user.save()

        res.status(200).send({ message: 'Logged in successfully!' })

    } catch (e) {
        res.status(401).send({ message: e.message })
    }
})

router.put('/logout', verifyToken , async(req, res) => {
    await Users.findByIdAndUpdate(req.userId, {$pull: {
        tokens: req.tokenToRemove
    }})
    res.send({ message: 'Logged out successfully!' })
})

export default router
