/**
 * Created by Benke on 15.03.2016.
 */
module.exports = function(id) {
    if (typeof this.checked_rows === 'undefined') {
        return false;
    }
    if ( this.checked_rows.indexOf(id) !== -1 ) {
        return true;
    } else {
        return false;
    }
}
