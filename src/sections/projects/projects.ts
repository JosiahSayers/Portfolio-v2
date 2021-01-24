import type { ProjectInterface } from './project.interface';

export const projects: ProjectInterface[] = [
    {
        name: 'Shrtlnk',
        url: 'shrtlnk.dev',
        sourcecodeUrl: 'https://github.com/JosiahSayers/shrtlnk',
        imageUrl: 'https://www.josiahsayers.com/img/projects/shrtlnk.png',
        description: 'A link shortening application with an API and developer portal',
        technologies: [
            '.NET Core',
            'MongoDB',
            'MS SQL Server',
            'Swagger'
        ],
        features: [
            'Allows users to created shortened links to any webpage',
            'Easy to use API for developers',
            'Developer portal where a user can create and remove applications, with each one being provided a unique API key. The developer portal also shows statistics about the links created with each application.',
            'Chrome extension to quickly create shortened links when browsing any website'
        ]
    },
    {
        name: 'Sidelog',
        url: 'https://github.com/JosiahSayers/sidelog',
        sourcecodeUrl: 'https://github.com/JosiahSayers/sidelog',
        imageUrl: '',
        description: 'Easy to use and cheap to run logging solution for side projects',
        technologies: [
            'Node.js',
            'Express',
            'TypeScript',
            'Docker',
            'MongoDB',
            'Jest',
            'Angular'
        ],
        features: [
            'Fully configurable from a single JSON file',
            'Support for multiple application\'s logs on one server',
            'Angular library published on NPM to consume the API easily',
            '100% test coverage'
        ]
    },
    {
        name: 'Portfolio',
        url: 'https://josiahsayers.com',
        sourcecodeUrl: 'https://github.com/JosiahSayers/Portfolio-v2',
        imageUrl: '',
        description: 'This website! Built using Svelte and serverless functions',
        technologies: [
            'Svelte',
            'Node.js',
            'TypeScript',
            'Bulma'
        ],
        features: [
            'Contact Me API built with a Node.js serverless function',
            'UI built with Svelte'
        ]
    }
];

export const technologyLinks = {
    '.NET Core': 'https://dotnet.microsoft.com/',
    MongoDB: 'https://www.mongodb.com/',
    'MS SQL Server': 'https://www.microsoft.com/en-us/sql-server/',
    Swagger: 'https://swagger.io/',
    'Node.js': 'https://nodejs.org/',
    Express: 'https://expressjs.com/',
    TypeScript: 'https://www.typescriptlang.org/',
    Docker: 'https://www.docker.com/',
    Jest: 'https://jestjs.io/',
    Svelte: 'https://svelte.dev/',
    Angular: 'https://angular.io/',
    Bulma: 'https://bulma.io/'
}
