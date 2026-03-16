export interface ResearchPaper {
    id: string;
    title: string;
    abstract: string;
    tags: string[];
    link: string;
    status: "Published" | "Under Review" | "Ongoing";
}

export interface Project {
    id: string;
    title: string;
    description: string;
    techBadges: string[];
    githubLink?: string;
    liveLink?: string;
}

export interface SkillCategory {
    name: string;
    skills: string[];
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
    cgpa: string;
}

export interface Experience {
    title: string;
    organization: string;
    period: string;
    description: string;
}
