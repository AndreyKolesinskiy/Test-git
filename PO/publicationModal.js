module.exports = new PublicationModal();

function PublicationModal() {
    var that = this;
    that.saison = element(by.model('newPublication.season')).$('[label="31, Frühling/Sommer 2011"]');
    that.nummer = element(by.model('newPublication.name'));
    that.typ = element(by.model('newPublication.type')).$('[label="Inszenierungspunkt"]');
    that.et = element(by.css('[date-item="newPublication.headET"]')).element(by.model('dateItem'));
    that.preise = element(by.model('newPublication.priceType')).$('[label="Schwarzpreis"]');
    that.warenabgabe = element(by.css('[date-item="newPublication.goodsDelivery"]')).element(by.model('dateItem'));
    that.land = element(by.model('newPublication.country')).$('[label="Deutschland"]');
    that.enterKommentar = element(by.model('newPublication.description'));
    that.alegenButton = element(by.buttonText('Anlegen'));

    that.enterSaison = function (saison) {
        element(by.model('newPublication.season')).$('[label="'+saison+'"]').click();
    };
    that.enterNummer = function (number) {
        element(by.model('newPublication.name')).clear();
        element(by.model('newPublication.name')).sendKeys(number);
    };
    that.randomInteger = function (min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        that.rand = Math.round(rand);
        return that.rand;
    };
    that.enterTyp = function (typ) {
        element(by.model('newPublication.type')).$('[label="'+typ+'"]').click();
    };
    that.enterEt = function (et) {
        element(by.css('[date-item="newPublication.headET"]')).element(by.model('dateItem')).clear();
        element(by.css('[date-item="newPublication.headET"]')).element(by.model('dateItem')).sendKeys(et);
    };
    that.enterPreise = function (preise) {
        element(by.model('newPublication.priceType')).$('[label="'+preise+'"]').click();
    };
    that.enterWarenabgabe = function (warenabgabe) {
        element(by.css('[date-item="newPublication.goodsDelivery"]')).element(by.model('dateItem')).clear();
        element(by.css('[date-item="newPublication.goodsDelivery"]')).element(by.model('dateItem')).sendKeys(warenabgabe);
    };
    that.enterLand = function (land) {
        element(by.model('newPublication.country')).$('[label="'+land+'"]').click();
    };
}