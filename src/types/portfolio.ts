export interface ResearchPaper {
    id: string;
    title: string;
    abstract: string;
    tags: string[];
    link: string;
    status: "Published" | "Under Review";
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
