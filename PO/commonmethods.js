module.exports = new CommonMethods();

function CommonMethods() {
    var that = this;
    var EC = protractor.ExpectedConditions;

    that.checkIfOpenedAndOpen = function (folder) {
        var selectedItem = element(by.css('[aria-selected="true"]'));
        return browser.wait(EC.visibilityOf(element(by.cssContainingText('.aciTreeText', folder))),
            browser.params.visibilityWaitingTime.elementDrawing)
            .then(function () {
                return element(by.cssContainingText('.aciTreeText', folder)).click();
            })
            .then(function () {
                return selectedItem.getAttribute('aria-expanded');
            })
            .then(function (isExpanded) {
                if (isExpanded === 'false') {
                    return browser.actions().doubleClick(element(by.cssContainingText('.aciTreeText', folder))).perform();
                }
            });
    };
    that.checkExistFile = function (path) {
        var fs = require('fs');
        return browser
            .driver
            .wait(function () {
                return fs.existsSync(path);
            }, browser
                .params
                .visibilityWaitingTime
                .fileDownloading);
    };
    that.removeFile = function (path) {
        return Promise.resolve()
            .then(function () {
                var fs = require('fs');
                if (fs.existsSync(path)) {
                    return fs.unlink(path);
                }
            });
    };
}