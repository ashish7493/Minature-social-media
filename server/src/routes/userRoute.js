const router = require("express").Router();
const { uploadAvtar, uploadAbout, viewUser } = require("../middleWares/profile");
const { signup, login, logout, authenticateUser, refresh} = require("../middleWares/userAuth");
const multer = require("multer");

router.post('/', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/', authenticateUser, (req, res) => {
  res.json(req.userData);
})
router.get('/:username', viewUser);
router.post('/refresh', refresh);

const uploads = multer({ dest: './uploads'});
router.post('/avtar', authenticateUser, uploads.single('avtar'), uploadAvtar);

router.post('/about', authenticateUser ,uploadAbout);

module.exports = router;