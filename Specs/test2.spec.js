var page = require('../PO/marketingPage.js');
var util = require('../PO/utilmethods.js');
var data = require('../Jsons/test.json');

describe('Test2', function () {
    beforeAll(function () {
        browser.get(data.server);
    });

    it('Checking title', function () {
        util.selectMenuAndSubmenu('STAMMDATEN', 'Saisons');
        expect(page.header.getText()).toBe('PuC.Marketing Saisons', 'title is incorrect');
    });

    it('Choosing number and checking input values', function () {
        page.saisonsNumber.click();
        expect(page.sasonsName.getAttribute('value')).toBe('34', 'name is incorrect');
        expect(page.saisonsTyp.getAttribute('value')).toBe('Herbst/Winter 2012/2013', 'saisontyp is incorrect');
        expect(page.saisonsStartDatum.getAttribute('value')).toBe('01.09.2012', 'startDatum is incorrect');
        expect(page.saisonsEndDatum.getAttribute('value')).toBe('28.02.2013', 'endDatum is incorrect');
    });
});