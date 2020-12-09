"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textlintFilterRuleURLsModule = void 0;
// @ts-expect-error
const urlRegexSafe = require("url-regex-safe");
const textlintFilterRuleURLsModule = ({ Syntax, getSource, shouldIgnore, }) => ({
    [Syntax.Document]: (node) => {
        const regex = urlRegexSafe();
        const text = getSource(node);
        let url;
        while ((url = regex.exec(text))) {
            shouldIgnore([url.index, url.index + url[0].length], {});
        }
    },
});
exports.textlintFilterRuleURLsModule = textlintFilterRuleURLsModule;
//# sourceMappingURL=textlintFilterRuleURLsModule.js.map