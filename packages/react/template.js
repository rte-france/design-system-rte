const template = (variables, { tpl }) => {
  return tpl`
import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';

interface IconProps extends coreIconProps {
  className?: string;
}

const ${variables.componentName} = ({width = 20, height = 20, ...props}: IconProps) => {

  return (
    ${variables.jsx}
  )
};

${variables.exports};
`;
};

export default template;
