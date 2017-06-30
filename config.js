// Load environment variables from .env file if available
require('dotenv').load();

var config = {
    env:  'prod',

    host: '0.0.0.0',
    port: process.env.PORT || 5000,

    // Available themes:
    // + bordeau
    // + harlequin
    // + light-grey
    // + light-yellow
    // + night-blue
    // + snow
    // + yellow
    theme: 'night-blue',

    // clients configs
    api: {
        aws: {
            region: 'eu-west-1'
        },
        jenkins: {
            baseUrl: 'https://my-jenkins.com',
            auth: {
                user:     'me',
                password: 'me'
            }
        }
    },

    // define duration between each dashboard rotation (ms)
    rotationDuration: 8000,

    // define the interval used by Mozaïk Bus to call registered APIs
    apisPollInterval: 15000,

    dashboards: [

        // first dashboard
        {
            // 4 x 3 dashboard
            columns: 6,
            rows:    2,
            widgets: [
                {
                    type:               'value.value',
                    title:              'KissKissBankBank',
                    url:                'http://crawler:8080/kkbb/collect',
                    postfix:            ' €',
                    lastUpdatedFormat:  'YYYY-MM-DD HH:mm:ss',
                    columns: 2, rows: 1,
                    x: 0, y: 0
                },
                {
                    type:               'value.value',
                    title:              'KissKissBankBank',
                    url:                'http://crawler:8080/kkbb/backers',
                    postfix:            ' Bakers',
                    lastUpdatedFormat:  'YYYY-MM-DD HH:mm:ss',
                    columns: 2, rows: 1,
                    x: 0, y: 1
                },
                {
                    type:               'value.value',
                    title:              'Indiegogo',
                    url:                'http://crawler:8080/indiegogo/collect',
                    prefix:            '$ ',
                    lastUpdatedFormat:  'YYYY-MM-DD HH:mm:ss',
                    columns: 2, rows: 1,
                    x: 2, y: 0
                },
                {
                    type:               'value.value',
                    title:              'Indiegogo',
                    url:                'http://crawler:8080/indiegogo/backers',
                    postfix:            ' Bakers',
                    lastUpdatedFormat:  'YYYY-MM-DD HH:mm:ss',
                    columns: 2, rows: 1,
                    x: 2, y: 1
                },
                {
                    type:               'value.value',
                    title:              'Facebook',
                    url:                'http://crawler:8080/facebook/favorites',
                    postfix:            ' Likes',
                    lastUpdatedFormat:  'YYYY-MM-DD HH:mm:ss',
                    columns: 2, rows: 1,
                    x: 4, y: 0
                },
                {
                    type:               'value.value',
                    title:              'Twitter',
                    url:                'http://crawler:8080/twitter/favorites',
                    postfix:            ' Likes',
                    lastUpdatedFormat:  'YYYY-MM-DD HH:mm:ss',
                    columns: 2, rows: 1,
                    x: 4, y: 1
                }
            ]
        }
    ]
};

module.exports = config;
