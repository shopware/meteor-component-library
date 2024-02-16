import{w as l,u as s}from"./index-912b65a3.js";import{e as n}from"./index-b9ac83fc.js";import{w as r}from"./test-helper-7c3608e5.js";import de from"./sw-select.stories-fe56c2f0.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-select-59665cc0.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-base-field-11681dcc.js";import"./tooltip.directive-6ca7427e.js";import"./sw-icon-c5d78c31.js";import"./iframe-51513bc2.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./isObject-32699ff3.js";import"./sw-loader-e16771a0.js";import"./sw-field-error-b96db198.js";import"./sw-popover-deprecated-671376bc.js";import"./sw-color-badge-f11cf031.js";import"./sw-button-963df9ec.js";import"./_MapCache-73175cc1.js";import"./isFunction-97e00978.js";import"./_baseGetTag-22b9c805.js";import"./debounce-6f06ec9c.js";import"./isObjectLike-e68f0fe0.js";const Pe={...de,title:"Interaction Tests/Form/sw-select"},c={name:"Should remove selections through selection list",args:{modelValue:["a","b","d"],enableMultiSelection:!0},play:async({canvasElement:o,args:e})=>{const t=l(o);await s.click(t.getByRole("textbox"));const a=l(document.querySelector(".sw-popover-deprecated__wrapper"));await s.click(a.getByTestId("sw-select-option--a")),n(e.change).toHaveBeenCalledWith(["b","d"])}},p={name:"Should remove selection through result item",args:{modelValue:["a","b","d"],enableMultiSelection:!0},play:async({canvasElement:o,args:e})=>{const t=l(o);await s.click(t.getAllByTestId("dismiss-label")[0]),n(e.change).toHaveBeenCalledWith(["b","d"])}},d={name:"Should clear selections",args:{modelValue:["a","b","d"],enableMultiSelection:!0},play:async({canvasElement:o,args:e})=>{const t=l(o);await s.click(t.getByTestId("select-clear-button")),n(e.change).toHaveBeenCalledWith([])}},u={name:"Should single select",play:async({canvasElement:o,args:e})=>{const t=l(o);await s.type(t.getByRole("textbox"),"A"),await new Promise(i=>setTimeout(i,300));let a=l(document.querySelector(".sw-popover-deprecated__wrapper"));await r(()=>a.getByTestId("sw-select-option--a")),await s.click(a.getByTestId("sw-select-option--a")),n(e.itemAdd).toHaveBeenCalledWith({id:1,value:"a",label:"Option A"}),n(e.change).toHaveBeenCalledWith("a"),await new Promise(i=>setTimeout(i,300)),n(t.getByRole("textbox").value).toBe(""),await s.type(t.getByRole("textbox"),"F"),await new Promise(i=>setTimeout(i,300)),a=l(document.querySelector(".sw-popover-deprecated__wrapper")),await r(()=>a.getByTestId("sw-select-option--f")),await s.click(a.getByTestId("sw-select-option--f")),n(e.itemAdd).toHaveBeenCalledWith({id:6,value:"f",label:"Option F"}),n(e.change).toHaveBeenCalledWith("f"),n(t.getByRole("textbox").value).toBe(""),await s.type(t.getByRole("textbox"),"FF"),a=l(document.querySelector(".sw-popover-deprecated__wrapper")),await r(()=>a.getByTestId("sw-select-option--ff")),await s.click(a.getByTestId("sw-select-option--ff")),n(e.itemAdd).toHaveBeenCalledWith({id:7,value:"ff",label:"Option FF"}),n(e.change).toHaveBeenCalledWith("ff"),n(t.getByRole("textbox").value).toBe("")}},m={name:"Should multi select",args:{enableMultiSelection:!0},play:async({canvasElement:o,args:e})=>{const t=l(o);await s.click(t.getByRole("textbox"));const a=l(document.querySelector(".sw-popover-deprecated__wrapper"));await s.click(a.getByTestId("sw-select-option--a")),n(e.itemAdd).toHaveBeenCalledWith({id:1,value:"a",label:"Option A"}),n(e.change).toHaveBeenCalledWith(["a"]),await s.click(a.getByTestId("sw-select-option--b")),n(e.itemAdd).toHaveBeenCalledWith({id:2,value:"b",label:"Option B"}),n(e.change).toHaveBeenCalledWith(["a","b"]),await s.click(a.getByTestId("sw-select-option--c")),n(e.itemAdd).toHaveBeenCalledWith({id:3,value:"c",label:"Option C"}),n(e.change).toHaveBeenCalledWith(["a","b","c"]),await s.click(a.getByTestId("sw-select-option--e")),n(e.itemAdd).toHaveBeenCalledWith({id:5,value:"e",label:"Option E"}),n(e.change).toHaveBeenCalledWith(["a","b","c","e"]),await s.click(t.getByText("hidden")),n(t.getByRole("textbox").value).toBe("")}},v={name:"Should display prefix",args:{prefix:"prefix"},play:({canvasElement:o,args:e})=>{const t=l(o);n(t.getByText(e.prefix)).toBeDefined()}},h={name:"Should display suffix",args:{suffix:"suffix"},play:({canvasElement:o,args:e})=>{const t=l(o);n(t.getByText(e.suffix)).toBeDefined()}},g={name:"Should display hint",args:{hint:"hint"},play:async({canvasElement:o,args:e})=>{const t=l(o);await r(()=>{const a=document.querySelector(".sw-select-selection-list__item");return(a==null?void 0:a.textContent)==="Option B"}),n(t.getByText(e.hint)).toBeDefined()}},w={name:"Should disable",args:{disabled:!0,modelValue:["a","b","d"],enableMultiSelection:!0},play:async({canvasElement:o})=>{const e=l(o);await s.click(e.getByRole("textbox"));const t=document.querySelector(".sw-popover-deprecated__wrapper");n(t).toBe(null)}},y={name:"Should display error",args:{error:{code:500,detail:"Error while saving!"}},play:async({canvasElement:o,args:e})=>{const t=l(o);await r(()=>{const a=document.querySelector(".sw-select-selection-list__item");return(a==null?void 0:a.textContent)==="Option B"}),n(t.getByText(e.error.detail)).toBeDefined()}},x={name:"Should highlight search term",args:{enableMultiSelection:!0},play:async({canvasElement:o})=>{const e=l(o);await s.type(e.getByRole("textbox"),"A"),await r(()=>document.getElementsByClassName("sw-select-result").length===1);const t=l(document.querySelector(".sw-popover-deprecated__wrapper"));n(t.getByText((a,i)=>{const b=S=>S.textContent==="Option A",ce=b(i),pe=Array.from((i==null?void 0:i.children)||[]).every(S=>!b(S));return ce&&pe})).toBeDefined()}},B={name:"Should trigger inheritance-remove event",args:{label:"Inherited",isInheritanceField:!0,isInherited:!0},play:async({canvasElement:o,args:e})=>{const t=l(o);await s.click(t.getByTestId("sw-inheritance-switch-icon")),n(e.inheritanceRemove).toHaveBeenCalledWith()}},T={name:"Should not show load more",play:async({canvasElement:o,args:e})=>{const t=l(o);await r(()=>document.querySelector('.sw-select-selection-list__item[title="Option B"]')),await s.type(t.getByRole("textbox"),"Option long text"),await r(()=>{const i=document.querySelector(".sw-highlight-text__highlight");return(i==null?void 0:i.textContent)==="Option long text"});const a=l(document.querySelector(".sw-popover-deprecated__wrapper"));await s.click(a.getByTestId("sw-select-option--Longer value text")),n(e.itemAdd).toHaveBeenCalledWith({id:8,label:"Option long text",value:"Longer value text"}),n(e.change).toHaveBeenCalledWith("Longer value text"),n(t.getByRole("textbox").value).toBe(""),n(t.queryByText("+12")).toBeNull()}};var f,E,H;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Should remove selections through selection list',
  args: {
    modelValue: ['a', 'b', 'd'],
    enableMultiSelection: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('textbox'));
    const popover = within((document.querySelector('.sw-popover-deprecated__wrapper') as HTMLElement));
    await userEvent.click(popover.getByTestId('sw-select-option--a'));
    expect(args.change).toHaveBeenCalledWith(['b', 'd']);
  }
}`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var C,_,I;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Should remove selection through result item',
  args: {
    modelValue: ['a', 'b', 'd'],
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,W,k;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Should clear selections',
  args: {
    modelValue: ['a', 'b', 'd'],
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
}`,...(k=(W=d.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var O,A,M;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Should single select',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'A');
    await new Promise(resolve => setTimeout(resolve, 300));
    let popover = within((document.querySelector('.sw-popover-deprecated__wrapper') as HTMLElement));
    await waitUntilRendered(() => popover.getByTestId('sw-select-option--a'));
    await userEvent.click(popover.getByTestId('sw-select-option--a'));
    expect(args.itemAdd).toHaveBeenCalledWith({
      id: 1,
      value: 'a',
      label: 'Option A'
    });
    expect(args.change).toHaveBeenCalledWith('a');
    await new Promise(resolve => setTimeout(resolve, 300));
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('');
    await userEvent.type(canvas.getByRole('textbox'), 'F');
    await new Promise(resolve => setTimeout(resolve, 300));
    popover = within((document.querySelector('.sw-popover-deprecated__wrapper') as HTMLElement));
    await waitUntilRendered(() => popover.getByTestId('sw-select-option--f'));
    await userEvent.click(popover.getByTestId('sw-select-option--f'));
    expect(args.itemAdd).toHaveBeenCalledWith({
      id: 6,
      value: 'f',
      label: 'Option F'
    });
    expect(args.change).toHaveBeenCalledWith('f');
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('');

    // Only 'FF' is selected
    await userEvent.type(canvas.getByRole('textbox'), 'FF');
    popover = within((document.querySelector('.sw-popover-deprecated__wrapper') as HTMLElement));
    await waitUntilRendered(() => popover.getByTestId('sw-select-option--ff'));
    await userEvent.click(popover.getByTestId('sw-select-option--ff'));
    expect(args.itemAdd).toHaveBeenCalledWith({
      id: 7,
      value: 'ff',
      label: 'Option FF'
    });
    expect(args.change).toHaveBeenCalledWith('ff');
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('');
  }
}`,...(M=(A=u.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var V,L,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    const popover = within((document.querySelector('.sw-popover-deprecated__wrapper') as HTMLElement));
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
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('');
  }
}`,...(q=(L=m.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var F,D,U;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(U=(D=v.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var P,N,j;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(j=(N=h.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var z,G,J;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Should display hint',
  args: {
    hint: 'hint'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => {
      // Check if selection list item contains "Option B"
      const selectionListItem = document.querySelector('.sw-select-selection-list__item');
      return selectionListItem?.textContent === 'Option B';
    });
    expect(canvas.getByText(args.hint)).toBeDefined();
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Should disable',
  args: {
    disabled: true,
    modelValue: ['a', 'b', 'd'],
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
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Should display error',
  args: {
    error: {
      code: 500,
      detail: 'Error while saving!'
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => {
      // Check if selection list item contains "Option B"
      const selectionListItem = document.querySelector('.sw-select-selection-list__item');
      return selectionListItem?.textContent === 'Option B';
    });
    expect(canvas.getByText(args.error.detail)).toBeDefined();
  }
}`,...($=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
    const popover = within((document.querySelector('.sw-popover-deprecated__wrapper') as HTMLElement));
    // Option A is separated in different elements. This methods get the combined instance.
    expect(popover.getByText((content, element) => {
      const hasText = (element: HTMLElement) => element.textContent === 'Option A';
      const elementHasText = hasText((element as HTMLElement));
      const childrenDontHaveText = Array.from(element?.children || []).every(child => !hasText((child as HTMLElement)));
      return elementHasText && childrenDontHaveText;
    })).toBeDefined();
  }
}`,...(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,se;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var le,ie,re;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Should not show load more',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelector('.sw-select-selection-list__item[title="Option B"]'));
    await userEvent.type(canvas.getByRole('textbox'), 'Option long text');
    await waitUntilRendered(() => {
      // Check if highlight text contains the search term
      const highlight = document.querySelector('.sw-highlight-text__highlight');
      return highlight?.textContent === 'Option long text';
    });
    const popover = within((document.querySelector('.sw-popover-deprecated__wrapper') as HTMLElement));
    await userEvent.click(popover.getByTestId('sw-select-option--Longer value text'));
    expect(args.itemAdd).toHaveBeenCalledWith({
      id: 8,
      label: 'Option long text',
      value: 'Longer value text'
    });
    expect(args.change).toHaveBeenCalledWith('Longer value text');
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('');
    expect(canvas.queryByText('+12')).toBeNull();
  }
}`,...(re=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};const Ne=["TestRemovalOfSelectionByList","TestRemoveSelectionByResultItem","TestClearSelections","VisualTestSingleSelection","VisualTestMultiSelect","VisualTestPrefix","VisualTestSuffix","VisualTestHint","VisualTestDisabled","VisualTestError","VisualTestHighlightSearchTerm","VisualTestInherited","VisualTestEnsureSingleSelectionWithoutLoadMore"];export{d as TestClearSelections,c as TestRemovalOfSelectionByList,p as TestRemoveSelectionByResultItem,w as VisualTestDisabled,T as VisualTestEnsureSingleSelectionWithoutLoadMore,y as VisualTestError,x as VisualTestHighlightSearchTerm,g as VisualTestHint,B as VisualTestInherited,m as VisualTestMultiSelect,v as VisualTestPrefix,u as VisualTestSingleSelection,h as VisualTestSuffix,Ne as __namedExportsOrder,Pe as default};
