module.exports = new VorteileModal();

function VorteileModal() {
    var that = this;
    that.name = element(by.css('.modal-body')).element(by.model('item.name'));
    that.anlegenButton = element(by.buttonText('Anlegen'));
}