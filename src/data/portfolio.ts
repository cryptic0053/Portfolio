import { ResearchPaper, Project, SkillCategory } from "@/types/portfolio";

export const portfolioData = {
    name: "Anirban Argha",
    role: "4th-Year Computer Science Student at KUET",
    cgpa: "3.3",
    titles: ["AI Researcher", "Full Stack Developer", "DevOps Enthusiast"],
    description: "I build high-performance scalable systems and conduct research in Artificial Intelligence. Passionate about Explainable AI, modern web engineering, and cloud infrastructure.",
    socials: {
        github: "https://github.com/anirban-argha",
        linkedin: "https://linkedin.com/in/anirban-argha",
        email: "mailto:contact@example.com",
        cv: "/resume.pdf"
    }
};

export const researchPapers: ResearchPaper[] = [
    {
        id: "paper-1",
        title: "Quantitatively Validated XAI Framework for Maternal Health Risk Prediction in Rural Bangladesh",
        abstract: "A novel Explainable AI framework applied to predicting maternal health risks, validated through quantitative metrics to ensure interpretability and reliability in critical healthcare scenarios.",
        tags: ["AI", "Machine Learning", "NLP", "Explainable AI"],
        link: "#",
        status: "Published"
    },
    {
        id: "paper-2",
        title: "Scalable Algorithm for Reverse Top-k Query Processing",
        abstract: "An optimized and scalable algorithmic approach to processing reverse top-k queries efficiently over large-scale datasets, reducing computational overhead while maintaining high accuracy.",
        tags: ["Databases", "Algorithms", "Query Processing"],
        link: "#",
        status: "Under Review"
    }
];

export const projects: Project[] = [
    {
        id: "project-1",
        title: "EcoScale Cloud Platform",
        description: "A distributed cloud management abstraction layer built on Kubernetes that auto-scales resources based on predictive usage patterns using an integrated ML model.",
        techBadges: ["Kubernetes", "Docker", "AWS", "Python", "React"],
        githubLink: "#",
        liveLink: "#"
    },
    {
        id: "project-2",
        title: "HyperTrade Backend Engine",
        description: "High-frequency trading backend engine supporting real-time market data ingestion and order execution via WebSocket with ultra-low latency.",
        techBadges: ["Django", "PostgreSQL", "Redis", "Docker"],
        githubLink: "#",
        liveLink: "#"
    },
    {
        id: "project-3",
        title: "Neural Vision API",
        description: "Robust REST API serving various computer vision models built with PyTorch, capable of real-time object detection and segmentation.",
        techBadges: ["FastAPI", "PyTorch", "AWS", "Docker"],
        githubLink: "#",
        liveLink: "#"
    }
];

export const skills: SkillCategory[] = [
    {
        name: "Languages",
        skills: ["C++", "Python", "Java", "JavaScript", "TypeScript"]
    },
    {
        name: "Frameworks",
        skills: ["React", "Django", "Next.js"]
    },
    {
        name: "DevOps",
        skills: ["Docker", "Kubernetes", "AWS", "CI/CD"]
    },
    {
        name: "AI / ML",
        skills: ["PyTorch", "TensorFlow", "Scikit-learn"]
    }
];
