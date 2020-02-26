import React from 'react'
import styled from 'styled-components'
import { ItemPicker } from '~/components/shared/item-picker'
import { useArrayToggle } from '~/lib/hooks'
import { ItemShowcase } from '~/lib/presentation'

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
