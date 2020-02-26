import { User } from './user'

import { companies, userAvatars } from './assets'

export const usersDb: User[] = [
  {
    id: '1',
    fullName: 'Ross Rich',
    positionName: 'Manager',
    avatarUrl: userAvatars.user1,
    companyLogoUrl: companies.company1
  },
  {
    id: '2',
    fullName: 'Harry Avery',
    positionName: 'Associate',
    avatarUrl: userAvatars.user2,
    companyLogoUrl: companies.company1
  },
  {
    id: '3',
    fullName: 'Amit Patel',
    positionName: 'Associate',
    avatarUrl: userAvatars.user3,
    companyLogoUrl: companies.company1
  },
  {
    id: '4',
    fullName: 'Suzy Anderson',
    positionName: 'Associate',
    avatarUrl: userAvatars.user4,
    companyLogoUrl: companies.company1
  }
]
