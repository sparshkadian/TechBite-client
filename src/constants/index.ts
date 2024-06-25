import { latestBlogsType } from '../types';
import { userBlogType } from '../types';

export const latestBlogs: latestBlogsType[] = [
  {
    _id: 1,
    title: 'Introduction to Machine Learning',
    content:
      'Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It has applications in various fields such as healthcare, finance, and marketing.',
    likes: 152,
    comments: [],
    banner:
      'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    _id: 2,
    title: 'The Future of Blockchain Technology',
    content:
      'Blockchain technology, initially popularized by cryptocurrencies like Bitcoin, has far-reaching implications beyond finance. Its decentralized and secure nature makes it suitable for applications in supply chain management, voting systems, and digital identity verification.',
    likes: 287,
    comments: [],
    banner:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    _id: 3,
    title: 'Exploring the Latest Trends in Artificial Intelligence',
    content:
      'Artificial intelligence is rapidly evolving, with advancements in deep learning, natural language processing, and computer vision. From virtual assistants to autonomous vehicles, AI is revolutionizing industries and reshaping our world.',
    likes: 341,
    comments: [],
    banner:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QUl8ZW58MHx8MHx8fDA%3D',
  },
  {
    _id: 4,
    title: 'Demystifying Big Data: What You Need to Know',
    content:
      'Big data refers to large volumes of structured and unstructured data that organizations collect and process for insights and decision-making. With the right tools and techniques, businesses can harness the power of big data to gain valuable insights into customer behavior, market trends, and operational efficiency.',
    likes: 198,
    comments: [],
    banner:
      'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmlnJTIwZGF0YXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    _id: 5,
    title: 'The Rise of DevOps Culture in Software Development',
    content:
      'DevOps is a cultural shift that emphasizes collaboration, communication, and integration between development and operations teams. By adopting DevOps practices, organizations can achieve faster delivery cycles, improved quality, and increased efficiency in software development and deployment.',
    likes: 305,
    comments: [],
    banner:
      'https://images.unsplash.com/photo-1667372335962-5fd503a8ae5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRldm9wc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    _id: 6,
    title: 'The Impact of Internet of Things (IoT) on Everyday Life',
    content:
      'The Internet of Things (IoT) refers to the network of interconnected devices and objects that collect and exchange data. From smart homes and wearable devices to industrial automation and healthcare, IoT has the potential to revolutionize how we live, work, and interact with the world around us.',
    likes: 412,
    comments: [],
    banner:
      'https://plus.unsplash.com/premium_photo-1688678097506-6c12a0376238?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SU9UfGVufDB8fDB8fHww',
  },
];

export const userBlogs: userBlogType[] = [
  {
    _id: 1,
    banner:
      'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Introduction to Machine Learning',
    content:
      'Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It has applications in various fields such as healthcare, finance, and marketing.',
    likes: 152,
    comments: [],
  },
  {
    _id: 2,
    title: 'The Future of Blockchain Technology',
    content:
      'Blockchain technology, initially popularized by cryptocurrencies like Bitcoin, has far-reaching implications beyond finance. Its decentralized and secure nature makes it suitable for applications in supply chain management, voting systems, and digital identity verification.',
    likes: 287,
    comments: [],
    banner:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    _id: 3,
    banner:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QUl8ZW58MHx8MHx8fDA%3D',
    title: 'Exploring the Latest Trends in Artificial Intelligence',
    content:
      'Artificial intelligence is rapidly evolving, with advancements in deep learning, natural language processing, and computer vision. From virtual assistants to autonomous vehicles, AI is revolutionizing industries and reshaping our world.',
    likes: 341,
    comments: [],
  },
  {
    _id: 4,
    banner:
      'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmlnJTIwZGF0YXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Demystifying Big Data: What You Need to Know',
    content:
      'Big data refers to large volumes of structured and unstructured data that organizations collect and process for insights and decision-making. With the right tools and techniques, businesses can harness the power of big data to gain valuable insights into customer behavior, market trends, and operational efficiency.',
    likes: 198,
    comments: [],
  },
  {
    _id: 5,
    banner:
      'https://images.unsplash.com/photo-1667372335962-5fd503a8ae5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRldm9wc3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'The Rise of DevOps Culture in Software Development',
    content:
      'DevOps is a cultural shift that emphasizes collaboration, communication, and integration between development and operations teams. By adopting DevOps practices, organizations can achieve faster delivery cycles, improved quality, and increased efficiency in software development and deployment.',
    likes: 305,
    comments: [],
  },
  {
    _id: 6,
    banner:
      'https://plus.unsplash.com/premium_photo-1688678097506-6c12a0376238?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SU9UfGVufDB8fDB8fHww',
    title: 'The Impact of Internet of Things (IoT) on Everyday Life',
    content:
      'The Internet of Things (IoT) refers to the network of interconnected devices and objects that collect and exchange data. From smart homes and wearable devices to industrial automation and healthcare, IoT has the potential to revolutionize how we live, work, and interact with the world around us.',
    likes: 412,
    comments: [],
  },
];
