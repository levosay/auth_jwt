const Router = require('express')
const controller = require('./authController')
const router = new Router
const { check } = require('express-validator')
const authMiddleware = require('./middlewaree/authMiddleware')

router.post('/signup', [
  check('username', 'Имя пользователя не может быть пустым').notEmpty(),
  check('password', 'Пароль должен быть больше 6 символов').isLength({ min: 6 })
], controller.signUp)
router.post('/signin', controller.signIn)
router.get('/users', authMiddleware, controller.getUsers)

module.exports = router
