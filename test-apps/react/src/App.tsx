import "./App.css";
import { Button, Icon, Textarea } from "@design-system-rte/react";

function App() {
  return (
    <div data-theme="bleu_iceberg" data-mode="light">
      <Icon name="check" />
      <Button label="Click me" />
      <Textarea
        label="This is a textarea"
        labelPosition="top"
        assistiveTextLabel="This is a label"
        assistiveTextAppearance="description"
        required
      />
    </div>
  );
}

export default App;
