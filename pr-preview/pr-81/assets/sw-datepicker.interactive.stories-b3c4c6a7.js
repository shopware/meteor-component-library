import{w as l,u as e}from"./index-68cdfbf5.js";import{e as s}from"./index-4b4e994a.js";import L from"./sw-datepicker.stories-0eb7dbef.js";import{w as m}from"./test-helper-7c3608e5.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-base-field-d9725469.js";import"./vue.esm-bundler-b74e4d3a.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-08a29eac.js";import"./iframe-312174d1.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";const $={...L,title:"Interaction Tests/Form/sw-datepicker"},r={name:"Should open datepicker",args:{value:new Date(Date.UTC(2012,1,21)).toISOString()},play:async({canvasElement:n})=>{const a=l(n);await e.click(a.getByRole("textbox")),await m(()=>document.getElementsByClassName("flatpickr-calendar").length>0);const t=l(document.getElementsByClassName("flatpickr-calendar")[0]);s(t).toBeDefined()}},i={name:"Should input date value",args:{label:"Date value",dateType:"date"},play:async({canvasElement:n,args:a})=>{const t=l(n),c=l(document.getElementsByClassName("flatpickr-calendar")[0]);await e.click(t.getByRole("textbox")),await m(()=>document.getElementsByClassName("flatpickr-calendar").length>0),await e.click(c.getByText("24")),await e.click(t.getByText(a.label)),s(t.getByRole("textbox").value).toMatch(/\d{4}-\d{2}-24/),s(a.input).toHaveBeenCalled()}},o={name:"Should input datetime value",args:{label:"Date value",dateType:"time"},play:async({canvasElement:n,args:a})=>{const t=l(n),c=l(document.getElementsByClassName("flatpickr-calendar")[0]);await e.click(t.getByRole("textbox")),await m(()=>document.getElementsByClassName("flatpickr-calendar").length>0);const g=c.getByLabelText("Hour");await e.clear(g),await e.type(g,"22");const y=c.getByLabelText("Minute");await e.clear(y),await e.type(y,"22"),await e.click(t.getByText(a.label)),s(t.getByRole("textbox").value).toBe("22:22")}},u={name:"Should input time value",args:{label:"Time value",dateType:"time",config:{time_24hr:!0}},play:async({canvasElement:n,args:a})=>{const t=l(n),c=l(document.getElementsByClassName("flatpickr-calendar")[0]);await e.click(t.getByRole("textbox")),await m(()=>document.getElementsByClassName("flatpickr-calendar").length>0),await e.clear(c.getByLabelText("Hour")),await e.type(c.getByLabelText("Hour"),"22"),await e.clear(c.getByLabelText("Minute")),await e.type(c.getByLabelText("Minute"),"22"),await e.click(t.getByText(a.label)),s(t.getByRole("textbox").value).toBe("22:22")}},p={name:"Should clear input value",args:{label:"Datepicker",value:new Date(Date.UTC(2012,1,21)).toISOString()},play:async({canvasElement:n,args:a})=>{const t=l(n);s(t.getByRole("textbox").value).toBe("2012-02-21"),await e.click(t.getByTestId("sw-datepicker-clear-button")),await e.click(t.getByText(a.label)),s(t.getByRole("textbox").value).toBe("")}},d={name:"Should not open flatpickr when disabled",args:{label:"Disabled",disabled:!0},play:async({canvasElement:n})=>{const a=l(n);await e.click(a.getByRole("textbox")),s(a.getByRole("textbox").disabled).toBe(!0)}};var v,x,B;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Should open datepicker',
  args: {
    value: new Date(Date.UTC(2012, 1, 21)).toISOString()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Open datepicker
    await userEvent.click(canvas.getByRole('textbox'));
    await waitUntilRendered(() => document.getElementsByClassName('flatpickr-calendar').length > 0);
    const calendar = within(document.getElementsByClassName('flatpickr-calendar')[0]);

    // Expect input event is triggered
    expect(calendar).toBeDefined();
  }
}`,...(B=(x=r.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var w,b,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Should input date value',
  args: {
    label: 'Date value',
    dateType: 'date'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const calendar = within(document.getElementsByClassName('flatpickr-calendar')[0]);

    // Open datepicker
    await userEvent.click(canvas.getByRole('textbox'));
    await waitUntilRendered(() => document.getElementsByClassName('flatpickr-calendar').length > 0);

    // Click the 24th of month XYZ
    await userEvent.click(calendar.getByText('24'));

    // Click label to close datepicker
    await userEvent.click(canvas.getByText(args.label));

    // Expect input value to be the 24th of month XYZ
    expect(canvas.getByRole('textbox').value).toMatch(/\\d{4}-\\d{2}-24/);

    // Expect input event is triggered

    expect(args.input).toHaveBeenCalled();
  }
}`,...(k=(b=i.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var h,E,T;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Should input datetime value',
  args: {
    label: 'Date value',
    dateType: 'time'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const calendar = within(document.getElementsByClassName('flatpickr-calendar')[0]);

    // Open datepicker
    await userEvent.click(canvas.getByRole('textbox'));
    await waitUntilRendered(() => document.getElementsByClassName('flatpickr-calendar').length > 0);

    // Enter 22 as hour
    const hourInput = calendar.getByLabelText('Hour');
    await userEvent.clear(hourInput);
    await userEvent.type(hourInput, '22');

    // Enter 22 as minute
    const minuteInput = calendar.getByLabelText('Minute');
    await userEvent.clear(minuteInput);
    await userEvent.type(minuteInput, '22');

    // Click label to close datepicker
    await userEvent.click(canvas.getByText(args.label));

    // Expect input value to be the 24th of month XYZ
    expect(canvas.getByRole('textbox').value).toBe('22:22');
  }
}`,...(T=(E=o.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var f,D,C;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Should input time value',
  args: {
    label: 'Time value',
    dateType: 'time',
    config: {
      time_24hr: true
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const calendar = within(document.getElementsByClassName('flatpickr-calendar')[0]);

    // Open datepicker
    await userEvent.click(canvas.getByRole('textbox'));
    await waitUntilRendered(() => document.getElementsByClassName('flatpickr-calendar').length > 0);

    // Enter 22 as hour
    await userEvent.clear(calendar.getByLabelText('Hour'));
    await userEvent.type(calendar.getByLabelText('Hour'), '22');

    // Enter 22 as minute
    await userEvent.clear(calendar.getByLabelText('Minute'));
    await userEvent.type(calendar.getByLabelText('Minute'), '22');

    // Click label to close datepicker
    await userEvent.click(canvas.getByText(args.label));

    // Expect input value to be the 24th of month XYZ
    expect(canvas.getByRole('textbox').value).toBe('22:22');
  }
}`,...(C=(D=u.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var S,R,I;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Should clear input value',
  args: {
    label: 'Datepicker',
    value: new Date(Date.UTC(2012, 1, 21)).toISOString()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // The 21st of February 2012 is correct because the Date constructor takes the month as 0-based
    expect(canvas.getByRole('textbox').value).toBe('2012-02-21');
    await userEvent.click(canvas.getByTestId('sw-datepicker-clear-button'));

    // We need to loose focus
    await userEvent.click(canvas.getByText(args.label));
    expect(canvas.getByRole('textbox').value).toBe('');
  }
}`,...(I=(R=p.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var N,V,O;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Should not open flatpickr when disabled',
  args: {
    label: 'Disabled',
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Try to open datepicker
    await userEvent.click(canvas.getByRole('textbox'));
    expect(canvas.getByRole('textbox').disabled).toBe(true);
  }
}`,...(O=(V=d.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const ee=["VisualTestDatepickerShouldOpen","VisualTestDateInputValue","VisualTestDateTimeInputValue","VisualTestTimeInputValue","TestClearInputValue","TestDisabledDoesNotOpenFlatpickr"];export{p as TestClearInputValue,d as TestDisabledDoesNotOpenFlatpickr,i as VisualTestDateInputValue,o as VisualTestDateTimeInputValue,r as VisualTestDatepickerShouldOpen,u as VisualTestTimeInputValue,ee as __namedExportsOrder,$ as default};
