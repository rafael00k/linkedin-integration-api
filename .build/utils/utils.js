"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeArrayEmptyAvalues = exports.removeEmptyValues = void 0;
function removeEmptyValues(object) {
    var newObject = Object.keys(object).reduce(function (acc, cv) {
        if (!!object[cv]) {
            acc[cv] = object[cv];
        }
        return acc;
    }, {});
    return newObject;
}
exports.removeEmptyValues = removeEmptyValues;
function removeArrayEmptyAvalues(array) {
    return array.filter(Boolean);
}
exports.removeArrayEmptyAvalues = removeArrayEmptyAvalues;
//# sourceMappingURL=utils.js.map