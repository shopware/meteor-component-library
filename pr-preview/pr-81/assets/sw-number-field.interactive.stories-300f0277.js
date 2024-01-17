import{w as r,u as s}from"./index-68cdfbf5.js";import{e as n}from"./index-4b4e994a.js";import ie from"./sw-number-field.stories-0aad192a.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-number-field-f0f57c90.js";import"./vue.esm-bundler-b74e4d3a.js";import"./sw-text-field-aae73c5f.js";import"./sw-base-field-bf6bb47a.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-3b1d1ea3.js";import"./iframe-511ec090.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./sw-field-error-73799238.js";import"./arg-types-d031e4ef.js";const De={...ie,title:"Interaction Tests/Form/sw-number-field"},o={name:"Should keep input value",play:async({canvasElement:t,args:a})=>{const e=r(t);await s.click(e.getByRole("textbox")),await s.type(e.getByRole("textbox"),"42"),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("42"),n(a.change).toHaveBeenCalledWith(42)}},c={name:"Should increase value by key stroke",args:{value:10},play:async({canvasElement:t,args:a})=>{const e=r(t);await s.click(e.getByRole("textbox")),await s.type(e.getByRole("textbox"),"{arrowup}"),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("11"),n(a.change).toHaveBeenCalledWith(11)}},i={name:"Should increase value by control",args:{value:10},play:async({canvasElement:t,args:a})=>{const e=r(t);await s.click(e.getByTestId("sw-number-field-increase-button")),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("11"),n(a.change).toHaveBeenCalledWith(11)}},l={name:"Should decrease value by key stroke",args:{value:10},play:async({canvasElement:t,args:a})=>{const e=r(t);await s.click(e.getByRole("textbox")),await s.type(e.getByRole("textbox"),"{arrowdown}"),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("9"),n(a.change).toHaveBeenCalledWith(9)}},u={name:"Should decrease value by control",args:{value:10},play:async({canvasElement:t,args:a})=>{const e=r(t);await s.click(e.getByTestId("sw-number-field-decrease-button")),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("9"),n(a.change).toHaveBeenCalledWith(9)}},d={name:"Should increase float step",args:{value:10,step:.7,numberType:"float",fillDigits:!0},play:async({canvasElement:t,args:a})=>{const e=r(t);await s.click(e.getByTestId("sw-number-field-increase-button")),await s.type(e.getByRole("textbox"),"{arrowup}"),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("11.40"),n(a.change).toHaveBeenCalledWith(11.4)}},v={name:"Should not decrease below min",args:{value:11,min:10},play:async({canvasElement:t,args:a})=>{const e=r(t);await s.click(e.getByTestId("sw-number-field-decrease-button")),await s.type(e.getByRole("textbox"),"{arrowdown}"),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("10"),n(a.change).toHaveBeenCalledWith(10)}},p={name:"Should not increase above max",args:{value:9,max:10},play:async({canvasElement:t,args:a})=>{const e=r(t);await s.click(e.getByTestId("sw-number-field-increase-button")),await s.type(e.getByRole("textbox"),"{arrowup}"),await s.click(e.getByText("hidden")),n(e.getByRole("textbox").value).toBe("10"),n(a.change).toHaveBeenCalledWith(10)}},y={name:"Should display prefix",args:{prefix:"prefix"},play:({canvasElement:t,args:a})=>{const e=r(t);n(e.getByText(a.prefix)).toBeDefined()}},g={name:"Should display suffix",args:{suffix:"suffix"},play:({canvasElement:t,args:a})=>{const e=r(t);n(e.getByText(a.suffix)).toBeDefined()}},m={name:"Should display hint",args:{hint:"hint"},play:({canvasElement:t,args:a})=>{const e=r(t);n(e.getByText(a.hint)).toBeDefined()}},x={name:"Should disable",args:{disabled:!0,value:44},play:async({canvasElement:t})=>{const a=r(t);await s.type(a.getByRole("textbox"),"1337"),n(a.getByRole("textbox").value).toBe("44")}},h={name:"Should display error",args:{error:{code:500,detail:"Error while saving!"}},play:({canvasElement:t,args:a})=>{const e=r(t);n(e.getByText(a.error.detail)).toBeDefined()}},B={name:"Should remove and restore inheritance",args:{isInheritanceField:!0,isInherited:!1},play:async({canvasElement:t,args:a})=>{const e=r(t);await s.click(e.getByTestId("sw-icon__regular-lock-open-s")),n(a.inheritanceRestore).toBeCalled(),n(e.getByTestId("sw-inheritance-switch-icon")).toBeDefined(),await s.click(e.getByTestId("sw-inheritance-switch-icon")),n(a.inheritanceRemove).toBeCalled(),n(e.getByTestId("sw-icon__regular-lock-open-s")).toBeDefined()}};var w,f,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    expect(canvas.getByRole('textbox').value).toBe('42');
    expect(args.change).toHaveBeenCalledWith(42);
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var T,E,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Should increase value by key stroke',
  args: {
    value: 10
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
    expect(canvas.getByRole('textbox').value).toBe('11');
    expect(args.change).toHaveBeenCalledWith(11);
  }
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var S,R,I;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Should increase value by control',
  args: {
    value: 10
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('sw-number-field-increase-button'));
    await userEvent.click(canvas.getByText('hidden'));

    // Notice that the value is of type string and the value of the event is of type number
    expect(canvas.getByRole('textbox').value).toBe('11');
    expect(args.change).toHaveBeenCalledWith(11);
  }
}`,...(I=(R=i.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var C,D,H;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Should decrease value by key stroke',
  args: {
    value: 10
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
    expect(canvas.getByRole('textbox').value).toBe('9');
    expect(args.change).toHaveBeenCalledWith(9);
  }
}`,...(H=(D=l.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var W,V,_;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Should decrease value by control',
  args: {
    value: 10
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('sw-number-field-decrease-button'));
    await userEvent.click(canvas.getByText('hidden'));

    // Notice that the value is of type string and the value of the event is of type number
    expect(canvas.getByRole('textbox').value).toBe('9');
    expect(args.change).toHaveBeenCalledWith(9);
  }
}`,...(_=(V=u.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var N,F,K;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Should increase float step',
  args: {
    value: 10,
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
    expect(canvas.getByRole('textbox').value).toBe('11.40');
    expect(args.change).toHaveBeenCalledWith(11.4);
  }
}`,...(K=(F=d.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var M,P,O;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Should not decrease below min',
  args: {
    value: 11,
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
    expect(canvas.getByRole('textbox').value).toBe('10');
    expect(args.change).toHaveBeenCalledWith(10);
  }
}`,...(O=(P=v.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var j,q,z;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Should not increase above max',
  args: {
    value: 9,
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
    expect(canvas.getByRole('textbox').value).toBe('10');
    expect(args.change).toHaveBeenCalledWith(10);
  }
}`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var A,G,J;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var L,Q,U;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Should disable',
  args: {
    disabled: true,
    value: 44
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), '1337');
    expect(canvas.getByRole('textbox').value).toBe('44');
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
}`,...(se=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,oe,ce;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ce=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};const He=["TestInputValue","TestIncreaseByKeyStroke","TestIncreaseByControl","TestDecreaseByKeyStroke","TestDecreaseByControl","TestStepIncrease","TestDecreaseConsidersMin","TestIncreaseConsiderMax","VisualTestPrefix","VisualTestSuffix","VisualTestHint","VisualTestDisabled","VisualTestError","VisualTestInheritance"];export{u as TestDecreaseByControl,l as TestDecreaseByKeyStroke,v as TestDecreaseConsidersMin,i as TestIncreaseByControl,c as TestIncreaseByKeyStroke,p as TestIncreaseConsiderMax,o as TestInputValue,d as TestStepIncrease,x as VisualTestDisabled,h as VisualTestError,m as VisualTestHint,B as VisualTestInheritance,y as VisualTestPrefix,g as VisualTestSuffix,He as __namedExportsOrder,De as default};
