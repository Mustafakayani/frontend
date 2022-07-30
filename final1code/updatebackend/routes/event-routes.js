const express = require("express");
const eventController = require("../controller/events-controller");
const userController = require("../controller/user-controller");

const router = express.Router();

router.get('/',eventController.getAllEvents)
router.post('/',eventController.postEvent)
router.put('/:id',eventController.updateEvent)
router.delete('/:id',eventController.deleteEvent);

router.post('/login',userController.login)
router.post('/register',userController.register)



module.exports = router;