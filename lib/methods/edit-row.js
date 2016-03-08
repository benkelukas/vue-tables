/**
 * Created by Benke on 08.03.2016.
 */
var storage = require('../storage/row-edit-storage');
module.exports = function (id, field, event) {
    console.log(event);
    /*this.editingRow = true;*/
    var value = event.srcElement.value;
    this.editingRow.$set(id, false);

    this.$dispatch('editable-column-updated', {
        id: id,
        field: field,
        value: value
    });
}