import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { AnimateContentHeight } from '~/lib/animations'
import { filterArrayBySearchTerm } from '~/lib/search'
import { Colors, UI } from '~/lib/style-guide'
import { groupItemsByKeyGetter, ItemsGroup } from './groups'
import { Input } from './input'
import { Item } from './item'

type ValueGetter<T, V> = (item: T) => V

interface Props<T> {
  items: T[]
  value: T[]
  onChange: (item: T) => void
  itemKeyGetter: ValueGetter<T, string>
  itemRenderer: (item: T, isSelected: boolean) => ReactNode
  itemSectionGetter?: (item: T) => string
  filter?: {
    inputPlaceholder: string
    itemTermGetter: ValueGetter<T, string>
    noItemsFoundNode: ReactNode
  }
}

export function ItemPicker<T>({
  items,
  itemKeyGetter,
  itemRenderer,
  onChange,
  filter,
  value,
  itemSectionGetter
}: Props<T>) {
  const [filterQuery, setFilterQuery] = useState('')

  const selectedItemKeys = value.map(itemKeyGetter)

  function getItemsToDisplay() {
    if (!filter) {
      return items
    }

    return filterArrayBySearchTerm(items, filter.itemTermGetter, filterQuery)
  }

  /**
   * Note: I've added support for top-down arrow press when focused on filter input
   * but then realized (items: T[]) that it's supposed to support multiselect mode
   * which would make arrow keys support different
   *
   * It could be implemented so when pressing arrow keys - item would be highlighted as when howered, and then spacebar press would toggle it
   * I've decided however, to skip it now, but I'd be happy to discuss it in next steps of interview
   */
  // const throttledOnChange = useThrottledCallback(onChange, 100)
  // const handleKeyDown = useKeypressEvent({
  //   ArrowDown: () => {
  //     const nextItem = getNextItem()

  //     nextItem !== null && throttledOnChange(nextItem)
  //   },
  //   ArrowUp: () => {
  //     const previousItem = getPreviousItem()

  //     previousItem !== null && throttledOnChange(previousItem)
  //   }
  // })

  // const { getNextItem, getPreviousItem } = createArrayBrowser(
  //   itemsToShow,
  //   value ?? null,
  //   itemKeyGetter
  // )

  // END disabled keyboard arrows

  const itemsToShow = getItemsToDisplay()

  function getItemGroupsToShow(): ItemsGroup<T>[] {
    if (!itemSectionGetter) {
      return [{ name: '', items: itemsToShow }]
    }

    return groupItemsByKeyGetter(itemsToShow, itemSectionGetter)
  }

  const groupsToShow = getItemGroupsToShow()

  return (
    <Holder>
      {!!filter && (
        <FilterFormHolder>
          <Input
            onChange={(event) => setFilterQuery(event.target.value)}
            placeholder={filter.inputPlaceholder}
            // onKeyDown={handleKeyDown}
          />
        </FilterFormHolder>
      )}
      <AnimateContentHeight>
        <ItemsHolder>
          {groupsToShow.map((group) => {
            return (
              <GroupHolder key={group.name}>
                <AnimateContentHeight>
                  {group.items.map((item) => {
                    const itemKey = itemKeyGetter(item)

                    const isSelected = selectedItemKeys.includes(itemKey)

                    return (
                      <Item
                        item={item}
                        key={itemKey}
                        onSelect={onChange}
                        isSelected={isSelected}
                      >
                        {itemRenderer(item, isSelected)}
                      </Item>
                    )
                  })}
                </AnimateContentHeight>
              </GroupHolder>
            )
          })}
          {(!itemsToShow.length && filter?.noItemsFoundNode) ?? null}
        </ItemsHolder>
      </AnimateContentHeight>
    </Holder>
  )
}

const Holder = styled.div`
  background: ${Colors.PureWhite};
  border: 1px solid ${Colors.Border};
  box-shadow: ${UI.BOX_SHADOW_DEPTH_10};
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
`

const GroupHolder = styled.div`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

const ItemsHolder = styled.div`
  padding: 8px 0;
`

const FilterFormHolder = styled.div`
  border-bottom: 1px solid ${Colors.Primary20};
`
