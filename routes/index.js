const {Router}=require('express')
const controllers=require('../controllers')
const router=Router()

router.get('/restuarants',controllers.getAllRestuarants)
router.post('/restuarants',controllers.createRestuarant)
router.get('/restuarants/:id',controllers.getOneRestuarant)

module.exports = router