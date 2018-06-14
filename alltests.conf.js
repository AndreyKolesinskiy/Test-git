var downloadsPath = __dirname;

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--disable-cache',
                '--disable-application-cache',
                '--disable-offline-load-stale-cache',
                '--disk-cache-size=0',
                '--v8-cache-options=off',
                '--window-size=1360,768',
                'disable-infobars=true'
            ],
            prefs: {
                'download': {
                    'prompt_for_download': false,
                    'default_directory': downloadsPath
                }
            }
        }
    },
    specs: ['./Specs/*.spec.js'],
    params: {
        visibilityWaitingTime: {
            fileDownloading: 8000,
            elementDrawing: 6000
        },
        downloading: {
            path: downloadsPath,
            fileName: '/report.xlsx'
        }
    }
};