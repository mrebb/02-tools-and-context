'use strict';
class List{
  constructor(){
    this.length = 0;
  }
  push(item){
    this[this.length++] = item;
    return this.length;
  }
  pop(){
    let removedValue = this[this.length-1];
    delete this[this.length-1];
    this.length--;
    return removedValue;
  }
  forEach(func) {
    if(typeof func !== 'function'){
      return `${func} is not a type of function`;
    }
    for(let i=0; i<this.length; i++){
      this[i] = func(this[i]);
    }
    return undefined;
  }
  map(func) {
    if(typeof func !== 'function'){
      return `${func} is not a type of function`;
    }
    let arr =[];
    for(let i=0; i<this.length; i++){
      arr[i] = func(this[i]);
    }
    return arr;
  }
  filter(func) {
    if(typeof func !== 'function'){
      return `${func} is not a type of function`;
    }
    let arr =[],j=0;
    for(let i=0; i<this.length; i++){
      if(func(this[i])){
        arr[j] = this[i];
        j++;
      }
    }
    return arr;
  }
  reduce(func,initialAccum) {
    if(typeof func !== 'function'){
      return `${func} is not a type of function`;
    }
    if(initialAccum === undefined){
      initialAccum = 0;
    }
    let accum = initialAccum;
    for(let i=0; i<this.length; i++){
      if(i===0){
        accum = accum + this[i]; 
      }
      if(i!==0){
        accum = func(accum,this[i]);
      }
    }
    return accum;
  }
}
module.exports = List;