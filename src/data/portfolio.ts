import { ResearchPaper, Project, SkillCategory, Education, Experience } from "@/types/portfolio";

export const portfolioData = {
    name: "Anirban Ghosh Argha",
    role: "4th-Year Computer Science and Engineering Student at KUET",
    cgpa: "3.26",
    titles: ["AI Researcher", "Full Stack Developer", "DevOps Enthusiast"],
    description:
        "I am a 4th-year Computer Science and Engineering student at KUET with interests in Artificial Intelligence, full stack development, and cloud-native systems. I enjoy building practical software, exploring scalable backend technologies, and working on research problems that connect theory with real-world applications.",
    socials: {
        github: "https://github.com/cryptic0053",
        linkedin: "https://www.linkedin.com/in/anirban-argha-4a20b7278/",
        email: "mailto:anirbanargha0053@gmail.com",
        cv: "/resume.pdf"
    }
};

export const education: Education[] = [
    {
        institution: "Khulna University of Engineering & Technology (KUET)",
        degree: "B.Sc. in Computer Science and Engineering",
        period: "2022 - 2026 (Expected)",
        cgpa: "3.25 / 4.00"
    }
];

export const researchPapers: ResearchPaper[] = [
    {
        id: "paper-1",
        title: "Quantitatively Validated XAI Framework for Maternal Health Risk Prediction in Rural Bangladesh",
        abstract:
            "A novel Explainable AI framework applied to maternal health risk prediction, with quantitative validation to assess interpretability and reliability in critical healthcare settings.",
        tags: ["AI", "Machine Learning", "NLP", "Explainable AI"],
        link: "#",
        status: "Under Review"
    },
    {
        id: "paper-2",
        title: "Scalable Algorithm for Reverse Top-k Query Processing",
        abstract:
            "An optimized and scalable algorithmic approach for reverse top-k query processing over large-scale datasets, designed to reduce computational overhead while maintaining strong performance.",
        tags: ["Databases", "Algorithms", "Query Processing"],
        link: "#",
        status: "Ongoing"
    }
];

export const projects: Project[] = [
    {
        id: "project-finch-ec",
        title: "Finch-EC",
        description:
            "A scalable e-commerce application built with Vue.js and Node.js, using a decoupled architecture containerized with Docker and orchestrated through Kubernetes, with Prometheus-based monitoring support.",
        techBadges: ["Vue.js", "Node.js", "Docker", "Kubernetes", "Prometheus"],
        githubLink: "#",
        liveLink: "#"
    },
    {
        id: "project-1",
        title: "Learning Management System",
        description:
            "A full stack learning platform designed for academic environments, with emphasis on usability, clean backend architecture, and efficient data management.",
        techBadges: ["React", "Django", "PostgreSQL", "JWT"],
        githubLink: "https://github.com/cryptic0053/Learning-Management-System",
        liveLink: "#"
    },
    {
        id: "project-2",
        title: "Cafe Beel Harina OpenGL 3D",
        description:
            "An interactive 3D graphics project developed with OpenGL and C++, focused on scene construction, rendering, lighting, and immersive visual interaction.",
        techBadges: ["C++", "OpenGL", "GLSL", "Computer Graphics"],
        githubLink: "https://github.com/cryptic0053/CafeBeelHarina-OpenGL-3D",
        liveLink: "#"
    },
    {
        id: "project-3",
        title: "Zero Downtime App",
        description:
            "A DevOps-oriented project demonstrating reliable deployment strategies, service continuity, and scalable infrastructure practices using container-based workflows.",
        techBadges: ["Docker", "Kubernetes", "DevOps", "Deployment"],
        githubLink: "https://github.com/cryptic0053/zero-downtime-app",
        liveLink: "#"
    },
    {
        id: "project-4",
        title: "FastAPI Lambda",
        description:
            "A lightweight serverless backend project for deploying FastAPI services on AWS Lambda, focused on clean API design and efficient cloud deployment.",
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
    }
];

export const experiences: Experience[] = [
    {
        title: "1st Runner-Up, Three Minute Thesis (3MT) Segment",
        organization: "SciBlitz 1.0, IEEE CUET Student Branch",
        period: "2025",
        description:
            "Recognized for presenting scholarly research clearly and concisely in a competitive academic setting."
    },
    {
        title: "Junior Executive Member",
        organization: "BITFEST 2025, Department of CSE, KUET",
        period: "January 2025",
        description:
            "Contributed to the planning and successful organization of BITFEST 2025 through coordination, teamwork, and event support."
    },
    {
        title: "Active GitHub Developer",
        organization: "GitHub",
        period: "Ongoing",
        description:
            "Maintains repositories focused on full stack development, DevOps practices, cloud-native tools, and academic projects."
    },
    {
        title: "Certifications in DevOps and Full Stack Web Development",
        organization: "Ostad",
        period: "Completed",
        description:
            "Completed training in CI/CD pipelines, Docker, Kubernetes, cloud infrastructure, Django REST Framework, and React.js."
    }
];

export const skills: SkillCategory[] = [
    {
        name: "Languages",
        skills: ["C", "C++", "Python", "Java", "JavaScript", "PHP", "Swift", "SQL"]
    },
    {
        name: "Frameworks",
        skills: ["React", "Next.js", "Django", "FastAPI", "Vue.js", "Node.js", "Laravel", "Tailwind CSS"]
    },
    {
        name: "DevOps",
        skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions", "Prometheus", "Grafana", "SonarQube"]
    },
    {
        name: "AI / ML",
        skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "NLTK", "Machine Learning"]
    },
    {
        name: "Databases",
        skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"]
    },
    {
        name: "Other",
        skills: ["OpenGL", "GLSL", "Git", "GitHub", "Linux", "Postman"]
    }
];