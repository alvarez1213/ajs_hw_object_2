import getSpecials from '../get_specials';

test('test getSpecials with description', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Оглушает противника на короткое время',
      },
    ],
  };
  const result = getSpecials({ ...character });
  const expected = [
    [8, 'Двойной выстрел', 'http://...', 'Двойной выстрел наносит двойной урон'],
    [9, 'Нокаутирующий удар', 'http://...', 'Оглушает противника на короткое время'],
  ];
  expect(result).toEqual(expected);
});

test('test getSpecials with empty description', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };
  const result = getSpecials({ ...character });
  const expected = [
    [8, 'Двойной выстрел', 'http://...', 'Описание недоступно'],
    [9, 'Нокаутирующий удар', 'http://...', 'Описание недоступно'],
  ];
  expect(result).toEqual(expected);
});
