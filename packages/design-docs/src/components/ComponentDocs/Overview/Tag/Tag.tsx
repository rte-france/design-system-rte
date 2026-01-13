import { HTMLAttributes } from "react";

import "./Tag.scss";

interface TagProps extends HTMLAttributes<HTMLDivElement> {
  tagType?: "status" | "decorative";
  status?: "success" | "information" | "warning" | "alert";
  color?: string;
  compactSpacing?: boolean;
  label?: string;
}

const Tag = ({ tagType = "status", status, color, compactSpacing, label, ...props }: TagProps) => {
  return (
    <div
      className="rte-tag"
      data-tag-type={tagType}
      data-status={status}
      data-color={color}
      data-compact-spacing={compactSpacing}
      {...props}
    >
      {label && (
        <label className="rte-tag-label" data-compact-spacing={compactSpacing}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Tag;
