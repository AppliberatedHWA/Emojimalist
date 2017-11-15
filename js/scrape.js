(function () {
    "use strict";

    window.copy(
        window.$$("table:first-of-type td.chars")
            .map((cell) => cell.parentElement)
            .reduce((html, row) => {
                const cells = row.children;
                return html + `<li><i>${cells[2].innerText}</i>${cells[14].innerText}</li>\r\n`;
            }, ""));

}());
