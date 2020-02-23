import React from 'react'
import { ItemShowcase } from '~/lib/presentation'
import { ItemPicker } from '~/components/shared/item-picker'
import { User } from '~/lib/data'

import { UserLabel } from './user-label'
import styled from 'styled-components'
import { EmptyStatePlaceholder } from '~/lib/placeholders'

import { userAvatars, companies } from './assets'
import { useArrayToggle } from '~/lib/hooks'

const items: User[] = [
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

const getUserSearchTerm = (userItem: User) =>
  `${userItem.fullName} ${userItem.positionName}`

const getUserId = (userItem: User) => userItem.id

const renderUserItem = (userItem: User) => {
  return <UserLabel user={userItem} />
}

export function UserFilterView() {
  const [selectedUsers, toggleUser] = useArrayToggle<User>([], getUserId)

  return (
    <ItemShowcase>
      <Holder>
        <ItemPicker
          items={items}
          value={selectedUsers}
          itemRenderer={renderUserItem}
          itemKeyGetter={getUserId}
          onChange={toggleUser}
          filter={{
            inputPlaceholder: 'Filter by name',
            itemTermGetter: getUserSearchTerm,
            noItemsFoundNode: (
              <EmptyStatePlaceholder description="No users found." />
            )
          }}
        />
      </Holder>
    </ItemShowcase>
  )
}

const Holder = styled.div`
  width: 270px;
`
