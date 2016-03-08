/**
 * Created by Benke on 08.03.2016.
 */
var storage = require('../storage/row-edit-storage');
module.exports = function (id) {
    this.editingRow.$set(id, true);
}