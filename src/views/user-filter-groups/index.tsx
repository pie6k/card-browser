import React from 'react'
import styled from 'styled-components'
import { ItemPicker } from '~/components/shared/item-picker'
import { User } from '~/lib/data'
import { usersDb } from '~/lib/data/users-db'
import { useArrayToggle } from '~/lib/hooks'
import { EmptyStatePlaceholder } from '~/lib/placeholders'
import { ItemShowcase } from '~/lib/presentation'
import { UserLabel } from '~/lib/users'

const getUserSearchTerm = (userItem: User) =>
  `${userItem.fullName} ${userItem.positionName}`

const getUserId = (userItem: User) => userItem.id

const renderUserItem = (userItem: User) => {
  return <UserLabel user={userItem} />
}

const getUserSection = (userItem: User) => userItem.positionName

export function UserFilterGroupsView() {
  const [selectedUsers, toggleUser] = useArrayToggle<User>([], getUserId)

  return (
    <ItemShowcase>
      <Holder>
        <ItemPicker
          items={usersDb}
          value={selectedUsers}
          itemRenderer={renderUserItem}
          itemKeyGetter={getUserId}
          itemSectionGetter={getUserSection}
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
