/**
 * Studio Content Data
 * 
 * This file contains all content items for the Studio monitor tower.
 * Each item will be displayed on a monitor in the tower.
 * 
 * Platforms: 'youtube', 'blog', 'tiktok'
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#FF0000',
        accentColor: '#cc0000',
        icon: '▶',
        label: 'GitHub',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#4A90D9',
        accentColor: '#2d6cb5',
        icon: '📝',
        label: 'LinkedIn',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00F2EA',
        accentColor: '#FF0050',
        icon: '📸',
        label: 'Instagram',
        shape: 'phone', // Vertical phone
    },
};

// Content data with Narendra's projects and social links
const RAW_CONTENT_DATA = [
    // ============ GitHub Projects (shown as TV) ============
    {
        id: 'yt-001',
        platform: 'youtube',
        title: 'Employee Management System',
        description: 'A full-stack Employee Management System with role-based access control (Admin, Manager, Employee). Built with React, Django REST Framework, and SQL.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: 'https://emp-manage-system-delta.vercel.app',
        date: '2024-11-01',
        views: '—',
        duration: '—',
    },
    {
        id: 'yt-002',
        platform: 'youtube',
        title: 'Authentication System with Django & React',
        description: 'A secure auth module with session-based login, registration, password reset via OTP, and token-based authentication.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: 'https://auth-demo-project-3.onrender.com/',
        date: '2024-10-15',
        views: '—',
        duration: '—',
    },
    {
        id: 'yt-003',
        platform: 'youtube',
        title: 'Banking Management System (Bank Buddy)',
        description: 'A comprehensive banking platform with Admin/User roles, loan management, transaction history, and robust access control.',
        thumbnail: null,
        url: 'https://github.com/Narendra-g9',
        date: '2024-09-20',
        views: '—',
        duration: '—',
    },
    {
        id: 'yt-004',
        platform: 'youtube',
        title: 'Python Full-Stack Projects Collection',
        description: 'A collection of full-stack web applications built with Django, React, and REST APIs during my development journey.',
        thumbnail: null,
        url: 'https://github.com/Narendra-g9',
        date: '2024-08-01',
        views: '—',
        duration: '—',
    },
    {
        id: 'yt-005',
        platform: 'youtube',
        title: 'REST API Development with Django',
        description: 'Building robust REST APIs with Django REST Framework, including token authentication and CRUD operations.',
        thumbnail: null,
        url: 'https://github.com/Narendra-g9',
        date: '2024-07-15',
        views: '—',
        duration: '—',
    },
    {
        id: 'yt-006',
        platform: 'youtube',
        title: 'React Frontend Projects',
        description: 'Modern React applications with hooks, context API, and responsive design patterns.',
        thumbnail: null,
        url: 'https://github.com/Narendra-g9',
        date: '2024-06-20',
        views: '—',
        duration: '—',
    },
    {
        id: 'yt-007',
        platform: 'youtube',
        title: 'SQL Database Design & Optimization',
        description: 'Database schema design, query optimization, and PL/SQL procedures for production applications.',
        thumbnail: null,
        url: 'https://github.com/Narendra-g9',
        date: '2024-05-10',
        views: '—',
        duration: '—',
    },
    {
        id: 'yt-008',
        platform: 'youtube',
        title: 'This 3D Portfolio Experience',
        description: 'The immersive 3D portfolio you\'re exploring right now, built with React Three Fiber, Three.js, and GSAP.',
        thumbnail: null,
        url: '#',
        date: '2025-05-01',
        views: '—',
        duration: '—',
    },

    // ============ LinkedIn Posts (shown as Monitor) ============
    {
        id: 'blog-001',
        platform: 'blog',
        title: 'My Full-Stack Development Journey',
        description: 'From learning Python basics to building production-ready full-stack applications with Django and React. A reflective post on my growth as a developer.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/yadala-narendra/',
        date: '2025-01-08',
        readTime: '5 min',
    },
    {
        id: 'blog-002',
        platform: 'blog',
        title: 'NPTEL Python Programming Certification',
        description: 'Successfully completed the NPTEL certification in Python Programming — a milestone in my CS journey.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/yadala-narendra/',
        date: '2023-12-20',
        readTime: '3 min',
    },
    {
        id: 'blog-003',
        platform: 'blog',
        title: 'SmartInternz Full-Stack Internship',
        description: 'Completed my Python Full-Stack Development internship at SmartInternz, building real-world projects with Django & React.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/yadala-narendra/',
        date: '2024-11-30',
        readTime: '4 min',
    },
    {
        id: 'blog-004',
        platform: 'blog',
        title: 'Building Role-Based Access Control',
        description: 'Deep dive into implementing RBAC in Django REST Framework — from theory to production-ready code.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/yadala-narendra/',
        date: '2024-10-15',
        readTime: '8 min',
    },
    {
        id: 'blog-005',
        platform: 'blog',
        title: 'Cisco Cybersecurity Essentials',
        description: 'Completed Cisco\'s Cybersecurity Essentials certification — understanding network security fundamentals.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/yadala-narendra/',
        date: '2023-11-15',
        readTime: '3 min',
    },
    {
        id: 'blog-006',
        platform: 'blog',
        title: 'AI/ML Virtual Internship with Google',
        description: 'Completed the AI/ML Virtual Internship powered by Google & AICTE, learning machine learning fundamentals.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/yadala-narendra/',
        date: '2024-06-01',
        readTime: '5 min',
    },
    {
        id: 'blog-007',
        platform: 'blog',
        title: 'B.Tech CSE - Final Year Reflections',
        description: 'Looking back at four years of Computer Science at KHRIT — the projects, the challenges, and the growth.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/yadala-narendra/',
        date: '2025-04-20',
        readTime: '7 min',
    },
    {
        id: 'blog-008',
        platform: 'blog',
        title: 'Django REST Framework Best Practices',
        description: 'Tips and patterns I\'ve learned building REST APIs in production — serializers, viewsets, and authentication.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/yadala-narendra/',
        date: '2024-09-10',
        readTime: '10 min',
    },

    // ============ Instagram Posts (shown as Phone) ============
    {
        id: 'tt-001',
        platform: 'tiktok',
        title: 'Follow me on Instagram! ✨',
        description: 'Connect with me for tech updates, coding tips, and behind-the-scenes of my development journey.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: 'https://www.instagram.com/narendra_yadav_444/',
        date: '2025-01-09',
        views: '—',
        likes: '—',
    },
    {
        id: 'tt-002',
        platform: 'tiktok',
        title: 'Deploying Django to Render 🚀',
        description: 'Quick walkthrough of deploying a Django + React app to Render',
        thumbnail: null,
        url: 'https://www.instagram.com/narendra_yadav_444/',
        date: '2025-01-03',
        views: '—',
        likes: '—',
    },
    {
        id: 'tt-003',
        platform: 'tiktok',
        title: 'When the API finally responds 200 🎉',
        description: 'The satisfaction of debugging REST APIs',
        thumbnail: null,
        url: 'https://www.instagram.com/narendra_yadav_444/',
        date: '2024-12-25',
        views: '—',
        likes: '—',
    },
    {
        id: 'tt-004',
        platform: 'tiktok',
        title: 'Day in the life: Full-Stack Dev',
        description: 'What I do as a full-stack developer',
        thumbnail: null,
        url: 'https://www.instagram.com/narendra_yadav_444/',
        date: '2024-12-18',
        views: '—',
        likes: '—',
    },
    {
        id: 'tt-005',
        platform: 'tiktok',
        title: 'React vs Django? Both! 😅',
        description: 'Full-stack life is the best life',
        thumbnail: null,
        url: 'https://www.instagram.com/narendra_yadav_444/',
        date: '2024-12-12',
        views: '—',
        likes: '—',
    },
    {
        id: 'tt-006',
        platform: 'tiktok',
        title: 'Building a dashboard in React 📊',
        description: 'Admin dashboard with role-based views',
        thumbnail: null,
        url: 'https://www.instagram.com/narendra_yadav_444/',
        date: '2024-12-05',
        views: '—',
        likes: '—',
    },
    {
        id: 'tt-007',
        platform: 'tiktok',
        title: 'SQL query that took 3 hours 💀',
        description: 'Complex JOINs and subqueries — worth it!',
        thumbnail: null,
        url: 'https://www.instagram.com/narendra_yadav_444/',
        date: '2024-11-28',
        views: '—',
        likes: '—',
    },
    {
        id: 'tt-008',
        platform: 'tiktok',
        title: 'CSS Grid layout magic ✨',
        description: 'Responsive layouts made easy',
        thumbnail: null,
        url: 'https://www.instagram.com/narendra_yadav_444/',
        date: '2024-11-20',
        views: '—',
        likes: '—',
    },
    {
        id: 'tt-009',
        platform: 'tiktok',
        title: 'Token auth flow explained 🔐',
        description: 'JWT and session authentication in 60 seconds',
        thumbnail: null,
        url: 'https://www.instagram.com/narendra_yadav_444/',
        date: '2024-11-15',
        views: '—',
        likes: '—',
    },
    {
        id: 'tt-010',
        platform: 'tiktok',
        title: 'My coding setup tour 🖥️',
        description: 'VS Code, extensions, and productivity tips',
        thumbnail: null,
        url: 'https://www.instagram.com/narendra_yadav_444/',
        date: '2024-11-08',
        views: '—',
        likes: '—',
    },
    {
        id: 'tt-011',
        platform: 'tiktok',
        title: 'Git commands every dev needs 🔧',
        description: 'Essential Git workflow tips',
        thumbnail: null,
        url: 'https://www.instagram.com/narendra_yadav_444/',
        date: '2024-11-01',
        views: '—',
        likes: '—',
    },
    {
        id: 'tt-012',
        platform: 'tiktok',
        title: 'Postman API testing 🧪',
        description: 'Testing REST APIs like a pro',
        thumbnail: null,
        url: 'https://www.instagram.com/narendra_yadav_444/',
        date: '2024-10-25',
        views: '—',
        likes: '—',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
