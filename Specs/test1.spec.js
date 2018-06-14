var page = require('../PO/marketingPage.js');
var util = require('../PO/utilmethods.js');
var data = require('../Jsons/test.json');

describe('Test1', function () {
    beforeAll(function () {
        browser.get(data.server);
    });

    it('Checking title', function () {
        util.selectMenuAndSubmenu('MARKETING', 'Publikationspflege');
        expect(page.header.getText()).toBe('PuC.Marketing Publikationspflege');
    });

    it('Comparing fields', function () {
        util.selectRecord('40, Herbst/Winter 2015/2016', 'Prospekt', '6556 Schwarzpreis ET: 02.03.2017');
        expect(page.nummer.getAttribute('value')).toBe('6556', 'nummer is incorrect');
        expect(page.typ.getAttribute('value')).toBe('1', 'typ is incorrect');
        expect(page.et.getAttribute('value')).toBe('02.03.2017', 'et is incorrect');
        expect(page.preise.getAttribute('value')).toBe('0', 'preise is incorrect');
    });

    it('Entering inputs and checking entered information in the fields', function () {
        page.enterNummer('123');
        page.enterType('Inszenierungspunkt');
        page.enterET('01.01.2017');
        page.enterPreise('Reduziert');
        page.enterLand('Polen');
        page.enterComment('This is a comment');
        expect(page.nummer.getAttribute('value')).toBe('123', 'new nummer is incorrect');
        expect(page.typ.getAttribute('value')).toBe('21', 'new typ is incorrect');
        expect(page.et.getAttribute('value')).toBe('01.01.2017', 'new et is incorrect');
        expect(page.preise.getAttribute('value')).toBe('1', 'new preise is incorrect');
        expect(page.country.getAttribute('value')).toBe('166', 'new country is incorrect');
        expect(page.com.getAttribute('value')).toBe('This is a comment', 'new comment is incorrect');
    });

    it('Clearing inputs', function () {
        page.clickReset();
        //expect(page.checkCleaning.getText()).toBe('Noch nichts geändert');
    });
});