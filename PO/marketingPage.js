module.exports = new marketingPage();

function marketingPage() {
    var that = this;
    var EC = protractor.ExpectedConditions;
    that.header = element(by.id('header'));
    that.nummer = element(by.model('publication.name'));
    that.typ = element(by.model('publication.type'));
    that.et = element.all(by.model('dateItem')).first();
    that.preise = element(by.model('publication.priceType'));
    that.country = element(by.model('publication.country'));
    that.com = element(by.model('publication.description'));
    that.checkCleaning = element(by.cssContainingText('.cp-text-color.ng-binding.ng-hide', 'Noch nichts geändert'));
    that.saisonsNumber = element(by.cssContainingText('.col-md-2', '34'));
    that.sasonsName = element(by.model('item.identity'));
    that.saisonsTyp = element(by.model('item.name'));
    that.saisonsStartDatum = element.all(by.model('dateItem')).first();
    that.saisonsEndDatum = element.all(by.model('dateItem')).last();
    that.vorteileRecord = element(by.cssContainingText('.ng-binding.ng-scope', 'VR_2'));
    that.vorteileName = element(by.css('[ui-view="rightTopPanel"]')).element(by.model('item.name'));
    that.plusButton = element(by.css('.glyphicon-plus'));
    that.vorteileSaveButton = element(by.css('.fa-floppy-o'));
    that.minusButton = element(by.css('.glyphicon-minus'));
    that.yesButton = element(by.buttonText('Ja'));
    that.plusButton = element(by.css('.glyphicon-plus'));
    that.newRecord = element(by.cssContainingText('.aciTreeText', 'Schwarzpreis ET: 05.05.2017'));
    that.trashButton = element(by.css('.glyphicon-trash'));
    that.reportButton = element(by.css('.glyphicon-file'));
    that.plusButtonEinkauf = element(by.id('center')).element(by.css('.glyphicon-plus'));
    that.anlegenButton = element(by.buttonText('Anlegen'));
    that.createdCel = element.all(by.css('.htAutocomplete.current')).last();
    that.selectedNumber = element(by.cssContainingText('.row.smallspacer.col-def', 'EShop-Nr.')).$('.input-sm.form-control');
    that.cancelButton = element(by.css('[title="Änderungen zurückstellen"]'));
    that.eshopArrow = element(by.css('.ht_clone_left .htAutocomplete.current .htAutocompleteArrow'));
    that.eshopNumber = element(by.css('.listbox.htDimmed.current'));

    that.enterNummer = function (number) {
        element(by.model('publication.name')).clear();
        element(by.model('publication.name')).sendKeys(number);
    };
    that.enterType = function (type) {
        element(by.model('publication.type')).$('[label="' + type + '"]').click();
    };
    that.enterET = function (date) {
        element.all(by.model('dateItem')).first().clear();
        element.all(by.model('dateItem')).first().sendKeys(date);
    };
    that.enterPreise = function (preise) {
        element(by.model('publication.priceType')).$('[label="' + preise + '"]').click();
    };
    that.enterLand = function (land) {
        element(by.model('publication.country')).$('[label="' + land + '"]').click();
    };
    that.enterComment = function (comment) {
        element(by.model('publication.description')).sendKeys(comment);
    };
    that.clickReset = function () {
        element(by.css('.fa-undo')).click();
    };
    that.checkNewRecord = function (record) {
        browser.wait(EC.visibilityOf(element(by.cssContainingText('.aciTreeText', record))),
            browser.params.visibilityWaitingTime.elementDrawing);
        expect(element(by.cssContainingText('.aciTreeText', record)).isPresent()).toBe(true, 'new record was not created');
    };
    that.enterPublicationsteil = function (teil) {
        element(by.model('item.publicationPart')).$('[label="' + teil + '"]').click();
    };
    that.enterSeite = function (seite) {
        element(by.model('item.page')).$('[label="' + seite + '"]').click();
    };
    that.checkNameExists = function (name) {
        expect(element(by.id('center')).element(by.cssContainingText('span', name)).isDisplayed()).toBe(true, 'name was not created');
    };
    that.selectName = function (name) {
        element(by.id('center')).element(by.cssContainingText('span', name)).click();
    };
    that.checkNameDoesntExist = function (name) {
        expect(element(by.id('center')).element(by.cssContainingText('span', name)).isPresent()).toBe(false, 'name was not deleted');
    };
}