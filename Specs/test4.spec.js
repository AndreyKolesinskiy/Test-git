var page = require('../PO/marketingPage.js');
var util = require('../PO/utilmethods.js');
var modal = require('../PO/publicationModal.js');
var data = require('../Jsons/test.json');

describe('Test4', function () {
    beforeAll(function () {
        browser.get(data.server);
    });

    it('Checking title', function () {
        util.selectMenuAndSubmenu('MARKETING', 'Publikationspflege');
        expect(page.header.getText()).toBe('PuC.Marketing Publikationspflege', 'title is incorrect');
    });

    it('Adding new record and checking it', function () {
        page.plusButton.click();
        modal.enterSaison('31, Frühling/Sommer 2011');
        modal.enterNummer(modal.randomInteger(1000, 9999));
        modal.enterTyp('Inszenierungspunkt');
        modal.enterEt('05.05.2017');
        modal.enterPreise('Schwarzpreis');
        modal.enterWarenabgabe('05.05.2017');
        modal.enterLand('Deutschland');
        modal.enterKommentar.sendKeys('test');
        modal.alegenButton.click();
        page.checkNewRecord('Schwarzpreis ET: 05.05.2017');
    });

    it('Deleting new record and checking it', function () {
        page.newRecord.click();
        page.trashButton.click();
        page.yesButton.click();
        expect(page.newRecord.isPresent()).toBe(false, 'new record was not deleted');
        util.closeFolder('31, Frühling/Sommer 2011');
    });
});