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
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://picsum.photos/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/blvckeasy/ecommerce',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application built with Angular and Firebase. Real-time updates and team collaboration features.',
      image: 'https://picsum.photos/400/250',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'Material UI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/blvckeasy/taskmanager',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A responsive weather dashboard with location-based forecasts, interactive maps, and data visualization.',
      image: 'https://picsum.photos/400/250',
      technologies: [
        'Vue.js',
        'Chart.js',
        'OpenWeather API',
        'Tailwind CSS',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/blvckeasy/weather',
    },
  ];

  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'React', level: 88 },
        { name: 'Angular', level: 85 },
        { name: 'Vue.js', level: 80 },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 75 },
        { name: 'C#', level: 70 },
        { name: 'PHP', level: 65 },
      ],
    },
    {
      name: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Git', level: 95 },
      ],
    },
  ];

  timeline: TimelineItem[] = [
    {
      date: '2022 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      description:
        'Leading development of scalable web applications using modern technologies. Mentoring junior developers and architecting solutions for enterprise clients.',
      skills: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript'],
    },
    {
      date: '2020 - 2022',
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      description:
        'Developed responsive web applications and improved user experience across multiple projects. Collaborated with design teams to implement pixel-perfect interfaces.',
      skills: [
        'Angular',
        'JavaScript',
        'SCSS',
        'Firebase',
        'Material Design',
      ],
    },
    {
      date: '2018 - 2020',
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      description:
        'Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies.',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    },
    {
      date: '2014 - 2018',
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      description:
        'Graduated with honors. Focused on software engineering, algorithms, and web development. Active member of the programming club.',
      skills: [
        'Java',
        'C++',
        'Data Structures',
        'Algorithms',
        'Software Engineering',
      ],
    },
  ];

  blogPosts: BlogPost[] = [
    {
      title: 'Building Scalable React Applications',
      excerpt:
        'Learn best practices for structuring and scaling React applications for enterprise-level projects.',
      date: new Date('2024-01-15'),
      category: 'React',
      image: 'https://picsum.photos/300/200',
      url: '/blog/scalable-react-applications',
    },
    {
      title: 'Modern CSS Techniques for 2024',
      excerpt:
        'Explore the latest CSS features and techniques that will improve your web development workflow.',
      date: new Date('2024-01-08'),
      category: 'CSS',
      image: 'https://picsum.photos/300/200',
      url: '/blog/modern-css-techniques',
    },
    {
      title: 'TypeScript Best Practices',
      excerpt:
        'Discover advanced TypeScript patterns and practices for writing maintainable code.',
      date: new Date('2024-01-01'),
      category: 'TypeScript',
      image: 'https://picsum.photos/300/200',
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