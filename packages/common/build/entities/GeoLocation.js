"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var db_1 = require("../@pyro/db");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var abbreviation_to_country_1 = require("../data/abbreviation-to-country");
var typeorm_1 = require("typeorm");
exports.locationPreSchema = {
    type: { type: String },
    coordinates: [Number],
};
var GeoLocation = (function (_super) {
    tslib_1.__extends(GeoLocation, _super);
    function GeoLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GeoLocation.prototype, "countryName", {
        get: function () {
            return getCountryName(this.countryId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeoLocation.prototype, "isLocValid", {
        get: function () {
            return (this.loc.type === 'Point' &&
                typeof lodash_1.default.isArray(this.loc.coordinates) &&
                this.loc.coordinates.length === 2 &&
                lodash_1.default.every(this.loc.coordinates, function (c) { return lodash_1.default.isFinite(c); }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeoLocation.prototype, "isValid", {
        get: function () {
            var notEmptyString = function (s) { return lodash_1.default.isString(s) && !lodash_1.default.isEmpty(s); };
            return lodash_1.default.every([this.city, this.streetAddress, this.house], notEmptyString);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeoLocation.prototype, "coordinates", {
        get: function () {
            return {
                lng: this.loc.coordinates[0],
                lat: this.loc.coordinates[1],
            };
        },
        set: function (coords) {
            this.loc.coordinates = [coords.lng, coords.lat];
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        db_1.Schema({ type: Number, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], GeoLocation.prototype, "countryId", void 0);
    tslib_1.__decorate([
        db_1.Schema({ required: false, type: String }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], GeoLocation.prototype, "postcode", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], GeoLocation.prototype, "apartment", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], GeoLocation.prototype, "city", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], GeoLocation.prototype, "streetAddress", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], GeoLocation.prototype, "house", void 0);
    tslib_1.__decorate([
        db_1.Index('2dsphere'),
        db_1.Schema(exports.locationPreSchema),
        tslib_1.__metadata("design:type", Object)
    ], GeoLocation.prototype, "loc", void 0);
    GeoLocation = tslib_1.__decorate([
        db_1.ModelName('GeoLocation')
    ], GeoLocation);
    return GeoLocation;
}(db_1.DBObject));
exports.default = GeoLocation;
var Country;
(function (Country) {
    Country[Country["AD"] = 0] = "AD";
    Country[Country["AE"] = 1] = "AE";
    Country[Country["AF"] = 2] = "AF";
    Country[Country["AG"] = 3] = "AG";
    Country[Country["AI"] = 4] = "AI";
    Country[Country["AL"] = 5] = "AL";
    Country[Country["AM"] = 6] = "AM";
    Country[Country["AO"] = 7] = "AO";
    Country[Country["AQ"] = 8] = "AQ";
    Country[Country["AR"] = 9] = "AR";
    Country[Country["AS"] = 10] = "AS";
    Country[Country["AT"] = 11] = "AT";
    Country[Country["AU"] = 12] = "AU";
    Country[Country["AW"] = 13] = "AW";
    Country[Country["AX"] = 14] = "AX";
    Country[Country["AZ"] = 15] = "AZ";
    Country[Country["BA"] = 16] = "BA";
    Country[Country["BB"] = 17] = "BB";
    Country[Country["BD"] = 18] = "BD";
    Country[Country["BE"] = 19] = "BE";
    Country[Country["BF"] = 20] = "BF";
    Country[Country["BG"] = 21] = "BG";
    Country[Country["BH"] = 22] = "BH";
    Country[Country["BI"] = 23] = "BI";
    Country[Country["BJ"] = 24] = "BJ";
    Country[Country["BL"] = 25] = "BL";
    Country[Country["BM"] = 26] = "BM";
    Country[Country["BN"] = 27] = "BN";
    Country[Country["BO"] = 28] = "BO";
    Country[Country["BQ"] = 29] = "BQ";
    Country[Country["BR"] = 30] = "BR";
    Country[Country["BS"] = 31] = "BS";
    Country[Country["BT"] = 32] = "BT";
    Country[Country["BV"] = 33] = "BV";
    Country[Country["BW"] = 34] = "BW";
    Country[Country["BY"] = 35] = "BY";
    Country[Country["BZ"] = 36] = "BZ";
    Country[Country["CA"] = 37] = "CA";
    Country[Country["CC"] = 38] = "CC";
    Country[Country["CD"] = 39] = "CD";
    Country[Country["CF"] = 40] = "CF";
    Country[Country["CG"] = 41] = "CG";
    Country[Country["CH"] = 42] = "CH";
    Country[Country["CI"] = 43] = "CI";
    Country[Country["CK"] = 44] = "CK";
    Country[Country["CL"] = 45] = "CL";
    Country[Country["CM"] = 46] = "CM";
    Country[Country["CN"] = 47] = "CN";
    Country[Country["CO"] = 48] = "CO";
    Country[Country["CR"] = 49] = "CR";
    Country[Country["CU"] = 50] = "CU";
    Country[Country["CV"] = 51] = "CV";
    Country[Country["CW"] = 52] = "CW";
    Country[Country["CX"] = 53] = "CX";
    Country[Country["CY"] = 54] = "CY";
    Country[Country["CZ"] = 55] = "CZ";
    Country[Country["DE"] = 56] = "DE";
    Country[Country["DJ"] = 57] = "DJ";
    Country[Country["DK"] = 58] = "DK";
    Country[Country["DM"] = 59] = "DM";
    Country[Country["DO"] = 60] = "DO";
    Country[Country["DZ"] = 61] = "DZ";
    Country[Country["EC"] = 62] = "EC";
    Country[Country["EE"] = 63] = "EE";
    Country[Country["EG"] = 64] = "EG";
    Country[Country["EH"] = 65] = "EH";
    Country[Country["ER"] = 66] = "ER";
    Country[Country["ES"] = 67] = "ES";
    Country[Country["ET"] = 68] = "ET";
    Country[Country["FI"] = 69] = "FI";
    Country[Country["FJ"] = 70] = "FJ";
    Country[Country["FK"] = 71] = "FK";
    Country[Country["FM"] = 72] = "FM";
    Country[Country["FO"] = 73] = "FO";
    Country[Country["FR"] = 74] = "FR";
    Country[Country["GA"] = 75] = "GA";
    Country[Country["GB"] = 76] = "GB";
    Country[Country["GD"] = 77] = "GD";
    Country[Country["GE"] = 78] = "GE";
    Country[Country["GF"] = 79] = "GF";
    Country[Country["GG"] = 80] = "GG";
    Country[Country["GH"] = 81] = "GH";
    Country[Country["GI"] = 82] = "GI";
    Country[Country["GL"] = 83] = "GL";
    Country[Country["GM"] = 84] = "GM";
    Country[Country["GN"] = 85] = "GN";
    Country[Country["GP"] = 86] = "GP";
    Country[Country["GQ"] = 87] = "GQ";
    Country[Country["GR"] = 88] = "GR";
    Country[Country["GS"] = 89] = "GS";
    Country[Country["GT"] = 90] = "GT";
    Country[Country["GU"] = 91] = "GU";
    Country[Country["GW"] = 92] = "GW";
    Country[Country["GY"] = 93] = "GY";
    Country[Country["HK"] = 94] = "HK";
    Country[Country["HM"] = 95] = "HM";
    Country[Country["HN"] = 96] = "HN";
    Country[Country["HR"] = 97] = "HR";
    Country[Country["HT"] = 98] = "HT";
    Country[Country["HU"] = 99] = "HU";
    Country[Country["ID"] = 100] = "ID";
    Country[Country["IE"] = 101] = "IE";
    Country[Country["IL"] = 102] = "IL";
    Country[Country["IM"] = 103] = "IM";
    Country[Country["IN"] = 104] = "IN";
    Country[Country["IO"] = 105] = "IO";
    Country[Country["IQ"] = 106] = "IQ";
    Country[Country["IR"] = 107] = "IR";
    Country[Country["IS"] = 108] = "IS";
    Country[Country["IT"] = 109] = "IT";
    Country[Country["JE"] = 110] = "JE";
    Country[Country["JM"] = 111] = "JM";
    Country[Country["JO"] = 112] = "JO";
    Country[Country["JP"] = 113] = "JP";
    Country[Country["KE"] = 114] = "KE";
    Country[Country["KG"] = 115] = "KG";
    Country[Country["KH"] = 116] = "KH";
    Country[Country["KI"] = 117] = "KI";
    Country[Country["KM"] = 118] = "KM";
    Country[Country["KN"] = 119] = "KN";
    Country[Country["KP"] = 120] = "KP";
    Country[Country["KR"] = 121] = "KR";
    Country[Country["KW"] = 122] = "KW";
    Country[Country["KY"] = 123] = "KY";
    Country[Country["KZ"] = 124] = "KZ";
    Country[Country["LA"] = 125] = "LA";
    Country[Country["LB"] = 126] = "LB";
    Country[Country["LC"] = 127] = "LC";
    Country[Country["LI"] = 128] = "LI";
    Country[Country["LK"] = 129] = "LK";
    Country[Country["LR"] = 130] = "LR";
    Country[Country["LS"] = 131] = "LS";
    Country[Country["LT"] = 132] = "LT";
    Country[Country["LU"] = 133] = "LU";
    Country[Country["LV"] = 134] = "LV";
    Country[Country["LY"] = 135] = "LY";
    Country[Country["MA"] = 136] = "MA";
    Country[Country["MC"] = 137] = "MC";
    Country[Country["MD"] = 138] = "MD";
    Country[Country["ME"] = 139] = "ME";
    Country[Country["MF"] = 140] = "MF";
    Country[Country["MG"] = 141] = "MG";
    Country[Country["MH"] = 142] = "MH";
    Country[Country["MK"] = 143] = "MK";
    Country[Country["ML"] = 144] = "ML";
    Country[Country["MM"] = 145] = "MM";
    Country[Country["MN"] = 146] = "MN";
    Country[Country["MO"] = 147] = "MO";
    Country[Country["MP"] = 148] = "MP";
    Country[Country["MQ"] = 149] = "MQ";
    Country[Country["MR"] = 150] = "MR";
    Country[Country["MS"] = 151] = "MS";
    Country[Country["MT"] = 152] = "MT";
    Country[Country["MU"] = 153] = "MU";
    Country[Country["MV"] = 154] = "MV";
    Country[Country["MW"] = 155] = "MW";
    Country[Country["MX"] = 156] = "MX";
    Country[Country["MY"] = 157] = "MY";
    Country[Country["MZ"] = 158] = "MZ";
    Country[Country["NA"] = 159] = "NA";
    Country[Country["NC"] = 160] = "NC";
    Country[Country["NE"] = 161] = "NE";
    Country[Country["NF"] = 162] = "NF";
    Country[Country["NG"] = 163] = "NG";
    Country[Country["NI"] = 164] = "NI";
    Country[Country["NL"] = 165] = "NL";
    Country[Country["NO"] = 166] = "NO";
    Country[Country["NP"] = 167] = "NP";
    Country[Country["NR"] = 168] = "NR";
    Country[Country["NU"] = 169] = "NU";
    Country[Country["NZ"] = 170] = "NZ";
    Country[Country["OM"] = 171] = "OM";
    Country[Country["PA"] = 172] = "PA";
    Country[Country["PE"] = 173] = "PE";
    Country[Country["PF"] = 174] = "PF";
    Country[Country["PG"] = 175] = "PG";
    Country[Country["PH"] = 176] = "PH";
    Country[Country["PK"] = 177] = "PK";
    Country[Country["PL"] = 178] = "PL";
    Country[Country["PM"] = 179] = "PM";
    Country[Country["PN"] = 180] = "PN";
    Country[Country["PR"] = 181] = "PR";
    Country[Country["PS"] = 182] = "PS";
    Country[Country["PT"] = 183] = "PT";
    Country[Country["PW"] = 184] = "PW";
    Country[Country["PY"] = 185] = "PY";
    Country[Country["QA"] = 186] = "QA";
    Country[Country["RE"] = 187] = "RE";
    Country[Country["RO"] = 188] = "RO";
    Country[Country["RS"] = 189] = "RS";
    Country[Country["RU"] = 190] = "RU";
    Country[Country["RW"] = 191] = "RW";
    Country[Country["SA"] = 192] = "SA";
    Country[Country["SB"] = 193] = "SB";
    Country[Country["SC"] = 194] = "SC";
    Country[Country["SD"] = 195] = "SD";
    Country[Country["SE"] = 196] = "SE";
    Country[Country["SG"] = 197] = "SG";
    Country[Country["SH"] = 198] = "SH";
    Country[Country["SI"] = 199] = "SI";
    Country[Country["SJ"] = 200] = "SJ";
    Country[Country["SK"] = 201] = "SK";
    Country[Country["SL"] = 202] = "SL";
    Country[Country["SM"] = 203] = "SM";
    Country[Country["SN"] = 204] = "SN";
    Country[Country["SO"] = 205] = "SO";
    Country[Country["SR"] = 206] = "SR";
    Country[Country["SS"] = 207] = "SS";
    Country[Country["ST"] = 208] = "ST";
    Country[Country["SV"] = 209] = "SV";
    Country[Country["SX"] = 210] = "SX";
    Country[Country["SY"] = 211] = "SY";
    Country[Country["SZ"] = 212] = "SZ";
    Country[Country["TC"] = 213] = "TC";
    Country[Country["TD"] = 214] = "TD";
    Country[Country["TF"] = 215] = "TF";
    Country[Country["TG"] = 216] = "TG";
    Country[Country["TH"] = 217] = "TH";
    Country[Country["TJ"] = 218] = "TJ";
    Country[Country["TK"] = 219] = "TK";
    Country[Country["TL"] = 220] = "TL";
    Country[Country["TM"] = 221] = "TM";
    Country[Country["TN"] = 222] = "TN";
    Country[Country["TO"] = 223] = "TO";
    Country[Country["TR"] = 224] = "TR";
    Country[Country["TT"] = 225] = "TT";
    Country[Country["TV"] = 226] = "TV";
    Country[Country["TW"] = 227] = "TW";
    Country[Country["TZ"] = 228] = "TZ";
    Country[Country["UA"] = 229] = "UA";
    Country[Country["UG"] = 230] = "UG";
    Country[Country["UM"] = 231] = "UM";
    Country[Country["US"] = 232] = "US";
    Country[Country["UY"] = 233] = "UY";
    Country[Country["UZ"] = 234] = "UZ";
    Country[Country["VA"] = 235] = "VA";
    Country[Country["VC"] = 236] = "VC";
    Country[Country["VE"] = 237] = "VE";
    Country[Country["VG"] = 238] = "VG";
    Country[Country["VI"] = 239] = "VI";
    Country[Country["VN"] = 240] = "VN";
    Country[Country["VU"] = 241] = "VU";
    Country[Country["WF"] = 242] = "WF";
    Country[Country["WS"] = 243] = "WS";
    Country[Country["XK"] = 244] = "XK";
    Country[Country["YE"] = 245] = "YE";
    Country[Country["YT"] = 246] = "YT";
    Country[Country["ZA"] = 247] = "ZA";
    Country[Country["ZM"] = 248] = "ZM";
    Country[Country["ZW"] = 249] = "ZW";
})(Country = exports.Country || (exports.Country = {}));
function getCountryName(country) {
    return abbreviation_to_country_1.countries[Country[country]] || null;
}
exports.getCountryName = getCountryName;
exports.countriesIdsToNamesArray = Object.keys(abbreviation_to_country_1.countries).map(function (abbr) {
    return { id: Country[abbr], name: getCountryName(+Country[abbr]) };
});
//# sourceMappingURL=GeoLocation.js.map