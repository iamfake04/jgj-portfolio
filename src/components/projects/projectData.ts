export interface Project {
  id: string;
  title: string;
  briefDescription: string;
  technologies: string[];
  category: string; // For filtering
  previewImage: string; // Placeholder path or actual path
  liveDemoLink?: string;
  githubLink?: string;
  detailedDescription: string;
  images: string[]; // Placeholders or actual paths for modal
  challenges: string;
  solutions: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    briefDescription: 'A full-featured e-commerce platform with Next.js and Stripe.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Stripe', 'Firebase'],
    category: 'Web Development',
    previewImage: '/placeholders/project1-preview.png', // Replace with actual image path
    liveDemoLink: '#',
    githubLink: '#',
    detailedDescription: 'This project is a comprehensive e-commerce solution built with modern web technologies. It includes features like product listings, shopping cart, user authentication, and payment integration with Stripe. Firebase is used for backend services like database and authentication.',
    images: [
      '/placeholders/project1-img1.png',
      '/placeholders/project1-img2.png',
      '/placeholders/project1-img3.png',
    ],
    challenges: 'Integrating Stripe with Next.js server components and managing complex application state.',
    solutions: 'Utilized Next.js API routes for Stripe webhook handling and Zustand for state management.',
  },
  {
    id: 'project-2',
    title: 'Portfolio Website',
    briefDescription: 'A personal portfolio website to showcase projects and skills.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    category: 'Web Development',
    previewImage: '/placeholders/project2-preview.png',
    liveDemoLink: '#',
    githubLink: '#',
    detailedDescription: 'The very website you are looking at! Designed to be a clean, modern, and responsive showcase of my work and abilities. It features smooth page transitions and animations powered by Framer Motion.',
    images: [
      '/placeholders/project2-img1.png',
      '/placeholders/project2-img2.png',
    ],
    challenges: 'Creating engaging animations and ensuring a seamless user experience across devices.',
    solutions: 'Leveraged Framer Motion for complex animations and adopted a mobile-first approach with TailwindCSS for responsiveness.',
  },
  {
    id: 'project-3',
    title: 'Task Management App',
    briefDescription: 'A simple and intuitive task management application.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    category: 'Full-Stack',
    previewImage: '/placeholders/project3-preview.png',
    githubLink: '#',
    detailedDescription: 'A CRUD application for managing tasks. Users can create, read, update, and delete tasks. The backend is built with Node.js and Express, and MongoDB is used as the database. Redux handles state management on the client-side.',
    images: [
      '/placeholders/project3-img1.png',
      '/placeholders/project3-img2.png',
    ],
    challenges: 'Implementing real-time updates and user authentication.',
    solutions: 'Used Socket.IO for real-time communication (though not listed in tech for brevity) and JWT for authentication.',
  },
  {
    id: 'project-4',
    title: 'Data Visualization Dashboard',
    briefDescription: 'A dashboard for visualizing complex datasets.',
    technologies: ['Python', 'Flask', 'D3.js', 'Pandas'],
    category: 'Data Science',
    previewImage: '/placeholders/project4-preview.png',
    liveDemoLink: '#',
    detailedDescription: 'This project involved creating a web-based dashboard to visualize large datasets. Python and Flask were used for the backend data processing (with Pandas), and D3.js was used for creating interactive charts and graphs on the frontend.',
    images: [
      '/placeholders/project4-img1.png',
    ],
    challenges: 'Handling large datasets efficiently and creating interactive and performant visualizations.',
    solutions: 'Implemented data aggregation techniques on the backend and optimized D3.js rendering.',
  },
];

export const projectCategories = ['All', ...new Set(projects.map(p => p.category))];
