import Icon from "../Icon/Icon";

interface AccordionIconToggleProps {
  isAccordionOpen: boolean;
}

const AccordionIconToggle = ({ isAccordionOpen = true }: AccordionIconToggleProps) => {
  if (isAccordionOpen) {
    return <Icon name="arrow-chevron-down" />;
  }
  return <Icon name="arrow-chevron-right" />;
};

export default AccordionIconToggle;
