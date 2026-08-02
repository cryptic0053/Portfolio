# -*- coding: utf-8 -*-
"""Generate Anirban Ghosh Argha's CV as an ATS-friendly PDF."""

import re
import sys
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_CENTER, TA_RIGHT
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer,
    ListFlowable, ListItem, Flowable, KeepTogether, Table, TableStyle,
)

OUT = sys.argv[1] if len(sys.argv) > 1 else "CV.pdf"

INK = HexColor("#111827")
BODY = HexColor("#1f2937")
MUTED = HexColor("#4b5563")
ACCENT = HexColor("#0f4c81")
RULE = HexColor("#9ca3af")

PAGE_W, PAGE_H = A4
MARGIN = 14 * mm

name_st = ParagraphStyle(
    "name", fontName="Helvetica-Bold", fontSize=20, leading=23,
    textColor=INK, alignment=TA_CENTER, spaceAfter=2,
)
tag_st = ParagraphStyle(
    "tag", fontName="Helvetica", fontSize=9.3, leading=12,
    textColor=ACCENT, alignment=TA_CENTER, spaceAfter=3,
)
contact_st = ParagraphStyle(
    "contact", fontName="Helvetica", fontSize=8.6, leading=11.5,
    textColor=MUTED, alignment=TA_CENTER,
)
sec_st = ParagraphStyle(
    "sec", fontName="Helvetica-Bold", fontSize=10, leading=12,
    textColor=ACCENT, spaceBefore=0, spaceAfter=0,
)
body_st = ParagraphStyle(
    "body", fontName="Helvetica", fontSize=8.9, leading=11.6,
    textColor=BODY, alignment=TA_JUSTIFY,
)
entry_st = ParagraphStyle(
    "entry", fontName="Helvetica", fontSize=9.1, leading=12,
    textColor=INK, spaceAfter=0.5,
)
sub_st = ParagraphStyle(
    "sub", fontName="Helvetica-Oblique", fontSize=8.4, leading=10.5,
    textColor=MUTED, spaceAfter=1.5,
)
bullet_st = ParagraphStyle(
    "bullet", fontName="Helvetica", fontSize=8.7, leading=11.2,
    textColor=BODY, alignment=TA_JUSTIFY,
)


class HRule(Flowable):
    """Thin horizontal rule under a section heading."""

    def __init__(self, width, thickness=0.6, color=RULE, space_before=1.5):
        Flowable.__init__(self)
        self.width = width
        self.thickness = thickness
        self.color = color
        self.space_before = space_before
        self.height = thickness + space_before

    def draw(self):
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(self.thickness)
        self.canv.line(0, 0, self.width, 0)


def section(title):
    return [
        Spacer(1, 5),
        Paragraph(title.upper(), sec_st),
        HRule(PAGE_W - 2 * MARGIN),
        Spacer(1, 3.5),
    ]


def bullets(items, style=bullet_st, left=9):
    return ListFlowable(
        [ListItem(Paragraph(t, style), leftIndent=left) for t in items],
        bulletType="bullet", start="square", bulletFontSize=4.2,
        bulletOffsetY=-1.2, leftIndent=left, bulletColor=ACCENT,
        spaceBefore=0, spaceAfter=0,
    )


def link(url, text=None):
    return '<link href="%s" color="#0f4c81">%s</link>' % (url, text or url)


CONTENT_W = PAGE_W - 2 * MARGIN

right_st = ParagraphStyle(
    "right", fontName="Helvetica", fontSize=8.2, leading=11.5,
    textColor=MUTED, alignment=TA_RIGHT,
)
left_title_st = ParagraphStyle(
    "ltitle", fontName="Helvetica-Bold", fontSize=9.1, leading=11.5,
    textColor=INK,
)


def _plain(markup):
    """Strip inline markup so the text can be measured."""
    txt = re.sub(r"<[^>]+>", "", markup)
    for ent, ch in (("&amp;", "&"), ("&mdash;", "-"), ("&ndash;", "-"),
                    ("&middot;", "."), ("&nbsp;", " "), ("&rsquo;", "'")):
        txt = txt.replace(ent, ch)
    return txt


def entry(title, right, sub=None, points=None):
    """A dated entry: bold title on the left, date/link flush right.

    The right column is sized to the text it holds so short dates don't
    strand whitespace and long repo URLs don't wrap.
    """
    flows = []
    if right:
        need = stringWidth(_plain(right), "Helvetica", 8.2) + 4
        rw = max(60.0, min(need, CONTENT_W * 0.48))
        header = Table(
            [[Paragraph(title, left_title_st), Paragraph(right, right_st)]],
            colWidths=[CONTENT_W - rw, rw],
        )
        header.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
        ]))
        flows.append(header)
    else:
        flows.append(Paragraph(title, left_title_st))
    if sub:
        flows.append(Paragraph(sub, sub_st))
    if points:
        flows.append(bullets(points))
    flows.append(Spacer(1, 3))
    return [KeepTogether(flows)]


# ---------------------------------------------------------------- content ---
S = []

S.append(Paragraph("ANIRBAN GHOSH ARGHA", name_st))
S.append(Paragraph(
    "Full Stack Developer &nbsp;|&nbsp; DevOps &amp; Cloud-Native Engineering "
    "&nbsp;|&nbsp; Scalable Backend &amp; Database Systems", tag_st))
S.append(Paragraph(
    "Rajshahi, Bangladesh (UTC+6) &nbsp;&middot;&nbsp; Open to Remote &amp; Relocation "
    "&nbsp;&middot;&nbsp; Available immediately "
    "&nbsp;&middot;&nbsp; " + link("mailto:anirbanargha0053@gmail.com",
                                   "anirbanargha0053@gmail.com"), contact_st))
S.append(Paragraph(
    link("https://github.com/cryptic0053", "github.com/cryptic0053")
    + " &nbsp;&middot;&nbsp; "
    + link("https://linkedin.com/in/anirban-argha", "linkedin.com/in/anirban-argha")
    + " &nbsp;&middot;&nbsp; "
    + link("https://portfolio-cryptic0053s-projects.vercel.app",
           "portfolio-cryptic0053s-projects.vercel.app"), contact_st))

S.append(Spacer(1, 5))
S.append(HRule(PAGE_W - 2 * MARGIN, thickness=1.0, color=ACCENT))

# --- Summary
S += section("Professional Summary")
S.append(Paragraph(
    "Computer Science &amp; Engineering graduate of KUET (B.Sc., 2026) who designs, ships and "
    "operates full-stack, cloud-native software. I build React / Next.js front-ends against "
    "Django REST and FastAPI services, containerise them with Docker, orchestrate them on "
    "Kubernetes, and deliver them through GitHub Actions pipelines with Prometheus and Grafana "
    "observability. Certified as a Fundamental IT Engineer under the ITEE / ITPEC framework "
    "(April 2026), and author of an A+ undergraduate thesis on scalable reverse top-k query "
    "processing. Comfortable owning a feature end to end and working asynchronously with "
    "distributed teams across time zones.", body_st))

# --- Skills
S += section("Technical Skills")
skills = [
    ("Languages", "Python, JavaScript, TypeScript, C++, Java, C, PHP, SQL, Swift"),
    ("Frontend", "React, Next.js, Vue.js, Tailwind CSS, Bootstrap, ShadCN UI, Zustand, Vite"),
    ("Backend", "Django, Django REST Framework, FastAPI, Node.js / Express, Laravel, REST APIs, JWT &amp; RBAC, Gunicorn"),
    ("DevOps &amp; Cloud", "Docker, Kubernetes (Minikube, rolling updates, health probes), AWS Lambda, GitHub Actions, CI/CD, Prometheus, Grafana, SonarQube, Vercel, Render"),
    ("Databases", "PostgreSQL, MySQL, SQLite, MongoDB"),
    ("ML &amp; Data", "PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, NLTK, Streamlit, Jupyter"),
    ("Tools &amp; Practices", "Git, Linux, Postman, Swagger / OpenAPI, Microservices, System Design, High Availability, OOP, Data Structures &amp; Algorithms"),
]
S.append(bullets(["<b>%s:</b> %s" % (k, v) for k, v in skills]))

# --- Certifications (moved high: it is the headline new credential)
S += section("Certifications")
S += entry(
    "Fundamental IT Engineer (FE) &mdash; ITEE Level 2",
    "April 2026",
    "Bangladesh IT-engineers Examination Center (BD-ITEC), Bangladesh Computer Council",
    ["Awarded <b>Full Passer</b> status in the April 2026 national sitting "
     "(Examinee No. FE04-0007). The Information Technology Engineers Examination is conducted "
     "under the ITPEC framework and is aligned with Japan&rsquo;s IPA IT Engineers Examination, "
     "covering algorithms, databases, networks, security and system architecture."],
)
S += entry(
    "Mastering DevOps: From Fundamentals to Advanced Practices", "Ostad &middot; 2025",
    "Certificate of Completion &mdash; Credential ID C29273",
    ["CI/CD pipeline design, Docker, Kubernetes and cloud infrastructure operations."],
)
S += entry(
    "Full Stack Web Development with Python, Django &amp; React", "Ostad &middot; 2025",
    "Certificate of Completion &mdash; Credential ID C28956",
    ["Building and deploying scalable applications with Django REST Framework and React."],
)

# --- Projects
S += section("Selected Projects")

S += entry(
    "Finch-EC &mdash; Cloud-Native E-Commerce Platform",
    link("https://github.com/cryptic0053/Finch-EC", "github.com/cryptic0053/Finch-EC"),
    "Vue.js &middot; Node.js / Express &middot; Docker &middot; Kubernetes &middot; GitHub Actions &middot; Prometheus &middot; Grafana",
    [
        "Built a decoupled storefront and API as independently containerised services, "
        "deployed with production-grade Kubernetes manifests (Deployments, Services, Ingress).",
        "Automated build, image push and rollout through GitHub Actions; managed credentials "
        "with Kubernetes Secrets rather than baked-in configuration.",
        "Instrumented the cluster with Prometheus and Grafana for real-time health and "
        "resource dashboards.",
    ],
)

S += entry(
    "Learning Management System &mdash; Full-Stack Education Platform",
    link("https://github.com/cryptic0053/Learning-Management-System",
         "github.com/cryptic0053/Learning-Management-System"),
    "React (Vite) &middot; Zustand &middot; Tailwind CSS &middot; ShadCN UI &middot; Django REST Framework &middot; PostgreSQL &middot; Render",
    [
        "Implemented role-based access control with separate Student and Teacher dashboards "
        "and permissions, secured by JWT authentication.",
        "Delivered course authoring, enrolment and real-time progress tracking, with a "
        "responsive UI and Swagger-documented API.",
        "Deployed to Render with automated database provisioning; released under MIT licence.",
    ],
)

S += entry(
    "Zero-Downtime Deployment on Kubernetes",
    link("https://github.com/cryptic0053/zero-downtime-app",
         "github.com/cryptic0053/zero-downtime-app"),
    "Django &middot; Gunicorn &middot; Docker &middot; Kubernetes &middot; Minikube",
    [
        "Engineered a highly available Django service that ships new versions with no dropped "
        "requests, using Kubernetes rolling updates plus readiness and liveness probes.",
        "Verified continuity empirically by polling a version endpoint throughout a live "
        "rollout and confirming uninterrupted responses.",
    ],
)

S += entry(
    "Serverless FastAPI on AWS Lambda",
    link("https://github.com/cryptic0053/fastapi_lambda",
         "github.com/cryptic0053/fastapi_lambda"),
    "FastAPI &middot; AWS Lambda &middot; Mangum &middot; Docker &middot; Bash",
    [
        "Authored a production-ready template that runs FastAPI on Lambda via the Mangum ASGI "
        "adapter, scaling automatically and costing nothing while idle.",
        "Supports two packaging paths &mdash; container images for heavy dependencies such as "
        "pandas, and zip bundles for lightweight APIs &mdash; with scripted build tooling.",
    ],
)

S += entry(
    "Developer Portfolio Website",
    link("https://portfolio-cryptic0053s-projects.vercel.app",
         "portfolio-cryptic0053s-projects.vercel.app"),
    "Next.js &middot; TypeScript &middot; Tailwind CSS &middot; Vercel",
    [
        "Designed and shipped a typed, responsive personal site presenting research, projects "
        "and skills, deployed continuously to Vercel from GitHub.",
    ],
)

S += entry(
    "Movie Recommender System",
    link("https://github.com/cryptic0053/Movie-Recommender-System",
         "github.com/cryptic0053/Movie-Recommender-System"),
    "Python &middot; Scikit-learn &middot; Pandas &middot; NumPy &middot; NLTK &middot; Streamlit &middot; TMDB API",
    [
        "Built a content-based recommender over the 5,000-title TMDB dataset, engineering "
        "tag vectors from genres, keywords, cast and crew with CountVectorizer and ranking "
        "neighbours by cosine similarity.",
        "Wrapped the model in a Streamlit interface that fetches live posters and metadata "
        "from the TMDB API.",
    ],
)

# --- Research
S += section("Research")
S += entry(
    "HYDART-RQ: A Hybrid Framework for Durable Reverse Top-k Query Processing over "
    "Time-Varying Preferences", "B.Sc. Thesis &middot; Grade A+",
    "Supervisor: Dr. K. M. Azharul Hasan, Professor, Dept. of CSE, KUET",
    ["Designed a hybrid framework for <b>durable</b> reverse top-k queries &mdash; results that "
     "remain valid as user preference vectors drift over time &mdash; rather than recomputing "
     "answers from scratch at every timestamp.",
     "Targeted the scalability bottleneck of classical reverse top-k processing on large, "
     "time-varying preference datasets. Awarded <b>A+</b> across both thesis terms (4.50 credits)."],
)

# --- Education
S += section("Education")
S += entry(
    "Khulna University of Engineering &amp; Technology (KUET)", "2022 &ndash; 2026",
    "B.Sc. in Computer Science and Engineering &mdash; Khulna, Bangladesh &nbsp;|&nbsp; "
    "<b>CGPA 3.23 / 4.00</b> &nbsp;|&nbsp; 161.25 / 161.25 credits earned",
    ["Degree requirements completed in full; all coursework, thesis and credit-group "
     "requirements satisfied. Graded <b>A+</b> in Project &amp; Thesis and in Technical "
     "Writing &amp; Seminar.",
     "Coursework: Data Structures &amp; Algorithms, Database Systems, Computer Networks, "
     "Operating Systems, Machine Learning, AI, Image Processing &amp; Computer Vision, "
     "Computer Graphics, Software Engineering."],
)
S += entry(
    "Rajshahi College &mdash; Higher Secondary Certificate (HSC)", "2018 &ndash; 2020",
    "GPA 5.00 / 5.00",
)
S += entry(
    "Rajshahi Collegiate School &mdash; Secondary School Certificate (SSC)", "2018",
    "GPA 5.00 / 5.00",
)

# --- Awards
S += section("Awards &amp; Leadership")
S += entry(
    "1st Runner-Up &mdash; 3-Minute Thesis (3MT) Segment", "2025",
    "SciBlitz 1.0, organised by the IEEE CUET Student Branch (IEEE Bangladesh Section)",
    ["Placed second overall in a national research-communication contest, presenting scholarly "
     "work concisely and effectively within a strict three-minute format, as a team of three."],
)
S += entry(
    "Executive Member &mdash; BITFEST 2025", "3&ndash;4 January 2025",
    "Organizing Committee, Department of CSE, KUET",
    ["Recognised by the Head of Department and the Organizing Committee for leadership and "
     "dedication in delivering BITFEST 2025, a national inter-university technology festival."],
)

S += section("Additional")
S.append(bullets([
    "<b>Languages:</b> English (professional working proficiency), Bengali (native).",
    "<b>Remote readiness:</b> Experienced with fully asynchronous Git-based workflows, "
    "pull-request review and written documentation; available for overlap with European and "
    "Asia-Pacific business hours.",
]))

# --- References
S += section("References")
ref_name_st = ParagraphStyle(
    "refname", fontName="Helvetica-Bold", fontSize=8.9, leading=11,
    textColor=INK,
)
ref_body_st = ParagraphStyle(
    "refbody", fontName="Helvetica", fontSize=8.4, leading=10.8,
    textColor=MUTED,
)


def ref(name, role, email, note=None):
    cell = [Paragraph(name, ref_name_st), Paragraph(role, ref_body_st)]
    if note:
        cell.append(Paragraph(note, ref_body_st))
    cell.append(Paragraph(link("mailto:" + email, email), ref_body_st))
    return cell


ref_tbl = Table(
    [[ref("Dr. K. M. Azharul Hasan",
          "Professor, Dept. of Computer Science and Engineering<br/>"
          "Khulna University of Engineering &amp; Technology",
          "az@cse.kuet.ac.bd",
          "<i>Undergraduate thesis supervisor</i>"),
      ref("Md Mehrab Hossain Opi",
          "Lecturer, Dept. of Computer Science and Engineering<br/>"
          "Khulna University of Engineering &amp; Technology",
          "opi@cse.kuet.ac.bd")]],
    colWidths=[CONTENT_W / 2, CONTENT_W / 2],
)
ref_tbl.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (0, 0), 0),
    ("LEFTPADDING", (1, 0), (1, 0), 10),
    ("RIGHTPADDING", (0, 0), (-1, -1), 6),
    ("TOPPADDING", (0, 0), (-1, -1), 0),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
]))
S.append(ref_tbl)


# ------------------------------------------------------------------ build ---
def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 7.2)
    canvas.setFillColor(MUTED)
    canvas.drawString(MARGIN, 9 * mm, "Anirban Ghosh Argha  ·  Curriculum Vitae")
    canvas.drawRightString(PAGE_W - MARGIN, 9 * mm, "Page %d" % doc.page)
    canvas.restoreState()


doc = BaseDocTemplate(
    OUT, pagesize=A4,
    leftMargin=MARGIN, rightMargin=MARGIN,
    topMargin=12 * mm, bottomMargin=14 * mm,
    title="Anirban Ghosh Argha - Curriculum Vitae",
    author="Anirban Ghosh Argha",
    subject="Curriculum Vitae",
    keywords="Full Stack Developer, DevOps, Kubernetes, Django, React, FastAPI, ITEE, Remote",
)
frame = Frame(MARGIN, 14 * mm, PAGE_W - 2 * MARGIN, PAGE_H - 26 * mm, id="main",
              leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
doc.addPageTemplates([PageTemplate(id="all", frames=[frame], onPage=footer)])
doc.build(S)
print("wrote", OUT)
