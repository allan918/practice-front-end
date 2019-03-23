const fs = require('fs');

//include custom matchers
const styleMatchers = require('jest-style-matchers');
expect.extend(styleMatchers);

const htmlPath = __dirname + '/index.html';
const html = fs.readFileSync(htmlPath, 'utf-8'); //load the HTML file once
const jsPath = __dirname + '/js/index.js';

//load the HTML into the tester
document.documentElement.innerHTML = html;

//load JavaScript libraries separately
const $ = require('jquery'); //jQuery for convenience
window.jQuery = window.$ = $; //make available to solution
const solution = require(jsPath); //load the solution

describe('Source code is valid', () => {
  test('JavaScript lints without errors', async () => {
    expect([jsPath]).toHaveNoEsLintErrors();
  })
});

describe('Includes the jQuery library', () => {
  test('Imported jQuery first', () => {
    expect(document.querySelector('script').src).toMatch(/jquery/i); //first script
  })
})

describe('Created a poll builder', () => {
  describe('Rendered an initial "input group"', () => {
    test('Created an <input> element with appropriate attributes', () => {
      let input = $('input');
      expect(input.length).toBe(1); //has an input
      expect(input.hasClass('form-control')).toBe(true);
      expect(input.attr('type')).toEqual('text');
      expect(input.attr('placeholder')).toEqual('Your option here');
    })

    test('Created a <div> and <label> for the input', () => {
      let inputGroupPrepend = $('div.input-group-prepend');
      expect(inputGroupPrepend.length).toBe(1); //has the .input-group-prepend
      let label = inputGroupPrepend.children('label');
      expect(label.length).toBe(1); //div has a label
      expect(label.text()).toMatch('1.'); //has correct text
      expect(inputGroupPrepend.next('input').length).toBe(1); //group is before the input
    })

    test('Wrapped label group and input in a `.input-group`', () => {
      let group = $('.input-group');
      expect(group.length).toBe(1);
      expect(group.children('.input-group-prepend').length).toBe(1); //has child label group
      expect(group.children('input').length).toBe(1); //has child input
    })
  })

  describe('Adds new input boxes', () => {
    test('Adds a second `.input-group` on button press', () => {
      $('#add-button').click(); //click the button

      expect($('.input-group').length).toBe(2); //should now be two of them!
      expect($('.input-group').last().children('input').length).toBe(1); //should have an input too
      expect($('.input-group:first label').first().text()).toMatch('1.'); //has right label
      expect($('.input-group:last label').last().text()).toMatch('2.'); //has right label
    })

    test('Adds a third `.input-group` on subsequent button press', () => {
      $('input').val('Test input initial'); //modify the values (as if we typed!). Applies to all
      
      $('#add-button').click(); //click the button again!

      expect($('.input-group').length).toBe(3); //should now be three of them (not 4)
      expect($('.input-group:last label').text()).toMatch('3.'); //check label
    })

    test('New input groups have blank inputs', () => {
      expect($('input:first').val()).not.toEqual('');
      expect($('input:last').val()).toEqual('');
    })
  })

  describe('Includes "remove" buttons for each input', () => {

    test('Input groups contain remove buttons', () => {
      expect($('.input-group:first .input-group-append button').length).toBe(0); //first one has no button
      expect($('.input-group:eq(1) .input-group-append button').length).toBe(1); //middle one does
      expect($('.input-group:last .input-group-append button').length).toBe(1); //last one does
    })

    test('Remove button removes the element', () => {
      $('input:eq(1)').val('Test input element middle'); //make them unique
      $('input:eq(2)').val('Test input element last'); //make them unique
      
      $('.input-group:eq(1) .input-group-append button').click(); //click the button on element 1

      expect($('input:eq(1)').val()).toEqual('Test input element last'); //element 1 is now last
    })

    test('Label numbers updated on removal', () => {
      expect($('.input-group:last label').text()).toEqual('2.');      
    })
  })
})
