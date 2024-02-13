import{w as l,u as e}from"./index-912b65a3.js";import{e as c}from"./index-b9ac83fc.js";import H from"./sw-datepicker.stories-bb902847.js";import{w as d}from"./test-helper-7c3608e5.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./index-9accb58d.js";import"./preview-errors-dde4324f.js";import"./sw-base-field-27067bb6.js";import"./vue.esm-bundler-f31f98e0.js";import"./tooltip.directive-6ca7427e.js";import"./sw-icon-bee95678.js";import"./iframe-2d80cf9a.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./isObject-32699ff3.js";const ae={...H,title:"Interaction Tests/Form/sw-datepicker"},r={name:"Should open datepicker",args:{modelValue:new Date(Date.UTC(2012,1,21)).toISOString()},play:async({canvasElement:n})=>{const a=l(n);await e.click(a.getByRole("textbox")),await d(()=>document.getElementsByClassName("flatpickr-calendar").length>0);const t=l(document.getElementsByClassName("flatpickr-calendar")[0]);c(t).toBeDefined()}},o={name:"Should input date value",args:{label:"Date value",dateType:"date"},play:async({canvasElement:n,args:a})=>{const t=l(n),s=l(document.getElementsByClassName("flatpickr-calendar")[0]);await e.click(t.getByRole("textbox")),await d(()=>document.getElementsByClassName("flatpickr-calendar").length>0),await e.click(s.getByText("24")),await e.click(t.getByText(a.label)),c(t.getByRole("textbox").value).toMatch(/\d{4}-\d{2}-24/),c(a.updateModelValue).toHaveBeenCalled()}},i={name:"Should input datetime value",args:{label:"Date value",dateType:"datetime"},play:async({canvasElement:n,args:a})=>{const t=l(n),s=l(document.getElementsByClassName("flatpickr-calendar")[0]);await e.click(t.getByRole("textbox")),await d(()=>document.getElementsByClassName("flatpickr-calendar").length>0);const g=s.getByLabelText("Hour");await e.clear(g),await e.type(g,"22");const y=s.getByLabelText("Minute");await e.clear(y),await e.type(y,"22"),await e.click(t.getByText(a.label)),c(t.getByRole("textbox").value).toContain("22:22")}},u={name:"Should input time value",args:{label:"Time value",dateType:"time",config:{time_24hr:!0}},play:async({canvasElement:n,args:a})=>{const t=l(n),s=l(document.getElementsByClassName("flatpickr-calendar")[0]);await e.click(t.getByRole("textbox")),await d(()=>document.getElementsByClassName("flatpickr-calendar").length>0),await e.clear(s.getByLabelText("Hour")),await e.type(s.getByLabelText("Hour"),"22"),await e.clear(s.getByLabelText("Minute")),await e.type(s.getByLabelText("Minute"),"22"),await e.click(t.getByText(a.label)),c(t.getByRole("textbox").value).toBe("22:22")}},p={name:"Should clear input value",args:{label:"Datepicker",modelValue:new Date(Date.UTC(2012,1,21)).toISOString()},play:async({canvasElement:n,args:a})=>{const t=l(n);c(t.getByRole("textbox").value).toBe("2012-02-21"),await e.click(t.getByTestId("sw-datepicker-clear-button")),await e.click(t.getByText(a.label)),c(t.getByRole("textbox").value).toBe("")}},m={name:"Should not open flatpickr when disabled",args:{label:"Disabled",disabled:!0},play:async({canvasElement:n})=>{const a=l(n);await e.click(a.getByRole("textbox")),c(a.getByRole("textbox").disabled).toBe(!0)}};var v,x,w;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Should open datepicker',
  args: {
    modelValue: new Date(Date.UTC(2012, 1, 21)).toISOString()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Open datepicker
    await userEvent.click(canvas.getByRole('textbox'));
    await waitUntilRendered(() => document.getElementsByClassName('flatpickr-calendar').length > 0);
    const calendar = within((document.getElementsByClassName('flatpickr-calendar')[0] as HTMLElement));

    // Expect input event is triggered
    expect(calendar).toBeDefined();
  }
}`,...(w=(x=r.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var B,b,E;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    const calendar = within((document.getElementsByClassName('flatpickr-calendar')[0] as HTMLElement));

    // Open datepicker
    await userEvent.click(canvas.getByRole('textbox'));
    await waitUntilRendered(() => document.getElementsByClassName('flatpickr-calendar').length > 0);

    // Click the 24th of month XYZ
    await userEvent.click(calendar.getByText('24'));

    // Click label to close datepicker
    await userEvent.click(canvas.getByText(args.label!));

    // Expect input value to be the 24th of month XYZ
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toMatch(/\\d{4}-\\d{2}-24/);

    // Expect input event is triggered
    expect(args.updateModelValue).toHaveBeenCalled();
  }
}`,...(E=(b=o.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var k,T,h;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Should input datetime value',
  args: {
    label: 'Date value',
    dateType: 'datetime'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const calendar = within((document.getElementsByClassName('flatpickr-calendar')[0] as HTMLElement));

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
    await userEvent.click(canvas.getByText(args.label!));

    // Expect input value to be the 24th of month XYZ
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toContain('22:22');
  }
}`,...(h=(T=i.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var f,C,D;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    const calendar = within((document.getElementsByClassName('flatpickr-calendar')[0] as HTMLElement));

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
    await userEvent.click(canvas.getByText(args.label!));

    // Expect input value to be the 24th of month XYZ
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('22:22');
  }
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var I,S,R;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Should clear input value',
  args: {
    label: 'Datepicker',
    modelValue: new Date(Date.UTC(2012, 1, 21)).toISOString()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // The 21st of February 2012 is correct because the Date constructor takes the month as 0-based
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('2012-02-21');
    await userEvent.click(canvas.getByTestId('sw-datepicker-clear-button'));

    // We need to loose focus
    await userEvent.click(canvas.getByText(args.label!));
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('');
  }
}`,...(R=(S=p.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var L,V,M;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    expect((canvas.getByRole('textbox') as HTMLInputElement).disabled).toBe(true);
  }
}`,...(M=(V=m.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};const ne=["VisualTestDatepickerShouldOpen","VisualTestDateInputValue","VisualTestDateTimeInputValue","VisualTestTimeInputValue","TestClearInputValue","TestDisabledDoesNotOpenFlatpickr"];export{p as TestClearInputValue,m as TestDisabledDoesNotOpenFlatpickr,o as VisualTestDateInputValue,i as VisualTestDateTimeInputValue,r as VisualTestDatepickerShouldOpen,u as VisualTestTimeInputValue,ne as __namedExportsOrder,ae as default};
