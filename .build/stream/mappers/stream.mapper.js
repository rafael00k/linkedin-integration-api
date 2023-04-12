"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapStreamToElasticProfile = void 0;
var aws_sdk_1 = require("aws-sdk");
function mapStreamToElasticProfile(input) {
    var converter = aws_sdk_1.DynamoDB.Converter;
    return input.Records.map(function (record) {
        var _a;
        return __assign({ id: (_a = converter.unmarshall(record.dynamodb.Keys)) === null || _a === void 0 ? void 0 : _a.id }, converter.unmarshall(record.dynamodb.NewImage));
    });
}
exports.mapStreamToElasticProfile = mapStreamToElasticProfile;
//# sourceMappingURL=stream.mapper.js.map