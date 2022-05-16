import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'eMail'
    // Write your database queries inside the run method
    await User.updateOrCreateMany(uniqueKey, [
      {
        eMail: 'blabla@email.com',
        password: 'secret',
      },
      {
        eMail: 'ze@email.com',
        password: 'supersecret',
      },
      {
        eMail: 'outroze@email.com',
        password: 'supersecret',
      },
    ])
  }
}
