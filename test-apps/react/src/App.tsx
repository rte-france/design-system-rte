import {
  Button,
  Icon,
  IconButtonToggle,
  SplitButton,
  Tooltip,
  TextInput,
  Chip,
  Badge,
  Textarea,
  Divider,
  Switch,
  SegmentedControl,
  Breadcrumbs,
  Banner,
  Popover,
  Modal,
  SideNav,
  Card,
  Toast,
  ToastQueueProvider,
  Select,
  Loader,
  Stepper,
} from "@design-system-rte/react";
import "./App.css";
import { Tab } from "@design-system-rte/react";
import { useState } from "react";

function App() {
  const [isIconButtonToggleSelected, setIsIconButtonToggleSelected] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [segmentedControlValue, setSegmentedControlValue] = useState("label-1");
  const [isInfoBannerVisible, setIsInfoBannerVisible] = useState(true);
  const [isAlertBannerVisible, setIsAlertBannerVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const [activeStepperStepId, setActiveStepperStepId] = useState("2");

  const handleIconButtonToggleClick = () => {
    setIsIconButtonToggleSelected(!isIconButtonToggleSelected);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSegmentedControlClick = (
    event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    const newValue = event.currentTarget.getAttribute("id") || "";
    setSegmentedControlValue(newValue);
  };

  const toggleInfoBanner = () => {
    setIsInfoBannerVisible((prev) => !prev);
  };

  const toggleAlertBanner = () => {
    setIsAlertBannerVisible((prev) => !prev);
  };

  const defaultSegmentedButtonOptions = [
    { id: "option-1", label: "Option 1", onClick: () => console.log("Option 1 clicked") },
    { id: "option-2", label: "Option 2", onClick: () => console.log("Option 2 clicked") },
    { id: "option-3", label: "Option 3", onClick: () => console.log("Option 3 clicked") },
  ];

  const headerConfig = {
    identifier: "DS",
    title: "Design System",
    version: "V1.0.0",
    icon: "home",
    link: "/",
  };

  const navigationItems = [
    { id: "home", label: "Home", icon: "home", showIcon: true, onClick: () => setActiveItem("home") },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "dashboard",
      showIcon: true,
      onClick: () => setActiveItem("dashboard"),
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: "analytics",
      showIcon: true,
      onClick: () => setActiveItem("analytics"),
    },
    { id: "settings", label: "Settings", icon: "settings", showIcon: true, onClick: () => setActiveItem("settings") },
    {
      id: "profile",
      label: "Profile",
      icon: "user",
      showIcon: true,
      link: "/profile",
      onClick: () => setActiveItem("profile"),
    },
  ];

  const footerItems = [
    {
      id: "footer-settings",
      label: "Settings",
      icon: "settings",
      showIcon: true,
      onClick: () => {
        console.log("Footer Settings clicked");
        setActiveItem("footer-settings");
      },
    },
    {
      id: "footer-help",
      label: "Help & Support",
      icon: "help",
      showIcon: true,
      link: "/help",
      onClick: () => setActiveItem("footer-help"),
    },
    {
      id: "footer-account",
      label: "Account",
      icon: "user",
      showIcon: true,
      items: [
        { id: "footer-profile", label: "Profile", link: "/profile" },
        { id: "footer-preferences", label: "Preferences" },
        { id: "footer-logout", label: "Logout", onClick: () => console.log("Logout clicked") },
      ],
    },
  ];

  const [selectedTab, setSelectedTab] = useState("tab-1");

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
  };

  const tabs = [
    { id: "tab-1", label: "Onglet 1", panelId: "panel-1" },
    { id: "tab-2", label: "Onglet 2", panelId: "panel-2" },
    { id: "tab-3", label: "Onglet 3", panelId: "panel-3" },
  ];

  const allClickableSteps = [
    {
      id: "1",
      name: "Étape 1",
      completionState: "complete",
      onClick: () => setActiveStepperStepId("1"),
      clickableCompleteStep: true,
    },
    { id: "2", name: "Étape 2", completionState: "incomplete", onClick: () => setActiveStepperStepId("2") },
    { id: "3", name: "Étape 3", completionState: "unvisited", onClick: () => setActiveStepperStepId("3") },
    { id: "4", name: "Étape 4", completionState: "unvisited", onClick: () => setActiveStepperStepId("4") },
    { id: "5", name: "Étape 5", completionState: "unvisited", onClick: () => setActiveStepperStepId("5") },
  ];

  return (
    <SideNav
      headerConfig={headerConfig}
      items={navigationItems}
      footerItems={footerItems}
      collapsible={true}
      appearance="brand"
      activeItem={activeItem}
    >
      <div>
        <div>
          <h3>Tab</h3>
          <Tab options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
          <div style={{ height: "50px", border: "1px solid #ccc", padding: "8px", marginTop: "16px" }}>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                role="tabpanel"
                id={tab.panelId}
                aria-labelledby={tab.id}
                hidden={selectedTab !== tab.id}
              >
                Contenu onglet {tab.label}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <h3>Stepper</h3>
            <div style={{ width: "600px", margin: "0 auto" }}>
              <Stepper steps={allClickableSteps} activeStepId={activeStepperStepId} />
            </div>
          </div>
          <Divider />
          <h3>Card</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
            <Card size="m" cardType="default">
              <div style={{ padding: "16px" }}>
                <h4 style={{ margin: "0 0 12px 0", fontSize: "18px", fontWeight: "600" }}>Default Card</h4>
                <p style={{ margin: "0", color: "#666", lineHeight: "1.5" }}>
                  This is a default card with medium size. It uses elevation shadow styling.
                </p>
              </div>
            </Card>
          </div>
          <div>
            <h3>Banner</h3>
            <Banner
              type="info"
              title="La mise à jour est disponible"
              message="This is an info banner"
              closable
              isOpen={isInfoBannerVisible}
            />
            <Banner
              type="error"
              title="Alert Banner"
              message="This is an alert banner"
              closable
              isOpen={isAlertBannerVisible}
            />
            <Button label={isInfoBannerVisible ? "Close info banner" : "Show info banner"} onClick={toggleInfoBanner} />
            <Button
              label={isAlertBannerVisible ? "Close alert banner" : "Show alert banner"}
              onClick={toggleAlertBanner}
            />
          </div>
          <div>
            <h3>Icon</h3>
            <Icon name="check" />
          </div>
          <hr />
          <div>
            <h3>Button</h3>
            <Button label="Click me" />
          </div>
          <hr />
          <div>
            <h3>SplitButton</h3>
            <SplitButton
              appearance="primary"
              ariaLabelRight="Open menu"
              label="Button Label"
              position="bottom-start"
              options={defaultSegmentedButtonOptions}
            >
              <Button label="Click me" />
            </SplitButton>
          </div>
          <hr />
          <div>
            <h3>Tooltip</h3>
            <Tooltip label="Tooltip">
              <Button label="Click me" />
            </Tooltip>
          </div>
          <hr />
          <div>
            <h3>TextInput</h3>
            <TextInput label="Label" value={inputValue} onChange={handleInputChange} />
            <h4>The input is : {inputValue}</h4>
          </div>
          <hr />
          <div>
            <h3>Icon Button Toggle</h3>
            <IconButtonToggle
              onClick={handleIconButtonToggleClick}
              selected={isIconButtonToggleSelected}
              name="settings"
            />
          </div>
          <hr />
          <div>
            <h3>Chip</h3>
            <Chip label="Chip Label" type="single" onClick={() => console.log("Chip clicked")} />
          </div>
          <hr />
          <div>
            <h3>Badge</h3>
            <div style={{ display: "inline-block", backgroundColor: "bisque" }}>
              <Badge count={1}>A badge host</Badge>
            </div>
          </div>
          <hr />
          <div>
            <h3>Textarea</h3>
            <Textarea
              label="This is a textarea"
              labelPosition="top"
              assistiveTextLabel="This is a label"
              assistiveTextAppearance="description"
              required
            />
          </div>
          <hr />
          <h3>Divider</h3>
          <p> First text </p>
          <Divider />
          <p> Second text </p>
          <Divider thickness="medium" />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={{ margin: "20px" }}> left text </p>
            <Divider orientation="vertical" />
            <p style={{ margin: "20px" }}> middle text </p>
            <Divider orientation="vertical" thickness="medium" />
            <p style={{ margin: "20px" }}> right text </p>
            <Divider orientation="vertical" thickness="bold" />
          </div>
          <Divider orientation="horizontal" thickness="bold" />
          <hr />
          <div>
            <h3>Switch</h3>
            <Switch
              label="Switch Label"
              appearance="brand"
              showLabel={true}
              showIcon={true}
              disabled={false}
              readOnly={false}
            />
            <Switch
              label="Disabled Switch"
              appearance="brand"
              showLabel={true}
              showIcon={true}
              disabled={true}
              readOnly={false}
            />
            <Switch
              label="Read-Only Switch"
              appearance="brand"
              showLabel={true}
              showIcon={true}
              disabled={false}
              readOnly={true}
            />
          </div>
          <hr />
          <div>
            <h3>Segmented Control</h3>
            <SegmentedControl
              options={[
                { id: "label-1", label: "Label 1" },
                { id: "label-2", label: "Label 2" },
                { id: "label-3", label: "Label 3" },
              ]}
              selected={segmentedControlValue}
              onClick={handleSegmentedControlClick}
            />
          </div>
          <hr />
          <div>
            <h3>Breadcrumbs</h3>
            <Breadcrumbs
              items={[
                { link: "/", label: "Home" },
                { link: "/products", label: "Products" },
                { link: "/electronics", label: "Electronics" },
                { link: "/smartphones", label: "Smartphones" },
              ]}
            />
          </div>
          <hr />
          <Popover
            content="This is the popover content"
            primaryButtonLabel="Confirm"
            secondaryButtonLabel="Cancel"
            title="Popover Title"
          >
            <Button label="Open Popover" />
          </Popover>
          <Divider />
          <Button variant="primary" label="Open Modal" onClick={() => setIsModalOpen(true)} />
          <Modal
            title="Modal Title"
            description="This is the modal description"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            primaryButton={<Button variant="primary" label="Continue" onClick={() => setIsModalOpen(false)} />}
            secondaryButton={<Button variant="neutral" label="Cancel" onClick={() => setIsModalOpen(false)} />}
          >
            <div>
              <Badge count={5}>Modal Content Badge</Badge>
              <TextInput label="Modal Input" value={inputValue} onChange={handleInputChange} />
            </div>
          </Modal>
        </div>

        <Divider />
        <div>
          <Select
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
            ]}
          />
        </div>
        <Divider />
        <Button
          label="Toggle error toast"
          onClick={() => setIsErrorOpen(!isErrorOpen)}
          style={{ marginBottom: "16px" }}
          variant="danger"
        />
        <ToastQueueProvider>
          <Toast
            id="my-toast-error-z"
            type={"error"}
            autoDismiss={true}
            closable={true}
            isOpen={isErrorOpen}
            message="Error toast"
            // actionButton={<Button label="Mettre à jour" variant={"text"} />}
            onClose={() => {
              setIsErrorOpen(false);
            }}
          />
        </ToastQueueProvider>
      </div>
      <Loader />
    </SideNav>
  );
}

export default App;
