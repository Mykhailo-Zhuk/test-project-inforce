import product1 from './assets/products/1.png';
import product2 from './assets/products/2.png';
import product3 from './assets/products/3.png';
import product4 from './assets/products/4.png';
import product5 from './assets/products/5.png';
import product6 from './assets/products/6.webp';
import product7 from './assets/products/7.webp';
import product8 from './assets/products/8.webp';

export const products = [
  {
    id: 1,
    imageUrl: product1,
    name: 'Product A',
    count: 5,
    size: {
      width: 300,
      height: 250,
    },
    weight: '500g',
    comments: ['Great product!', 'I love it!'],
  },

  {
    id: 2,
    imageUrl: product2,
    name: 'Product B',
    count: 10,
    size: {
      width: 150,
      height: 150,
    },
    weight: '300g',
    comments: ['Not bad, but not my favorite.', 'I wish it came in more colors.'],
  },

  {
    id: 3,
    imageUrl: product3,
    name: 'Product C',
    count: 2,
    size: {
      width: 100,
      height: 100,
    },
    weight: '150g',
    comments: ['This product exceeded my expectations!', 'I would definitely buy it again.'],
  },

  {
    id: 4,
    imageUrl: product4,
    name: 'Product D',
    count: 7,
    size: {
      width: 400,
      height: 300,
    },
    weight: '800g',
    comments: ['I was disappointed with this product.', "It didn't work as advertised."],
  },

  {
    id: 5,
    imageUrl: product5,
    name: 'Product E',
    count: 3,
    size: {
      width: 200,
      height: 200,
    },
    weight: '250g',
    comments: ['This product is amazing!', "It's worth every penny."],
  },

  {
    id: 6,
    imageUrl: product6,
    name: 'Product F',
    count: 1,
    size: {
      width: 500,
      height: 400,
    },
    weight: '1kg',
    comments: [
      "This is the best product I've ever used.",
      "I can't imagine my life without it now.",
    ],
  },

  {
    id: 7,
    imageUrl: product7,
    name: 'Product G',
    count: 8,
    size: {
      width: 300,
      height: 250,
    },
    weight: '600g',
    comments: [
      "It's a good product, but a bit expensive.",
      'I wish there were more instructions included.',
    ],
  },

  {
    id: 8,
    imageUrl: product8,
    name: 'Product H',
    count: 6,
    size: {
      width: 150,
      height: 150,
    },
    weight: '400g',
    comments: ["I'm happy with my purchase.", 'It arrived quickly and in good condition.'],
  },

  {
    id: 9,
    imageUrl: product1,
    name: 'Product I',
    count: 12,
    size: {
      width: 200,
      height: 200,
    },
    weight: '1.2kg',
    comments: ['This product is exactly what I needed.', 'I highly recommend it.'],
  },

  {
    id: 10,
    imageUrl: product2,
    name: 'Product J',
    count: 0,
    size: {
      width: 100,
      height: 100,
    },
    weight: '100g',
    comments: [
      "I haven't used this product yet, but it looks great.",
      "I'm excited to try it out.",
    ],
  },
];
export const comments = [
  {
    id: 1,
    productId: 1,
    description: 'Lorem ipsum dolor sit amet',
    date: '09:30 01.04.2023',
  },
  {
    id: 2,
    productId: 2,
    description: 'consectetur adipiscing elit',
    date: '13:45 29.03.2023',
  },
  {
    id: 3,
    productId: 3,
    description: 'sed do eiusmod tempor incididunt',
    date: '18:15 27.03.2023',
  },
  {
    id: 4,
    productId: 4,
    description: 'ut labore et dolore magna aliqua',
    date: '10:00 28.03.2023',
  },
  {
    id: 5,
    productId: 5,
    description: 'Ut enim ad minim veniam',
    date: '14:30 29.03.2023',
  },
  {
    id: 6,
    productId: 6,
    description: 'quis nostrud exercitation ullamco',
    date: '11:20 30.03.2023',
  },
  {
    id: 7,
    productId: 7,
    description: 'laboris nisi ut aliquip ex ea commodo',
    date: '16:10 01.04.2023',
  },
  {
    id: 8,
    productId: 8,
    description: 'duis aute irure dolor in reprehenderit',
    date: '12:00 31.03.2023',
  },
  {
    id: 9,
    productId: 9,
    description: 'in voluptate velit esse cillum dolore',
    date: '19:05 28.03.2023',
  },
  {
    id: 10,
    productId: 10,
    description: 'eu fugiat nulla pariatur',
    date: '08:45 30.03.2023',
  },
  {
    id: 11,
    productId: 9,
    description: 'in voluptate velit esse cillum dolore',
    date: '19:05 28.03.2023',
  },
];
