import express from 'express'
import homeController from '../controller/homeController'

const router = express.Router()

const initWebRoutes = app => {
  //path, handler
  router.get('/', homeController.getHomePage)
  router.post('/create-user', homeController.postCreateUser)
  router.get('/create', homeController.getCreateUser)
  
  router.get('/update/:id', homeController.getUpdateUser)
  router.post('/update-user', homeController.postUpdateUser)
//delete
  router.get('/delete/:id', homeController.getdeleteUser)
  router.post('/delete-user', homeController.handleDeleteUser)


  return app.use('/', router)
}

export default initWebRoutes
