import { ComponentType, SVGProps } from "react";

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: string;
  size?: number;
  color?: string;
}

interface IconComponentProps extends Omit<SVGProps<SVGSVGElement>, "width" | "height"> {
  size?: number;
  color?: string;
}

const ArrowChevronDown = ({ size = 20, color = "currentColor", ...props }: IconComponentProps) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path
      d="M9.99996 12.4792C9.88885 12.4792 9.78468 12.4618 9.68746 12.4271C9.59024 12.3924 9.49996 12.3334 9.41663 12.25L5.58329 8.41671C5.43051 8.26393 5.35413 8.06949 5.35413 7.83337C5.35413 7.59726 5.43051 7.40282 5.58329 7.25004C5.73607 7.09726 5.93051 7.02087 6.16663 7.02087C6.40274 7.02087 6.59718 7.09726 6.74996 7.25004L9.99996 10.5L13.25 7.25004C13.4027 7.09726 13.5972 7.02087 13.8333 7.02087C14.0694 7.02087 14.2638 7.09726 14.4166 7.25004C14.5694 7.40282 14.6458 7.59726 14.6458 7.83337C14.6458 8.06949 14.5694 8.26393 14.4166 8.41671L10.5833 12.25C10.5 12.3334 10.4097 12.3924 10.3125 12.4271C10.2152 12.4618 10.1111 12.4792 9.99996 12.4792Z"
      fill={color}
    />
  </svg>
);

const ArrowChevronRight = ({ size = 20, color = "currentColor", ...props }: IconComponentProps) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
    <path
      d="M10.5 9.99996L7.25004 6.74996C7.09726 6.59718 7.02087 6.40274 7.02087 6.16663C7.02087 5.93051 7.09726 5.73607 7.25004 5.58329C7.40282 5.43051 7.59726 5.35413 7.83337 5.35413C8.06949 5.35413 8.26393 5.43051 8.41671 5.58329L12.25 9.41663C12.3334 9.49996 12.3924 9.59024 12.4271 9.68746C12.4618 9.78468 12.4792 9.88885 12.4792 9.99996C12.4792 10.1111 12.4618 10.2152 12.4271 10.3125C12.3924 10.4097 12.3334 10.5 12.25 10.5833L8.41671 14.4166C8.26393 14.5694 8.06949 14.6458 7.83337 14.6458C7.59726 14.6458 7.40282 14.5694 7.25004 14.4166C7.09726 14.2638 7.02087 14.0694 7.02087 13.8333C7.02087 13.5972 7.09726 13.4027 7.25004 13.25L10.5 9.99996Z"
      fill={color}
    />
  </svg>
);

const iconMap: Record<string, ComponentType<IconComponentProps>> = {
  "arrow-chevron-down": ArrowChevronDown,
  "arrow-chevron-right": ArrowChevronRight,
};

const Icon = ({ name, size = 20, color = "currentColor", ...props }: IconProps) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon: Invalid icon name "${name}". Please use a valid icon key.`);
    return null;
  }

  return <IconComponent size={size} color={color} {...props} />;
};

export default Icon;
