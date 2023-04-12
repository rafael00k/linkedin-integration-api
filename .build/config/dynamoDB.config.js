"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamoDB = void 0;
var dynamoose = require("dynamoose");
dynamoose.aws.ddb.local();
exports.dynamoDB = dynamoose;
//# sourceMappingURL=dynamoDB.config.js.map