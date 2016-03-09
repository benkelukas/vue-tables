function wrapTemplate(tpl) {
    return "<span class='VueTables__template'>" + tpl + "</span>";
}

function convertColumnToEditable(value, row, column, vm, index) {
    var id = row.id;
    var value = value;
    var column = column;

    var isEditingRow = (vm.editingRow[id] != undefined) ? true : false;

    var html = "<span v-if='!isEditingRow(\""+id+"\", \""+column+"\")' @dblclick='showEditRow(\""+id+"\", \""+column+"\")'>" + value + "</span>";
    html += "<input type='text' v-if='isEditingRow(\""+id+"\", \""+column+"\")' class='form-control' @keydown.enter='edit("+id+", \""+column+"\", $event)' value='" + value + "'>"

    return html;
}

module.exports = function (value, row, column, rowIndex) {
    var vm = this;
    if (this.editableColumns.indexOf(column) != -1) {
        return convertColumnToEditable(value, row, column, vm, rowIndex);
    }

    if (this.templatesKeys.indexOf(column) == -1)
        return value;

    var regex;

    if (typeof this.options.templates[column] == 'function') {
        var tpl = this.options.templates[column](row);
        return wrapTemplate(tpl);
    }

    var template = wrapTemplate(this.options.templates[column]);

    this.allColumns.forEach(function (col) {

        regex = new RegExp("{" + col + "}", "g");
        template = template.replace(regex, String(row[col]));

    }.bind(this));

    return template;

}
