const template = (variables, { tpl }) => {
  return tpl`
import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';


const ${variables.componentName} = ({width = 20, height = 20, fill = 'currentColor', ...props}: IconProps) => {

  return (
    ${variables.jsx}
  )
};

${variables.exports};
`;
};

export default template;
