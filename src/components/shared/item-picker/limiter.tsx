export type ItemPickerLimiter = '__item-picker-limiter'

/**
 * Note - I've decided to skip creating divider support
 *
 * Was not sure how exactly it would work and it'd be good to have additional discussion
 *
 * Assuming required interface of options is `T[]`, I find it hard to create divider support with good developer experience
 *
 * It would be possible to add prop like `hasItemDivider` or even T extends {hasDivider: boolean},
 * but preparing such data would be hard to track, as often it's hard to know what item will have divider below from item data level
 *
 * Possible solution with current interface would be something like prop
 * `getItemSectionName` that would return a string with section name.
 *
 * Using that, it'd be relatively easy to group items into sections and add named sections with dividers
 * Requirements (and design), did not assume section names, however
 *
 */

/**
 * I started to play with custom 'symbol' that can be used as 'item', that would mean some item is divider
 * but again, 'injecting' such symbol into array of data (eg. from the server) would be hard,
 * and it would be even harder if we'd like to process such data even more (.map etc)
 */

export const itemPickerLimiter = '__item-picker-limiter'

export function isItemPickerLimiter(
  input: unknown
): input is ItemPickerLimiter {
  return input === itemPickerLimiter
}

export function isNotItemPickerLimiter<T>(
  input: T | ItemPickerLimiter
): input is T {
  return input !== itemPickerLimiter
}

export function removeLimiters<T>(items: Array<T | ItemPickerLimiter>) {
  return items.filter(isNotItemPickerLimiter)
}
