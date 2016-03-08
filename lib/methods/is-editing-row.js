/**
 * Created by Benke on 08.03.2016.
 */
var storage = require('../storage/row-edit-storage');
module.exports = function (id) {
    console.log(this.editingRow[id]);
    if ( this.editingRow[id] === undefined || this.editingRow[id] == false ) {
        return false;
    } else {
        return true;
    }
}