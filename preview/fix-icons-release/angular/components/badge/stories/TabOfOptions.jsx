import React from "react";

import { TabOfOptions as CoreTabOfOptions } from "../../../../../../../.storybook/template/TabOfOptions/TabOfOptions";

const options = [
  { property: "badgeType", value: "brand / neutral / indicator", defaultValue: "brand", dependance: "-" },
  { property: "Size", value: "XS / S / M / L", defaultValue: "small", dependance: "-" },
  {
    property: "mode",
    value: "bleu-iceberg_light / bleu-iceberg_dark / violet_light / violet_dark / vert-foret_light / vert-foret_dark",
    defaultValue: "bleu-iceberg_light",
    dependance: "-",
  },
  { property: "Badge content", value: "", defaultValue: "", dependance: "" },
  { property: "content", value: "number / icon", defaultValue: "number", dependance: "size ≠ XS or S" },
  { property: "count", value: "number", defaultValue: "42", dependance: "size ≠ XS or S" },
  { property: "Icon", value: "", defaultValue: "", dependance: "" },
  { property: "Icon", value: "icon", defaultValue: "-", dependance: "showIcon = True" },
  {
    property: "mode",
    value: "bleu-iceberg_light / bleu-iceberg_dark / violet_light / violet_dark / vert-foret_light / vert-foret_dark",
    defaultValue: "bleu-iceberg-light",
    dependance: "-",
  },
];

export const TabOfOptions = () => {
  return <CoreTabOfOptions options={options} />;
};
