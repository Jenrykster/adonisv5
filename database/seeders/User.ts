import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'email'
    // Write your database queries inside the run method
    await User.updateOrCreateMany(uniqueKey, [
      {
        email: 'blebla@email.com',
        password: 'admin',
      },
      {
        email: 'zeza@email.com',
        password: 'admin',
      },
      {
        email: 'outreoze@email.com',
        password: 'admin',
      },
    ])
  }
}
