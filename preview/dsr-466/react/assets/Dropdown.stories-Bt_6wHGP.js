import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as Q,c as Z}from"./keyboard-test.constants-By8W48aj.js";import{w as f,u as m,a as y,e as s}from"./index-4rjIhT2C.js";import{r as h}from"./index-oxIuDU2I.js";import{B as ee}from"./Button-D2pOnlYb.js";import{R as ne,T as te}from"./Icon-DtGx5MhP.js";import{D as I,a as c}from"./DropdownItem-DEUWXZo0.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-l7pVeAni.js";import"./index-DSdvzt-y.js";import"./useActiveKeyboard-ulQ4ZbvH.js";import"./Divider-wgG4QOYs.js";import"./auto-placement-C6RxYMtA.js";import"./dom.constants-41SiyeDe.js";import"./useAnimatedMount-D_Oodrhx.js";import"./Overlay-BCJ8ToNr.js";import"./index-0JNj-DyH.js";import"./index-ChhEEol8.js";const oe=Object.keys(ne),ae=Object.keys(te),je={title:"Composants/Dropdown (développement en cours)",id:"Dropdown",tags:["autodocs"],component:I,argTypes:{position:{control:"select",options:["top","bottom","left","right"],defaultValue:"bottom"}}},x=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("span",{style:{fontFamily:"sans-serif",marginBottom:16,border:"1px solid #F4922B",padding:8,borderRadius:5,backgroundColor:"#FAFFC1",margin:0},children:"Ce composant est en cours de développement et n'est pas encore disponible"})}),e.jsx("br",{})]}),$=t=>{const[d,r]=h.useState(!1);return e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(I,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:d,children:[e.jsx(c,{label:"Messages",leftIcon:"mail",hasSeparator:!0,onClick:()=>console.log("click")}),e.jsxs(c,{label:"Actions",leftIcon:"settings",children:[e.jsxs(c,{label:"Edit",leftIcon:"edit",children:[e.jsx(c,{label:"Cut",leftIcon:"cut",trailingText:"⌘X"}),e.jsx(c,{label:"Copy",leftIcon:"copy",trailingText:"⌘X",onClick:()=>console.log("click")}),e.jsx(c,{label:"Paste",leftIcon:"paste",trailingText:"⌘V"})]}),e.jsx(c,{label:"Archive",leftIcon:"archive"}),e.jsx(c,{label:"Delete",leftIcon:"delete"})]}),e.jsx(c,{label:"Help",leftIcon:"help"}),e.jsx(c,{label:"More information",leftIcon:"info",hasSeparator:!0}),e.jsx(c,{label:"First option",hasIndent:!0}),e.jsx(c,{label:"Second option",hasIndent:!0}),e.jsx(c,{label:"Third option",hasSeparator:!0,hasIndent:!0}),e.jsx(c,{label:"Username",leftIcon:"user-circle",disabled:!0})]})})},w={args:{dropdownId:"storybook-dropdown"},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx($,{...t})]})},S={args:{badgeContent:"number",badgeType:"indicator",badgeIcon:"settings",showBadge:!0,badgeCount:5},argTypes:{badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...oe,...ae].sort((t,d)=>t.localeCompare(d))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]}},render:t=>{const[d,r]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(I,{dropdownId:"storybook-dropdown-with-badge",onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:d,children:[e.jsx(c,{label:"Messages",leftIcon:"mail",badgeCount:t.badgeCount,badgeContent:t.badgeContent,badgeType:t.badgeType,showBadge:t.showBadge,badgeIcon:t.badgeIcon,badgeSize:t.badgeSize}),e.jsx(c,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})]})}},C={tags:["debug"],args:{...w.args},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx($,{...t})]}),play:async({canvasElement:t})=>{var i;const r=await f(t).getByRole("button",{name:/click me!/i});await m.click(r);const o=document.getElementById("overlay-root"),a=o==null?void 0:o.querySelector("[data-dropdown-id]"),n=(i=a==null?void 0:a.querySelector("ul"))==null?void 0:i.querySelectorAll("li");await y(()=>{s(a).toBeInTheDocument(),s(n==null?void 0:n[0]).toHaveFocus()}),await m.keyboard(Q),s(n==null?void 0:n[1]).toHaveFocus(),await m.keyboard(Z),s(n==null?void 0:n[0]).toHaveFocus()}},k={args:{...w.args},render:t=>{const[d,r]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(I,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:d,children:[e.jsx(c,{label:"Messages",leftIcon:"mail",link:"/messages",onClick:()=>console.log("click")}),e.jsx(c,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})]})},play:async({canvasElement:t})=>{var i;const r=await f(t).getByRole("button",{name:/click me!/i});await m.click(r);const o=document.getElementById("overlay-root"),a=o==null?void 0:o.querySelector("[data-dropdown-id]"),n=(i=a==null?void 0:a.querySelector("ul"))==null?void 0:i.querySelectorAll("li");await y(()=>{s(a).toBeInTheDocument(),s(n==null?void 0:n[0]).toHaveFocus()}),await m.keyboard(Q),s(n==null?void 0:n[1]).toHaveFocus(),await m.keyboard(Z),s(n==null?void 0:n[0]).toHaveFocus()}},re=[{label:"Messages",leftIcon:"mail",hasSeparator:!0},{label:"Actions",leftIcon:"settings"},{label:"Help",leftIcon:"help"},{label:"More information",leftIcon:"info",hasSeparator:!0},{label:"First option",hasIndent:!0},{label:"Second option",hasIndent:!0},{label:"Third option",hasSeparator:!0,hasIndent:!0},{label:"Username",leftIcon:"user-circle",disabled:!0}],j={args:{...w.args},render:t=>{const[d,r]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsx(I,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Menu with Header/Footer ⬇"}),style:{width:"250px"},isOpen:d,header:e.jsx("div",{style:{padding:"8px 16px",fontWeight:"bold"},children:"Dropdown Header"}),footer:e.jsx("div",{style:{padding:"8px 16px",fontWeight:"bold"},children:"Dropdown Footer"}),children:re.map((o,a)=>e.jsx(c,{label:o.label,leftIcon:o.leftIcon,hasSeparator:o.hasSeparator,hasIndent:o.hasIndent,disabled:o.disabled,onClick:()=>console.log("click")},a))})})]})},play:async({canvasElement:t})=>{var g,u;const r=await f(t).getByRole("button",{name:/menu with header\/footer/i});await m.click(r);const o=document.getElementById("overlay-root");let a;await y(()=>{const l=o==null?void 0:o.querySelector("[data-dropdown-id]");if(s(l).toBeInTheDocument(),!l)throw new Error("Dropdown not found");return a=l,l});const n=a.querySelector(".rte-dropdown-menu-header"),i=a.querySelector(".rte-dropdown-menu-footer");s(n).toBeInTheDocument(),s(i).toBeInTheDocument();const p=(g=n==null?void 0:n.textContent)==null?void 0:g.trim(),b=(u=i==null?void 0:i.textContent)==null?void 0:u.trim();s(p).toContain("Dropdown Header"),s(b).toContain("Dropdown Footer")}},B={args:{...w.args},render:t=>{const[d,r]=h.useState(!1),[o,a]=h.useState(""),n=[{label:"Messages",leftIcon:"mail",hasSeparator:!0},{label:"Actions",leftIcon:"settings"},{label:"Help",leftIcon:"help"}],[i,p]=h.useState(n);function b(g){const u=g.target.value.toLowerCase();a(g.target.value),p(u?n.filter(l=>l.label.toLowerCase().includes(u)):n)}return e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsx(I,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Filterable Menu ⬇"}),style:{width:"250px"},isOpen:d,header:e.jsx("div",{style:{padding:"8px 16px"},children:e.jsx("input",{type:"text",placeholder:"Filter items...",value:o,onChange:b,style:{width:"100%",padding:"8px",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box"}})}),children:i.map((g,u)=>e.jsx(c,{label:g.label,leftIcon:g.leftIcon,hasSeparator:g.hasSeparator,onClick:()=>console.log("click")},u))})})]})},play:async({canvasElement:t})=>{const r=await f(t).getByRole("button",{name:/filterable menu/i});await m.click(r);const o=document.getElementById("overlay-root");let a;await y(()=>{const p=o==null?void 0:o.querySelector("[data-dropdown-id]");if(s(p).toBeInTheDocument(),!p)throw new Error("Dropdown not found");return a=p,p});const n=a.querySelector(".rte-dropdown-menu-header");s(n).toBeInTheDocument();const i=n==null?void 0:n.querySelector("input");s(i).toBeInTheDocument(),await m.type(i,"Help"),await y(()=>{var b;const p=(b=a.querySelector("ul"))==null?void 0:b.querySelectorAll("li");s(p==null?void 0:p.length).toBe(1)})}},D={tags:["debug"],args:{...w.args},render:t=>{const[d,r]=h.useState(!1),[o,a]=h.useState(""),n=[{label:"Messages",leftIcon:"mail",hasSeparator:!0},{label:"Actions",leftIcon:"settings"},{label:"Help",leftIcon:"help"}],[i,p]=h.useState(n);function b(l){a(l.target.value)}function g(){const l=o.trim();l&&(p([...i,{label:l}]),a(""))}function u(l){l.key==="Enter"&&(l.preventDefault(),g())}return e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsx(I,{...t,onClose:()=>{r(!1)},trigger:e.jsx("button",{onClick:()=>r(!0),style:{color:"black"},children:"Menu with Add Item Footer ⬇"}),style:{width:"400px"},isOpen:d,footer:e.jsxs("div",{style:{padding:"8px 16px",display:"flex",gap:"8px"},children:[e.jsx("input",{type:"text",placeholder:"Add new item...",value:o,onChange:b,onKeyDown:u,style:{flex:1,padding:"8px",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box"}}),e.jsx(ee,{variant:"primary",size:"m",type:"button",onClick:g,label:"Add"})]}),children:i.map((l,v)=>e.jsx(c,{label:l.label,leftIcon:l.leftIcon,hasSeparator:l.hasSeparator,onClick:()=>console.log("click")},v))})})]})},play:async({canvasElement:t})=>{var g;const r=await f(t).getByRole("button",{name:/menu with add item footer/i});await m.click(r);const o=document.getElementById("overlay-root");let a;await y(()=>{const u=o==null?void 0:o.querySelector("[data-dropdown-id]");if(s(u).toBeInTheDocument(),!u)throw new Error("Dropdown not found");return a=u,u});const n=a.querySelector(".rte-dropdown-menu-footer");s(n).toBeInTheDocument();const i=n==null?void 0:n.querySelector("input"),p=n==null?void 0:n.querySelector("button");s(i).toBeInTheDocument(),s(p).toBeInTheDocument();const b=((g=a.querySelector("ul"))==null?void 0:g.querySelectorAll("li").length)||0;await m.type(i,"New Item"),await m.click(p),await y(()=>{var v,E;const u=a.querySelector("ul"),l=(u==null?void 0:u.querySelectorAll("li"))??[];s(l.length).toBe(b+1),s((E=(v=l[l.length-1])==null?void 0:v.textContent)==null?void 0:E.trim()).toContain("New Item")},{timeout:5e3})}};var T,F,O;w.parameters={...w.parameters,docs:{...(T=w.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    dropdownId: "storybook-dropdown"
  },
  render: args => {
    return <>
        <WipWarning />
        <DropdownTemplate {...args} />
      </>;
  }
}`,...(O=(F=w.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var q,A,H;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(A=S.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var M,W,N;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ["debug"],
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
    await waitFor(() => {
      expect(dropdown).toBeInTheDocument();
      expect(menuItems?.[0]).toHaveFocus();
    });
    await userEvent.keyboard(TESTING_DOWN_KEY);
    expect(menuItems?.[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_UP_KEY);
    expect(menuItems?.[0]).toHaveFocus();
  }
}`,...(N=(W=C.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var L,R,K;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(K=(R=k.parameters)==null?void 0:R.docs)==null?void 0:K.source}}};var _,z,U;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(U=(z=j.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var P,V,G;B.parameters={...B.parameters,docs:{...(P=B.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(V=B.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var Y,X,J;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ["debug"],
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

    // Wait for state update + re-render (CI can be slower than default timeout)
    await waitFor(() => {
      const list = dropdown.querySelector("ul");
      const menuItems = list?.querySelectorAll("li") ?? [];
      expect(menuItems.length).toBe(initialItemCount + 1);
      expect(menuItems[menuItems.length - 1]?.textContent?.trim()).toContain("New Item");
    }, {
      timeout: 5000
    });
  }
}`,...(J=(X=D.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};const Be=["Default","WithBadge","KeyboardNavigation","KeyboardNavigationWithLink","WithProjectedHeaderAndFooter","WithFilterableHeader","WithAddItemFooter"];export{w as Default,C as KeyboardNavigation,k as KeyboardNavigationWithLink,D as WithAddItemFooter,S as WithBadge,B as WithFilterableHeader,j as WithProjectedHeaderAndFooter,Be as __namedExportsOrder,je as default};
