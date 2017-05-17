/**
 * 
 * Constructor 
 * @param {any} val 
 */

function Observer(val) {
  this.val = val;
  this.listeners = []; // array to register listeners
}

/**
 * sets newValue to this.val
 * @param {any} val 
 */

Observer.prototype.set = function(setVal) {
   var oldVal = this.val;
   this.val = setVal;
   

  if(oldVal !== setVal) {
    // call all listeners if there is a change in this.val
   this.listeners.forEach(function(fn) {
     fn.call(null, oldVal, setVal);
   });
  }
  
}

/**
 * getter to get the this.val
 */
Observer.prototype.get = function() {
  return this.val;
}

/**
 * method to subscribe all listeners
 * @param {function} cb
 */
Observer.prototype.subscribe = function(cb) {
  // checking if already same cb is registered
  if(this.listeners.indexOf(cb) === -1) this.listeners.push(cb);
}

/**
 * unsubscribe the listener
 *  @param {function} cb
 */
Observer.prototype.unsubscribe = function(cb) {
  var index = this.listeners.indexOf(cb);
  if(index >= 0) this.listeners.splice(index, 1);
}

var a = 1; // detect changes in this variable
var obs = new Observer(a); // get instance of Observer

// listner to change in value 'a'
var b = function(oldValue, newValue) {
  console.log('oldvalue - '+ oldValue, 'newValue - ' + newValue);
}
// subscribe the listener
obs.subscribe(b);


a = 2; // make change to variable a
obs.set(a); // trigger change in b

setTimeout(function(){obs.set(5);}, 5000);


