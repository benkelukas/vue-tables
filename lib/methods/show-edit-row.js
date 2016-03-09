/**
 * Created by Benke on 08.03.2016.
 */
var storage = require('../storage/row-edit-storage');
module.exports = function (id, column) {
    var data = {};
    data[column] = true;
    this.editingRow.$set(id, data);
}