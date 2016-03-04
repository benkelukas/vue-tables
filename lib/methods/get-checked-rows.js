/**
 * Created by Benke on 04.03.2016.
 */
module.exports = function() {
    var tbody = this.$els.tbody;

    var checkboxes = $(tbody).find("input[type='checkbox']:checked");

    var ids = [];
    $.each(checkboxes, function(){
        var checkbox = $(this);
        ids.push(checkbox.val());
    });

    return ids;
}