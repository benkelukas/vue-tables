/**
 * Created by Benke on 09.03.2016.
 */
module.exports = function (obj, value) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (md5(obj[prop]) == value)
                return prop;
        }
    }
    return null;
}