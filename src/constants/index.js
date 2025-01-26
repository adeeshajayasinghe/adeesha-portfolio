import project1 from "../assets/projects/Project-1.png";
import project2 from "../assets/projects/Project-2.png";
import project3 from "../assets/projects/Project-3.png";
import project4 from "../assets/projects/Project-4.png";
import project5 from "../assets/projects/Project-5.png";

import article1 from "../assets/articles/Article-1.gif"
import article2 from "../assets/articles/Article-2.gif"
import article3 from "../assets/articles/Article-3.gif"

import highlight1 from "../assets/competitions/Hackathon.jpg"

export const NAV_LINKS = [
  {
    id: "home",
    title: "Home"
  },
  {
    id: "education",
    title: "Education"
  },
  {
    id: "experience",
    title: "Experience"
  },
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "certificates",
    title: "Certificates"
  },
  {
    id: "highlights",
    title: "Highlights"
  },
  {
    id: "publications",
    title: "Publications"
  },
]

export const HERO_CONTENT = `I am passionate about exploring new knowledge, accepting challenges, and finding creative solutions to problems. With a flexible and positive attitude, I adapt quickly to changing situations and always look for better ways to get things done. I enjoy working as part of a team, where I can collaborate, share ideas, and learn from others to achieve common goals. I am always motivated to grow my skills, take on new opportunities, and turn ideas into reality through dedication and hard work.`;


export const EDUCATION = [
  {
    year: "2021 - Present",
    title: "BSc Eng Hons, Computer Science & Engineering",
    institute: "University of Moratuwa",
    description: `Pursuing a Bachelor’s degree in Computer Science and Engineering under the Faculty of Engineering. I'm also following a Mathematics minor offered by the Department of Mathematics. During my studies, I contributed as a volunteer developer for a learning platform supporting O/L students, organized by the Math Society, and participated in the "Soyuru Sathkara" program, teaching mathematics to underprivileged students.`,
  },
  {
    year: "2019 - 2020",
    title: "Diploma in Information Technology",
    institute: "ESOFT Metro Campus, Galle",
    description: `Completed a Diploma in Information Technology from ESOFT Metro Campus, Galle. This diploma built my foundational knowledge in IT, covering key concepts and practical skills. For the final project, my team developed a train management system for Galle Railway Station, which was recognized as the best project in our batch.`,
  },
  {
    year: "2006 - 2019",
    title: "School",
    institute: "All Saints' College, Galle",
    description: `Attended All Saints' college from Grade 2 through Advanced Levels, achieving 2A and 1B passes in A/Ls, which earned my admission to University of Moratuwa.`,
  },

]

export const EXPERIENCES = [
  {
    year: "2023 Nov - 2024 May",
    role: "Intern Software Engineer",
    company: "Aayu Technologies LLC",
    description: ["Worked as an intern software engineer for six months, contributing to the company’s software products and collaborating on an intern project to migrate a legacy internal system to a modern tech stack.", 
      "Gained hands-on experience with AWS services, particularly in cloud infrastructure, which helped in designing and deploying scalable solutions.",
      "Worked in a highly collaborative environment with a supportive team, including my intern partner, supervisors, senior developers, the QA team, and even the CEO, which enhanced my learning experience.",
      "Designed and implemented a bulk notification service utilizing AWS services for webhook triggers, adding a valuable feature to the company's product."
    ],
    technologies: ["TypeScript", "Angular", "NodeJS", "AWS", "Firebase"],
  },
];

export const PROJECTS = [
  {
    title: "GPU Pooling System - Final Year Project",
    image: project1,
    description:
      "Building a distributed system enabling GPU owners to remotely pool their GPUs into our platform and earn income based on GPU usage. On the otherhand this system allows AI model developers to purchase multiple GPUs and perform parallel training across selected nodes.",
    technologies: ["Angular", "Go", "Kubernetes", "Docker", "Ansible", "RabbitMQ", "PyTorch", "Protobufs"],
  },
  {
    title: "Distributed Logging System",
    image: project2,
    description:
      "Distributed commit log system using gRPC framework with mutual TLS authentication, client-side load balancing with service discovery and  Raft-based consensus for server clustering.",
    technologies: ["Go", "Kubernetes", "gRPC", "Protobufs"],
  },
  {
    title: "DevOps Process Assistant - ML Project",
    image: project3,
    description:
      "A Chatbot, utilizing Retrieval-Augmented Generation (RAG) to guide software process practitioners through the stages of the DevOps lifecycle and capable of dynamically updating its knowledge base.",
    technologies: ["Python", "Streamlit", "Hugging Face", "Faiss Vector Database"],
  },
  {
    title: "License Manager - Internship Project",
    image: project4,
    description:
      "Developed a license issuing platform for company products, enabling generation, management and validation of user licenses.",
    technologies: ["TypeScript", "Angular", "NodeJS", "ExpressJS", "Firebase"],
  },
  {
    title: "Stage Pilot - Transport Management System",
    image: project5,
    description:
      "Developed a web application for online train ticket booking, streamlining the seat reservation process with multi-level user management. ",
    technologies: ["JavaScript", "ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Jest"],
  },
];

export const PUBLICATIONS = [
  {
    title: "KUbeadm with GCP",
    image: article1,
    description:
      "Simplifying the process of setting up a Kubernetes cluster using Kubeadm on Google Cloud Platform.",
    link: "https://medium.com/@adeeshaiduwara99/building-a-kubernetes-cluster-on-gcp-using-kubeadm-part-1-f82a1a03eab4"
  },
  {
    title: "Kubeadm on Bare-metal with OpenVPN",
    image: article2,
    description:
      "A guide on setting up a Kubernetes cluster on bare metal using Kubeadm. This article walk you through how to overcome network challenges when connecting physical workstations across different Local Area Networks using VPN.",
    link: "https://medium.com/@adeeshaiduwara99/building-a-kubernetes-cluster-on-bare-metal-with-kubeadm-and-openvpn-e99832372716"
  },
  {
    title: "Automating Kubeadm with Ansible",
    image: article3,
    description:
      "Manually setting up a Kubernetes cluster with Kubeadm can be repetitive and time-consuming. This article demonstrates how to automate the entire process using Ansible.",
    link: "https://medium.com/@adeeshaiduwara99/automating-kubernetes-cluster-creation-with-ansible-c4da185af5ac"
  },
];

export const CERTS = [
  {
    title: "Application Development using Microservices and Serverless - IBM",
    description:
      "Learned microservices based application development in IMB cloud, Serverless computing, Red Hat OpenShift and service meshes in microservice architecture.",
    linkText: "View on Coursera",
    link: "https://coursera.org/verify/1BVRZTV81AGI"
  },
  {
    title: "Serverless Architectures on AWS - AWS",
    description:
      "Studied on AWS serverless application model (AWS SAM), Serverless Event Driven architectures (SQS, SNS) and other AWS services like Cognito, EventBridge and Step Functions.",
    linkText: "View on Coursera",
    link: "https://coursera.org/verify/Z55CD4R6WWZV"
  },
  {
    title: "AWS Cloud Technical Essentials - AWS",
    description:
      "Explored AWS fundemental concepts like security, compute & networking, storage & databases and monitoring & optimization.",
    linkText: "View on Coursera",
    link: "https://coursera.org/verify/LQD37Q48MSHU"
  },
  {
    title: "Intro to Machine Learning - Kaggle",
    description:
      "Learned core ideas of machine learning including how models work, data exploration, build a simple model, model validation, underfitting and overfitting and Random Forest learning algorithm.",
    linkText: "View on Kaggle",
    link: "https://www.kaggle.com/learn/certification/adeeshajayasinghe/intro-to-machine-learning"
  },
  {
    title: "Pandas - Kaggle",
    description:
      "Explored data manipulation and cleaning, including handling missing values, merging datasets, and reshaping data with Python Pandas library.",
    linkText: "View on Kaggle",
    link: "https://www.kaggle.com/learn/certification/adeeshajayasinghe/pandas"
  },
  {
    title: "Intermediate Machine Learning - Kaggle",
    description:
      "Studied how to handle missing data in datasets, adding pipelines for pre-processing, cross-validation, XGBoost and data leakage.",
    linkText: "View on Kaggle",
    link: "https://www.kaggle.com/learn/certification/adeeshajayasinghe/intermediate-machine-learning"
  },
  {
    title: "Data Visualization - Kaggle",
    description:
      "Learned data visualization trends, bar charts & heatmaps, scatter plots and how to choose plot types and customize charts.",
    linkText: "View on Kaggle",
    link: "https://www.kaggle.com/learn/certification/adeeshajayasinghe/data-visualization"
  },
  {
    title: "Feature Engineering - Kaggle",
    description:
      "Learned how to locate, transform and discover new features. Additonally, studied on clustering with K-Means and target encoding.",
    linkText: "View on Kaggle",
    link: "https://www.kaggle.com/learn/certification/adeeshajayasinghe/feature-engineering"
  },
  {
    title: "Intro to SQL - Kaggle",
    description:
      "Refreshed knowledge on Fundementals of SQL and BigQuery.",
    linkText: "View on Kaggle",
    link: "https://www.kaggle.com/learn/certification/adeeshajayasinghe/intro-to-sql"
  },
  {
    title: "Advanced SQL - Kaggle",
    description:
      "Studied on advanced SQL concepts like Joins, analytic functions and how to optimise queries.",
    linkText: "View on Kaggle",
    link: "https://www.kaggle.com/learn/certification/adeeshajayasinghe/advanced-sql"
  },
  {
    title: "Intro to Deep Learning - Kaggle",
    description:
      "Learned basics of deep neural networks like SGD algorithm, overfitting and underfitting, dropout and batch normalization.",
    linkText: "View on Kaggle",
    link: "https://www.kaggle.com/learn/certification/adeeshajayasinghe/intro-to-deep-learning"
  },
  {
    title: "Computer Vision - Kaggle",
    description:
      "Explored on activation functions, data augmentation and convolution concepts like pooling, padding etc.",
    linkText: "View on Kaggle",
    link: "https://www.kaggle.com/learn/certification/adeeshajayasinghe/computer-vision"
  },
  {
    title: "Data Cleaning - Kaggle",
    description:
      "Studied on handling missing values and inconsistent data entries in datasets, scaling and normalization and character encoding.",
    linkText: "View on Kaggle",
    link: "https://www.kaggle.com/learn/certification/adeeshajayasinghe/data-cleaning"
  },
]

export const HIGHLIGHTS = [
  {
    title: "mSpace Code Blast National Hackathon 2023 - Finalists",
    description:
      ["Led a team to the final round in a hackathon conducted by SLT Mobitel.",
        "Designed a real-time voice translation mobile application.",
        "Utilized Flutter for frontend development and integrated WebRTC for real-time communication.",
        "Presented the final design to the panel."
      ],
    image: highlight1
  },
]

export const CONTACT = {
  address: "Galle, Sri Lanka",
  email: "adeeshaiduwara99@gmail.com",
};
