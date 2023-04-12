"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileSchema = void 0;
var dynamoDB_config_1 = require("../../config/dynamoDB.config");
exports.profileSchema = new dynamoDB_config_1.dynamoDB.Schema({
    id: String,
    name: String,
    description: String,
    city: String,
    state: String,
    country: String,
    occupation: String,
    experiences: {
        type: Array,
        schema: [
            {
                type: Object,
                schema: {
                    company: String,
                    companyProfile: String,
                    location: [String, dynamoDB_config_1.dynamoDB.type.NULL],
                    end: Date,
                    title: String,
                    start: Date
                }
            }
        ]
    },
    education: {
        type: Array,
        schema: [{
                type: Object,
                schema: {
                    school: String,
                    schoolProfile: String,
                    descrption: String,
                    degree: String,
                    end: Date,
                    start: Date
                }
            }]
    },
    languages: {
        type: Array,
        schema: [String]
    },
    phones: {
        type: Array,
        schema: [String]
    },
    emails: {
        type: Array,
        schema: [String],
    }
}, {});
//# sourceMappingURL=profile.schema.js.map