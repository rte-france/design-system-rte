import { ReactNode, useState, Children } from "react";

import "./Tabs.scss";

interface TabsProps {
  children: ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const TabsTitle = ["Overview", "Guidelines", "Accessibility"];

  return (
    <div className="storybook_tabs">
      <div className="storybook_tabs_header">
        {TabsTitle.map((title, index) => (
          <p
            key={index}
            className={`storybook_tab_title${activeTab === index ? " active" : ""}`}
            tabIndex={0}
            onClick={() => {
              setActiveTab(index);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActiveTab(index);
              }
            }}
          >
            {title}
          </p>
        ))}
      </div>
      <div className="storybook_tab_content">{Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

export default Tabs;
