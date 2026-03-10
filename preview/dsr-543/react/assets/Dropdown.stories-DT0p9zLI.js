import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{b as z,c as G}from"./keyboard-test.constants-By8W48aj.js";import{w as k,u,a as f,e as l}from"./index-4rjIhT2C.js";import{r as b}from"./index-G8LIXM5I.js";import{R as V,T as Y}from"./Icon-DjEid3Hw.js";import{D as y,a as s}from"./DropdownItem-uepfmWk9.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-b6ITl72-.js";import"./index-DSdvzt-y.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-COL5NWrm.js";import"./Divider-BMotkXeQ.js";import"./auto-placement-hBju0MTR.js";import"./dom.constants-41SiyeDe.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const X=Object.keys(V),J=Object.keys(Y),ye={title:"Composants/Dropdown",id:"Dropdown",tags:["autodocs"],component:y,argTypes:{position:{control:"select",options:["top","bottom","left","right"],defaultValue:"bottom"}}},P=t=>{const[i,a]=b.useState(!1);return e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(y,{...t,onClose:()=>{a(!1)},trigger:e.jsx("button",{onClick:()=>a(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:i,children:[e.jsx(s,{label:"Messages",leftIcon:"mail",hasSeparator:!0,onClick:()=>console.log("click")}),e.jsxs(s,{label:"Actions",leftIcon:"settings",children:[e.jsxs(s,{label:"Edit",leftIcon:"edit",children:[e.jsx(s,{label:"Cut",leftIcon:"cut",trailingText:"⌘X"}),e.jsx(s,{label:"Copy",leftIcon:"copy",trailingText:"⌘X",onClick:()=>console.log("click")}),e.jsx(s,{label:"Paste",leftIcon:"paste",trailingText:"⌘V"})]}),e.jsx(s,{label:"Archive",leftIcon:"archive"}),e.jsx(s,{label:"Delete",leftIcon:"delete"})]}),e.jsx(s,{label:"Help",leftIcon:"help"}),e.jsx(s,{label:"More information",leftIcon:"info",hasSeparator:!0}),e.jsx(s,{label:"First option",hasIndent:!0}),e.jsx(s,{label:"Second option",hasIndent:!0}),e.jsx(s,{label:"Third option",hasSeparator:!0,hasIndent:!0}),e.jsx(s,{label:"Username",leftIcon:"user-circle",disabled:!0})]})})},g={args:{dropdownId:"storybook-dropdown"},render:t=>e.jsx(e.Fragment,{children:e.jsx(P,{...t})})},x={args:{badgeContent:"number",badgeType:"indicator",badgeIcon:"settings",showBadge:!0,badgeCount:5},argTypes:{badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...X,...J].sort((t,i)=>t.localeCompare(i))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]}},render:t=>{const[i,a]=b.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(y,{dropdownId:"storybook-dropdown-with-badge",onClose:()=>{a(!1)},trigger:e.jsx("button",{onClick:()=>a(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:i,children:[e.jsx(s,{label:"Messages",leftIcon:"mail",badgeCount:t.badgeCount,badgeContent:t.badgeContent,badgeType:t.badgeType,showBadge:t.showBadge,badgeIcon:t.badgeIcon,badgeSize:t.badgeSize}),e.jsx(s,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})})}},I={args:{...g.args},render:t=>e.jsx(e.Fragment,{children:e.jsx(P,{...t})}),play:async({canvasElement:t})=>{const a=await k(t).getByRole("button",{name:/click me!/i});await u.click(a);const r=document.getElementById("overlay-root");let n;await f(()=>{var c;const o=r==null?void 0:r.querySelector("[data-dropdown-id]");if(l(o).toBeInTheDocument(),!o)throw new Error("Dropdown not found");n=(c=o.querySelector("ul"))==null?void 0:c.querySelectorAll("li"),l(n==null?void 0:n.length).toBeGreaterThan(0),l(n==null?void 0:n[0]).toHaveFocus()},{timeout:500}),await u.keyboard(z),l(n==null?void 0:n[1]).toHaveFocus(),await u.keyboard(G),l(n==null?void 0:n[0]).toHaveFocus()}},v={args:{...g.args},render:t=>{const[i,a]=b.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(y,{...t,onClose:()=>{a(!1)},trigger:e.jsx("button",{onClick:()=>a(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:i,children:[e.jsx(s,{label:"Messages",leftIcon:"mail",link:"/messages",onClick:()=>console.log("click")}),e.jsx(s,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})})},play:async({canvasElement:t})=>{var c;const a=await k(t).getByRole("button",{name:/click me!/i});await u.click(a);const r=document.getElementById("overlay-root"),n=r==null?void 0:r.querySelector("[data-dropdown-id]"),o=(c=n==null?void 0:n.querySelector("ul"))==null?void 0:c.querySelectorAll("li");await f(()=>{l(n).toBeInTheDocument(),l(o==null?void 0:o[0]).toHaveFocus()}),await u.keyboard(z),l(o==null?void 0:o[1]).toHaveFocus(),await u.keyboard(G),l(o==null?void 0:o[0]).toHaveFocus()}},Q=[{label:"Messages",leftIcon:"mail",hasSeparator:!0},{label:"Actions",leftIcon:"settings"},{label:"Help",leftIcon:"help"},{label:"More information",leftIcon:"info",hasSeparator:!0},{label:"First option",hasIndent:!0},{label:"Second option",hasIndent:!0},{label:"Third option",hasSeparator:!0,hasIndent:!0},{label:"Username",leftIcon:"user-circle",disabled:!0}],C={args:{...g.args},render:t=>{const[i,a]=b.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsx(y,{...t,onClose:()=>{a(!1)},trigger:e.jsx("button",{onClick:()=>a(!0),style:{color:"black"},children:"Menu with Header/Footer ⬇"}),style:{width:"250px"},isOpen:i,header:e.jsx("div",{style:{padding:"8px 16px",fontWeight:"bold"},children:"Dropdown Header"}),footer:e.jsx("div",{style:{padding:"8px 16px",fontWeight:"bold"},children:"Dropdown Footer"}),children:Q.map((r,n)=>e.jsx(s,{label:r.label,leftIcon:r.leftIcon,hasSeparator:r.hasSeparator,hasIndent:r.hasIndent,disabled:r.disabled,onClick:()=>console.log("click")},n))})})})},play:async({canvasElement:t})=>{var p,m;const a=await k(t).getByRole("button",{name:/menu with header\/footer/i});await u.click(a);const r=document.getElementById("overlay-root");let n;await f(()=>{const w=r==null?void 0:r.querySelector("[data-dropdown-id]");if(l(w).toBeInTheDocument(),!w)throw new Error("Dropdown not found");return n=w,w});const o=n.querySelector(".rte-dropdown-menu-header"),c=n.querySelector(".rte-dropdown-menu-footer");l(o).toBeInTheDocument(),l(c).toBeInTheDocument();const d=(p=o==null?void 0:o.textContent)==null?void 0:p.trim(),h=(m=c==null?void 0:c.textContent)==null?void 0:m.trim();l(d).toContain("Dropdown Header"),l(h).toContain("Dropdown Footer")}},S={args:{...g.args},render:t=>{const[i,a]=b.useState(!1),[r,n]=b.useState(""),o=[{label:"Messages",leftIcon:"mail",hasSeparator:!0},{label:"Actions",leftIcon:"settings"},{label:"Help",leftIcon:"help"}],[c,d]=b.useState(o);function h(p){const m=p.target.value.toLowerCase();n(p.target.value),d(m?o.filter(w=>w.label.toLowerCase().includes(m)):o)}return e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsx(y,{...t,onClose:()=>{a(!1)},trigger:e.jsx("button",{onClick:()=>a(!0),style:{color:"black"},children:"Filterable Menu ⬇"}),style:{width:"250px"},isOpen:i,header:e.jsx("div",{style:{padding:"8px 16px"},children:e.jsx("input",{type:"text",placeholder:"Filter items...",value:r,onChange:h,style:{width:"100%",padding:"8px",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box"}})}),children:c.map((p,m)=>e.jsx(s,{label:p.label,leftIcon:p.leftIcon,hasSeparator:p.hasSeparator,onClick:()=>console.log("click")},m))})})})},play:async({canvasElement:t})=>{const a=await k(t).getByRole("button",{name:/filterable menu/i});await u.click(a);const r=document.getElementById("overlay-root");let n;await f(()=>{const d=r==null?void 0:r.querySelector("[data-dropdown-id]");if(l(d).toBeInTheDocument(),!d)throw new Error("Dropdown not found");return n=d,d});const o=n.querySelector(".rte-dropdown-menu-header");l(o).toBeInTheDocument();const c=o==null?void 0:o.querySelector("input");l(c).toBeInTheDocument(),await u.type(c,"Help"),await f(()=>{var h;const d=(h=n.querySelector("ul"))==null?void 0:h.querySelectorAll("li");l(d==null?void 0:d.length).toBe(1)})}};var j,D,B;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    dropdownId: "storybook-dropdown"
  },
  render: args => {
    return <>
        <DropdownTemplate {...args} />
      </>;
  }
}`,...(B=(D=g.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var T,E,F;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(F=(E=x.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var O,H,q;I.parameters={...I.parameters,docs:{...(O=I.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(H=I.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var M,R,_;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(_=(R=v.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var W,N,A;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(A=(N=C.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var K,U,L;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(L=(U=S.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};const fe=["Default","WithBadge","KeyboardNavigation","KeyboardNavigationWithLink","WithProjectedHeaderAndFooter","WithFilterableHeader"];export{g as Default,I as KeyboardNavigation,v as KeyboardNavigationWithLink,x as WithBadge,S as WithFilterableHeader,C as WithProjectedHeaderAndFooter,fe as __namedExportsOrder,ye as default};
