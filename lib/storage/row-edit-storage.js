/**
 * Created by Benke on 08.03.2016.
 */
module.exports = {
    set: function (id, field, value) {
        var data = {};
        data[field] = value;

        localStorage.setItem(id, JSON.stringify(data));
    },
    get: function(id, field) {
        var row = localStorage.getItem(id);
        if ( row === null ) return null;

        var data = JSON.parse(row);

        return data[field] !== null ? data[field] : null;
    },
    remove: function(id, field) {
        var row = localStorage.getItem(id);
        if ( row === null ) return null;

        var data = JSON.parse(row);
        delete data[field];

        localStorage.setItem(id, JSON.stringify(data));
    }
}