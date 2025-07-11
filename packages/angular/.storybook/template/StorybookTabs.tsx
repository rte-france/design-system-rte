import { ReactNode, useState, Children } from "react";

interface StorybookTabsProps {
  children: ReactNode;
}

const StorybookTabs = ({ children }: StorybookTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const TabsTitle = ["Overview", "Guideline", "Code", "Accessibilité"];

  return (
    <div className="storybook_tabs">
      <div className="storybook_tabs_header" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        {TabsTitle.map((title, index) => (
          <h3
            key={index}
            className={`storybook_tab_title${activeTab === index ? " active" : ""}`}
            style={{
              margin: 0,
              paddingBlock: "1rem",
              cursor: "pointer",
              borderBottom: activeTab === index ? "2px solid #001D6C" : "2px solid transparent",
              color: activeTab === index ? "#001D6C" : "#21272A",
              background: "none",
            }}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActiveTab(index);
              }
            }}
          >
            {title}
          </h3>
        ))}
      </div>
      <div className="storybook_tab_content">{Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

export default StorybookTabs;
