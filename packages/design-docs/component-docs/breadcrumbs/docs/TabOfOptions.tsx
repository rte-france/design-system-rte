import { TabOfOptions as CoreTabOfOptions } from "../../../src/components/TabOfOptions/TabOfOptions";

const options = [
  { property: "numberOfPages", value: "1 / 2 / 3 / 3+", defaultValue: "2", dependance: "-" },
  { property: "activePageLabel", value: "Text", defaultValue: "Active page", dependance: "-" },
  { property: "showBadge", value: "True / False", defaultValue: "False", dependance: "-" },
  {
    property: "mode",
    value: "bleu-iceberg_light / bleu-iceberg_dark / violet_light / violet_dark / vert-foret_light / vert-foret_dark",
    defaultValue: "bleu-iceberg_light",
    dependance: "-",
  },
];

const TabOfOptions = () => {
  return <CoreTabOfOptions options={options} />;
};

export default TabOfOptions;
