import type { ProjectInterface } from './project.interface';

export const projects: ProjectInterface[] = [
    {
        name: 'shrtlnk',
        url: 'shrtlnk.dev',
        sourcecodeUrl: 'https://github.com/JosiahSayers/shrtlnk',
        imageUrl: 'https://www.josiahsayers.com/img/projects/shrtlnk.png',
        description: 'A link shortening application with an API and developer portal',
        tags: [],
        features: []
    },
    {
        name: 'sidelog',
        url: 'https://github.com/JosiahSayers/sidelog',
        sourcecodeUrl: 'https://github.com/JosiahSayers/sidelog',
        imageUrl: '',
        description: 'Easy to use and cheap to run logging solution for side projects',
        tags: [],
        features: ['Node.js and Express', 'Written in TypeScript', 'Angular library published on NPM to consume the API easily', '100% test coverage']
    }
];
