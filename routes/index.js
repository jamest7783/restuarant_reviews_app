const {Router}=require('express')
const { controllers, restuarants }=require('../controllers')
const router=Router()

router.get('/restuarants',restuarants.getAllRestuarants)
router.post('/restuarants',restuarants.createRestuarant)
router.get('/restuarants/:id',restuarants.getOneRestuarant)

module.exports = router