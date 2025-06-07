import { Component, OnInit, Renderer2 } from '@angular/core';

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
}

interface Skill {
    name: string;
    level: number;
}

interface SkillCategory {
    name: string;
    skills: Skill[];
}

interface TimelineItem {
    date: string;
    title: string;
    company: string;
    description: string;
    skills: string[];
}

interface BlogPost {
    title: string;
    excerpt: string;
    date: Date;
    category: string;
    image: string;
    url: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'portfolio';
    isDarkMode = false;

    constructor(private renderer: Renderer2) {}

    projects: Project[] = [
        {
            title: 'Bonus-System',
            description:
                'I worked in the backend and DevOps positions on a bonus system project aimed at encouraging employees to be more responsible in their work.',
            image: '/github-projects/bonus-system.jpg',
            technologies: ['Node.js', 'MongoDB', 'DDD architecture', 'Docker', 'Express.js', 'TypeScript'],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/blvckeasy/ecommerce',
        },
        {   
            title: 'Online Chat App',
            description:
                'A real-time messaging project developed for users to exchange messages. I worked on this project as a Full Stack developer using Node.js and Angular 18.',
            image: '/github-projects/chat-app.jpg',
            technologies: ['Angular', 'Node.js', 'TypeScript', 'MongoDB', 'Socket.io', 'AWS'],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/blvckeasy/chat-app-backend',
        },
        {
            title: 'Captcha',
            description:
                'I developed a captcha system using JavaScript and EJS to verify the authenticity of users during authorization.',
            image: '/github-projects/imnotrobot.png',
            technologies: [
                'Javascript',
                'Node.js',
                'Express.js',
                'Swagger',
            ],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/blvckeasy/captcha',
        },
    ];

    skillCategories: SkillCategory[] = [
        {
            name: 'Backend',
            skills: [
                { name: 'Node.js', level: 90 },
                { name: 'Python', level: 85 },
                { name: 'C', level: 83 },
            ],
        },
        {
            name: 'Frontend',
            skills: [
                { name: 'JavaScript', level: 95 },
                { name: 'TypeScript', level: 90 },
                { name: 'Angular', level: 80 },
            ],
        },
        {
            name: 'Database & Tools',
            skills: [
                { name: 'MongoDB', level: 95 },
                { name: 'SQL', level: 95 },
                { name: 'Docker', level: 90 },
                { name: 'AWS', level: 90 },
                { name: 'Git', level: 95 },
            ],
        },
    ];

    timeline: TimelineItem[] = [
        {
            date: 'December 2024 - Present',
            title: 'Backend Engineer & DevOps',
            company: 'TrastPay (TrastBank)',
            description: `I have worked on three main projects: Tax Integration System, Bonus System, and IFRS (International Financial Reporting Standards).
  
  In the Tax Integration Project, I served as both a Backend and DevOps developer. Each client had over 15,000 data records to process. To reduce network load, I developed a system that saves data to the database using a custom algorithm, allowing for efficient reuse later.
  
  In the Bonus System Project, I also worked as a Backend and DevOps developer. I was fully involved in designing the system architecture. The system currently serves more than 2,000 employees.
  
  In the IFRS Project, I worked as a Full Stack and DevOps developer. I was responsible for both frontend and backend development, as well as deployment and infrastructure-related tasks.`,
            skills: [
                'Node.js',
                'AWS',
                'PostgreSQL',
                'Docker',
                'Ubuntu',
                'Git',
                'RabbitMQ',
                'Express',
                'IABS Oracle',
                'MongoDB',
                'TypeScript',
            ],
        },
        {
            date: 'February 2023 - March 2025',
            title: 'Main Programming Instructor',
            company: 'Najot Ta`lim',
            description: `Taught beginner-level students programming in depth, focusing on the C and Python programming languages. Covered database integration using MySQL and building desktop applications in Python. Mentored over 350 students, with more than 85% of them successfully completing the course.`,
            skills: ['C', 'Python 3', 'MySQL', 'Desktop Application'],
        },
        {
            date: 'November 2021 - February 2023',
            title: 'Assistant Programming Instructor',
            company: 'Najot Ta`lim',
            description: `Worked as an assistant instructor teaching C and Python programming languages. Engaged with more than 200 students individually and in groups. Experienced in explaining algorithms, teaching programming fundamentals, and guiding students through practical projects.`,
            skills: ['C', 'Python 3', 'MySQL', 'Desktop Application'],
        },
        {
            date: '2023 - 2028',
            title: 'Bachelor of Telecommunications',
            company: 'Tashkent University of Information Technologies',
            description: `Studied in the part-time program with a focus on telecommunications, network technologies, digital signal processing, and mobile communication systems.`,
            skills: [
                'Artificial Intelligence',
                'Digital Signal Processing',
                'Mobile Communication Technologies',
                'Cisco (CCNA basics)',
                'Computer Networks',
            ],
        },
    ];

    blogPosts: BlogPost[] = [
        {
            title: 'Dopamine, Dopamine Detox.',
            excerpt:
                'Ever wondered why it’s so hard to focus on studying but so easy to binge short videos for hours? Discover how dopamine shapes your motivation — and how a simple dopamine detox can help you regain control of your time, focus, and joy in real-life goals.',
            date: new Date('2024-11-03'),
            category: 'CSS',
            image: '/blog-posts/dopamine-detox.jpg',
            url: 'https://telegra.ph/Dofomin-nima-Dofomin-detoks-11-03',
        },
        {
            title: 'The secret was revealed during deployment...',
            excerpt:
                '“Works on my machine” — the classic developer headache. Docker promised to solve this, right? But what if it still breaks on the server? In this post, I share a real story from my own project that exposed a hidden pitfall in how we use Docker — and how to fix it before it ruins your deployment.',
            date: new Date('2025-05-01'),
            category: 'React',
            image: '/blog-posts/docker-bilan-bizni-aldashganmi.jpg',
            url: 'https://telegra.ph/Docker-bilan-bizni-aldashganmi-05-01',
        },
        {
            title: 'TypeScript Best Practices',
            excerpt:
                'Discover advanced TypeScript patterns and practices for writing maintainable code.',
            date: new Date('2024-01-01'),
            category: 'TypeScript',
            image: 'https://blog.theodo.com/_astro/ts_logo.BstCNrTU_1Dbxpr.webp',
            url: '/blog/typescript-best-practices',
        },
    ];

    ngOnInit() {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        this.isDarkMode = savedTheme === 'dark';
        this.updateTheme();
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        this.updateTheme();
        localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }

    private updateTheme() {
        if (this.isDarkMode) {
            this.renderer.addClass(document.body, 'dark-theme');
        } else {
            this.renderer.removeClass(document.body, 'dark-theme');
        }
    }

    scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    onSubmit() {
        // Handle form submission
        console.log('Form submitted');
        // You can integrate with a backend service or email service here
    }
}
