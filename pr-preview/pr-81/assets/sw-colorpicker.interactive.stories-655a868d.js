import{w as c,u as p,f as H}from"./index-68cdfbf5.js";import{e}from"./index-4b4e994a.js";import fe from"./sw-colorpicker.stories-8f51a0fa.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./vue.esm-bundler-651c6785.js";import"./sw-base-field-334003ba.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-623060c0.js";import"./iframe-196c5f1d.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./sw-popover-deprecated-2ea05cc3.js";import"./_baseGetTag-22b9c805.js";import"./isObjectLike-e68f0fe0.js";const Fe={...fe,title:"Interaction Tests/Form/sw-colorpicker"},d={name:"Render colorpicker"},m={name:"Open colorpicker",args:{value:"rgba(72, 228, 37, 0.81)"},play:async({canvasElement:l})=>{const n=c(l).getByLabelText("colorpicker-toggle");await p.click(n);const a=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]),t=a.getByLabelText("colorpicker-color-range"),o=a.getByLabelText("colorpicker-alpha-range"),g=a.getByLabelText("hex-value"),i=a.getByLabelText("red-value"),s=a.getByLabelText("green-value"),u=a.getByLabelText("blue-value"),v=a.getByLabelText("alpha-value");e(t).toBeDefined(),e(t.value).toEqual("109"),e(o).toBeDefined(),e(o.value).toEqual("0.81"),e(g).toBeDefined(),e(g.value).toEqual("#48e425cf"),e(i).toBeDefined(),e(i.value).toEqual("72"),e(s).toBeDefined(),e(s.value).toEqual("228"),e(u).toBeDefined(),e(u.value).toEqual("37"),e(v).toBeDefined(),e(v.value).toEqual("81")}},h={name:"Change colorpicker color",args:{value:"rgba(72, 228, 37, 0.81)"},play:async({canvasElement:l})=>{const n=c(l).getByLabelText("colorpicker-toggle");await p.click(n);const a=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]),t=a.getByLabelText("colorpicker-color-range"),o=a.getByLabelText("colorpicker-alpha-range"),g=a.getByLabelText("hex-value"),i=a.getByLabelText("red-value"),s=a.getByLabelText("green-value"),u=a.getByLabelText("blue-value"),v=a.getByLabelText("alpha-value");e(t).toBeDefined(),e(t.value).toEqual("109"),e(o).toBeDefined(),e(o.value).toEqual("0.81"),e(g).toBeDefined(),e(g.value).toEqual("#48e425cf"),e(i).toBeDefined(),e(i.value).toEqual("72"),e(s).toBeDefined(),e(s.value).toEqual("228"),e(u).toBeDefined(),e(u.value).toEqual("37"),e(v).toBeDefined(),e(v.value).toEqual("81"),H.input(t,{target:{value:300}}),H.input(o,{target:{value:1}}),e(t.value).toEqual("300"),e(o.value).toEqual("1"),await p.clear(i),await p.type(i,"240"),await p.clear(s),await p.type(s,"60"),await p.clear(u),await p.type(u,"150"),e(i.value).toEqual("240"),e(s.value).toEqual("60"),e(u.value).toEqual("150"),e(g.value).toEqual("#f03c96")}},x={name:"Change colorpicker label",args:{label:"Another label"}},E={name:"Change colorpicker output to HEX",args:{label:"Should output HEX",colorOutput:"hex"},play:async({canvasElement:l})=>{const r=c(l),n=r.getByLabelText("colorpicker-toggle");await p.click(n);const t=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");e(t).toBeDefined(),e(t.value).toEqual("#0fcff5");const o=r.getByLabelText("colorpicker-color-value");e(o).toBeDefined(),e(o.value).toEqual("#0fcff5")}},y={name:"Change colorpicker output to HSL",args:{label:"Should output HSL",colorOutput:"hsl"},play:async({canvasElement:l})=>{const r=c(l),n=r.getByLabelText("colorpicker-toggle");await p.click(n);const t=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");e(t).toBeDefined(),e(t.value).toEqual("#0fcff5");const o=r.getByLabelText("colorpicker-color-value");e(o).toBeDefined(),e(o.value).toEqual("hsl(190, 92%, 51%)")}},T={name:"Change colorpicker output to RGB",args:{label:"Should output RGB",colorOutput:"rgb"},play:async({canvasElement:l})=>{const r=c(l),n=r.getByLabelText("colorpicker-toggle");await p.click(n);const t=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");e(t).toBeDefined(),e(t.value).toEqual("#0fcff5");const o=r.getByLabelText("colorpicker-color-value");e(o).toBeDefined(),e(o.value).toEqual("rgb(15, 207, 245)")}},b={name:"Change colorpicker output to HEX alpha",args:{value:"#0fcff582",label:"Should output HEX",colorOutput:"hex"},play:async({canvasElement:l})=>{const r=c(l),n=r.getByLabelText("colorpicker-toggle");await p.click(n);const t=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");e(t).toBeDefined(),e(t.value).toEqual("#0fcff582");const o=r.getByLabelText("colorpicker-color-value");e(o).toBeDefined(),e(o.value).toEqual("#0fcff582")}},k={name:"Change colorpicker output to HSL alpha",args:{value:"#0fcff582",label:"Should output HSL",colorOutput:"hsl"},play:async({canvasElement:l})=>{const r=c(l),n=r.getByLabelText("colorpicker-toggle");await p.click(n);const t=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");e(t).toBeDefined(),e(t.value).toEqual("#0fcff582");const o=r.getByLabelText("colorpicker-color-value");e(o).toBeDefined(),e(o.value).toEqual("hsla(190, 92%, 51%, 0.51)")}},B={name:"Change colorpicker output to RGB alpha",args:{label:"Should output RGB",value:"#0fcff582",colorOutput:"rgb"},play:async({canvasElement:l})=>{const r=c(l),n=r.getByLabelText("colorpicker-toggle");await p.click(n);const t=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");e(t).toBeDefined(),e(t.value).toEqual("#0fcff582");const o=r.getByLabelText("colorpicker-color-value");e(o).toBeDefined(),e(o.value).toEqual("rgba(15, 207, 245, 0.51)")}},L={name:"Render colorpicker without alpha",args:{label:"Should render without alpha value",alpha:!1},play:async({canvasElement:l})=>{const n=c(l).getByLabelText("colorpicker-toggle");await p.click(n);const a=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]),t=a.getByLabelText("hex-value");e(t).toBeDefined(),e(t.value).toEqual("#0fcff5");const o=a.queryByLabelText("alpha-value");e(o).toEqual(null)}},f={name:"Render disabled colorpicker",args:{label:"Should render disabled colorpicker",disabled:!0},play:async({canvasElement:l})=>{const n=c(l).getByLabelText("colorpicker-toggle");await p.click(n),e(document.getElementsByClassName("sw-popover-deprecated__wrapper").length).toEqual(0)}},w={name:"Clear colorpicker value",args:{label:"Should clear colorpicker value"},play:async({canvasElement:l})=>{const n=c(l).getByLabelText("colorpicker-color-value");await p.clear(n),e(n.value).toEqual("")}},I={name:"Render readonly colorpicker",args:{label:"Should render readonly colorpicker",readonly:!0},play:async({canvasElement:l})=>{const n=c(l).getByLabelText("colorpicker-color-value");e(n).toHaveAttribute("readonly"),await p.click(n)}},q={name:"Render colorpicker without color labels",args:{label:"Should render colorpicker without color labels",colorLabels:!1},play:async({canvasElement:l})=>{const n=c(l).getByLabelText("colorpicker-toggle");await p.click(n);const a=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]),t=a.getByLabelText("hex-value");e(t).toBeDefined(),e(t.value).toEqual("#0fcff5");const o=a.queryByText("HEX"),g=a.queryByText("R"),i=a.queryByText("G"),s=a.queryByText("B"),u=a.queryByText("Alpha");e(o).toEqual(null),e(g).toEqual(null),e(i).toEqual(null),e(s).toEqual(null),e(u).toEqual(null)}},C={name:"Render colorpicker with help text",args:{helpText:"Text for helping you"},play:async({canvasElement:l})=>{var o;const n=c(l).getByRole("tooltip");await p.hover(n),await(()=>new Promise((g,i)=>{const s=(u=0)=>{u>100&&i(),document.querySelector('[aria-label="currently-opened-tooltip"]')?g(!0):window.setTimeout(()=>s(u+1),25)};s()}))();const t=c((o=document.querySelector('[aria-label="currently-opened-tooltip"]'))==null?void 0:o.parentElement).getByLabelText("currently-opened-tooltip");e(t).not.toEqual(null),e(t.innerText).toEqual("Text for helping you")}};var V,D,R;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Render colorpicker'
}`,...(R=(D=d.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var S,_,M;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Open colorpicker',
  args: {
    value: 'rgba(72, 228, 37, 0.81)'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');
    await userEvent.click(pickerToggle);

    // todo: figure out what element this is
    // Look inside the popover
    const popover = within((document.getElementsByClassName('sw-popover-deprecated__wrapper')[0] as HTMLElement));
    const colorRange = (popover.getByLabelText('colorpicker-color-range') as HTMLInputElement);
    const alphaRange = (popover.getByLabelText('colorpicker-alpha-range') as HTMLInputElement);
    const hexInput = (popover.getByLabelText('hex-value') as HTMLInputElement);
    const redInput = (popover.getByLabelText('red-value') as HTMLInputElement);
    const greenInput = (popover.getByLabelText('green-value') as HTMLInputElement);
    const blueInput = (popover.getByLabelText('blue-value') as HTMLInputElement);
    const alphaInput = (popover.getByLabelText('alpha-value') as HTMLInputElement);
    expect(colorRange).toBeDefined();
    expect(colorRange.value).toEqual('109');
    expect(alphaRange).toBeDefined();
    expect(alphaRange.value).toEqual('0.81');
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#48e425cf');
    expect(redInput).toBeDefined();
    expect(redInput.value).toEqual('72');
    expect(greenInput).toBeDefined();
    expect(greenInput.value).toEqual('228');
    expect(blueInput).toBeDefined();
    expect(blueInput.value).toEqual('37');
    expect(alphaInput).toBeDefined();
    expect(alphaInput.value).toEqual('81');
  }
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var O,N,A;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Change colorpicker color',
  args: {
    value: 'rgba(72, 228, 37, 0.81)'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');
    await userEvent.click(pickerToggle);

    // Look inside the popover
    const popover = within((document.getElementsByClassName('sw-popover-deprecated__wrapper')[0] as HTMLElement));
    const colorRange = (popover.getByLabelText('colorpicker-color-range') as HTMLInputElement);
    const alphaRange = (popover.getByLabelText('colorpicker-alpha-range') as HTMLInputElement);
    const hexInput = (popover.getByLabelText('hex-value') as HTMLInputElement);
    const redInput = (popover.getByLabelText('red-value') as HTMLInputElement);
    const greenInput = (popover.getByLabelText('green-value') as HTMLInputElement);
    const blueInput = (popover.getByLabelText('blue-value') as HTMLInputElement);
    const alphaInput = (popover.getByLabelText('alpha-value') as HTMLInputElement);
    expect(colorRange).toBeDefined();
    expect(colorRange.value).toEqual('109');
    expect(alphaRange).toBeDefined();
    expect(alphaRange.value).toEqual('0.81');
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#48e425cf');
    expect(redInput).toBeDefined();
    expect(redInput.value).toEqual('72');
    expect(greenInput).toBeDefined();
    expect(greenInput.value).toEqual('228');
    expect(blueInput).toBeDefined();
    expect(blueInput.value).toEqual('37');
    expect(alphaInput).toBeDefined();
    expect(alphaInput.value).toEqual('81');

    // Change colors
    fireEvent.input(colorRange, {
      target: {
        value: 300
      }
    });
    fireEvent.input(alphaRange, {
      target: {
        value: 1
      }
    });
    expect(colorRange.value).toEqual('300');
    expect(alphaRange.value).toEqual('1');
    await userEvent.clear(redInput);
    await userEvent.type(redInput, '240');
    await userEvent.clear(greenInput);
    await userEvent.type(greenInput, '60');
    await userEvent.clear(blueInput);
    await userEvent.type(blueInput, '150');
    expect(redInput.value).toEqual('240');
    expect(greenInput.value).toEqual('60');
    expect(blueInput.value).toEqual('150');
    expect(hexInput.value).toEqual('#f03c96');
  }
}`,...(A=(N=h.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var G,X,U;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Change colorpicker label',
  args: {
    label: 'Another label'
  }
}`,...(U=(X=x.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};var W,j,P;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Change colorpicker output to HEX',
  args: {
    label: 'Should output HEX',
    colorOutput: 'hex'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');
    await userEvent.click(pickerToggle);

    // Look inside the popover
    const popover = within((document.getElementsByClassName('sw-popover-deprecated__wrapper')[0] as HTMLElement));
    const hexInput = (popover.getByLabelText('hex-value') as HTMLInputElement);
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#0fcff5');
    const colorValue = (canvas.getByLabelText('colorpicker-color-value') as HTMLInputElement);
    expect(colorValue).toBeDefined();
    expect(colorValue.value).toEqual('#0fcff5');
  }
}`,...(P=(j=E.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var F,z,J;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Change colorpicker output to HSL',
  args: {
    label: 'Should output HSL',
    colorOutput: 'hsl'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');
    await userEvent.click(pickerToggle);

    // Look inside the popover
    const popover = within((document.getElementsByClassName('sw-popover-deprecated__wrapper')[0] as HTMLElement));
    const hexInput = (popover.getByLabelText('hex-value') as HTMLInputElement);
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#0fcff5');
    const colorValue = (canvas.getByLabelText('colorpicker-color-value') as HTMLInputElement);
    expect(colorValue).toBeDefined();
    expect(colorValue.value).toEqual('hsl(190, 92%, 51%)');
  }
}`,...(J=(z=y.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,Q,Y;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Change colorpicker output to RGB',
  args: {
    label: 'Should output RGB',
    colorOutput: 'rgb'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');
    await userEvent.click(pickerToggle);

    // Look inside the popover
    const popover = within((document.getElementsByClassName('sw-popover-deprecated__wrapper')[0] as HTMLElement));
    const hexInput = (popover.getByLabelText('hex-value') as HTMLInputElement);
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#0fcff5');
    const colorValue = (canvas.getByLabelText('colorpicker-color-value') as HTMLInputElement);
    expect(colorValue).toBeDefined();
    expect(colorValue.value).toEqual('rgb(15, 207, 245)');
  }
}`,...(Y=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Change colorpicker output to HEX alpha',
  args: {
    value: '#0fcff582',
    label: 'Should output HEX',
    colorOutput: 'hex'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');
    await userEvent.click(pickerToggle);

    // Look inside the popover
    const popover = within((document.getElementsByClassName('sw-popover-deprecated__wrapper')[0] as HTMLElement));
    const hexInput = (popover.getByLabelText('hex-value') as HTMLInputElement);
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#0fcff582');
    const colorValue = (canvas.getByLabelText('colorpicker-color-value') as HTMLInputElement);
    expect(colorValue).toBeDefined();
    expect(colorValue.value).toEqual('#0fcff582');
  }
}`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ae,oe;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Change colorpicker output to HSL alpha',
  args: {
    value: '#0fcff582',
    label: 'Should output HSL',
    colorOutput: 'hsl'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');
    await userEvent.click(pickerToggle);

    // Look inside the popover
    const popover = within((document.getElementsByClassName('sw-popover-deprecated__wrapper')[0] as HTMLElement));
    const hexInput = (popover.getByLabelText('hex-value') as HTMLInputElement);
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#0fcff582');
    const colorValue = (canvas.getByLabelText('colorpicker-color-value') as HTMLInputElement);
    expect(colorValue).toBeDefined();
    expect(colorValue.value).toEqual('hsla(190, 92%, 51%, 0.51)');
  }
}`,...(oe=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,le,re;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Change colorpicker output to RGB alpha',
  args: {
    label: 'Should output RGB',
    value: '#0fcff582',
    colorOutput: 'rgb'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');
    await userEvent.click(pickerToggle);

    // Look inside the popover
    const popover = within((document.getElementsByClassName('sw-popover-deprecated__wrapper')[0] as HTMLElement));
    const hexInput = (popover.getByLabelText('hex-value') as HTMLInputElement);
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#0fcff582');
    const colorValue = (canvas.getByLabelText('colorpicker-color-value') as HTMLInputElement);
    expect(colorValue).toBeDefined();
    expect(colorValue.value).toEqual('rgba(15, 207, 245, 0.51)');
  }
}`,...(re=(le=B.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var ce,pe,se;L.parameters={...L.parameters,docs:{...(ce=L.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Render colorpicker without alpha',
  args: {
    label: 'Should render without alpha value',
    alpha: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');
    await userEvent.click(pickerToggle);

    // Look inside the popover
    const popover = within((document.getElementsByClassName('sw-popover-deprecated__wrapper')[0] as HTMLElement));
    const hexInput = (popover.getByLabelText('hex-value') as HTMLInputElement);
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#0fcff5');
    const alphaInput = popover.queryByLabelText('alpha-value');
    expect(alphaInput).toEqual(null);
  }
}`,...(se=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:se.source}}};var ue,ie,ge;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Render disabled colorpicker',
  args: {
    label: 'Should render disabled colorpicker',
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');
    await userEvent.click(pickerToggle);

    // Expect no popover
    expect(document.getElementsByClassName('sw-popover-deprecated__wrapper').length).toEqual(0);
  }
}`,...(ge=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:ge.source}}};var ve,de,me;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Clear colorpicker value',
  args: {
    label: 'Should clear colorpicker value'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const colorValue = (canvas.getByLabelText('colorpicker-color-value') as HTMLInputElement);
    await userEvent.clear(colorValue);
    expect(colorValue.value).toEqual('');
  }
}`,...(me=(de=w.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var he,xe,Ee;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Render readonly colorpicker',
  args: {
    label: 'Should render readonly colorpicker',
    readonly: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const colorValue = (canvas.getByLabelText('colorpicker-color-value') as HTMLInputElement);
    expect(colorValue).toHaveAttribute('readonly');
    await userEvent.click(colorValue);
  }
}`,...(Ee=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var ye,Te,be;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Render colorpicker without color labels',
  args: {
    label: 'Should render colorpicker without color labels',
    colorLabels: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');
    await userEvent.click(pickerToggle);

    // Look inside the popover
    const popover = within((document.getElementsByClassName('sw-popover-deprecated__wrapper')[0] as HTMLElement));
    const hexInput = (popover.getByLabelText('hex-value') as HTMLInputElement);
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#0fcff5');
    const hexLabel = popover.queryByText('HEX');
    const rLabel = popover.queryByText('R');
    const gLabel = popover.queryByText('G');
    const bLabel = popover.queryByText('B');
    const alphaLabel = popover.queryByText('Alpha');
    expect(hexLabel).toEqual(null);
    expect(rLabel).toEqual(null);
    expect(gLabel).toEqual(null);
    expect(bLabel).toEqual(null);
    expect(alphaLabel).toEqual(null);
  }
}`,...(be=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:be.source}}};var ke,Be,Le;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'Render colorpicker with help text',
  args: {
    helpText: 'Text for helping you'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tooltip = canvas.getByRole('tooltip');
    await userEvent.hover(tooltip);

    // wait until tooltip gets rendered
    await (() => {
      return new Promise((resolve, reject) => {
        const waitUntilElementLoad = (retryTime = 0) => {
          // do not wait longer than 2.5 seconds
          if (retryTime > 100) {
            reject();
          }

          // check for tooltip
          const result = document.querySelector('[aria-label="currently-opened-tooltip"]');

          // retry selection when not found otherwise resolve it
          if (!result) {
            window.setTimeout(() => waitUntilElementLoad(retryTime + 1), 25);
          } else {
            resolve(true);
          }
        };
        waitUntilElementLoad();
      });
    })();
    const tooltipElement = within((document.querySelector('[aria-label="currently-opened-tooltip"]')?.parentElement as HTMLElement));
    const openedTooltip = tooltipElement.getByLabelText('currently-opened-tooltip');
    expect(openedTooltip).not.toEqual(null);
    expect(openedTooltip.innerText).toEqual('Text for helping you');
  }
}`,...(Le=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:Le.source}}};const ze=["VisualTestRenderColorpicker","VisualTestOpenColorpicker","VisualTestChangeColorpickerColor","VisualTestChangeColorpickerLabel","VisualTestChangeColorpickerOutputHex","VisualTestChangeColorpickerOutputHsl","VisualTestChangeColorpickerOutputRgb","VisualTestChangeColorpickerOutputHexAlpha","VisualTestChangeColorpickerOutputHslAlpha","VisualTestChangeColorpickerOutputRgbAlpha","VisualTestColorpickerWithoutAlpha","VisualTestColorpickerDisabled","VisualTestColorpickerClearValue","VisualTestColorpickerReadonly","VisualTestColorpickerDisabledColorLabels","VisualTestColorpickerWithHelpText"];export{h as VisualTestChangeColorpickerColor,x as VisualTestChangeColorpickerLabel,E as VisualTestChangeColorpickerOutputHex,b as VisualTestChangeColorpickerOutputHexAlpha,y as VisualTestChangeColorpickerOutputHsl,k as VisualTestChangeColorpickerOutputHslAlpha,T as VisualTestChangeColorpickerOutputRgb,B as VisualTestChangeColorpickerOutputRgbAlpha,w as VisualTestColorpickerClearValue,f as VisualTestColorpickerDisabled,q as VisualTestColorpickerDisabledColorLabels,I as VisualTestColorpickerReadonly,C as VisualTestColorpickerWithHelpText,L as VisualTestColorpickerWithoutAlpha,m as VisualTestOpenColorpicker,d as VisualTestRenderColorpicker,ze as __namedExportsOrder,Fe as default};
