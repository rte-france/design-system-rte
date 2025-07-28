import { Button, Icon, IconButtonToggle, SplitButton, Tooltip, TextInput } from "@design-system-rte/react";
import { useState } from "react";
import "./App.css";

function App() {
  const [isIconButtonToggleSelected, setIsIconButtonToggleSelected] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleIconButtonToggleClick = () => {
    setIsIconButtonToggleSelected(!isIconButtonToggleSelected);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div data-theme="bleu_iceberg" data-mode="light">
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
        <hr />
        <h3>Icon Button Toggle</h3>
        <IconButtonToggle onClick={handleIconButtonToggleClick} selected={isIconButtonToggleSelected} name="settings" />
      </div>
    </div>
  );
}

export default App;
