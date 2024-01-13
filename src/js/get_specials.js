export default function getSpecials(character) {
  const result = [];
  for (const special of character.special) {
    if (special.description !== undefined) {
      result.push(
        [special.id, special.name, special.icon, special.description],
      );
    } else {
      result.push(
        [special.id, special.name, special.icon, 'Описание недоступно'],
      );
    }
  }
  return result;
}
