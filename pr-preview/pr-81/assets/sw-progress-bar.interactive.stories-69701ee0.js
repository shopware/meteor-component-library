import{w as n}from"./index-912b65a3.js";import{e as a}from"./index-b9ac83fc.js";import ce from"./sw-progress-bar.stories-57780efc.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-base-field-b4db0daf.js";import"./tooltip.directive-6ca7427e.js";import"./sw-icon-2d123164.js";import"./iframe-e96dc8d7.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./isObject-32699ff3.js";import"./sw-field-error-d1b36176.js";const Ae={...ce,title:"Interaction Tests/Feedback Indicator/sw-progress-bar"},o={name:"Test value progress at 0",args:{value:0,maxValue:100},play:async({canvasElement:r})=>{const e=n(r).getByRole("progressbar");a(e).toBeDefined(),a(e.ariaValueNow).toEqual("0"),a(e.ariaValueMax).toEqual("100")}},t={name:"Test value progress at 33",args:{value:33,maxValue:100},play:async({canvasElement:r})=>{const e=n(r).getByRole("progressbar");a(e).toBeDefined(),a(e.ariaValueNow).toEqual("33"),a(e.ariaValueMax).toEqual("100")}},l={name:"Test value progress at 70 of 350",args:{value:70,maxValue:350},play:async({canvasElement:r})=>{const e=n(r).getByRole("progressbar");a(e).toBeDefined(),a(e.ariaValueNow).toEqual("70"),a(e.ariaValueMax).toEqual("350")}},c={name:"Test value progress at 100",args:{value:100,maxValue:100},play:async({canvasElement:r})=>{const e=n(r).getByRole("progressbar");a(e).toBeDefined(),a(e.ariaValueNow).toEqual("100"),a(e.ariaValueMax).toEqual("100")}},p={name:"Render error correctly",args:{error:{code:500,detail:"Error while sending variants"}},play:async({canvasElement:r})=>{const s=n(r),e=s.getByLabelText("Error message");a(e).toBeDefined(),a(e.innerText).toContain("Error while sending variants");const le=s.getByTestId("progress-bar-value");a(window.getComputedStyle(le).backgroundColor).toEqual("rgb(222, 41, 76)")}},u={name:"Render label correctly",args:{label:"Another example"},play:async({canvasElement:r})=>{const e=n(r).getByText("Another example");a(e).toBeDefined()}},g={name:"Render no label",args:{label:void 0}},i={name:"Render percentage progress label",play:async({canvasElement:r})=>{const e=n(r).getByText("33%");a(e).toBeDefined()}},m={name:"Render kilobyte progress label",args:{progressLabelType:"kb"},play:async({canvasElement:r})=>{const e=n(r).getByText("121 kb / 356 kb");a(e).toBeDefined()}},d={name:"Render the progressbar with 10%",args:{value:10,maxValue:100}},v={name:"Render the progressbar with 50%",args:{value:50,maxValue:100}},V={name:"Render the progressbar with 100%",args:{value:100,maxValue:100}},b={name:"Render the progressbar with 100 of 400 (25%)",args:{value:100,maxValue:400}},y={name:"Render the progressbar with 400 of 400 (100%)",args:{value:400,maxValue:400}};var x,B,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Test value progress at 0',
  args: {
    value: 0,
    maxValue: 100
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressBar = canvas.getByRole('progressbar');
    expect(progressBar).toBeDefined();
    expect(progressBar.ariaValueNow).toEqual('0');
    expect(progressBar.ariaValueMax).toEqual('100');
  }
}`,...(T=(B=o.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var E,w,h;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Test value progress at 33',
  args: {
    value: 33,
    maxValue: 100
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressBar = canvas.getByRole('progressbar');
    expect(progressBar).toBeDefined();
    expect(progressBar.ariaValueNow).toEqual('33');
    expect(progressBar.ariaValueMax).toEqual('100');
  }
}`,...(h=(w=t.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var f,R,P;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Test value progress at 70 of 350',
  args: {
    value: 70,
    maxValue: 350
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressBar = canvas.getByRole('progressbar');
    expect(progressBar).toBeDefined();
    expect(progressBar.ariaValueNow).toEqual('70');
    expect(progressBar.ariaValueMax).toEqual('350');
  }
}`,...(P=(R=l.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var A,q,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Test value progress at 100',
  args: {
    value: 100,
    maxValue: 100
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressBar = canvas.getByRole('progressbar');
    expect(progressBar).toBeDefined();
    expect(progressBar.ariaValueNow).toEqual('100');
    expect(progressBar.ariaValueMax).toEqual('100');
  }
}`,...(D=(q=c.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var S,L,M;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Render error correctly',
  args: {
    error: {
      code: 500,
      detail: 'Error while sending variants'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const errorMessage = canvas.getByLabelText('Error message');
    expect(errorMessage).toBeDefined();
    expect(errorMessage.innerText).toContain('Error while sending variants');
    const progressBar = canvas.getByTestId('progress-bar-value');
    expect(window.getComputedStyle(progressBar).backgroundColor).toEqual('rgb(222, 41, 76)');
  }
}`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var k,N,C;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Render label correctly',
  args: {
    label: 'Another example'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Another example');
    expect(label).toBeDefined();
  }
}`,...(C=(N=u.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var I,_,K;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Render no label',
  args: {
    label: undefined
  }
}`,...(K=(_=g.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var F,O,j;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Render percentage progress label',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('33%');
    expect(label).toBeDefined();
  }
}`,...(j=(O=i.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var z,G,H;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Render kilobyte progress label',
  args: {
    progressLabelType: 'kb'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('121 kb / 356 kb');
    expect(label).toBeDefined();
  }
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,U;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Render the progressbar with 10%',
  args: {
    value: 10,
    maxValue: 100
  }
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Render the progressbar with 50%',
  args: {
    value: 50,
    maxValue: 100
  }
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Render the progressbar with 100%',
  args: {
    value: 100,
    maxValue: 100
  }
}`,...(ee=($=V.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,re,se;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Render the progressbar with 100 of 400 (25%)',
  args: {
    value: 100,
    maxValue: 400
  }
}`,...(se=(re=b.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,oe,te;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Render the progressbar with 400 of 400 (100%)',
  args: {
    value: 400,
    maxValue: 400
  }
}`,...(te=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};const qe=["TestValueProgressAt0","TestValueProgressAt33","TestValueProgressAt70of350","TestValueProgressAt100","VisualTestError","VisualTestLabel","VisualTestNoLabel","VisualTestProgressLabelPercentage","VisualTestProgressLabelKilobyte","VisualTestValueProgressAt1","VisualTestValueProgressAt50","VisualTestValueProgressAt100","VisualTestValueProgressAt100of400","VisualTestValueProgressAt400of400"];export{o as TestValueProgressAt0,c as TestValueProgressAt100,t as TestValueProgressAt33,l as TestValueProgressAt70of350,p as VisualTestError,u as VisualTestLabel,g as VisualTestNoLabel,m as VisualTestProgressLabelKilobyte,i as VisualTestProgressLabelPercentage,d as VisualTestValueProgressAt1,V as VisualTestValueProgressAt100,b as VisualTestValueProgressAt100of400,y as VisualTestValueProgressAt400of400,v as VisualTestValueProgressAt50,qe as __namedExportsOrder,Ae as default};
