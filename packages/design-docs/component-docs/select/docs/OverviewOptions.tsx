import Heading from "../../../src/components/Heading/Heading";
import Table from "../../../src/components/Table/Table";

import "./OverviewOptions.scss";

const OverviewOptions = () => {
  return (
    <div className="rte-overview-options-subsections">
      <div className="rte-overview-options-subsection">
        <Heading id="required-optional" level={3}>
          Required / optionnal
        </Heading>
        <Table
          options={{
            headers: ["Property", "Value", "Default value", "Dependance"],
            lines: [
              [
                "appearance",
                "required / required icon only / optional",
                "required icon only",
                "required / optional = true",
              ],
            ],
          }}
        />
      </div>

      <div className="rte-overview-options-subsection">
        <Heading id="assistive-text" level={3}>
          Assistive text
        </Heading>
        <Table
          options={{
            headers: ["Property", "Value", "Default value", "Dependance"],
            lines: [
              ["appearance", "description / error / success / link", "description", "showAssistiveText = true"],
              ["showIcon", "true / false", "true", "showAssistiveText = true"],
              ["label", "text", "Description", "showAssistiveText = true"],
            ],
          }}
        />
      </div>

      <div className="rte-overview-options-subsection">
        <Heading id="select-content" level={3}>
          selectContent
        </Heading>
        <Table
          options={{
            headers: ["Property", "Value", "Default value", "Dependance"],
            lines: [
              [
                "selectType",
                "singleSelect / multipleSelect",
                "singleSelect",
                "interactionState = active / completed (Figma Only) / error",
              ],
              ["showResetIcon", "true / false", "false", "interactionState = active / completed (Figma Only) / error"],
            ],
          }}
        />
      </div>
    </div>
  );
};

export default OverviewOptions;
