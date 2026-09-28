import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{b as Z,c as $}from"./keyboard-test.constants-By8W48aj.js";import{w as D,u as g,a as x,e as i}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{R as ne,T as te}from"./Icon-VewZnR13.js";import{D as h}from"./Dropdown-BM0K4W_t.js";import{D as n}from"./DropdownItem--sTV5o6h.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./index-DJ8f9STe.js";import"./Badge-BP1JXoFH.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-Du2ggNbe.js";import"./Link-CUYEWJ-E.js";import"./link.constants-kcvANsJQ.js";const oe=Object.keys(ne),re=Object.keys(te),Oe={title:"Composants/Dropdown",id:"Dropdown",tags:["autodocs"],component:h,argTypes:{position:{control:"select",options:["top","bottom","left","right"],defaultValue:"bottom"}}},ee=t=>{const[l,r]=m.useState(!1);return e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(h,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:l,children:[e.jsx(n,{label:"Messages",leftIcon:"mail",hasSeparator:!0,onClick:()=>console.log("click")}),e.jsxs(n,{label:"Actions",leftIcon:"settings",children:[e.jsxs(n,{label:"Edit",leftIcon:"edit",children:[e.jsx(n,{label:"Cut",leftIcon:"cut",trailingText:"⌘X"}),e.jsx(n,{label:"Copy",leftIcon:"copy",trailingText:"⌘X",onClick:()=>console.log("click")}),e.jsx(n,{label:"Paste",leftIcon:"paste",trailingText:"⌘V"})]}),e.jsx(n,{label:"Archive",leftIcon:"archive"}),e.jsx(n,{label:"Delete",leftIcon:"delete"})]}),e.jsx(n,{label:"Help",leftIcon:"help"}),e.jsx(n,{label:"More information",leftIcon:"info",hasSeparator:!0}),e.jsx(n,{label:"First option",hasIndent:!0}),e.jsx(n,{label:"Second option",hasIndent:!0}),e.jsx(n,{label:"Third option",hasSeparator:!0,hasIndent:!0}),e.jsx(n,{label:"Username",leftIcon:"user-circle",disabled:!0})]})})},u={args:{dropdownId:"storybook-dropdown"},render:t=>e.jsx(e.Fragment,{children:e.jsx(ee,{...t})})},y={args:{badgeContent:"number",badgeType:"indicator",badgeIcon:"settings",showBadge:!0,badgeCount:5},argTypes:{badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...oe,...re].sort((t,l)=>t.localeCompare(l))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]}},render:t=>{const[l,r]=m.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(h,{dropdownId:"storybook-dropdown-with-badge",onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:l,children:[e.jsx(n,{label:"Messages",leftIcon:"mail",badgeCount:t.badgeCount,badgeContent:t.badgeContent,badgeType:t.badgeType,showBadge:t.showBadge,badgeIcon:t.badgeIcon,badgeSize:t.badgeSize}),e.jsx(n,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})})}},I={tags:["!autodocs"],args:{...u.args},render:t=>e.jsx(e.Fragment,{children:e.jsx(ee,{...t})}),play:async({canvasElement:t})=>{const r=await D(t).getByRole("button",{name:/click me!/i});await g.click(r);const s=document.getElementById("overlay-root");let o;await x(()=>{var c;const a=s==null?void 0:s.querySelector("[data-dropdown-id]");if(i(a).toBeInTheDocument(),!a)throw new Error("Dropdown not found");o=(c=a.querySelector("ul"))==null?void 0:c.querySelectorAll("li"),i(o==null?void 0:o.length).toBeGreaterThan(0),i(o==null?void 0:o[0]).toHaveFocus()},{timeout:500}),await g.keyboard(Z),i(o==null?void 0:o[1]).toHaveFocus(),await g.keyboard($),i(o==null?void 0:o[0]).toHaveFocus()}},v={tags:["!autodocs"],args:{...u.args},render:t=>{const[l,r]=m.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(h,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:l,children:[e.jsx(n,{label:"Messages",leftIcon:"mail",link:"/messages",onClick:()=>console.log("click")}),e.jsx(n,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})})},play:async({canvasElement:t})=>{var c;const r=await D(t).getByRole("button",{name:/click me!/i});await g.click(r);const s=document.getElementById("overlay-root"),o=s==null?void 0:s.querySelector("[data-dropdown-id]"),a=(c=o==null?void 0:o.querySelector("ul"))==null?void 0:c.querySelectorAll("li");await x(()=>{i(o).toBeInTheDocument(),i(a==null?void 0:a[0]).toHaveFocus()}),await g.keyboard(Z),i(a==null?void 0:a[1]).toHaveFocus(),await g.keyboard($),i(a==null?void 0:a[0]).toHaveFocus()}},ae=[{label:"Messages",leftIcon:"mail",hasSeparator:!0},{label:"Actions",leftIcon:"settings"},{label:"Help",leftIcon:"help"},{label:"More information",leftIcon:"info",hasSeparator:!0},{label:"First option",hasIndent:!0},{label:"Second option",hasIndent:!0},{label:"Third option",hasSeparator:!0,hasIndent:!0},{label:"Username",leftIcon:"user-circle",disabled:!0}],C={tags:["!autodocs"],args:{...u.args},render:t=>{const[l,r]=m.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsx(h,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Menu with Header/Footer ⬇"}),style:{width:"250px"},isOpen:l,header:e.jsx("div",{style:{padding:"8px 16px",fontWeight:"bold"},children:"Dropdown Header"}),footer:e.jsx("div",{style:{padding:"8px 16px",fontWeight:"bold"},children:"Dropdown Footer"}),children:ae.map((s,o)=>e.jsx(n,{label:s.label,leftIcon:s.leftIcon,hasSeparator:s.hasSeparator,hasIndent:s.hasIndent,disabled:s.disabled,onClick:()=>console.log("click")},o))})})})},play:async({canvasElement:t})=>{var p,b;const r=await D(t).getByRole("button",{name:/menu with header\/footer/i});await g.click(r);const s=document.getElementById("overlay-root");let o;await x(()=>{const f=s==null?void 0:s.querySelector("[data-dropdown-id]");if(i(f).toBeInTheDocument(),!f)throw new Error("Dropdown not found");return o=f,f});const a=o.querySelector(".rte-dropdown-menu-header"),c=o.querySelector(".rte-dropdown-menu-footer");i(a).toBeInTheDocument(),i(c).toBeInTheDocument();const d=(p=a==null?void 0:a.textContent)==null?void 0:p.trim(),w=(b=c==null?void 0:c.textContent)==null?void 0:b.trim();i(d).toContain("Dropdown Header"),i(w).toContain("Dropdown Footer")}},S={tags:["!autodocs"],args:{...u.args},render:t=>{const[l,r]=m.useState(!1),[s,o]=m.useState(""),a=[{label:"Messages",leftIcon:"mail",hasSeparator:!0},{label:"Actions",leftIcon:"settings"},{label:"Help",leftIcon:"help"}],[c,d]=m.useState(a);function w(p){const b=p.target.value.toLowerCase();o(p.target.value),d(b?a.filter(f=>f.label.toLowerCase().includes(b)):a)}return e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsx(h,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Filterable Menu ⬇"}),style:{width:"250px"},isOpen:l,header:e.jsx("div",{style:{padding:"8px 16px"},children:e.jsx("input",{type:"text",placeholder:"Filter items...",value:s,onChange:w,style:{width:"100%",padding:"8px",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box"}})}),children:c.map((p,b)=>e.jsx(n,{label:p.label,leftIcon:p.leftIcon,hasSeparator:p.hasSeparator,onClick:()=>console.log("click")},b))})})})},play:async({canvasElement:t})=>{const r=await D(t).getByRole("button",{name:/filterable menu/i});await g.click(r);const s=document.getElementById("overlay-root");let o;await x(()=>{const d=s==null?void 0:s.querySelector("[data-dropdown-id]");if(i(d).toBeInTheDocument(),!d)throw new Error("Dropdown not found");return o=d,d});const a=o.querySelector(".rte-dropdown-menu-header");i(a).toBeInTheDocument();const c=a==null?void 0:a.querySelector("input");i(c).toBeInTheDocument(),await g.type(c,"Help"),await x(()=>{var w;const d=(w=o.querySelector("ul"))==null?void 0:w.querySelectorAll("li");i(d==null?void 0:d.length).toBe(1)})}},k={args:{...u.args},render:t=>{const[l,r]=m.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsx(h,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Custom Body Menu ⬇"}),style:{width:"250px"},isOpen:l,children:e.jsx("div",{style:{padding:"16px",color:"black"},children:"This is a custom body content. You can put anything you want here, like text, images, or even other components!"})})})})}},j={args:{dropdownId:"storybook-dropdown-critical"},render:t=>{const[l,r]=m.useState(!1);return e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(h,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:l,children:[e.jsx(n,{label:"Messages",leftIcon:"mail",hasSeparator:!0,onClick:()=>console.log("click")}),e.jsxs(n,{label:"Actions",leftIcon:"settings",isCritical:!0,children:[e.jsxs(n,{label:"Edit",leftIcon:"edit",children:[e.jsx(n,{label:"Cut",leftIcon:"cut",trailingText:"⌘X"}),e.jsx(n,{label:"Copy",leftIcon:"copy",trailingText:"⌘X",onClick:()=>console.log("click")}),e.jsx(n,{label:"Paste",leftIcon:"paste",trailingText:"⌘V"})]}),e.jsx(n,{label:"Archive",leftIcon:"archive"}),e.jsx(n,{label:"Delete",leftIcon:"delete"})]}),e.jsx(n,{label:"Help",leftIcon:"help"}),e.jsx(n,{label:"More information",leftIcon:"info",hasSeparator:!0,isCritical:!0}),e.jsx(n,{label:"First option",hasIndent:!0}),e.jsx(n,{label:"Second option",hasIndent:!0}),e.jsx(n,{label:"Third option",hasSeparator:!0,hasIndent:!0}),e.jsx(n,{label:"Username",leftIcon:"user-circle",disabled:!0,isCritical:!0})]})})}};var T,B,O;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    dropdownId: "storybook-dropdown"
  },
  render: args => {
    return <>
        <DropdownTemplate {...args} />
      </>;
  }
}`,...(O=(B=u.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var E,F,M;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(F=y.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var H,q,W;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(W=(q=I.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var A,R,_;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(_=(R=v.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var N,U,K;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(K=(U=C.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var P,V,L;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(L=(V=S.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var z,G,Y;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
        }} isOpen={isOpen}>
            <div style={{
            padding: "16px",
            color: "black"
          }}>
              This is a custom body content. You can put anything you want here, like text, images, or even other
              components!
            </div>
          </Dropdown>
        </div>
      </>;
  }
}`,...(Y=(G=k.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var X,J,Q;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    dropdownId: "storybook-dropdown-critical"
  },
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <div style={{
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
          <DropdownItem label="Messages" leftIcon="mail" hasSeparator onClick={() => console.log("click")} />
          <DropdownItem label="Actions" leftIcon="settings" isCritical={true}>
            <DropdownItem label="Edit" leftIcon="edit">
              <DropdownItem label="Cut" leftIcon="cut" trailingText="⌘X" />
              <DropdownItem label="Copy" leftIcon="copy" trailingText="⌘X" onClick={() => console.log("click")} />
              <DropdownItem label="Paste" leftIcon="paste" trailingText="⌘V" />
            </DropdownItem>
            <DropdownItem label="Archive" leftIcon="archive" />
            <DropdownItem label="Delete" leftIcon="delete" />
          </DropdownItem>
          <DropdownItem label="Help" leftIcon="help" />
          <DropdownItem label="More information" leftIcon="info" hasSeparator isCritical={true} />
          <DropdownItem label="First option" hasIndent />
          <DropdownItem label="Second option" hasIndent />
          <DropdownItem label="Third option" hasSeparator hasIndent />
          <DropdownItem label="Username" leftIcon="user-circle" disabled isCritical={true} />
        </Dropdown>
      </div>;
  }
}`,...(Q=(J=j.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Ee=["Default","WithBadge","KeyboardNavigation","KeyboardNavigationWithLink","WithProjectedHeaderAndFooter","WithFilterableHeader","WithCustomBody","WithCritical"];export{u as Default,I as KeyboardNavigation,v as KeyboardNavigationWithLink,y as WithBadge,j as WithCritical,k as WithCustomBody,S as WithFilterableHeader,C as WithProjectedHeaderAndFooter,Ee as __namedExportsOrder,Oe as default};
