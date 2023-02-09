import express from 'express'
import homeController from '../controller/homeController'

const router = express.Router()

const initWebRoutes = app => {
  //path, handler
  router.get('/', homeController.handleHelloWord)
  router.post('/create-user', homeController.postCreateUser)
  return app.use('/', router)
}

export default initWebRoutes
