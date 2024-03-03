import { nanoid } from 'nanoid';

const menuItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home page',
    private: false,
  },
  {
    id: nanoid(),
    to: '/my-form',
    text: 'My Form',
    private: true,
  },
  {
    id: nanoid(),
    to: '/my-contacts',
    text: 'My contacts',
    private: true,
  },
];

export default menuItems;
