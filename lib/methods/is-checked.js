/**
 * Created by Benke on 15.03.2016.
 */
module.exports = function(id) {
    if ( this.checked_rows.indexOf(id) !== -1 ) {
        return true;
    } else {
        return false;
    }
}