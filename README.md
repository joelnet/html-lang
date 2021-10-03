# HTML is a Programming Language!

`html-lang` is experimental and currently in development. Proceed at your own risk!

`html-lang` features no build step, no bundling, no webpack configs. Open up your HTML and start writing HTML.

## Install

Include the script tag into the `<head></head>` section of your HTML.

```html
<script src="https://unpkg.com/@joelnet/html-lang@0.0.5/umd/html-lang.js"></script>
```

## Variables

Variables are globally scoped.

```html
<!-- String -->
<val message="Hello World"></val>

<!-- Number -->
<val x:number="888"></val>

<!-- Object -->
<val y:object="{ x: 1, y: 2 }"></val>

<!-- Array -->
<val z:object="['A', 'B', 'C']"></val>
```

## Computed Values

The computed value syntax has a `:?` at the end of the Variable name.

```html
<!-- Set name -->
<val name="World"></val>

<!-- Compute Message -->
<val message:?="'Hello ' + name"></val>
```

## Output

Display a Variable

```html
<!-- set message to "Hello World" -->
<val message="Hello World"></val>

<!-- Display message -->
<span set:text="message"></span>
```

## If / Conditional

```html
<if test="x > 10">X is GREATER than 10!</if>
```

An `else` can be simulated by negating the if condition.

```html
<if test="x > 10">X is GREATER than 10!</if>

<if test="!(x > 10)">X is NOT GREATER than 10!</if>
```

## Loops

```html
<!-- set i to 1 -->
<val i:number="1"></val>

<!-- loop while i is less than 11 -->
<while test="i < 11">
  <!-- display i -->
  <div set:text="i"></div>

  <!-- increment i -->
  <val i:?="i+1"></val>
</while>
```

## Fetching Data

```html
<!-- fetch data -->
<val response:fetch="'https://swapi.dev/api/people/1'"></val>

<!-- destructure response into loading, error, data -->
<val
  loading:?="response.loading"
  error:?="response.error"
  data:?="response.json"
></val>

<!-- Show when Loading -->
<if test="loading">Loading...</if>

<!-- Show if Error -->
<if test="error"> Error: <span set:text="error"></span> </if>

<!-- Display Data -->
<if test="data">
  <div>name: <span set:text="data.name"></span></div>
  <div>gender: <span set:text="data.gender"></span></div>
  <div>height: <span set:text="data.height"></span>cm</div>
</if>
```

## Examples

### FizzBuzz

```html
<!-- set i to 1 -->
<val i:number="1"></val>

<!-- loop to 100 -->
<while test="i < 101">
  <div>
    <!-- if no match display i -->
    <if test="i % 3 !== 0 && i % 5 !== 0">
      <span set:text="i"></span>
    </if>

    <!-- display Fizz, Buzz -->
    <if test="i % 3 === 0">Fizz</if><if test="i % 5 === 0">Buzz</if>

    <!-- increment i -->
    <val i:?="i+1"></val>
  </div>
</while>
```
