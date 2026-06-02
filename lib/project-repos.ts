import { Project } from '@/interfaces/project';

export type ProjectRepoLink = {
  label: string;
  url: string;
};

export function getProjectRepoLinks(project: Project): ProjectRepoLink[] {
  if (project.repos) {
    const links: ProjectRepoLink[] = [
      { label: 'Front-end', url: project.repos.frontend },
    ];
    if (project.repos.backend) {
      links.push({ label: 'Back-end', url: project.repos.backend });
    }
    return links;
  }

  if (project.repoUrl) {
    return [{ label: 'Código', url: project.repoUrl }];
  }

  return [];
}
