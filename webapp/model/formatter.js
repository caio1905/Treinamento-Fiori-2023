sap.ui.define([], function () {
    "use strict";

    return {

        /**
         * Rounds the number unit value to 2 digits
         * @public
         * @param {string} sValue the number string to be rounded
         * @returns {string} sValue with 2 digits rounded
         */
        numberUnit: function (sValue) {
            if (!sValue) {
                return "";
            }
            return parseFloat(sValue).toFixed(2);
        },

        dateFormatter: function (sValue) {
            if (!sValue) {
                return "";
            }

            var oDataOffset = new Date(sValue);
            var oData = new Date(new Date(oDataOffset).getTime() + new Date(oDataOffset).getTimezoneOffset() * 1000 * 60);
            // var oData = new Date(sValue);
            var sDay = oData.getDate().toString().length === 1 ? "0" + oData.getDate().toString() : oData.getDate().toString()
            var sMonth = (oData.getMonth() + 1).toString().length === 1 ? "0" + (oData.getMonth() + 1).toString() : (oData.getMonth() + 1).toString();
            var sYear = oData.getFullYear().toString();
            return sDay + "/" + sMonth + "/" + sYear;
        },

        weightLiveChange: function (sValue) {
           var sValueAux = parseFloat(sValue)
           var sValueO = sValueAux.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
           return sValueO.toString()
        }
    };
});