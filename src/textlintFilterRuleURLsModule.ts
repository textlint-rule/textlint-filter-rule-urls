import type { TextlintFilterRuleModule } from "@textlint/types";
// @ts-expect-error
import * as urlRegexSafe from "url-regex-safe";

const textlintFilterRuleURLsModule: TextlintFilterRuleModule = ({
  Syntax,
  getSource,
  shouldIgnore,
}) => ({
  [Syntax.Document]: (node) => {
    const regex: RegExp = urlRegexSafe();
    const text = getSource(node);
    let url;

    while ((url = regex.exec(text))) {
      shouldIgnore([url.index, url.index + url[0].length], {});
    }
  },
});

export { textlintFilterRuleURLsModule };
