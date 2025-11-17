import { ReactNode, useState, Children } from "react";

interface StorybookTabsProps {
  children: ReactNode;
}

const StorybookTabs = ({ children }: StorybookTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const TabsTitle = ["Design", "Angular", "React"];

  return (
    <div className="storybook_tabs">
      <div className="storybook_tabs_header" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        {TabsTitle.map((title, index) => (
          <p
            key={index}
            className={`storybook_tab_title${activeTab === index ? " active" : ""}`}
            tabIndex={0}
            style={{
              margin: 0,
              paddingTop: "1rem",
              paddingBottom: "0.5rem",
              marginBottom: "1.5rem",
              cursor: "pointer",
              borderBottom: activeTab === index ? "2px solid #001D6C" : "2px solid transparent",
              color: activeTab === index ? "#001D6C" : "#21272A",
              fontWeight: activeTab === index ? "bold" : "normal",
              fontSize: "1.25rem",
              background: "none",
              transition: "border-color 0.3s, color 0.3s",
            }}
            onClick={() => setActiveTab(index)}
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

export default StorybookTabs;
