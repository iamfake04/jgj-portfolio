// src/app/projects/page.tsx
import ProjectsGallery from '@/components/projects/ProjectsGallery';

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <ProjectsGallery />
    </main>
  );
};

export default ProjectsPage;