export const images = [
  {
    id: "feature1",
    src: '/assets/images/thinking/1.jpg',
    alt: 'Project 1',
    title: 'Naved Khan',
    description:
      'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum',
    images: ['/assets/images/thinking/1.jpg'], // Single image
  },
  {
    id: "feature2",
    src: '/assets/images/thinking/2.jpg',
    alt: 'Project 2',
    title: 'Project Two',
    description: 'This is a detailed description of Project Two.',
    images: ['/assets/images/thinking/2.jpg', '/assets/images/thinking/2.jpg'], // Two images
  },
  {
    id: "feature3",
    src: '/assets/images/thinking/3.jpg',
    alt: 'Project 3',
    title: 'Project Three',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/3.jpg', '/assets/images/thinking/3.jpg', '/assets/images/thinking/3.jpg'], // More than two images
  },
  {
    id: "feature4",
    src: '/assets/images/thinking/4.jpg',
    alt: 'Project 4',
    title: 'Project Four',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg'], // More than two images
  },
  {
    id: "feature5",
    src: '/assets/images/thinking/5.jpg',
    alt: 'Project 5',
    title: 'Project Five',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg'], // More than two images
  },
  {
    id: "feature6",
    src: '/assets/images/thinking/6.jpg',
    alt: 'Project 6',
    title: 'Project Six',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg'], // More than two images
  },
];

// Duplicate images to create a continuous effect
export const duplicatedImages = [...images, ...images, ...images, ...images, ...images];
