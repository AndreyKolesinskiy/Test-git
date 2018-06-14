var page = require('../PO/marketingPage.js');
var util = require('../PO/utilmethods.js');
var data = require('../Jsons/test.json');
var common = require('../PO/commonmethods.js')

describe('Test5', function () {
    beforeAll(function () {
        browser.get(data.server);
    });

    it('Checking title', function () {
        util.selectMenuAndSubmenu('MARKETING', 'Publikationspflege');
        expect(page.header.getText()).toBe('PuC.Marketing Publikationspflege', 'title is incorrect');
    });

    it('Choosing record', function () {
        util.selectRecord('39, Frühling/Sommer 2015', 'Inszenierungspunkt', '3911 Schwarzpreis ET: 04.03.2016');
    });

    it('Choosing new menu and checking it', function () {
        util.selectMenuAndSubmenu('EINKAUF', 'Seitenplanung');
        expect(page.header.getText()).toBe('PuC.Marketing Seitenplanung', 'new title is incorrect');
    });

    it('Saving the file', function () {
        common.removeFile(browser.params.downloading.path + browser.params.downloading.fileName);
        page.reportButton.click();
        expect(common.checkExistFile(browser.params.downloading.path + browser.params.downloading.fileName)).toBe(true);
        util.closeFolder('39, Frühling/Sommer 2015');
    });
});