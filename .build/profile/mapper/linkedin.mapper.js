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
exports.profileMapperToDB = void 0;
var uuid_1 = require("uuid");
var utils_1 = require("../../utils/utils");
function profileMapperToDB(profile) {
    return (0, utils_1.removeEmptyValues)({
        id: (0, uuid_1.v4)(),
        name: profile.full_name,
        description: profile.summary,
        city: profile.city,
        state: profile.state,
        country: profile.country_full_name,
        occupation: profile.occupation,
        experiences: profileExperienceMapper(profile.experiences),
        education: profileEducationMapper(profile.education),
        languages: profile.languages,
        phones: profile.personal_numbers,
        emails: profile.personal_emails
    });
}
exports.profileMapperToDB = profileMapperToDB;
function profileExperienceMapper(experiences) {
    return experiences.map(function (experience) {
        var resutlt = (0, utils_1.removeEmptyValues)(__assign(__assign({ title: experience.title, start: profilePeriodFormatter(experience.starts_at) }, ((experience === null || experience === void 0 ? void 0 : experience.ends_at) && { end: profilePeriodFormatter(experience === null || experience === void 0 ? void 0 : experience.ends_at) })), { company: experience.company, companyProfile: experience.company_linkedin_profile_url, location: experience === null || experience === void 0 ? void 0 : experience.location }));
        return resutlt;
    });
}
function profileEducationMapper(education) {
    return education.map(function (item) {
        var result = (0, utils_1.removeEmptyValues)(__assign(__assign({ start: profilePeriodFormatter(item.starts_at) }, ((item === null || item === void 0 ? void 0 : item.ends_at) && { end: profilePeriodFormatter(item.ends_at) })), { school: item.school, degree: item.degree_name, schoolProfile: item.school_linkedin_profile_url, descrption: item.description }));
        return result;
    });
}
function profilePeriodFormatter(period) {
    return new Date(period.year, period.month - 1, period.day);
}
//# sourceMappingURL=linkedin.mapper.js.map