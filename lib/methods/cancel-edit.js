/**
 * Created by Benke on 09.03.2016.
 */
module.exports = function(id, column, event) {
    var data = {};
    data[column] = false;
    this.editingRow.$set(id, data);
}