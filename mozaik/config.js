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
            columns: 4,
            rows:    4,
            widgets: [
                {
                    type:               'value.value',
                    title:              'KissKissBankBank',
                    url:                'http://crawler:8080/kkbb/collect',
                    postfix:            '€',
                    columns: 2, rows: 2,
                    x: 0, y: 0
                },
                {
                    type:               'value.value',
                    title:              'KissKissBankBank',
                    url:                'http://crawler:8080/kkbb/backers',
                    postfix:            ' Bakers',
                    columns: 2, rows: 2,
                    x: 2, y: 0
                },
                {
                    type:               'value.value',
                    title:              'Indiegogo',
                    url:                'https://api.indiegogo.com/1/campaigns/1918821.json?api_token=16e63457e7a24c06d39b40b52c0df273098cab82ccd3d4abaafd1a9c7a4edfe7',
                    pathCurrent:        '$.response.contributions_count',
                    postfix:            'Bakers',
                    columns: 2, rows: 2,
                    x: 0, y: 2
                },
                {
                    type:               'value.value',
                    title:              'Indiegogo',
                    url:                'https://api.indiegogo.com/1/campaigns/1918821.json?api_token=16e63457e7a24c06d39b40b52c0df273098cab82ccd3d4abaafd1a9c7a4edfe7',
                    pathCurrent:        '$.response.collected_funds',
                    postfix:            ' Bakers',
                    columns: 2, rows: 2,
                    x: 2, y: 2
                }
            ]
        }
    ]
};

module.exports = config;
