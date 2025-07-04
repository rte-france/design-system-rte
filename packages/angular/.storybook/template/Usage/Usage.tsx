interface UsageProps {
  children: React.ReactNode[];
  title: string;
}

const Usage = ({ children, title }: UsageProps) => {
  return (
    <div className="storybook_usage">
      <h2 tabIndex={0} className="storybook_usage_title">
        Quand utiliser un {title}
      </h2>
      <div className="storybook_usage_content">
        {children.map((child, index) => (
          <div key={index} className="storybook_usage_item">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usage;
