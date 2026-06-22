import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{a as Y,b as X}from"./keyboard-test.constants-DRUxacrk.js";import{w as j,u as g,a as x,e as l}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{R as Q,T as Z}from"./Icon-Bc7wfgCv.js";import{D as b,a as s}from"./DropdownItem-Ycvq77da.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-C3W4NyCk.js";import"./index-DSdvzt-y.js";import"./BaseDropdown-qZ9lxrUs.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-D82IU-Su.js";const $=Object.keys(Q),ee=Object.keys(Z),Se={title:"Composants/Dropdown",id:"Dropdown",tags:["autodocs"],component:b,argTypes:{position:{control:"select",options:["top","bottom","left","right"],defaultValue:"bottom"}}},J=n=>{const[i,r]=m.useState(!1);return e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(b,{...n,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:i,children:[e.jsx(s,{label:"Messages",leftIcon:"mail",hasSeparator:!0,onClick:()=>console.log("click")}),e.jsxs(s,{label:"Actions",leftIcon:"settings",children:[e.jsxs(s,{label:"Edit",leftIcon:"edit",children:[e.jsx(s,{label:"Cut",leftIcon:"cut",trailingText:"⌘X"}),e.jsx(s,{label:"Copy",leftIcon:"copy",trailingText:"⌘X",onClick:()=>console.log("click")}),e.jsx(s,{label:"Paste",leftIcon:"paste",trailingText:"⌘V"})]}),e.jsx(s,{label:"Archive",leftIcon:"archive"}),e.jsx(s,{label:"Delete",leftIcon:"delete"})]}),e.jsx(s,{label:"Help",leftIcon:"help"}),e.jsx(s,{label:"More information",leftIcon:"info",hasSeparator:!0}),e.jsx(s,{label:"First option",hasIndent:!0}),e.jsx(s,{label:"Second option",hasIndent:!0}),e.jsx(s,{label:"Third option",hasSeparator:!0,hasIndent:!0}),e.jsx(s,{label:"Username",leftIcon:"user-circle",disabled:!0})]})})},u={args:{dropdownId:"storybook-dropdown"},render:n=>e.jsx(e.Fragment,{children:e.jsx(J,{...n})})},f={args:{badgeContent:"number",badgeType:"indicator",badgeIcon:"settings",showBadge:!0,badgeCount:5},argTypes:{badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...$,...ee].sort((n,i)=>n.localeCompare(i))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]}},render:n=>{const[i,r]=m.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(b,{dropdownId:"storybook-dropdown-with-badge",onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:i,children:[e.jsx(s,{label:"Messages",leftIcon:"mail",badgeCount:n.badgeCount,badgeContent:n.badgeContent,badgeType:n.badgeType,showBadge:n.showBadge,badgeIcon:n.badgeIcon,badgeSize:n.badgeSize}),e.jsx(s,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})})}},I={args:{...u.args},render:n=>e.jsx(e.Fragment,{children:e.jsx(J,{...n})}),play:async({canvasElement:n})=>{const r=await j(n).getByRole("button",{name:/click me!/i});await g.click(r);const a=document.getElementById("overlay-root");let t;await x(()=>{var c;const o=a==null?void 0:a.querySelector("[data-dropdown-id]");if(l(o).toBeInTheDocument(),!o)throw new Error("Dropdown not found");t=(c=o.querySelector("ul"))==null?void 0:c.querySelectorAll("li"),l(t==null?void 0:t.length).toBeGreaterThan(0),l(t==null?void 0:t[0]).toHaveFocus()},{timeout:500}),await g.keyboard(Y),l(t==null?void 0:t[1]).toHaveFocus(),await g.keyboard(X),l(t==null?void 0:t[0]).toHaveFocus()}},v={args:{...u.args},render:n=>{const[i,r]=m.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(b,{...n,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:i,children:[e.jsx(s,{label:"Messages",leftIcon:"mail",link:"/messages",onClick:()=>console.log("click")}),e.jsx(s,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})})},play:async({canvasElement:n})=>{var c;const r=await j(n).getByRole("button",{name:/click me!/i});await g.click(r);const a=document.getElementById("overlay-root"),t=a==null?void 0:a.querySelector("[data-dropdown-id]"),o=(c=t==null?void 0:t.querySelector("ul"))==null?void 0:c.querySelectorAll("li");await x(()=>{l(t).toBeInTheDocument(),l(o==null?void 0:o[0]).toHaveFocus()}),await g.keyboard(Y),l(o==null?void 0:o[1]).toHaveFocus(),await g.keyboard(X),l(o==null?void 0:o[0]).toHaveFocus()}},ne=[{label:"Messages",leftIcon:"mail",hasSeparator:!0},{label:"Actions",leftIcon:"settings"},{label:"Help",leftIcon:"help"},{label:"More information",leftIcon:"info",hasSeparator:!0},{label:"First option",hasIndent:!0},{label:"Second option",hasIndent:!0},{label:"Third option",hasSeparator:!0,hasIndent:!0},{label:"Username",leftIcon:"user-circle",disabled:!0}],C={args:{...u.args},render:n=>{const[i,r]=m.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsx(b,{...n,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Menu with Header/Footer ⬇"}),style:{width:"250px"},isOpen:i,header:e.jsx("div",{style:{padding:"8px 16px",fontWeight:"bold"},children:"Dropdown Header"}),footer:e.jsx("div",{style:{padding:"8px 16px",fontWeight:"bold"},children:"Dropdown Footer"}),children:ne.map((a,t)=>e.jsx(s,{label:a.label,leftIcon:a.leftIcon,hasSeparator:a.hasSeparator,hasIndent:a.hasIndent,disabled:a.disabled,onClick:()=>console.log("click")},t))})})})},play:async({canvasElement:n})=>{var p,h;const r=await j(n).getByRole("button",{name:/menu with header\/footer/i});await g.click(r);const a=document.getElementById("overlay-root");let t;await x(()=>{const w=a==null?void 0:a.querySelector("[data-dropdown-id]");if(l(w).toBeInTheDocument(),!w)throw new Error("Dropdown not found");return t=w,w});const o=t.querySelector(".rte-dropdown-menu-header"),c=t.querySelector(".rte-dropdown-menu-footer");l(o).toBeInTheDocument(),l(c).toBeInTheDocument();const d=(p=o==null?void 0:o.textContent)==null?void 0:p.trim(),y=(h=c==null?void 0:c.textContent)==null?void 0:h.trim();l(d).toContain("Dropdown Header"),l(y).toContain("Dropdown Footer")}},S={args:{...u.args},render:n=>{const[i,r]=m.useState(!1),[a,t]=m.useState(""),o=[{label:"Messages",leftIcon:"mail",hasSeparator:!0},{label:"Actions",leftIcon:"settings"},{label:"Help",leftIcon:"help"}],[c,d]=m.useState(o);function y(p){const h=p.target.value.toLowerCase();t(p.target.value),d(h?o.filter(w=>w.label.toLowerCase().includes(h)):o)}return e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsx(b,{...n,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Filterable Menu ⬇"}),style:{width:"250px"},isOpen:i,header:e.jsx("div",{style:{padding:"8px 16px"},children:e.jsx("input",{type:"text",placeholder:"Filter items...",value:a,onChange:y,style:{width:"100%",padding:"8px",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box"}})}),children:c.map((p,h)=>e.jsx(s,{label:p.label,leftIcon:p.leftIcon,hasSeparator:p.hasSeparator,onClick:()=>console.log("click")},h))})})})},play:async({canvasElement:n})=>{const r=await j(n).getByRole("button",{name:/filterable menu/i});await g.click(r);const a=document.getElementById("overlay-root");let t;await x(()=>{const d=a==null?void 0:a.querySelector("[data-dropdown-id]");if(l(d).toBeInTheDocument(),!d)throw new Error("Dropdown not found");return t=d,d});const o=t.querySelector(".rte-dropdown-menu-header");l(o).toBeInTheDocument();const c=o==null?void 0:o.querySelector("input");l(c).toBeInTheDocument(),await g.type(c,"Help"),await x(()=>{var y;const d=(y=t.querySelector("ul"))==null?void 0:y.querySelectorAll("li");l(d==null?void 0:d.length).toBe(1)})}},k={args:{...u.args},render:n=>{const[i,r]=m.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsx(b,{...n,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Custom Body Menu ⬇"}),style:{width:"250px"},isOpen:i,body:e.jsx("div",{style:{padding:"16px",color:"black"},children:"This is a custom body content. You can put anything you want here, like text, images, or even other components!"})})})})}};var D,B,T;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    dropdownId: "storybook-dropdown"
  },
  render: args => {
    return <>
        <DropdownTemplate {...args} />
      </>;
  }
}`,...(T=(B=u.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var E,F,O;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    badgeContent: "number",
    badgeType: "indicator",
    badgeIcon: "settings",
    showBadge: true,
    badgeCount: 5
  },
  argTypes: {
    badgeContent: {
      control: "select",
      options: ["number", "icon", "empty"]
    },
    badgeType: {
      control: "select",
      options: ["brand", "neutral", "indicator"]
    },
    badgeIcon: {
      control: "select",
      options: ["", ...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b))
    },
    showBadge: {
      control: "boolean"
    },
    badgeCount: {
      control: "number"
    },
    badgeSize: {
      control: "select",
      options: ["xs", "s", "m", "l"]
    }
  },
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <>
        <div style={{
        position: "relative",
        width: "800px",
        height: "200px",
        display: "flex",
        justifyContent: "space-between",
        gap: "500px"
      }}>
          <Dropdown dropdownId="storybook-dropdown-with-badge" onClose={() => {
          setIsOpen(false);
        }} trigger={<button onClick={() => setIsOpen(true)} style={{
          color: "black"
        }}>
                Click Me!
              </button>} style={{
          width: "250px"
        }} isOpen={isOpen}>
            <DropdownItem label="Messages" leftIcon="mail" badgeCount={args.badgeCount} badgeContent={args.badgeContent} badgeType={args.badgeType} showBadge={args.showBadge} badgeIcon={args.badgeIcon} badgeSize={args.badgeSize} />
            <DropdownItem label="Username" leftIcon="user-circle" link="/username" />
          </Dropdown>
        </div>
      </>;
  }
}`,...(O=(F=f.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var H,q,M;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <>
        <DropdownTemplate {...args} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", {
      name: /click me!/i
    });
    await userEvent.click(triggerButton);
    const overlay = document.getElementById("overlay-root");
    let menuItems: NodeListOf<Element> | undefined;
    await waitFor(() => {
      const found = overlay?.querySelector("[data-dropdown-id]");
      expect(found).toBeInTheDocument();
      if (!found) throw new Error("Dropdown not found");
      menuItems = found.querySelector("ul")?.querySelectorAll("li");
      expect(menuItems?.length).toBeGreaterThan(0);
      expect(menuItems?.[0]).toHaveFocus();
    }, {
      timeout: 500
    });
    await userEvent.keyboard(TESTING_DOWN_KEY);
    expect(menuItems?.[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_UP_KEY);
    expect(menuItems?.[0]).toHaveFocus();
  }
}`,...(M=(q=I.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var W,R,_;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <>
        <div style={{
        position: "relative",
        width: "800px",
        height: "200px",
        display: "flex",
        justifyContent: "space-between",
        gap: "500px"
      }}>
          <Dropdown {...args} onClose={() => {
          setIsOpen(false);
        }} trigger={<button onClick={() => setIsOpen(true)} style={{
          color: "black"
        }}>
                Click Me!
              </button>} style={{
          width: "250px"
        }} isOpen={isOpen}>
            <DropdownItem label="Messages" leftIcon="mail" link="/messages" onClick={() => console.log("click")} />
            <DropdownItem label="Username" leftIcon="user-circle" link="/username" />
          </Dropdown>
        </div>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", {
      name: /click me!/i
    });
    await userEvent.click(triggerButton);
    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("[data-dropdown-id]");
    const menuItems = dropdown?.querySelector("ul")?.querySelectorAll("li");
    await waitFor(() => {
      expect(dropdown).toBeInTheDocument();
      expect(menuItems?.[0]).toHaveFocus();
    });
    await userEvent.keyboard(TESTING_DOWN_KEY);
    expect(menuItems?.[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_UP_KEY);
    expect(menuItems?.[0]).toHaveFocus();
  }
}`,...(_=(R=v.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var N,A,K;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <>
        <div style={{
        position: "relative",
        width: "800px",
        height: "200px",
        display: "flex",
        justifyContent: "space-between",
        gap: "500px"
      }}>
          <Dropdown {...args} onClose={() => {
          setIsOpen(false);
        }} trigger={<button onClick={() => setIsOpen(true)} style={{
          color: "black"
        }}>
                Menu with Header/Footer ⬇
              </button>} style={{
          width: "250px"
        }} isOpen={isOpen} header={<div style={{
          padding: "8px 16px",
          fontWeight: "bold"
        }}>Dropdown Header</div>} footer={<div style={{
          padding: "8px 16px",
          fontWeight: "bold"
        }}>Dropdown Footer</div>}>
            {MOCKUP_ITEMS.map((item, index) => <DropdownItem key={index} label={item.label} leftIcon={item.leftIcon} hasSeparator={item.hasSeparator} hasIndent={item.hasIndent} disabled={item.disabled} onClick={() => console.log("click")} />)}
          </Dropdown>
        </div>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", {
      name: /menu with header\\/footer/i
    });
    await userEvent.click(triggerButton);
    const overlay = document.getElementById("overlay-root");
    let dropdown!: Element;
    await waitFor(() => {
      const found = overlay?.querySelector("[data-dropdown-id]");
      expect(found).toBeInTheDocument();
      if (!found) {
        throw new Error("Dropdown not found");
      }
      dropdown = found;
      return found;
    });
    const headerSection = dropdown.querySelector(".rte-dropdown-menu-header");
    const footerSection = dropdown.querySelector(".rte-dropdown-menu-footer");
    expect(headerSection).toBeInTheDocument();
    expect(footerSection).toBeInTheDocument();
    const headerContent = headerSection?.textContent?.trim();
    const footerContent = footerSection?.textContent?.trim();
    expect(headerContent).toContain("Dropdown Header");
    expect(footerContent).toContain("Dropdown Footer");
  }
}`,...(K=(A=C.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var U,L,z;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [filterValue, setFilterValue] = useState<string>("");
    const allItems = [{
      label: "Messages",
      leftIcon: "mail",
      hasSeparator: true
    }, {
      label: "Actions",
      leftIcon: "settings"
    }, {
      label: "Help",
      leftIcon: "help"
    }];
    const [filteredItems, setFilteredItems] = useState(allItems);
    function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
      const filter = event.target.value.toLowerCase();
      setFilterValue(event.target.value);
      if (!filter) {
        setFilteredItems(allItems);
      } else {
        setFilteredItems(allItems.filter(item => item.label.toLowerCase().includes(filter)));
      }
    }
    return <>
        <div style={{
        position: "relative",
        width: "800px",
        height: "200px",
        display: "flex",
        justifyContent: "space-between",
        gap: "500px"
      }}>
          <Dropdown {...args} onClose={() => {
          setIsOpen(false);
        }} trigger={<button onClick={() => setIsOpen(true)} style={{
          color: "black"
        }}>
                Filterable Menu ⬇
              </button>} style={{
          width: "250px"
        }} isOpen={isOpen} header={<div style={{
          padding: "8px 16px"
        }}>
                <input type="text" placeholder="Filter items..." value={filterValue} onChange={handleFilterChange} style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box"
          }} />
              </div>}>
            {filteredItems.map((item, index) => <DropdownItem key={index} label={item.label} leftIcon={item.leftIcon} hasSeparator={item.hasSeparator} onClick={() => console.log("click")} />)}
          </Dropdown>
        </div>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", {
      name: /filterable menu/i
    });
    await userEvent.click(triggerButton);
    const overlay = document.getElementById("overlay-root");
    let dropdown!: Element;
    await waitFor(() => {
      const found = overlay?.querySelector("[data-dropdown-id]");
      expect(found).toBeInTheDocument();
      if (!found) {
        throw new Error("Dropdown not found");
      }
      dropdown = found;
      return found;
    });
    const headerSection = dropdown.querySelector(".rte-dropdown-menu-header");
    expect(headerSection).toBeInTheDocument();
    const filterInput = headerSection?.querySelector("input") as HTMLInputElement;
    expect(filterInput).toBeInTheDocument();
    await userEvent.type(filterInput, "Help");
    await waitFor(() => {
      const menuItems = dropdown.querySelector("ul")?.querySelectorAll("li");
      expect(menuItems?.length).toBe(1);
    });
  }
}`,...(z=(L=S.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var G,P,V;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <>
        <div style={{
        position: "relative",
        width: "800px",
        height: "200px",
        display: "flex",
        justifyContent: "space-between",
        gap: "500px"
      }}>
          <Dropdown {...args} onClose={() => {
          setIsOpen(false);
        }} trigger={<button onClick={() => setIsOpen(true)} style={{
          color: "black"
        }}>
                Custom Body Menu ⬇
              </button>} style={{
          width: "250px"
        }} isOpen={isOpen} body={<div style={{
          padding: "16px",
          color: "black"
        }}>
                This is a custom body content. You can put anything you want here, like text, images, or even other
                components!
              </div>} />
        </div>
      </>;
  }
}`,...(V=(P=k.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const ke=["Default","WithBadge","KeyboardNavigation","KeyboardNavigationWithLink","WithProjectedHeaderAndFooter","WithFilterableHeader","WithCustomBody"];export{u as Default,I as KeyboardNavigation,v as KeyboardNavigationWithLink,f as WithBadge,k as WithCustomBody,S as WithFilterableHeader,C as WithProjectedHeaderAndFooter,ke as __namedExportsOrder,Se as default};
