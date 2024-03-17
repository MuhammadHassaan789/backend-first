import express from 'express'
import products from './products.mjs'
import users from './users.mjs'
import ad from './ad.mjs'

const router = express.Router()

router.use('/products' , products)
router.use('/users' , users)
router.use('/ad' , ad)

export default router