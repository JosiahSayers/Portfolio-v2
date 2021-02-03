import type { Skill } from "./skill.interface";

export const SKILL_LIST: Skill[] = [
    {
        category: 'Frontend',
        technologies: [
            {
                name: 'Angular',
                type: 'Frontend Framework',
                tags: [
                    'TypeScript',
                    'JavaScript',
                    'Single Page App',
                    'SASS/SCSS'
                ]
            },
            {
                name: 'Svelte',
                type: 'Frontend Framework',
                tags: [
                    'TypeScript',
                    'JavaScript',
                    'Single Page App'
                ]
            },
            {
                name: 'Karma/Jasmine',
                type: 'Testing',
                tags: [
                    'Unit Testing'
                ]
            }
        ]
    },
    {
        category: 'Backend',
        technologies: [
            {
                name: 'Node.js',
                type: 'Runtime Environment',
                tags: [
                    'TypeScript',
                    'JavaScript'
                ]
            },
            {
                name: 'Express.js',
                type: 'Backend Framework',
                tags: []
            },
            {
                name: 'MongoDB',
                type: 'Database',
                tags: []
            }
        ]
    },
    {
        category: 'Cloud',
        technologies: [
            {
                name: 'Firebase',
                type: 'Backend as a Service',
                tags: [
                    'Authentication',
                    'Cloud Functions',
                    'Cloud Storage',
                    'NoSQL Database'
                ]
            }
        ]
    }
];
