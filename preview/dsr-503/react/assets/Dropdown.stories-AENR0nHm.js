import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{b as J,c as Q}from"./keyboard-test.constants-By8W48aj.js";import{w as f,u as m,e as s,a as x}from"./index-BfPN6pki.js";import{r as h}from"./index-G8LIXM5I.js";import{B as $}from"./Button-CoCTt7OM.js";import{R as ee,T as ne}from"./Icon-DjEid3Hw.js";import{D as y,a as d}from"./DropdownItem-tp_XGkkM.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-CQk6fGHb.js";import"./index-DSdvzt-y.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Divider-cNGLKJiC.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CQ0GhNxd.js";import"./index-CFcDIoS3.js";import"./index-BO2TEXkE.js";const te=Object.keys(ee),oe=Object.keys(ne),ke={title:"Composants/Dropdown (développement en cours)",id:"Dropdown",tags:["autodocs"],component:y,argTypes:{position:{control:"select",options:["top","bottom","left","right"],defaultValue:"bottom"}}},I=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("span",{style:{fontFamily:"sans-serif",marginBottom:16,border:"1px solid #F4922B",padding:8,borderRadius:5,backgroundColor:"#FAFFC1",margin:0},children:"Ce composant est en cours de développement et n'est pas encore disponible"})}),e.jsx("br",{})]}),Z=t=>{const[p,r]=h.useState(!1);return e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(y,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:p,children:[e.jsx(d,{label:"Messages",leftIcon:"mail",hasSeparator:!0,onClick:()=>console.log("click")}),e.jsxs(d,{label:"Actions",leftIcon:"settings",children:[e.jsxs(d,{label:"Edit",leftIcon:"edit",children:[e.jsx(d,{label:"Cut",leftIcon:"cut",trailingText:"⌘X"}),e.jsx(d,{label:"Copy",leftIcon:"copy",trailingText:"⌘X",onClick:()=>console.log("click")}),e.jsx(d,{label:"Paste",leftIcon:"paste",trailingText:"⌘V"})]}),e.jsx(d,{label:"Archive",leftIcon:"archive"}),e.jsx(d,{label:"Delete",leftIcon:"delete"})]}),e.jsx(d,{label:"Help",leftIcon:"help"}),e.jsx(d,{label:"More information",leftIcon:"info",hasSeparator:!0}),e.jsx(d,{label:"First option",hasIndent:!0}),e.jsx(d,{label:"Second option",hasIndent:!0}),e.jsx(d,{label:"Third option",hasSeparator:!0,hasIndent:!0}),e.jsx(d,{label:"Username",leftIcon:"user-circle",disabled:!0})]})})},w={args:{dropdownId:"storybook-dropdown"},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx(Z,{...t})]})},S={args:{badgeContent:"number",badgeType:"indicator",badgeIcon:"settings",showBadge:!0,badgeCount:5},argTypes:{badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...te,...oe].sort((t,p)=>t.localeCompare(p))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]}},render:t=>{const[p,r]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(y,{dropdownId:"storybook-dropdown-with-badge",onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:p,children:[e.jsx(d,{label:"Messages",leftIcon:"mail",badgeCount:t.badgeCount,badgeContent:t.badgeContent,badgeType:t.badgeType,showBadge:t.showBadge,badgeIcon:t.badgeIcon,badgeSize:t.badgeSize}),e.jsx(d,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})]})}},C={args:{...w.args},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx(Z,{...t})]}),play:async({canvasElement:t})=>{var i;const r=await f(t).getByRole("button",{name:/click me!/i});await m.click(r);const o=document.getElementById("overlay-root"),a=o==null?void 0:o.querySelector("[data-dropdown-id]"),n=(i=a==null?void 0:a.querySelector("ul"))==null?void 0:i.querySelectorAll("li");s(a).toBeInTheDocument(),s(n==null?void 0:n[0]).toHaveFocus(),await m.keyboard(J),s(n==null?void 0:n[1]).toHaveFocus(),await m.keyboard(Q),s(n==null?void 0:n[0]).toHaveFocus()}},k={args:{...w.args},render:t=>{const[p,r]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(y,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:p,children:[e.jsx(d,{label:"Messages",leftIcon:"mail",link:"/messages",onClick:()=>console.log("click")}),e.jsx(d,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})]})},play:async({canvasElement:t})=>{var i;const r=await f(t).getByRole("button",{name:/click me!/i});await m.click(r);const o=document.getElementById("overlay-root"),a=o==null?void 0:o.querySelector("[data-dropdown-id]"),n=(i=a==null?void 0:a.querySelector("ul"))==null?void 0:i.querySelectorAll("li");await x(()=>{s(a).toBeInTheDocument(),s(n==null?void 0:n[0]).toHaveFocus()}),await m.keyboard(J),s(n==null?void 0:n[1]).toHaveFocus(),await m.keyboard(Q),s(n==null?void 0:n[0]).toHaveFocus()}},ae=[{label:"Messages",leftIcon:"mail",hasSeparator:!0},{label:"Actions",leftIcon:"settings"},{label:"Help",leftIcon:"help"},{label:"More information",leftIcon:"info",hasSeparator:!0},{label:"First option",hasIndent:!0},{label:"Second option",hasIndent:!0},{label:"Third option",hasSeparator:!0,hasIndent:!0},{label:"Username",leftIcon:"user-circle",disabled:!0}],j={args:{...w.args},render:t=>{const[p,r]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsx(y,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Menu with Header/Footer ⬇"}),style:{width:"250px"},isOpen:p,header:e.jsx("div",{style:{padding:"8px 16px",fontWeight:"bold"},children:"Dropdown Header"}),footer:e.jsx("div",{style:{padding:"8px 16px",fontWeight:"bold"},children:"Dropdown Footer"}),children:ae.map((o,a)=>e.jsx(d,{label:o.label,leftIcon:o.leftIcon,hasSeparator:o.hasSeparator,hasIndent:o.hasIndent,disabled:o.disabled,onClick:()=>console.log("click")},a))})})]})},play:async({canvasElement:t})=>{var g,l;const r=await f(t).getByRole("button",{name:/menu with header\/footer/i});await m.click(r);const o=document.getElementById("overlay-root");let a;await x(()=>{const c=o==null?void 0:o.querySelector("[data-dropdown-id]");if(s(c).toBeInTheDocument(),!c)throw new Error("Dropdown not found");return a=c,c});const n=a.querySelector(".rte-dropdown-menu-header"),i=a.querySelector(".rte-dropdown-menu-footer");s(n).toBeInTheDocument(),s(i).toBeInTheDocument();const u=(g=n==null?void 0:n.textContent)==null?void 0:g.trim(),b=(l=i==null?void 0:i.textContent)==null?void 0:l.trim();s(u).toContain("Dropdown Header"),s(b).toContain("Dropdown Footer")}},B={args:{...w.args},render:t=>{const[p,r]=h.useState(!1),[o,a]=h.useState(""),n=[{label:"Messages",leftIcon:"mail",hasSeparator:!0},{label:"Actions",leftIcon:"settings"},{label:"Help",leftIcon:"help"}],[i,u]=h.useState(n);function b(g){const l=g.target.value.toLowerCase();a(g.target.value),u(l?n.filter(c=>c.label.toLowerCase().includes(l)):n)}return e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsx(y,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Filterable Menu ⬇"}),style:{width:"250px"},isOpen:p,header:e.jsx("div",{style:{padding:"8px 16px"},children:e.jsx("input",{type:"text",placeholder:"Filter items...",value:o,onChange:b,style:{width:"100%",padding:"8px",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box"}})}),children:i.map((g,l)=>e.jsx(d,{label:g.label,leftIcon:g.leftIcon,hasSeparator:g.hasSeparator,onClick:()=>console.log("click")},l))})})]})},play:async({canvasElement:t})=>{const r=await f(t).getByRole("button",{name:/filterable menu/i});await m.click(r);const o=document.getElementById("overlay-root");let a;await x(()=>{const u=o==null?void 0:o.querySelector("[data-dropdown-id]");if(s(u).toBeInTheDocument(),!u)throw new Error("Dropdown not found");return a=u,u});const n=a.querySelector(".rte-dropdown-menu-header");s(n).toBeInTheDocument();const i=n==null?void 0:n.querySelector("input");s(i).toBeInTheDocument(),await m.type(i,"Help"),await x(()=>{var b;const u=(b=a.querySelector("ul"))==null?void 0:b.querySelectorAll("li");s(u==null?void 0:u.length).toBe(1)})}},D={args:{...w.args},render:t=>{const[p,r]=h.useState(!1),[o,a]=h.useState(""),n=[{label:"Messages",leftIcon:"mail",hasSeparator:!0},{label:"Actions",leftIcon:"settings"},{label:"Help",leftIcon:"help"}],[i,u]=h.useState(n);function b(c){a(c.target.value)}function g(){const c=o.trim();c&&(u([...i,{label:c}]),a(""))}function l(c){c.key==="Enter"&&(c.preventDefault(),g())}return e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsx(y,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Menu with Add Item Footer ⬇"}),style:{width:"400px"},isOpen:p,footer:e.jsxs("div",{style:{padding:"8px 16px",display:"flex",gap:"8px"},children:[e.jsx("input",{type:"text",placeholder:"Add new item...",value:o,onChange:b,onKeyDown:l,style:{flex:1,padding:"8px",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box"}}),e.jsx($,{variant:"primary",size:"m",type:"button",onClick:g,label:"Add"})]}),children:i.map((c,v)=>e.jsx(d,{label:c.label,leftIcon:c.leftIcon,hasSeparator:c.hasSeparator,onClick:()=>console.log("click")},v))})})]})},play:async({canvasElement:t})=>{var g;const r=await f(t).getByRole("button",{name:/menu with add item footer/i});await m.click(r);const o=document.getElementById("overlay-root");let a;await x(()=>{const l=o==null?void 0:o.querySelector("[data-dropdown-id]");if(s(l).toBeInTheDocument(),!l)throw new Error("Dropdown not found");return a=l,l});const n=a.querySelector(".rte-dropdown-menu-footer");s(n).toBeInTheDocument();const i=n==null?void 0:n.querySelector("input"),u=n==null?void 0:n.querySelector("button");s(i).toBeInTheDocument(),s(u).toBeInTheDocument();const b=((g=a.querySelector("ul"))==null?void 0:g.querySelectorAll("li").length)||0;await m.type(i,"New Item"),await m.click(u),await x(()=>{var c,v;const l=(c=a.querySelector("ul"))==null?void 0:c.querySelectorAll("li");s(l==null?void 0:l.length).toBe(b+1),s((v=l==null?void 0:l[l.length-1])==null?void 0:v.textContent).toContain("New Item")})}};var E,T,F;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    dropdownId: "storybook-dropdown"
  },
  render: args => {
    return <>
        <WipWarning />
        <DropdownTemplate {...args} />
      </>;
  }
}`,...(F=(T=w.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var O,q,A;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        <WipWarning />
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
}`,...(A=(q=S.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var H,M,W;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <>
        <WipWarning />
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
    const dropdown = overlay?.querySelector("[data-dropdown-id]");
    const menuItems = dropdown?.querySelector("ul")?.querySelectorAll("li");
    expect(dropdown).toBeInTheDocument();
    expect(menuItems?.[0]).toHaveFocus();
    await userEvent.keyboard(TESTING_DOWN_KEY);
    expect(menuItems?.[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_UP_KEY);
    expect(menuItems?.[0]).toHaveFocus();
  }
}`,...(W=(M=C.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var N,L,R;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <>
        <WipWarning />
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
}`,...(R=(L=k.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var K,_,z;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <>
        <WipWarning />
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
}`,...(z=(_=j.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var U,P,V;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
        <WipWarning />
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
}`,...(V=(P=B.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var G,Y,X;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [newItemLabel, setNewItemLabel] = useState<string>("");
    const initialItems: Array<{
      label: string;
      leftIcon?: string;
      hasSeparator?: boolean;
    }> = [{
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
    const [menuItems, setMenuItems] = useState(initialItems);
    function handleNewItemLabelChange(event: React.ChangeEvent<HTMLInputElement>) {
      setNewItemLabel(event.target.value);
    }
    function handleAddItem() {
      const label = newItemLabel.trim();
      if (label) {
        setMenuItems([...menuItems, {
          label
        }]);
        setNewItemLabel("");
      }
    }
    function handleAddItemKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
      if (event.key === "Enter") {
        event.preventDefault();
        handleAddItem();
      }
    }
    return <>
        <WipWarning />
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
                Menu with Add Item Footer ⬇
              </button>} style={{
          width: "400px"
        }} isOpen={isOpen} footer={<div style={{
          padding: "8px 16px",
          display: "flex",
          gap: "8px"
        }}>
                <input type="text" placeholder="Add new item..." value={newItemLabel} onChange={handleNewItemLabelChange} onKeyDown={handleAddItemKeyDown} style={{
            flex: 1,
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box"
          }} />
                <Button variant="primary" size="m" type="button" onClick={handleAddItem} label="Add" />
              </div>}>
            {menuItems.map((item, index) => <DropdownItem key={index} label={item.label} leftIcon={item.leftIcon} hasSeparator={item.hasSeparator} onClick={() => console.log("click")} />)}
          </Dropdown>
        </div>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", {
      name: /menu with add item footer/i
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
    const footerSection = dropdown.querySelector(".rte-dropdown-menu-footer");
    expect(footerSection).toBeInTheDocument();
    const addItemInput = footerSection?.querySelector("input") as HTMLInputElement;
    const addButton = footerSection?.querySelector("button") as HTMLButtonElement;
    expect(addItemInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    const initialItemCount = dropdown.querySelector("ul")?.querySelectorAll("li").length || 0;
    await userEvent.type(addItemInput, "New Item");
    await userEvent.click(addButton);
    await waitFor(() => {
      const menuItems = dropdown.querySelector("ul")?.querySelectorAll("li");
      expect(menuItems?.length).toBe(initialItemCount + 1);
      expect(menuItems?.[menuItems.length - 1]?.textContent).toContain("New Item");
    });
  }
}`,...(X=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};const je=["Default","WithBadge","KeyboardNavigation","KeyboardNavigationWithLink","WithProjectedHeaderAndFooter","WithFilterableHeader","WithAddItemFooter"];export{w as Default,C as KeyboardNavigation,k as KeyboardNavigationWithLink,D as WithAddItemFooter,S as WithBadge,B as WithFilterableHeader,j as WithProjectedHeaderAndFooter,je as __namedExportsOrder,ke as default};
