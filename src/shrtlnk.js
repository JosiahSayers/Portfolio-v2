const urls = [
    'https://shrtlnk.dev/045tct',
    'https://shrtlnk.dev/0zc1xr',
    'https://shrtlnk.dev/3c8qce',
    'https://shrtlnk.dev/5jqm7h',
    'https://shrtlnk.dev/8gkwk7',
    'https://shrtlnk.dev/a540aq',
    'https://shrtlnk.dev/a7seg1',
    'https://shrtlnk.dev/ab0dcz',
    'https://shrtlnk.dev/axrawh',
    'https://shrtlnk.dev/bt7fxc',
    'https://shrtlnk.dev/dbpn10',
    'https://shrtlnk.dev/dnn35m',
    'https://shrtlnk.dev/e9os5h',
    'https://shrtlnk.dev/e9vsvz',
    'https://shrtlnk.dev/f0cnp9',
    'https://shrtlnk.dev/h02ni0',
    'https://shrtlnk.dev/h5znrg',
    'https://shrtlnk.dev/kzuzre',
    'https://shrtlnk.dev/lc9rg6',
    'https://shrtlnk.dev/lyy1of',
    'https://shrtlnk.dev/m5g7rz',
    'https://shrtlnk.dev/p2klxq',
    'https://shrtlnk.dev/pga3pn',
    'https://shrtlnk.dev/px8j3i',
    'https://shrtlnk.dev/qr7v7v',
    'https://shrtlnk.dev/rt0rt6',
    'https://shrtlnk.dev/tm3stj',
    'https://shrtlnk.dev/v4joan',
    'https://shrtlnk.dev/w1huln',
    'https://shrtlnk.dev/w1piy0',
    'https://shrtlnk.dev/wnz1ic',
    'https://shrtlnk.dev/xsc77v',
    'https://shrtlnk.dev/zqbxea',
];

console.log(urls.reduce((_, url) => `${_} OR [url_key]='${url.split('/')[url.split('/').length - 1]}'`, ''));