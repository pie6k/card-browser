import React from 'react'
import { ItemShowcase } from '~/lib/presentation'
import { ItemPicker } from '~/components/shared/item-picker'
import { User } from '~/lib/data'

import styled from 'styled-components'
import { EmptyStatePlaceholder } from '~/lib/placeholders'

import { useArrayToggle } from '~/lib/hooks'
import { usersDb } from '~/lib/data/users-db'
import { UserLabel } from '~/lib/users'

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
          items={usersDb}
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
