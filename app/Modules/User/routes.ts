import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'

Route.group(() => {
  Route.resource('users', 'UsersController')
    .apiOnly()
    .middleware({
      index: ['auth'],
      show: ['auth'],
      update: ['auth'],
      destroy: ['auth'],
    })
}).prefix('v1')
