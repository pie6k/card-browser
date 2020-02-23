/**
 * Will replace any special, latin characters with basic latin chars
 * eg. ółź -> olz
 */

export function normalizeSpecialCharacters(input: string) {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace('ł', 'l')
}
