import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = User.all()

    return users
  }

  public async store({}: HttpContextContract) {
    return 'create user'
  }

  public async show({}: HttpContextContract) {
    return 'get user by ID'
  }

  public async update({}: HttpContextContract) {
    return 'change user'
  }

  public async destroy({}: HttpContextContract) {
    return 'delete user'
  }
}
