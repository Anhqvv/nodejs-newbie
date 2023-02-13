import express from 'express'
import apiController from '../controller/apiController'

const router = express.Router()

const initAPIRoutes = app => {
  //path, handler
  router.get('/users', apiController.apiGetAllUsers)
  router.post('/create-user', apiController.apiCreateNewUser)
  router.put('/update-user', apiController.apiUpdateUser)
  router.delete('/delete-user', apiController.apiDeleteUser)

  return app.use('/api/v1', router)
}

export default initAPIRoutes
