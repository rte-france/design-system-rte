import { ReactNode, useState, Children } from "react";

import "./Tabs.scss";

interface TabsProps {
  children: ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const TabsTitle = ["Overview", "Guidelines", "Accessibilité"];

  return (
    <div className="rte-component-docs-tabs">
      <div className="rte-component-docs-tabs-header">
        {TabsTitle.map((title, index) => (
          <button
            key={index}
            type="button"
            className={`rte-component-docs-tab-title${activeTab === index ? " active" : ""}`}
            onClick={() => {
              setActiveTab(index);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveTab(index);
              }
            }}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="rte-component-docs-tab-content">{Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

export default Tabs;
