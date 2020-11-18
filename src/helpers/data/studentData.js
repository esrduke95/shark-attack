const students = [
  {
    id: '1',
    firstName: 'Autumn',
    lastName: 'Fotopolous',
    isDead: false,
  },
  {
    id: '2',
    firstName: 'Bailey',
    lastName: 'Dennis',
    isDead: false,
  },
  {
    id: '3',
    firstName: 'Chris',
    lastName: 'LoJacono',
    isDead: false,
  },
  {
    id: '4',
    firstName: 'Chris',
    lastName: 'Calhoun',
    isDead: false,
  },
  {
    id: '5',
    firstName: 'Dana',
    lastName: 'Pham',
    isDead: false,
  },
  {
    id: '6',
    firstName: 'Deanna',
    lastName: 'Mix',
    isDead: false,
  },
  {
    id: '7',
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false,
  },
  {
    id: '8',
    firstName: 'Jonathon',
    lastName: 'Joyner',
    isDead: false,
  },
  {
    id: '9',
    firstName: 'Jordan',
    lastName: 'Smith',
    isDead: false,
  },
  {
    id: '10',
    firstName: 'Joseph',
    lastName: 'Martin',
    isDead: false,
  },
  {
    id: '11',
    firstName: 'Kaitlyn',
    lastName: 'VanHook',
    isDead: false,
  },
  {
    id: '12',
    firstName: 'Liz',
    lastName: 'Barnes',
    isDead: false,
  },
  {
    id: '13',
    firstName: 'Michael',
    lastName: 'Pfohl',
    isDead: false,
  },
  {
    id: '14',
    firstName: 'Robert',
    lastName: 'Bandstra',
    isDead: false,
  },
  {
    id: '15',
    firstName: 'Ryan',
    lastName: 'McNair',
    isDead: true,
  },
  {
    id: '16',
    firstName: 'Sam',
    lastName: 'Mudick',
    isDead: false,
  },
  {
    id: '17',
    firstName: 'Summer',
    lastName: 'Duke',
    isDead: true,
  },
  {
    id: '18',
    firstName: 'Wanda',
    lastName: 'McInturff',
    isDead: false,
  },
  {
    id: '19',
    firstName: 'Wendell',
    lastName: 'Patton Jr.',
    isDead: true,
  },
  {
    id: '20',
    firstName: 'Will',
    lastName: 'Kotheimer',
    isDead: false,
  },
];

const livingStudents = () => {
  const alive = students.filter((student) => student.isDead === false);
  return alive;
};
const dearlyBeloved = () => {
  const dead = students.filter((student) => student.isDead === true);
  return dead;
};
const followTheLight = (id) => {
  const pushingUpDaises = students.find((student) => id === student.id);
  pushingUpDaises.isDead = true;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { livingStudents, dearlyBeloved, followTheLight };
