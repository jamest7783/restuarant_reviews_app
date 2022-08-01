const {Router}=require('express')
const { restuarants,reviews }=require('../controllers')

const router=Router()

router.get('/restuarants',restuarants.getAllRestuarants)
router.post('/restuarants',restuarants.createRestuarant)
router.get('/restuarants/:id',restuarants.getOneRestuarant)

router.get('/reviews', reviews.getAllReviews)
router.post('/reviews',reviews.createReview)



module.exports = router