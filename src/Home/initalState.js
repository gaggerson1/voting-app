import papaImage from '../assets/images/header.png';
import kanyeImage from '../assets/images/people/kanye.png';
import markImage from '../assets/images/people/mark.png';
import cristinaImage from '../assets/images/people/cristina.png';
import malalaImage from '../assets/images/people/malala.png';

const initialState = {
  featured: {
    name: 'Pope Francis?',
    description:
      'He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)',
    picture: papaImage,
  },
  people: [
    {
      id: 1,
      name: 'Kanye West',
      description:
        'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      picture: kanyeImage,
      area: 'Entertainment',
      time: '1 month ago',
      votes: {
        up: 64,
        down: 36,
      },
    },
    {
      id: 2,
      name: 'Mark Zuckerberg',
      description:
        'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      picture: markImage,
      area: 'Bussines',
      time: '1 month ago',
      votes: {
        up: 36,
        down: 64,
      },
    },
    {
      id: 3,
      name: 'Cristina Fernández de Kirchner',
      description:
        'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      picture: cristinaImage,
      area: 'Politics',
      time: '1 month ago',
      votes: {
        up: 36,
        down: 64,
      },
    },
    {
      id: 4,
      name: 'Malala Yousafzai',
      description:
        'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      picture: malalaImage,
      area: 'Entertainment',
      time: '1 month ago',
      votes: {
        up: 64,
        down: 36,
      },
    },
  ],
};

export default initialState;
