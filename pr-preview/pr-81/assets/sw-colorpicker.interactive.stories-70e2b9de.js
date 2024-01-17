import{w as c,u as p,f as V}from"./index-68cdfbf5.js";import{e}from"./index-4b4e994a.js";import we from"./sw-colorpicker.stories-5fce16be.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./vue.esm-bundler-b74e4d3a.js";import"./sw-base-field-bf6bb47a.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-3b1d1ea3.js";import"./iframe-511ec090.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./sw-popover-deprecated-73be6bf5.js";import"./_baseGetTag-22b9c805.js";import"./isObjectLike-e68f0fe0.js";const ze={...we,title:"Interaction Tests/Form/sw-colorpicker"},d={name:"Render colorpicker"},h={name:"Open colorpicker",args:{value:"rgba(72, 228, 37, 0.81)"},play:async({canvasElement:l})=>{const n=c(l).getByLabelText("colorpicker-toggle");await p.click(n);const t=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]),o=t.getByLabelText("colorpicker-color-range"),a=t.getByLabelText("colorpicker-alpha-range"),g=t.getByLabelText("hex-value"),s=t.getByLabelText("red-value"),u=t.getByLabelText("green-value"),i=t.getByLabelText("blue-value"),v=t.getByLabelText("alpha-value");e(o).toBeDefined(),e(o.value).toEqual("109"),e(a).toBeDefined(),e(a.value).toEqual("0.81"),e(g).toBeDefined(),e(g.value).toEqual("#48e425cf"),e(s).toBeDefined(),e(s.value).toEqual("72"),e(u).toBeDefined(),e(u.value).toEqual("228"),e(i).toBeDefined(),e(i.value).toEqual("37"),e(v).toBeDefined(),e(v.value).toEqual("81")}},x={name:"Change colorpicker color",args:{value:"rgba(72, 228, 37, 0.81)"},play:async({canvasElement:l})=>{const n=c(l).getByLabelText("colorpicker-toggle");await p.click(n);const t=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]),o=t.getByLabelText("colorpicker-color-range"),a=t.getByLabelText("colorpicker-alpha-range"),g=t.getByLabelText("hex-value"),s=t.getByLabelText("red-value"),u=t.getByLabelText("green-value"),i=t.getByLabelText("blue-value"),v=t.getByLabelText("alpha-value");e(o).toBeDefined(),e(o.value).toEqual("109"),e(a).toBeDefined(),e(a.value).toEqual("0.81"),e(g).toBeDefined(),e(g.value).toEqual("#48e425cf"),e(s).toBeDefined(),e(s.value).toEqual("72"),e(u).toBeDefined(),e(u.value).toEqual("228"),e(i).toBeDefined(),e(i.value).toEqual("37"),e(v).toBeDefined(),e(v.value).toEqual("81"),V.input(o,{target:{value:300}}),V.input(a,{target:{value:1}}),e(o.value).toEqual("300"),e(a.value).toEqual("1"),await p.clear(s),await p.type(s,"240"),await p.clear(u),await p.type(u,"60"),await p.clear(i),await p.type(i,"150"),e(s.value).toEqual("240"),e(u.value).toEqual("60"),e(i.value).toEqual("150"),e(g.value).toEqual("#f03c96")}},m={name:"Change colorpicker label",args:{label:"Another label"}},y={name:"Change colorpicker output to HEX",args:{label:"Should output HEX",colorOutput:"hex"},play:async({canvasElement:l})=>{const r=c(l),n=r.getByLabelText("colorpicker-toggle");await p.click(n);const o=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");e(o).toBeDefined(),e(o.value).toEqual("#0fcff5");const a=r.getByLabelText("colorpicker-color-value");e(a).toBeDefined(),e(a.value).toEqual("#0fcff5")}},b={name:"Change colorpicker output to HSL",args:{label:"Should output HSL",colorOutput:"hsl"},play:async({canvasElement:l})=>{const r=c(l),n=r.getByLabelText("colorpicker-toggle");await p.click(n);const o=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");e(o).toBeDefined(),e(o.value).toEqual("#0fcff5");const a=r.getByLabelText("colorpicker-color-value");e(a).toBeDefined(),e(a.value).toEqual("hsl(190, 92%, 51%)")}},k={name:"Change colorpicker output to RGB",args:{label:"Should output RGB",colorOutput:"rgb"},play:async({canvasElement:l})=>{const r=c(l),n=r.getByLabelText("colorpicker-toggle");await p.click(n);const o=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");e(o).toBeDefined(),e(o.value).toEqual("#0fcff5");const a=r.getByLabelText("colorpicker-color-value");e(a).toBeDefined(),e(a.value).toEqual("rgb(15, 207, 245)")}},B={name:"Change colorpicker output to HEX alpha",args:{value:"#0fcff582",label:"Should output HEX",colorOutput:"hex"},play:async({canvasElement:l})=>{const r=c(l),n=r.getByLabelText("colorpicker-toggle");await p.click(n);const o=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");e(o).toBeDefined(),e(o.value).toEqual("#0fcff582");const a=r.getByLabelText("colorpicker-color-value");e(a).toBeDefined(),e(a.value).toEqual("#0fcff582")}},E={name:"Change colorpicker output to HSL alpha",args:{value:"#0fcff582",label:"Should output HSL",colorOutput:"hsl"},play:async({canvasElement:l})=>{const r=c(l),n=r.getByLabelText("colorpicker-toggle");await p.click(n);const o=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");e(o).toBeDefined(),e(o.value).toEqual("#0fcff582");const a=r.getByLabelText("colorpicker-color-value");e(a).toBeDefined(),e(a.value).toEqual("hsla(190, 92%, 51%, 0.51)")}},T={name:"Change colorpicker output to RGB alpha",args:{label:"Should output RGB",value:"#0fcff582",colorOutput:"rgb"},play:async({canvasElement:l})=>{const r=c(l),n=r.getByLabelText("colorpicker-toggle");await p.click(n);const o=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");e(o).toBeDefined(),e(o.value).toEqual("#0fcff582");const a=r.getByLabelText("colorpicker-color-value");e(a).toBeDefined(),e(a.value).toEqual("rgba(15, 207, 245, 0.51)")}},f={name:"Render colorpicker without alpha",args:{label:"Should render without alpha value",alpha:!1},play:async({canvasElement:l})=>{const n=c(l).getByLabelText("colorpicker-toggle");await p.click(n);const t=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]),o=t.getByLabelText("hex-value");e(o).toBeDefined(),e(o.value).toEqual("#0fcff5");const a=t.queryByLabelText("alpha-value");e(a).toEqual(null)}},w={name:"Render disabled colorpicker",args:{label:"Should render disabled colorpicker",disabled:!0},play:async({canvasElement:l})=>{const n=c(l).getByLabelText("colorpicker-toggle");await p.click(n),e(document.getElementsByClassName("sw-popover-deprecated__wrapper").length).toEqual(0)}},L={name:"Clear colorpicker value",args:{label:"Should clear colorpicker value"},play:async({canvasElement:l})=>{const n=c(l).getByLabelText("colorpicker-color-value");await p.clear(n),e(n.value).toEqual("")}},q={name:"Render readonly colorpicker",args:{label:"Should render readonly colorpicker",readonly:!0},play:async({canvasElement:l})=>{const n=c(l).getByLabelText("colorpicker-color-value");e(n).toHaveAttribute("readonly"),await p.click(n)}},C={name:"Render colorpicker without color labels",args:{label:"Should render colorpicker without color labels",colorLabels:!1},play:async({canvasElement:l})=>{const n=c(l).getByLabelText("colorpicker-toggle");await p.click(n);const t=c(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]),o=t.getByLabelText("hex-value");e(o).toBeDefined(),e(o.value).toEqual("#0fcff5");const a=t.queryByText("HEX"),g=t.queryByText("R"),s=t.queryByText("G"),u=t.queryByText("B"),i=t.queryByText("Alpha");e(a).toEqual(null),e(g).toEqual(null),e(s).toEqual(null),e(u).toEqual(null),e(i).toEqual(null)}},I={name:"Render colorpicker with help text",args:{helpText:"Text for helping you"},play:async({canvasElement:l})=>{const n=c(l).getByRole("tooltip");await p.hover(n),await(()=>new Promise((a,g)=>{const s=(u=0)=>{u>100&&g(),document.querySelector('[aria-label="currently-opened-tooltip"]')?a():window.setTimeout(()=>s(u+1),25)};s()}))();const o=c(document.querySelector('[aria-label="currently-opened-tooltip"]').parentElement).getByLabelText("currently-opened-tooltip");e(o).not.toEqual(null),e(o.innerText).toEqual("Text for helping you")}};var D,R,S;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Render colorpicker'
}`,...(S=(R=d.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var _,H,O;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);
    const colorRange = popover.getByLabelText('colorpicker-color-range');
    const alphaRange = popover.getByLabelText('colorpicker-alpha-range');
    const hexInput = popover.getByLabelText('hex-value');
    const redInput = popover.getByLabelText('red-value');
    const greenInput = popover.getByLabelText('green-value');
    const blueInput = popover.getByLabelText('blue-value');
    const alphaInput = popover.getByLabelText('alpha-value');
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
}`,...(O=(H=h.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var N,A,G;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);
    const colorRange = popover.getByLabelText('colorpicker-color-range');
    const alphaRange = popover.getByLabelText('colorpicker-alpha-range');
    const hexInput = popover.getByLabelText('hex-value');
    const redInput = popover.getByLabelText('red-value');
    const greenInput = popover.getByLabelText('green-value');
    const blueInput = popover.getByLabelText('blue-value');
    const alphaInput = popover.getByLabelText('alpha-value');
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
}`,...(G=(A=x.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var X,U,W;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Change colorpicker label',
  args: {
    label: 'Another label'
  }
}`,...(W=(U=m.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var j,P,F;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);
    const hexInput = popover.getByLabelText('hex-value');
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#0fcff5');
    const colorValue = canvas.getByLabelText('colorpicker-color-value');
    expect(colorValue).toBeDefined();
    expect(colorValue.value).toEqual('#0fcff5');
  }
}`,...(F=(P=y.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var z,J,K;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);
    const hexInput = popover.getByLabelText('hex-value');
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#0fcff5');
    const colorValue = canvas.getByLabelText('colorpicker-color-value');
    expect(colorValue).toBeDefined();
    expect(colorValue.value).toEqual('hsl(190, 92%, 51%)');
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,Y;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);
    const hexInput = popover.getByLabelText('hex-value');
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#0fcff5');
    const colorValue = canvas.getByLabelText('colorpicker-color-value');
    expect(colorValue).toBeDefined();
    expect(colorValue.value).toEqual('rgb(15, 207, 245)');
  }
}`,...(Y=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);
    const hexInput = popover.getByLabelText('hex-value');
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#0fcff582');
    const colorValue = canvas.getByLabelText('colorpicker-color-value');
    expect(colorValue).toBeDefined();
    expect(colorValue.value).toEqual('#0fcff582');
  }
}`,...(ee=($=B.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var oe,te,ae;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);
    const hexInput = popover.getByLabelText('hex-value');
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#0fcff582');
    const colorValue = canvas.getByLabelText('colorpicker-color-value');
    expect(colorValue).toBeDefined();
    expect(colorValue.value).toEqual('hsla(190, 92%, 51%, 0.51)');
  }
}`,...(ae=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,le,re;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);
    const hexInput = popover.getByLabelText('hex-value');
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#0fcff582');
    const colorValue = canvas.getByLabelText('colorpicker-color-value');
    expect(colorValue).toBeDefined();
    expect(colorValue.value).toEqual('rgba(15, 207, 245, 0.51)');
  }
}`,...(re=(le=T.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var ce,pe,se;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);
    const hexInput = popover.getByLabelText('hex-value');
    expect(hexInput).toBeDefined();
    expect(hexInput.value).toEqual('#0fcff5');
    const alphaInput = popover.queryByLabelText('alpha-value');
    expect(alphaInput).toEqual(null);
  }
}`,...(se=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:se.source}}};var ue,ie,ge;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ge=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ge.source}}};var ve,de,he;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Clear colorpicker value',
  args: {
    label: 'Should clear colorpicker value'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const colorValue = canvas.getByLabelText('colorpicker-color-value');
    await userEvent.clear(colorValue);
    expect(colorValue.value).toEqual('');
  }
}`,...(he=(de=L.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};var xe,me,ye;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Render readonly colorpicker',
  args: {
    label: 'Should render readonly colorpicker',
    readonly: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const colorValue = canvas.getByLabelText('colorpicker-color-value');
    expect(colorValue).toHaveAttribute('readonly');
    await userEvent.click(colorValue);
  }
}`,...(ye=(me=q.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var be,ke,Be;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);
    const hexInput = popover.getByLabelText('hex-value');
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
}`,...(Be=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Be.source}}};var Ee,Te,fe;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
            resolve();
          }
        };
        waitUntilElementLoad();
      });
    })();
    const tooltipElement = within(document.querySelector('[aria-label="currently-opened-tooltip"]').parentElement);
    const openedTooltip = tooltipElement.getByLabelText('currently-opened-tooltip');
    expect(openedTooltip).not.toEqual(null);
    expect(openedTooltip.innerText).toEqual('Text for helping you');
  }
}`,...(fe=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:fe.source}}};const Je=["VisualTestRenderColorpicker","VisualTestOpenColorpicker","VisualTestChangeColorpickerColor","VisualTestChangeColorpickerLabel","VisualTestChangeColorpickerOutputHex","VisualTestChangeColorpickerOutputHsl","VisualTestChangeColorpickerOutputRgb","VisualTestChangeColorpickerOutputHexAlpha","VisualTestChangeColorpickerOutputHslAlpha","VisualTestChangeColorpickerOutputRgbAlpha","VisualTestColorpickerWithoutAlpha","VisualTestColorpickerDisabled","VisualTestColorpickerClearValue","VisualTestColorpickerReadonly","VisualTestColorpickerDisabledColorLabels","VisualTestColorpickerWithHelpText"];export{x as VisualTestChangeColorpickerColor,m as VisualTestChangeColorpickerLabel,y as VisualTestChangeColorpickerOutputHex,B as VisualTestChangeColorpickerOutputHexAlpha,b as VisualTestChangeColorpickerOutputHsl,E as VisualTestChangeColorpickerOutputHslAlpha,k as VisualTestChangeColorpickerOutputRgb,T as VisualTestChangeColorpickerOutputRgbAlpha,L as VisualTestColorpickerClearValue,w as VisualTestColorpickerDisabled,C as VisualTestColorpickerDisabledColorLabels,q as VisualTestColorpickerReadonly,I as VisualTestColorpickerWithHelpText,f as VisualTestColorpickerWithoutAlpha,h as VisualTestOpenColorpicker,d as VisualTestRenderColorpicker,Je as __namedExportsOrder,ze as default};
