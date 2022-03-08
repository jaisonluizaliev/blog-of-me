export function toCapitalize(string) {
  const firstLetter = string[0].toUpperCase() || ""
  const anotherLetters = string.substr(1, 20) || "" 
  return firstLetter + anotherLetters || null ;
}
