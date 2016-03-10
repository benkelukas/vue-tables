/**
 * Created by Benke on 10.03.2016.
 */
module.exports = function (id) {
    this.$dispatch('row-checked', {
        id: id
    })
}