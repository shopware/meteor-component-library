import{w as s,u as o}from"./index-68cdfbf5.js";import{e as a}from"./index-4b4e994a.js";import{w as S}from"./test-helper-7c3608e5.js";import de from"./sw-select.stories-c9b4211a.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-select-cad7a36f.js";import"./vue.esm-bundler-b74e4d3a.js";import"./sw-base-field-bf6bb47a.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-3b1d1ea3.js";import"./iframe-511ec090.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./sw-loader-2faceb27.js";import"./sw-field-error-73799238.js";import"./sw-popover-deprecated-73be6bf5.js";import"./_baseGetTag-22b9c805.js";import"./isObjectLike-e68f0fe0.js";import"./sw-color-badge-03d44177.js";import"./sw-button-f164c644.js";import"./_MapCache-d596e291.js";import"./isFunction-69f77d3f.js";const Le={...de,title:"Interaction Tests/Form/sw-select"},i={name:"Should remove selections through selection list",args:{value:["a","b","d"],enableMultiSelection:!0},play:async({canvasElement:n,args:e})=>{const t=s(n);await o.click(t.getByRole("textbox"));const l=s(document.querySelector(".sw-popover-deprecated__wrapper"));await o.click(l.getByTestId("sw-select-option--a")),a(e.change).toHaveBeenCalledWith(["b","d"])}},c={name:"Should remove selection through result item",args:{value:["a","b","d"],enableMultiSelection:!0},play:async({canvasElement:n,args:e})=>{const t=s(n);await o.click(t.getAllByTestId("dismiss-label")[0]),a(e.change).toHaveBeenCalledWith(["b","d"])}},p={name:"Should clear selections",args:{value:["a","b","d"],enableMultiSelection:!0},play:async({canvasElement:n,args:e})=>{const t=s(n);await o.click(t.getByTestId("select-clear-button")),a(e.change).toHaveBeenCalledWith([])}},d={name:"Should single select",play:async({canvasElement:n,args:e})=>{const t=s(n);await o.type(t.getByRole("textbox"),"A");let l=s(document.querySelector(".sw-popover-deprecated__wrapper"));await o.click(l.getByTestId("sw-select-option--a")),a(e.itemAdd).toHaveBeenCalledWith({id:1,value:"a",label:"Option A"}),a(e.change).toHaveBeenCalledWith("a"),a(t.getByRole("textbox").value).toBe(""),await o.type(t.getByRole("textbox"),"F"),l=s(document.querySelector(".sw-popover-deprecated__wrapper")),await S(()=>l.getByTestId("sw-select-option--f")),await o.click(l.getByTestId("sw-select-option--f")),a(e.itemAdd).toHaveBeenCalledWith({id:6,value:"f",label:"Option F"}),a(e.change).toHaveBeenCalledWith("f"),a(t.getByRole("textbox").value).toBe(""),await o.type(t.getByRole("textbox"),"FF"),l=s(document.querySelector(".sw-popover-deprecated__wrapper")),await S(()=>l.getByTestId("sw-select-option--ff")),await o.click(l.getByTestId("sw-select-option--ff")),a(e.itemAdd).toHaveBeenCalledWith({id:7,value:"ff",label:"Option FF"}),a(e.change).toHaveBeenCalledWith("ff"),a(t.getByRole("textbox").value).toBe("")}},u={name:"Should multi select",args:{enableMultiSelection:!0},play:async({canvasElement:n,args:e})=>{const t=s(n);await o.click(t.getByRole("textbox"));const l=s(document.querySelector(".sw-popover-deprecated__wrapper"));await o.click(l.getByTestId("sw-select-option--a")),a(e.itemAdd).toHaveBeenCalledWith({id:1,value:"a",label:"Option A"}),a(e.change).toHaveBeenCalledWith(["a"]),await o.click(l.getByTestId("sw-select-option--b")),a(e.itemAdd).toHaveBeenCalledWith({id:2,value:"b",label:"Option B"}),a(e.change).toHaveBeenCalledWith(["a","b"]),await o.click(l.getByTestId("sw-select-option--c")),a(e.itemAdd).toHaveBeenCalledWith({id:3,value:"c",label:"Option C"}),a(e.change).toHaveBeenCalledWith(["a","b","c"]),await o.click(l.getByTestId("sw-select-option--e")),a(e.itemAdd).toHaveBeenCalledWith({id:5,value:"e",label:"Option E"}),a(e.change).toHaveBeenCalledWith(["a","b","c","e"]),await o.click(t.getByText("hidden")),a(t.getByRole("textbox").value).toBe("")}},v={name:"Should display prefix",args:{prefix:"prefix"},play:({canvasElement:n,args:e})=>{const t=s(n);a(t.getByText(e.prefix)).toBeDefined()}},m={name:"Should display suffix",args:{suffix:"suffix"},play:({canvasElement:n,args:e})=>{const t=s(n);a(t.getByText(e.suffix)).toBeDefined()}},g={name:"Should display hint",args:{hint:"hint"},play:({canvasElement:n,args:e})=>{const t=s(n);a(t.getByText(e.hint)).toBeDefined()}},h={name:"Should disable",args:{disabled:!0,value:["a","b","d"],enableMultiSelection:!0},play:async({canvasElement:n})=>{const e=s(n);await o.click(e.getByRole("textbox"));const t=document.querySelector(".sw-popover-deprecated__wrapper");a(t).toBe(null)}},y={name:"Should display error",args:{error:{code:500,detail:"Error while saving!"}},play:({canvasElement:n,args:e})=>{const t=s(n);a(t.getByText(e.error.detail)).toBeDefined()}},x={name:"Should highlight search term",args:{enableMultiSelection:!0},play:async({canvasElement:n})=>{const e=s(n);await o.type(e.getByRole("textbox"),"A"),await S(()=>document.getElementsByClassName("sw-select-result").length===1);const t=s(document.querySelector(".sw-popover-deprecated__wrapper"));a(t.getByText((l,r)=>{const T=b=>b.textContent==="Option A",ce=T(r),pe=Array.from((r==null?void 0:r.children)||[]).every(b=>!T(b));return ce&&pe})).toBeDefined()}},w={name:"Should trigger inheritance-remove event",args:{label:"Inherited",isInheritanceField:!0,isInherited:!0},play:async({canvasElement:n,args:e})=>{const t=s(n);await o.click(t.getByTestId("sw-inheritance-switch-icon")),a(e.inheritanceRemove).toHaveBeenCalledWith()}},B={name:"Should not show load more",play:async({canvasElement:n,args:e})=>{const t=s(n);await o.type(t.getByRole("textbox"),"Option long text");const l=s(document.querySelector(".sw-popover-deprecated__wrapper"));await o.click(l.getByTestId("sw-select-option--Longer value text")),a(e.itemAdd).toHaveBeenCalledWith({id:8,label:"Option long text",value:"Longer value text"}),a(e.change).toHaveBeenCalledWith("Longer value text"),a(t.getByRole("textbox").value).toBe(""),a(t.queryByText("+12")).toBeNull()}};var f,E,H;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Should remove selections through selection list',
  args: {
    value: ['a', 'b', 'd'],
    enableMultiSelection: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('textbox'));
    const popover = within(document.querySelector('.sw-popover-deprecated__wrapper'));
    await userEvent.click(popover.getByTestId('sw-select-option--a'));
    expect(args.change).toHaveBeenCalledWith(['b', 'd']);
  }
}`,...(H=(E=i.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var C,W,I;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Should remove selection through result item',
  args: {
    value: ['a', 'b', 'd'],
    enableMultiSelection: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByTestId('dismiss-label')[0]);
    expect(args.change).toHaveBeenCalledWith(['b', 'd']);
  }
}`,...(I=(W=c.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var R,_,k;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Should clear selections',
  args: {
    value: ['a', 'b', 'd'],
    enableMultiSelection: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('select-clear-button'));
    expect(args.change).toHaveBeenCalledWith([]);
  }
}`,...(k=(_=p.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var A,O,V;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Should single select',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'A');
    let popover = within(document.querySelector('.sw-popover-deprecated__wrapper'));
    await userEvent.click(popover.getByTestId('sw-select-option--a'));
    expect(args.itemAdd).toHaveBeenCalledWith({
      id: 1,
      value: 'a',
      label: 'Option A'
    });
    expect(args.change).toHaveBeenCalledWith('a');
    expect(canvas.getByRole('textbox').value).toBe('');
    await userEvent.type(canvas.getByRole('textbox'), 'F');
    popover = within(document.querySelector('.sw-popover-deprecated__wrapper'));
    await waitUntilRendered(() => popover.getByTestId('sw-select-option--f'));
    await userEvent.click(popover.getByTestId('sw-select-option--f'));
    expect(args.itemAdd).toHaveBeenCalledWith({
      id: 6,
      value: 'f',
      label: 'Option F'
    });
    expect(args.change).toHaveBeenCalledWith('f');
    expect(canvas.getByRole('textbox').value).toBe('');

    // Only 'FF' is selected
    await userEvent.type(canvas.getByRole('textbox'), 'FF');
    popover = within(document.querySelector('.sw-popover-deprecated__wrapper'));
    await waitUntilRendered(() => popover.getByTestId('sw-select-option--ff'));
    await userEvent.click(popover.getByTestId('sw-select-option--ff'));
    expect(args.itemAdd).toHaveBeenCalledWith({
      id: 7,
      value: 'ff',
      label: 'Option FF'
    });
    expect(args.change).toHaveBeenCalledWith('ff');
    expect(canvas.getByRole('textbox').value).toBe('');
  }
}`,...(V=(O=d.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var q,F,M;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Should multi select',
  args: {
    enableMultiSelection: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    // open selection
    await userEvent.click(canvas.getByRole('textbox'));
    const popover = within(document.querySelector('.sw-popover-deprecated__wrapper'));
    await userEvent.click(popover.getByTestId('sw-select-option--a'));
    expect(args.itemAdd).toHaveBeenCalledWith({
      id: 1,
      value: 'a',
      label: 'Option A'
    });
    expect(args.change).toHaveBeenCalledWith(['a']);
    await userEvent.click(popover.getByTestId('sw-select-option--b'));
    expect(args.itemAdd).toHaveBeenCalledWith({
      id: 2,
      value: 'b',
      label: 'Option B'
    });
    expect(args.change).toHaveBeenCalledWith(['a', 'b']);
    await userEvent.click(popover.getByTestId('sw-select-option--c'));
    expect(args.itemAdd).toHaveBeenCalledWith({
      id: 3,
      value: 'c',
      label: 'Option C'
    });
    expect(args.change).toHaveBeenCalledWith(['a', 'b', 'c']);
    await userEvent.click(popover.getByTestId('sw-select-option--e'));
    expect(args.itemAdd).toHaveBeenCalledWith({
      id: 5,
      value: 'e',
      label: 'Option E'
    });
    expect(args.change).toHaveBeenCalledWith(['a', 'b', 'c', 'e']);
    await userEvent.click(canvas.getByText('hidden'));
    expect(canvas.getByRole('textbox').value).toBe('');
  }
}`,...(M=(F=u.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var D,L,N;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Should display prefix',
  args: {
    prefix: 'prefix'
  },
  play: ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(args.prefix)).toBeDefined();
  }
}`,...(N=(L=v.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var U,P,j;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Should display suffix',
  args: {
    suffix: 'suffix'
  },
  play: ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(args.suffix)).toBeDefined();
  }
}`,...(j=(P=m.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var z,G,J;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Should display hint',
  args: {
    hint: 'hint'
  },
  play: ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(args.hint)).toBeDefined();
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Should disable',
  args: {
    disabled: true,
    value: ['a', 'b', 'd'],
    enableMultiSelection: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('textbox'));
    const popover = document.querySelector('.sw-popover-deprecated__wrapper');
    expect(popover).toBe(null);
  }
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Should display error',
  args: {
    error: {
      code: 500,
      detail: 'Error while saving!'
    }
  },
  play: ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(args.error.detail)).toBeDefined();
  }
}`,...($=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ae;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Should highlight search term',
  args: {
    enableMultiSelection: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'A');

    // wait until only one result is rendered
    await waitUntilRendered(() => document.getElementsByClassName('sw-select-result').length === 1);
    const popover = within(document.querySelector('.sw-popover-deprecated__wrapper'));
    // Option A is separated in different elements. This methods get the combined instance.
    expect(popover.getByText((content, element) => {
      const hasText = element => element.textContent === 'Option A';
      const elementHasText = hasText(element);
      const childrenDontHaveText = Array.from(element?.children || []).every(child => !hasText(child));
      return elementHasText && childrenDontHaveText;
    })).toBeDefined();
  }
}`,...(ae=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,oe,se;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Should trigger inheritance-remove event',
  args: {
    label: 'Inherited',
    isInheritanceField: true,
    isInherited: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('sw-inheritance-switch-icon'));
    expect(args.inheritanceRemove).toHaveBeenCalledWith();
  }
}`,...(se=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var le,re,ie;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Should not show load more',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'Option long text');
    const popover = within(document.querySelector('.sw-popover-deprecated__wrapper'));
    await userEvent.click(popover.getByTestId('sw-select-option--Longer value text'));
    expect(args.itemAdd).toHaveBeenCalledWith({
      id: 8,
      label: 'Option long text',
      value: 'Longer value text'
    });
    expect(args.change).toHaveBeenCalledWith('Longer value text');
    expect(canvas.getByRole('textbox').value).toBe('');
    expect(canvas.queryByText('+12')).toBeNull();
  }
}`,...(ie=(re=B.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};const Ne=["TestRemovalOfSelectionByList","TestRemoveSelectionByResultItem","TestClearSelections","VisualTestSingleSelection","VisualTestMultiSelect","VisualTestPrefix","VisualTestSuffix","VisualTestHint","VisualTestDisabled","VisualTestError","VisualTestHighlightSearchTerm","VisualTestInherited","VisualTestEnsureSingleSelectionWithoutLoadMore"];export{p as TestClearSelections,i as TestRemovalOfSelectionByList,c as TestRemoveSelectionByResultItem,h as VisualTestDisabled,B as VisualTestEnsureSingleSelectionWithoutLoadMore,y as VisualTestError,x as VisualTestHighlightSearchTerm,g as VisualTestHint,w as VisualTestInherited,u as VisualTestMultiSelect,v as VisualTestPrefix,d as VisualTestSingleSelection,m as VisualTestSuffix,Ne as __namedExportsOrder,Le as default};
