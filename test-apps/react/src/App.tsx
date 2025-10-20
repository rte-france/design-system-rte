import {
  Button,
  Icon,
  IconButtonToggle,
  SplitButton,
  Tooltip,
  TextInput,
  Chip,
  Badge,
  Textarea,
  Divider,
  Switch,
  SegmentedControl,
  Breadcrumbs,
  Banner,
  Popover,
} from "@design-system-rte/react";
import "./App.css";
import { useState } from "react";

function App() {
  const [isIconButtonToggleSelected, setIsIconButtonToggleSelected] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [segmentedControlValue, setSegmentedControlValue] = useState("label-1");
  const [isInfoBannerVisible, setIsInfoBannerVisible] = useState(true);
  const [isAlertBannerVisible, setIsAlertBannerVisible] = useState(true);

  const handleIconButtonToggleClick = () => {
    setIsIconButtonToggleSelected(!isIconButtonToggleSelected);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSegmentedControlClick = (
    event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    const newValue = event.currentTarget.getAttribute("id") || "";
    setSegmentedControlValue(newValue);
  };

  const toggleInfoBanner = () => {
    setIsInfoBannerVisible((prev) => !prev);
  };

  const toggleAlertBanner = () => {
    setIsAlertBannerVisible((prev) => !prev);
  };

  return (
    <div>
      <div>
        <h3>Banner</h3>
        <Banner
          type="default"
          title="Info Banner"
          message="This is an info banner"
          closable
          isOpen={isInfoBannerVisible}
        />
        <Banner
          type="alert"
          title="Alert Banner"
          message="This is an alert banner"
          closable
          isOpen={isAlertBannerVisible}
        />
        <Button label={isInfoBannerVisible ? "Close info banner" : "Show info banner"} onClick={toggleInfoBanner} />
        <Button label={isAlertBannerVisible ? "Close alert banner" : "Show alert banner"} onClick={toggleAlertBanner} />
      </div>
      <div>
        <h3>Icon</h3>
        <Icon name="check" />
      </div>
      <hr />
      <div>
        <h3>Button</h3>
        <Button label="Click me" />
      </div>
      <hr />
      <div>
        <h3>SplitButton</h3>
        <SplitButton appearance="primary" ariaLabelRight="Open menu" label="Button Label" position="bottom-start">
          <Button label="Click me" />
        </SplitButton>
      </div>
      <hr />
      <div>
        <h3>Tooltip</h3>
        <Tooltip label="Tooltip">
          <Button label="Click me" />
        </Tooltip>
      </div>
      <hr />
      <div>
        <h3>TextInput</h3>
        <TextInput label="Label" value={inputValue} onChange={handleInputChange} />
        <h4>The input is : {inputValue}</h4>
      </div>
      <hr />
      <div>
        <h3>Icon Button Toggle</h3>
        <IconButtonToggle onClick={handleIconButtonToggleClick} selected={isIconButtonToggleSelected} name="settings" />
      </div>
      <hr />
      <div>
        <h3>Chip</h3>
        <Chip label="Chip Label" type="single" onClick={() => console.log("Chip clicked")} />
      </div>
      <hr />
      <div>
        <h3>Badge</h3>
        <div style={{ display: "inline-block", backgroundColor: "bisque" }}>
          <Badge count={1}>A badge host</Badge>
        </div>
      </div>
      <hr />
      <div>
        <h3>Textarea</h3>
        <Textarea
          label="This is a textarea"
          labelPosition="top"
          assistiveTextLabel="This is a label"
          assistiveTextAppearance="description"
          required
        />
      </div>
      <hr />
      <h3>Divider</h3>
      <p> First text </p>
      <Divider />
      <p> Second text </p>
      <Divider thickness="medium" />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p style={{ margin: "20px" }}> left text </p>
        <Divider orientation="vertical" />
        <p style={{ margin: "20px" }}> middle text </p>
        <Divider orientation="vertical" thickness="medium" />
        <p style={{ margin: "20px" }}> right text </p>
        <Divider orientation="vertical" thickness="bold" />
      </div>
      <Divider orientation="horizontal" thickness="bold" />
      <hr />
      <div>
        <h3>Switch</h3>
        <Switch
          label="Switch Label"
          appearance="brand"
          showLabel={true}
          showIcon={true}
          disabled={false}
          readOnly={false}
        />
        <Switch
          label="Disabled Switch"
          appearance="brand"
          showLabel={true}
          showIcon={true}
          disabled={true}
          readOnly={false}
        />
        <Switch
          label="Read-Only Switch"
          appearance="brand"
          showLabel={true}
          showIcon={true}
          disabled={false}
          readOnly={true}
        />
      </div>
      <hr />
      <div>
        <h3>Segmented Control</h3>
        <SegmentedControl
          options={[
            { id: "label-1", label: "Label 1" },
            { id: "label-2", label: "Label 2" },
            { id: "label-3", label: "Label 3" },
          ]}
          selected={segmentedControlValue}
          onClick={handleSegmentedControlClick}
        />
      </div>
      <hr />
      <div>
        <h3>Breadcrumbs</h3>
        <Breadcrumbs
          items={[
            { link: "/", label: "Home" },
            { link: "/products", label: "Products" },
            { link: "/electronics", label: "Electronics" },
            { link: "/smartphones", label: "Smartphones" },
          ]}
        />
      </div>
      <hr />
      <Popover
        content="This is the popover content"
        primaryButtonLabel="Confirm"
        secondaryButtonLabel="Cancel"
        title="Popover Title"
      >
        <Button label="Open Popover" />
      </Popover>
    </div>
  );
}

export default App;
