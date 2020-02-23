import React from 'react'
import { ItemPicker } from '~/components/shared/item-picker'
import { ItemShowcase } from '~/lib/presentation'
import styled from 'styled-components'
import { useArrayToggle } from '~/lib/hooks'

interface BasicItem {
  id: string
  label: string
}

const items: BasicItem[] = [
  { id: '1', label: 'My evaluations' },
  { id: '2', label: 'My steps' }
]

const getItemKey = (item: BasicItem) => item.id

const renderItem = (item: BasicItem) => <div>{item.label}</div>

export function BasicFilterView() {
  const [selectedItems, toggleItem] = useArrayToggle<BasicItem>([], getItemKey)

  return (
    <ItemShowcase>
      <Holder>
        <ItemPicker
          value={selectedItems}
          items={items}
          itemKeyGetter={getItemKey}
          itemRenderer={renderItem}
          onChange={toggleItem}
        />
      </Holder>
    </ItemShowcase>
  )
}

const Holder = styled.div`
  width: 152px;
`
