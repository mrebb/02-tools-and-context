'use strict';
const list = require('../lib/list');

describe('List module', () => {
  it('push() returns the new length of the list', ()=>{
    let myList = new list();
    myList.push('foo');
    expect(myList.length).toEqual(1);
  });
  it('push() adds the new element to the list', ()=>{
    let myList = new list();
    myList.push('foo');
    myList.push('bar');
    expect(myList[1]).toEqual('bar');
  });
  it('pop() returns the new length of the list', ()=>{
    let myList = new list();
    myList.push(1);
    myList.push(2);
    myList.pop();
    expect(myList.length).toEqual(1);
  });
  it('pop() removes the last element from the list', ()=>{
    let myList = new list();
    myList.push(1);
    myList.push(2);
    myList.push(3);
    myList.pop();
    expect(myList[2]).toEqual(undefined);
  });
  it('pop() returns removed element from the list', ()=>{
    let myList = new list();
    myList.push(1);
    myList.push(2);
    myList.push(3);
    expect(myList.pop()).toEqual(3);
  });
  it('forEach() method iterates the list through 0->n',()=>{
    let myList = new list();
    myList.push(1);
    myList.push(2);
    myList.push(3);
    myList.forEach(elem=>elem+3);
    expect(myList[1]).toEqual(5);
  });

  it('forEach() method returns undefined',()=>{
    let myList = new list();
    myList.push(1);
    myList.push(2);
    expect(myList.forEach(elem=>elem+3)).toEqual(undefined);
  });

  it('forEach() method expects a function as argument',()=>{
    let myList = new list();
    let variable;
    myList.push(1);
    myList.push(2);
    expect(myList.forEach(variable)).toEqual(`${variable} is not a type of function`);
  });

  it('map() method applies transformation with provided function and returns new array',()=>{
    let myList = new list();
    myList.push(1);
    myList.push(2);
    myList.push(3);
    expect(myList.map(elem=>elem*3)).toEqual([3,6,9]);
  });
  
  it('map() method expects a function as argument',()=>{
    let myList = new list();
    let variable;
    myList.push(1);
    myList.push(2);
    expect(myList.map(variable)).toEqual(`${variable} is not a type of function`);
  });

  it('map() method does not modify the original array',()=>{
    let myList = new list();
    myList.push(1);
    myList.push(2);
    expect(myList.map(elem=>elem*3)).not.toEqual(myList);
  });

  it('filter() method applies provided filter function and returns new array',()=>{
    let myList = new list();
    myList.push(-1);
    myList.push(-2);
    myList.push(1);
    myList.push(2);
    myList.push(3);
    expect(myList.filter(elem=>elem>0)).toEqual([1,2,3]);
  });

  it('filter() method does not modify the original array',()=>{
    let myList = new list();
    myList.push(-1);
    myList.push(-2);
    myList.push(1);
    myList.push(2);
    myList.push(3);
    expect(myList.filter(elem=>elem>0)).not.toEqual(myList);
  });

  it('filter() method expects a function as argument',()=>{
    let myList = new list();
    let variable;
    myList.push(1);
    myList.push(2);
    expect(myList.filter(variable)).toEqual(`${variable} is not a type of function`);
  });

  it('reduce() method applies provided accumulator function and returns result reduced to single value',()=>{
    let myList = new list();
    myList.push(1);
    myList.push(2);
    myList.push(3);
    expect(myList.reduce(((accumulator, currentValue) => accumulator + currentValue),0)).toEqual(6);
  });

  it('reduce() method expects a function as argument',()=>{
    let myList = new list();
    let variable;
    myList.push(1);
    myList.push(2);
    expect(myList.reduce(variable)).toEqual(`${variable} is not a type of function`);
  });
  it('reduce() method provides input by adding hyphen in between my input values',()=>{
    let myList = new list();
    myList.push('twinkle');
    myList.push('twinkle');
    myList.push('little');
    myList.push('star');
    expect(myList.reduce(((accumulator, currentValue) => accumulator + '-' + currentValue),'')).toEqual('twinkle-twinkle-little-star');
  });
  it('reduce() method handles when inital value is not passed by caller',()=>{
    let myList = new list();
    myList.push(1);
    myList.push(2);
    myList.push(3);
    expect(myList.reduce(((accumulator, currentValue) => accumulator + currentValue))).toEqual(6);
  });

} );