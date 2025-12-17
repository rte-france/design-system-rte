import { Button } from "@design-system-rte/react";

const ButtonWrapper = () => {
  return (
    <Button
      variant="primary"
      label="Faire une demande"
      onClick={() =>
        window.open("https://rtefrance.sharepoint.com/sites/Portail-Acteurs-DSIT/SitePages/We-Love-Design.aspx")
      }
    />
  );
};

export default ButtonWrapper;
