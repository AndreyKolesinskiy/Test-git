var common = require('./commonmethods.js');
module.exports = new UtilMethods();

function UtilMethods() {
    var that = this;
    var EC = protractor.ExpectedConditions;

    that.selectRecord = function (mainFolder, subFolder, record) {
       return common.checkIfOpenedAndOpen(mainFolder)
            .then(common.checkIfOpenedAndOpen(subFolder))
            .then(function () {
                return browser.wait(EC.visibilityOf(element(by.cssContainingText('.aciTreeText', record))),
                    browser.params.visibilityWaitingTime.elementDrawing);
            })
            .then(function () {
                return element(by.cssContainingText('.aciTreeText', record)).click();
            });
    };
    that.selectMenuAndSubmenu = function (menu, subMenu) {
        return element(by.partialLinkText(menu)).$('.glyphicon').getAttribute('class')
            .then(function (string) {
                var arr = string.split(' ');
                return arr.indexOf('glyphicon-chevron-down')
            })
            .then(function (isOpened) {
                if (isOpened === -1) {
                    return element(by.partialLinkText(menu)).click();
                }
            })
            .then(function () {
                return browser.wait(EC.visibilityOf(element(by.partialLinkText(subMenu))),
                    browser.params.visibilityWaitingTime.elementDrawing);
            })
            .then(function () {
                return element(by.partialLinkText(subMenu)).click();
            });
    };
    that.closeFolder = function (mainFolder) {
        var selectedItem = element(by.css('[aria-selected="true"]'));
        return browser.wait(EC.visibilityOf(element(by.cssContainingText('.aciTreeText', mainFolder))),
            browser.params.visibilityWaitingTime.elementDrawing)
            .then(function () {
                return element(by.cssContainingText('.aciTreeText', mainFolder)).click();
            })
            .then(function () {
                return selectedItem.getAttribute('aria-expanded');
            })
            .then(function (isExpanded) {
                if (isExpanded === 'true') {
                    return browser.actions().doubleClick(element(by.cssContainingText('.aciTreeText', mainFolder))).perform();
                }
            });
    };
}