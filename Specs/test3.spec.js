var page = require('../PO/marketingPage.js');
var util = require('../PO/utilmethods.js');
var modal = require('../PO/vorteileModal.js');
var data = require('../Jsons/test.json');

describe('Test3', function () {
    beforeAll(function () {
        browser.get(data.server);
    });

    it('Checking title', function () {
        util.selectMenuAndSubmenu('STAMMDATEN', 'Vorteile');
        expect(page.header.getText()).toBe('PuC.Marketing Vorteile', 'title is incorrect');
    });

    it('Choosing name and checking it', function () {
        page.vorteileRecord.click();
        expect(page.vorteileName.getAttribute('value')).toBe('VR_2', 'name is incorrect');
    });

    it('Creating new name', function () {
        page.plusButton.click();
        modal.name.sendKeys('Test_create');
        modal.anlegenButton.click();
        page.checkNameExists('Test_create')
    });

    it('Changing Test_create to Test_edit and checking it', function () {
        page.selectName('Test_create');
        expect(page.vorteileName.getAttribute('value')).toBe('Test_create', 'new name is incorrect');
        page.vorteileName.clear();
        page.vorteileName.sendKeys('Test_edit');
        page.vorteileSaveButton.click();
        page.checkNameExists('Test_edit')
    });

    it('Deleting created name and checking that it is not displayed', function () {
        page.selectName('Test_edit');
        page.minusButton.click();
        page.yesButton.click();
        page.checkNameDoesntExist('Test_edit');
    });
});



