import{w as o,u as s}from"./index-912b65a3.js";import{e as n}from"./index-b9ac83fc.js";import ie from"./sw-number-field.stories-86e6fbf6.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-number-field-1c23b33f.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-text-field-53fd480f.js";import"./sw-base-field-11681dcc.js";import"./tooltip.directive-6ca7427e.js";import"./sw-icon-c5d78c31.js";import"./iframe-51513bc2.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./isObject-32699ff3.js";import"./sw-field-error-b96db198.js";import"./arg-types-a7a95a2c.js";const He={...ie,title:"Interaction Tests/Form/sw-number-field"},r={name:"Should keep input value",play:async({canvasElement:t,args:a})=>{const e=o(t);await s.click(e.getByRole("textbox")),await s.type(e.getByRole("textbox"),"42"),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("42"),n(a.change).toHaveBeenCalledWith(42)}},c={name:"Should increase value by key stroke",args:{modelValue:10},play:async({canvasElement:t,args:a})=>{const e=o(t);await s.click(e.getByRole("textbox")),await s.type(e.getByRole("textbox"),"{arrowup}"),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("11"),n(a.change).toHaveBeenCalledWith(11)}},i={name:"Should increase value by control",args:{modelValue:10},play:async({canvasElement:t,args:a})=>{const e=o(t);await s.click(e.getByTestId("sw-number-field-increase-button")),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("11"),n(a.change).toHaveBeenCalledWith(11)}},l={name:"Should decrease value by key stroke",args:{modelValue:10},play:async({canvasElement:t,args:a})=>{const e=o(t);await s.click(e.getByRole("textbox")),await s.type(e.getByRole("textbox"),"{arrowdown}"),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("9"),n(a.change).toHaveBeenCalledWith(9)}},u={name:"Should decrease value by control",args:{modelValue:10},play:async({canvasElement:t,args:a})=>{const e=o(t);await s.click(e.getByTestId("sw-number-field-decrease-button")),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("9"),n(a.change).toHaveBeenCalledWith(9)}},d={name:"Should increase float step",args:{modelValue:10,step:.7,numberType:"float",fillDigits:!0},play:async({canvasElement:t,args:a})=>{const e=o(t);await s.click(e.getByTestId("sw-number-field-increase-button")),await s.type(e.getByRole("textbox"),"{arrowup}"),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("11.40"),n(a.change).toHaveBeenCalledWith(11.4)}},p={name:"Should not decrease below min",args:{modelValue:11,min:10},play:async({canvasElement:t,args:a})=>{const e=o(t);await s.click(e.getByTestId("sw-number-field-decrease-button")),await s.type(e.getByRole("textbox"),"{arrowdown}"),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("10"),n(a.change).toHaveBeenCalledWith(10)}},m={name:"Should not increase above max",args:{modelValue:9,max:10},play:async({canvasElement:t,args:a})=>{const e=o(t);await s.click(e.getByTestId("sw-number-field-increase-button")),await s.type(e.getByRole("textbox"),"{arrowup}"),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("10"),n(a.change).toHaveBeenCalledWith(10)}},v={name:"Should display prefix",args:{prefix:"prefix"},play:({canvasElement:t,args:a})=>{const e=o(t);n(e.getByText(a.prefix)).toBeDefined()}},y={name:"Should display suffix",args:{suffix:"suffix"},play:({canvasElement:t,args:a})=>{const e=o(t);n(e.getByText(a.suffix)).toBeDefined()}},g={name:"Should display hint",args:{hint:"hint"},play:({canvasElement:t,args:a})=>{const e=o(t);n(e.getByText(a.hint)).toBeDefined()}},x={name:"Should disable",args:{disabled:!0,modelValue:44},play:async({canvasElement:t})=>{const a=o(t);await s.type(a.getByRole("textbox"),"1337"),n(a.getByRole("textbox").value).toBe("44")}},h={name:"Should display error",args:{error:{code:500,detail:"Error while saving!"}},play:({canvasElement:t,args:a})=>{const e=o(t);n(e.getByText(a.error.detail)).toBeDefined()}},B={name:"Should remove and restore inheritance",args:{isInheritanceField:!0,isInherited:!1},play:async({canvasElement:t,args:a})=>{const e=o(t);await s.click(e.getByTestId("sw-icon__regular-lock-open-s")),n(a.inheritanceRestore).toBeCalled(),n(e.getByTestId("sw-inheritance-switch-icon")).toBeDefined(),await s.click(e.getByTestId("sw-inheritance-switch-icon")),n(a.inheritanceRemove).toBeCalled(),n(e.getByTestId("sw-icon__regular-lock-open-s")).toBeDefined()}};var w,f,b;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Should keep input value',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('textbox'));
    await userEvent.type(canvas.getByRole('textbox'), '42');
    await userEvent.click(canvas.getByText('hidden'));

    // Notice that the value is of type string and the value of the event is of type number
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('42');
    expect(args.change).toHaveBeenCalledWith(42);
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var T,E,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Should increase value by key stroke',
  args: {
    modelValue: 10
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('textbox'));
    await userEvent.type(canvas.getByRole('textbox'), '{arrowup}');
    await userEvent.click(canvas.getByText('hidden'));

    // Notice that the value is of type string and the value of the event is of type number
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('11');
    expect(args.change).toHaveBeenCalledWith(11);
  }
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var S,I,R;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Should increase value by control',
  args: {
    modelValue: 10
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('sw-number-field-increase-button'));
    await userEvent.click(canvas.getByText('hidden'));

    // Notice that the value is of type string and the value of the event is of type number
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('11');
    expect(args.change).toHaveBeenCalledWith(11);
  }
}`,...(R=(I=i.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var V,C,H;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Should decrease value by key stroke',
  args: {
    modelValue: 10
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('textbox'));
    await userEvent.type(canvas.getByRole('textbox'), '{arrowdown}');
    await userEvent.click(canvas.getByText('hidden'));

    // Notice that the value is of type string and the value of the event is of type number
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('9');
    expect(args.change).toHaveBeenCalledWith(9);
  }
}`,...(H=(C=l.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var D,W,M;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Should decrease value by control',
  args: {
    modelValue: 10
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('sw-number-field-decrease-button'));
    await userEvent.click(canvas.getByText('hidden'));

    // Notice that the value is of type string and the value of the event is of type number
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('9');
    expect(args.change).toHaveBeenCalledWith(9);
  }
}`,...(M=(W=u.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var _,L,N;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Should increase float step',
  args: {
    modelValue: 10,
    step: 0.7,
    numberType: 'float',
    fillDigits: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('sw-number-field-increase-button'));
    await userEvent.type(canvas.getByRole('textbox'), '{arrowup}');
    await userEvent.click(canvas.getByText('hidden'));

    // Notice that the value is of type string and the value of the event is of type number
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('11.40');
    expect(args.change).toHaveBeenCalledWith(11.4);
  }
}`,...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var F,K,P;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Should not decrease below min',
  args: {
    modelValue: 11,
    min: 10
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('sw-number-field-decrease-button'));
    await userEvent.type(canvas.getByRole('textbox'), '{arrowdown}');
    await userEvent.click(canvas.getByText('hidden'));

    // Notice that the value is of type string and the value of the event is of type number
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('10');
    expect(args.change).toHaveBeenCalledWith(10);
  }
}`,...(P=(K=p.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var O,j,q;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Should not increase above max',
  args: {
    modelValue: 9,
    max: 10
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('sw-number-field-increase-button'));
    await userEvent.type(canvas.getByRole('textbox'), '{arrowup}');
    await userEvent.click(canvas.getByText('hidden'));

    // Notice that the value is of type string and the value of the event is of type number
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('10');
    expect(args.change).toHaveBeenCalledWith(10);
  }
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,A,G;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(G=(A=v.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,Q,U;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Should disable',
  args: {
    disabled: true,
    modelValue: 44
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), '1337');
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('44');
  }
}`,...(ae=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,re,ce;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Should remove and restore inheritance',
  args: {
    isInheritanceField: true,
    isInherited: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('sw-icon__regular-lock-open-s'));
    expect(args.inheritanceRestore).toBeCalled();
    expect(canvas.getByTestId('sw-inheritance-switch-icon')).toBeDefined();
    await userEvent.click(canvas.getByTestId('sw-inheritance-switch-icon'));
    expect(args.inheritanceRemove).toBeCalled();
    expect(canvas.getByTestId('sw-icon__regular-lock-open-s')).toBeDefined();
  }
}`,...(ce=(re=B.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};const De=["TestInputValue","TestIncreaseByKeyStroke","TestIncreaseByControl","TestDecreaseByKeyStroke","TestDecreaseByControl","TestStepIncrease","TestDecreaseConsidersMin","TestIncreaseConsiderMax","VisualTestPrefix","VisualTestSuffix","VisualTestHint","VisualTestDisabled","VisualTestError","VisualTestInheritance"];export{u as TestDecreaseByControl,l as TestDecreaseByKeyStroke,p as TestDecreaseConsidersMin,i as TestIncreaseByControl,c as TestIncreaseByKeyStroke,m as TestIncreaseConsiderMax,r as TestInputValue,d as TestStepIncrease,x as VisualTestDisabled,h as VisualTestError,g as VisualTestHint,B as VisualTestInheritance,v as VisualTestPrefix,y as VisualTestSuffix,De as __namedExportsOrder,He as default};
