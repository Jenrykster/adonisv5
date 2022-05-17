import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'eMail'
    // Write your database queries inside the run method
    await User.updateOrCreateMany(uniqueKey, [
      {
        eMail: 'blebla@email.com',
        password: 'secret',
      },
      {
        eMail: 'zeza@email.com',
        password: 'supersecret',
      },
      {
        eMail: 'outreoze@email.com',
        password: 'supersecret',
      },
    ])
  }
}
