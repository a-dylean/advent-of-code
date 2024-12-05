"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a, e_2, _b, e_3, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('./data', 'utf-8');
var _e = __read(data.split(/\n\s*\n/), 2), allRules = _e[0], allNumbers = _e[1];
var rulesNumbers = allRules.split('\n').map(function (rule) { return rule.split('|').map(function (number) { return parseInt(number); }); });
var arrs = allNumbers.split('\n').map(function (print) { return print.split(',').map(function (number) { return parseInt(number); }); });
var rules = new Map();
try {
    for (var rulesNumbers_1 = __values(rulesNumbers), rulesNumbers_1_1 = rulesNumbers_1.next(); !rulesNumbers_1_1.done; rulesNumbers_1_1 = rulesNumbers_1.next()) {
        var _f = __read(rulesNumbers_1_1.value, 2), number = _f[0], rule = _f[1];
        if (rules.has(number))
            rules.set(number, rules.get(number).concat(rule));
        else
            rules.set(number, [rule]);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (rulesNumbers_1_1 && !rulesNumbers_1_1.done && (_a = rulesNumbers_1.return)) _a.call(rulesNumbers_1);
    }
    finally { if (e_1) throw e_1.error; }
}
var wrongArrs = [];
try {
    for (var arrs_1 = __values(arrs), arrs_1_1 = arrs_1.next(); !arrs_1_1.done; arrs_1_1 = arrs_1.next()) {
        var arr = arrs_1_1.value;
        var swapped = void 0;
        var changed = false;
        do {
            swapped = false;
            for (var index in arr) {
                var number = arr[index];
                if (!rules.has(number))
                    continue;
                var rule = rules.get(number);
                try {
                    for (var rule_1 = (e_3 = void 0, __values(rule)), rule_1_1 = rule_1.next(); !rule_1_1.done; rule_1_1 = rule_1.next()) {
                        var value = rule_1_1.value;
                        var valueIndex = arr.indexOf(value);
                        if (valueIndex === -1)
                            continue;
                        if (Number(index) > valueIndex) {
                            console.log(arr);
                            _d = __read([arr[valueIndex], arr[index]], 2), arr[index] = _d[0], arr[valueIndex] = _d[1];
                            swapped = true;
                            changed = true;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (rule_1_1 && !rule_1_1.done && (_c = rule_1.return)) _c.call(rule_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        } while (swapped);
        if (changed)
            wrongArrs.push(arr);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (arrs_1_1 && !arrs_1_1.done && (_b = arrs_1.return)) _b.call(arrs_1);
    }
    finally { if (e_2) throw e_2.error; }
}
console.log(wrongArrs);
console.log(wrongArrs.reduce(function (acc, arr) { return acc + arr[Math.floor(arr.length / 2)]; }, 0));
