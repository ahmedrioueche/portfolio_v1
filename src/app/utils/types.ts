interface ImageDescPair {
  image: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  rank: number;
  techStack: string;
  imageDescPairs: ImageDescPair[];
  conclusion: string;
  detailsLink: string;
  demoLink: string;
  githubLink: string;
  isVisible: boolean;
}

interface Experience {
  companyName: string;
  companyLogo: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  introduction: string;
  description: string;
  myWork: string;
  conclusion: string;
  isVisible: boolean;
}

interface Data {
  projects: Project[];
  experience: Experience[];
}
