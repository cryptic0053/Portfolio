import { ResearchPaper, Project, SkillCategory } from "@/types/portfolio";

export const portfolioData = {
    name: "Anirban Argha",
    role: "4th-Year Computer Science Student at KUET",
    cgpa: "3.25",
    titles: ["AI Researcher", "Full Stack Developer", "DevOps Enthusiast"],
    description:
        "I am a 4th-year Computer Science and Engineering student at KUET with strong interests in Artificial Intelligence, full stack development, and cloud-native systems. I enjoy building practical software, exploring scalable backend technologies, and working on research problems that connect theory with real-world applications.",
    socials: {
        github: "https://github.com/cryptic0053",
        linkedin: "https://www.linkedin.com/in/anirban-argha-4a20b7278/",
        email: "mailto:anirbanargha0053@gmail.com",
        cv: "/resume.pdf"
    }
};

export const researchPapers: ResearchPaper[] = [
    {
        id: "paper-1",
        title: "Quantitatively Validated XAI Framework for Maternal Health Risk Prediction in Rural Bangladesh",
        abstract:
            "A novel Explainable AI framework applied to predicting maternal health risks, validated through quantitative metrics to ensure interpretability and reliability in critical healthcare scenarios.",
        tags: ["AI", "Machine Learning", "NLP", "Explainable AI"],
        link: "#",
        status: "Under Review"
    },
    {
        id: "paper-2",
        title: "Scalable Algorithm for Reverse Top-k Query Processing",
        abstract:
            "An optimized and scalable algorithmic approach to processing reverse top-k queries efficiently over large-scale datasets, reducing computational overhead while maintaining high accuracy.",
        tags: ["Databases", "Algorithms", "Query Processing"],
        link: "#",
        status: "On Going"
    }
];

export const projects: Project[] = [
    {
        id: "project-1",
        title: "Learning Management System",
        description:
            "A full stack learning platform built with modern web technologies, focused on usability, clean backend architecture, and efficient data handling for academic environments.",
        techBadges: ["React", "Django", "PostgreSQL", "JWT"],
        githubLink: "https://github.com/cryptic0053/Learning-Management-System",
        liveLink: "#"
    },
    {
        id: "project-2",
        title: "Cafe Beel Harina OpenGL 3D",
        description:
            "An interactive 3D graphics project developed with OpenGL and C++, designed to explore rendering, scene construction, lighting, and immersive visual interaction.",
        techBadges: ["C++", "OpenGL", "GLSL", "Computer Graphics"],
        githubLink: "https://github.com/cryptic0053/CafeBeelHarina-OpenGL-3D",
        liveLink: "#"
    },
    {
        id: "project-3",
        title: "Zero Downtime App",
        description:
            "A DevOps-oriented application that demonstrates reliable deployment strategies, service continuity, and scalable infrastructure practices using container-based workflows.",
        techBadges: ["Docker", "Kubernetes", "DevOps", "Deployment"],
        githubLink: "https://github.com/cryptic0053/zero-downtime-app",
        liveLink: "#"
    },
    {
        id: "project-4",
        title: "FastAPI Lambda",
        description:
            "A lightweight serverless backend project for deploying FastAPI services on AWS Lambda, focused on API design, efficiency, and cloud deployment.",
        techBadges: ["Python", "FastAPI", "AWS", "Serverless"],
        githubLink: "https://github.com/cryptic0053/fastapi_lambda",
        liveLink: "#"
    },
    {
        id: "project-5",
        title: "Social Media App",
        description:
            "A web-based social platform with core community features, built to practice full stack development, user interaction, and database-driven application design.",
        techBadges: ["Django", "PostgreSQL", "Bootstrap", "Web App"],
        githubLink: "https://github.com/cryptic0053/Social-Media-App",
        liveLink: "#"
    },
];

export const skills: SkillCategory[] = [
    {
        name: "Languages",
        skills: ["C", "C++", "Python", "Java", "JavaScript", "PHP", "SQL"]
    },
    {
        name: "Frameworks",
        skills: ["React", "Django", "Next.js", "FastAPI"]
    },
    {
        name: "DevOps",
        skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"]
    },
    {
        name: "AI / ML",
        skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Machine Learning"]
    },
    {
        name: "Other",
        skills: ["OpenGL", "GLSL", "PostgreSQL", "Git", "GitHub"]
    }
];