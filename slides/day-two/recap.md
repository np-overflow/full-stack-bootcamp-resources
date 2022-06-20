# HTML

* Structure of our webpage
* Consists of **HTML tags**
* **HTML tags** can have attributes

```html {all|1,3|2|all}
<div>
    <h1>I am an element</h1>
    <h1 id="some-id" style="color: red;">
      I am an element with many attributes
    </h1>
</div>
```

---
layout: center
---

# Javascript

---

# Functions

Functions have an **input** (parameters/arguments) and an **output** (return value)

```javascript
function say(message) {
    console.log(message)
}

function add(a, b) {
    return a + b
}
```

"Run" or "call" a function:

```javascript
say("Hello there!") // Output: Hello there!
say(add(1, 3)) // Output: ??
```

---

# Variables

| Keyword | Accessibility                                   | Should I use this?     |
|---------|-------------------------------------------------|------------------------|
| `var`   | Within the function it's declared in            | Avoid unless necessary |
| `let`   | Within the closest curly braces --- `{` and `}` | ✅                      |
| `const` | Creates a constant variable                     | ✅                      |

---

# Variables

`const`

```javascript
console.log(name) // Error: Usage before declaration
const name = "Qin Guan"
name = "Something else" // Error: Assignment to constant variable
```

`let`

```javascript
console.log(name) // Error: Usage before declaration
let name = "Qin Guan"
name = "Something else" // No error!
```

`var`

```javascript
console.log(name) // No error! But will show `undefined`
let name = "Qin Guan"
name = "Something else" // No error!
```

---

# Variables

| Type      | Usage               | Is a primitive type  |
|-----------|---------------------|----------------------|
| `String`  | Used for text       | ✅                    |
| `Number`  | Used for numbers    | ✅                    | 
| `Boolean` | Used for true/false | ✅                    |
| `Object`  | Used for objects    | ❌                    |
| `Array`   | Used for arrays     | ❌                    |

---

# Objects and arrays

Remember to use **commas** to separate values

```javascript
const jimmy = { // Curly brackets
    name: 'Jimmy', // <- Note: there is a comma here
    age: 21 // age is the object key, and 21 is the corresponding value
}

console.log(jimmy.name, jimmy['age']) // Output: Jimmy, 21
```

```javascript
const jimmyFriends = [ // Square brackets
    'Qin Guan', // <- Note: again, there is a comma here
    'Wai Hang',
    'Jimmy'
]

// Arrays start from position 0
console.log(jimmyFriends[1], jimmyFriends[2]) // Output: Wai Hang, Jimmy
```

---

# Destructuring

```javascript
const jimmy = { // Curly brackets
    name: 'Jimmy', // <- Note: there is a comma here
    age: 21 // age is the object key, and 21 is the corresponding value
}

const { name, age } = jimmy
console.log(name, age) // Output: Jimmy, 21)
```

```javascript
const jimmyFriends = [ // Square brackets
    'Qin Guan', // <- Note: again, there is a comma here
    'Wai Hang',
    'Jimmy'
]

const [firstFriend, secondFriend, thirdFriend] = jimmyFriends
console.log(firstFriend, secondFriend) // Output: Qin Guan, Wai Hang
```

---
layout: two-cols
---

# Control flow

* There are three keywords to do this
  * `if`
    * If condition is true, run block. Else, move down
  * `else if`
    * If condition above is false and
    * If condition is true, run block. Else, move down
  * `else`
    * Run block

::right::

```javascript
if (<condition 1>) {
    // Code to execute if condition 1 is true
}
else if (<condition 2>) {
    // Code to execute if condition 1 is false and condition 2 is true
}
else {
    // Code to execute if condition 1 and condition 2 are both false
}
```

---

# Comparators

* The conditions we used are built using comparators

| Comparator | Explanation              | Usage    |
|------------|--------------------------|----------|
| `>`        | Greater than             | `x > y`  |
| `<`        | Less than                | `x < y`  |
| `>=`       | Greater than or equal to | `x >= y` |
| `<=`       | Less than or equal to    | `x <= y` |
| `==`       | Equal to                 | `x == y` |
| `!=`       | Not equal to             | `x != y` |

---

# Advanced comparators

```javascript
console.log(2 == "2") // Output: true
```

But `2` is not equals to `"2"`! One is a `Number` and the other is a `String`

To enforce checking of types, we add one more `=`, like so: `===` and `!==`

```javascript
console.log(2 === "2") // Output: false
```

---

# Loops

---

# Vue
