import { ResearchPaper, Project, SkillCategory, Education, Experience } from "@/types/portfolio";

export const portfolioData = {
    name: "Anirban Ghosh Argha",
    role: "Computer Science and Engineering Graduate, KUET",
    cgpa: "3.23",
    titles: ["Full Stack Developer", "DevOps Enthusiast", "AI Researcher"],
    description:
        "I am a Computer Science and Engineering graduate of KUET and a certified Fundamental IT Engineer (ITEE Level 2). I build full stack applications with React, Django, and FastAPI, containerize and orchestrate them with Docker and Kubernetes, and ship them through automated CI/CD pipelines. I am currently open to remote software engineering roles.",
    socials: {
        github: "https://github.com/cryptic0053",
        linkedin: "https://www.linkedin.com/in/anirban-argha-4a20b7278/",
        email: "mailto:anirbanargha0053@gmail.com",
        cv: "/Anirban_Ghosh_Argha_CV.pdf"
    }
};

export const education: Education[] = [
    {
        institution: "Khulna University of Engineering & Technology (KUET)",
        degree: "B.Sc. in Computer Science and Engineering",
        period: "2022 - 2026",
        cgpa: "3.23 / 4.00"
    },
    {
        institution: "Rajshahi College",
        degree: "Higher Secondary Certificate (HSC)",
        period: "2018 - 2020",
        cgpa: "5.00 / 5.00"
    },
    {
        institution: "Rajshahi Collegiate School",
        degree: "Secondary School Certificate (SSC)",
        period: "2010 - 2018",
        cgpa: "5.00 / 5.00"
    }
];

export const researchPapers: ResearchPaper[] = [
    {
        id: "paper-thesis",
        title: "HYDART-RQ: A Hybrid Framework for Durable Reverse Top-k Query Processing over Time-Varying Preferences",
        abstract:
            "Undergraduate thesis supervised by Dr. K. M. Azharul Hasan, Professor, Department of CSE, KUET. The framework targets durable reverse top-k queries, whose results stay valid as user preference vectors drift over time, instead of recomputing answers from scratch at every timestamp. Awarded A+ across both thesis terms.",
        tags: ["Databases", "Algorithms", "Query Processing", "Scalability"],
        link: "#",
        status: "Completed"
    }
];

export const projects: Project[] = [
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
        id: "project-finch-ec",
        title: "Finch-EC",
        description:
            "A scalable e-commerce application built with Vue.js and Node.js, using a decoupled architecture containerized with Docker and orchestrated through Kubernetes, with Prometheus-based monitoring support.",
        techBadges: ["Vue.js", "Node.js", "Docker", "Kubernetes", "Prometheus"],
        githubLink: "https://github.com/cryptic0053/Finch-EC",
        liveLink: "#"
    },
    {
        id: "project-recommender",
        title: "Movie Recommender System",
        description:
            "A content-based recommender over the 5,000-title TMDB dataset, building tag vectors from genres, keywords, cast, and crew with CountVectorizer and ranking neighbours by cosine similarity, served through a Streamlit interface.",
        techBadges: ["Python", "Scikit-learn", "Pandas", "NLTK", "Streamlit"],
        githubLink: "https://github.com/cryptic0053/Movie-Recommender-System",
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
        title: "Fundamental IT Engineer (FE), ITEE Level 2",
        organization: "Bangladesh IT-engineers Examination Center (BD-ITEC), Bangladesh Computer Council",
        period: "April 2026",
        description:
            "Awarded Full Passer status in the national IT Engineers Examination, conducted under the ITPEC framework and aligned with Japan's IPA IT Engineers Examination, covering algorithms, databases, networks, security, and system architecture."
    },
    {
        title: "1st Runner-Up, 3-Minute Thesis (3MT) Segment",
        organization: "SciBlitz 1.0, IEEE CUET Student Branch",
        period: "2025",
        description:
            "Placed second in a national research communication contest, presenting scholarly work concisely and effectively within a strict three-minute format as a team of three."
    },
    {
        title: "Executive Member",
        organization: "BITFEST 2025, Department of CSE, KUET",
        period: "January 2025",
        description:
            "Recognized by the Head of Department and the Organizing Committee for leadership and dedication in delivering BITFEST 2025, a national inter-university technology festival."
    },
    {
        title: "Certifications in DevOps and Full Stack Web Development",
        organization: "Ostad",
        period: "2025",
        description:
            "Completed training in CI/CD pipelines, Docker, Kubernetes, cloud infrastructure, Django REST Framework, and React.js."
    }
];

export const skills: SkillCategory[] = [
    {
        name: "Languages",
        skills: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "PHP", "SQL"]
    },
    {
        name: "Frameworks",
        skills: ["React", "Next.js", "Django", "FastAPI", "Vue.js", "Node.js", "Tailwind CSS"]
    },
    {
        name: "DevOps",
        skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions", "Prometheus", "Grafana", "SonarQube"]
    },
    {
        name: "AI / ML",
        skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"]
    },
    {
        name: "Databases",
        skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"]
    },
    {
        name: "Others",
        skills: ["OpenGL", "GLSL", "Git", "GitHub", "Linux", "Postman"]
    }
];