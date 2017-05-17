# Coding Test

# Question 1
## Changes observation

There is no direct way to detect change in variable till ES5. 

Change in variable 'a' can be detected using simple observer pattern.
Please see implementation below


```
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
```



# Question 2

## Drop down menu without JS

This can be achieved using input checkbox and labe
Please see implementation below

HTML
```
<ul class="parent-ul">
        <li>
            <label for="menu1">
      menu 1
    </label>
            <input type="checkbox" class="checkbox" id="menu1" />
            <ul class="child-ul">
                <li>submenu 1</li>
                <li>submenu 2</li>
                <li>submenu 3</li>
                <li>submenu 4</li>
            </ul>
        </li>
        <li>
            <label for="menu2">
      menu 2
    </label>
            <input type="checkbox" class="checkbox" id="menu2" />
            <ul class="child-ul">
                <li>submenu 1</li>
                <li>submenu 2</li>
                <li>submenu 3</li>
            </ul>
        </li>
        <li>
            <label for="menu3">
      menu 3
    </label>
            <input type="checkbox" class="checkbox" id="menu3" />
            <ul class="child-ul">
                <li>submenu 1</li>
                <li>submenu 2</li>

            </ul>
        </li>
    </ul>
```

CSS

```

li {
  list-style: none;
}

ul {
  padding: 0;
  margin: 0;
}
.checkbox {
  display: none;
}

.parent-ul {
  width: 300px;
  overflow: hidden;
  text-align: center;
}
.child-ul {
  display: none;
}

.parent-ul > li {
  float: left;
  width: 100px;
  background: gray;
}

.child-ul > li {
  background: blue;
  color: #fff;
}

.checkbox:checked ~ .child-ul {
  display: block;
}

```

# Question 3

## Image rendering performance

Answer:
Better to use SVG because, it can scale when browser zoomed.
where as PNG will pixelate on zoom.

But in lower IE Versions we still need to use png's

### Follow Up Question

If we need to render 100 icons in a page, better to use png. Because, rendering 100 SVG icons will effect CPU performance.



