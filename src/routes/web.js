import express from 'express'
import homeController from '../controller/homeController'

const router = express.Router()

const initWebRoutes = app => {
  //path, handler
  router.get('/', homeController.getHomePage)
  router.post('/create-user', homeController.postCreateUser)
  router.get('/create', homeController.GetCreateUser)
  return app.use('/', router)
}

export default initWebRoutes
