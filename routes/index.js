const {Router}=require('express')
const { restuarants,reviews }=require('../controllers')
const { Review } = require('../models')

const router=Router()

router.get('/restuarants',restuarants.getAllRestuarants)
router.post('/restuarants',restuarants.createRestuarant)
router.get('/restuarants/:id',restuarants.getOneRestuarant)

router.get('/reviews', reviews.getAllReviews)
router.post('/reviews',reviews.createReview)
router.get('/reviews/:id',reviews.getReview)
router.put('/reviews/:id',reviews.updateReview)
router.delete('/reviews/:id',reviews.deleteReview)



module.exports = router