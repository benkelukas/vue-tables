function wrapTemplate(tpl) {
    return "<span class='VueTables__template'>" + tpl + "</span>";
}

function convertColumnToEditable(value, row, column, vm, index) {
    var id = row.id;
    var value = value;
    var column = column;

    var selectColumn = vm.selectColumns[column];
    if (selectColumn !== undefined) {//we got select column as editable
        var html = "<span v-if='!isEditingRow(\"" + id + "\", \"" + column + "\")' @dblclick='showEditRow(\"" + id + "\", \"" + column + "\")'>" + value + "</span>";
        html += "<select name='" + column + "' class='form-control' v-show='isEditingRow(\"" + id + "\", \"" + column + "\")' @blur='edit(" + id + ", \"" + column + "\", $event)'>";
        selectColumn.forEach(function (option) {
            var isSelected = get_key_by_value(option, md5(value));
            var selected = (isSelected == null) ? '' : 'selected';
            html += "<option value='" + option.value + "' "+selected+">" + option.text + "</option>";
            selected = '';
        });
        html += "</select>";
        return html;
    }

    var html = "<span v-if='!isEditingRow(\"" + id + "\", \"" + column + "\")' @dblclick='showEditRow(\"" + id + "\", \"" + column + "\")'>" + value + "</span>";
    html += "<input type='text' v-if='isEditingRow(\"" + id + "\", \"" + column + "\")' class='form-control' @keydown.enter='edit(" + id + ", \"" + column + "\", $event)' value='" + value + "'>"

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
