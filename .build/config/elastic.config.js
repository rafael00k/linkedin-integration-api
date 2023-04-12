"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elastic = void 0;
var elasticsearch_1 = require("@elastic/elasticsearch");
exports.elastic = new elasticsearch_1.Client({
    node: 'http://localhost:9200',
    maxRetries: 5,
    requestTimeout: 60000,
});
//# sourceMappingURL=elastic.config.js.map