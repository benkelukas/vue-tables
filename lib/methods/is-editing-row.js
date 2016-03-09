/**
 * Created by Benke on 08.03.2016.
 */
var storage = require('../storage/row-edit-storage');
module.exports = function (id, column) {
    if (
        this.editingRow[id] === undefined || this.editingRow[id] == false
    ) {
        return false;
    }
    if (
        this.editingRow[id][column] == undefined || this.editingRow[id][column] == false
    ) {
        return false;
    }

    if (this.editingRow[id][column] == true) {
        return true;
    }
}