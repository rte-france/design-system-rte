import React from "react";

interface StorybookTabsProps {
  children: React.ReactNode;
}

const StorybookTabs = ({ children }: StorybookTabsProps) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const TabsTitle = ["Overview", "Guideline", "Code", "Accessibilité"];

  return (
    <div className="storybook_tabs">
      <div className="storybook_tabs_header" style={{ display: "flex", borderBottom: "1px solid #ccc" }}>
        {TabsTitle.map((title, index) => (
          <h3
            key={index}
            className={`storybook_tab_title${activeTab === index ? " active" : ""}`}
            style={{
              margin: 0,
              padding: "8px 16px",
              cursor: "pointer",
              borderBottom: activeTab === index ? "2px solid #007bff" : "2px solid transparent",
              color: activeTab === index ? "#007bff" : "#333",
              background: "none",
              fontWeight: activeTab === index ? "bold" : "normal",
            }}
            onClick={() => setActiveTab(index)}
          >
            {title}
          </h3>
        ))}
      </div>
      <div className="storybook_tab_content" style={{ padding: "16px" }}>
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

export default StorybookTabs;
