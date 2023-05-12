# classwind

classwind is a JavaScript utility library that simplifies the process of generating class names for HTML elements. It is a small and fast library that can be used to generate class names from a variety of input types, including objects, arrays, and strings.

## Installation

You can install classwind using npm:

```sh
npm install classwind
```

You can also include it in your project using a CDN like jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/classwind/dist/classwind.min.js"></script>
```

## Usage

Here are some examples of how to use classwind:

### Example 1

```javascript
import classwind from 'classwind';

const classes = classwind({ 'bg-red-500': true, 'text-white': true, 'p-4': true });
// classes === 'bg-red-500 text-white p-4'
```

### Example 2

```javascript
import classwind from 'classwind';

const classes = classwind(['text-lg', 'font-bold', { 'text-red-500': true }]);
// classes === 'text-lg font-bold text-red-500'
```

### Example 3

```javascript
import classwind from 'classwind';

const classes = classwind('bg-gray-200', 'p-4');
// classes === 'bg-gray-200 p-4'
```

## API

### classwind(input: string | object | array): string

Generates class names based on the provided input.

#### Parameters

- `input`: string | object | array - The input to generate class names from.

#### Return Value

Returns a string containing the generated class names.

## Tests

The classwind has been thoroughly tested using [vitest](https://github.com/aleclarson/vitest). You can find the test file [here](https://github.com/jalalazimi/classwind/blob/main/test/index.test.js).

To run the tests, execute the following command:

```sh
pnpm test
```

## Contributing

Contributions to classwind are welcome! If you find a bug or have an idea for a new feature, please open an issue or submit a pull request.

Before submitting a pull request, please make sure to run the tests and ensure that they all pass.

## License

classwind is released under the [MIT License](https://opensource.org/licenses/MIT). See [LICENSE](https://github.com/jalalazimi/classwind/blob/main/LICENSE) for more information.