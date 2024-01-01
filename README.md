<p align="center">
  <img src="./assets/classwind.png" width="350" title="Classwind" alt="Classwind logo">
</p>

# Classwind

Classwind is a JavaScript utility library designed to simplify the process of creating class names for HTML elements. It provides a quick and efficient way to assemble class names dynamically from various inputs like objects, arrays, and strings. Focusing on performance and ease of use, Classwind is well-suited for projects of all sizes and complexities, thanks to its small footprint and flexible nature.

**Note:** Classwind is a fork of [clsx](https://github.com/lukeed/clsx) with a very similar API. The key differences are that Classwind is developed in TypeScript, and it incorporates [some changes](https://github.com/lukeed/clsx/pull/26) I proposed to clsx, which have since been merged. I aim to expand Classwind with additional features going forward, but as of now, the differences from clsx are minor, so feel free to continue using clsx if it suits your needs.

## Quick features

- ⚡ **Blazing Speed**: Unmatched performance.
- 🪶 **Ultra-Lightweight**: Just 331B!
- 🌐 **Framework Agnostic**: Fits any setup.
- 🛠️ **Easy Integration**: NPM, Yarn, CDN.
- 🔒 **TypeScript**: Built for reliability.
- ✅ **Tested**: Dependably robust.

## Getting Started

### Installation

#### Via NPM

Quickly add Classwind to your project with npm:

```sh
npm install classwind
```

#### Via Yarn

Alternatively, you can use Yarn to add Classwind to your project:

```sh
yarn add classwind
```

## Usage

Embrace the simplicity and power of Classwind with additional examples to demonstrate its versatility.

### Object Input

```javascript
import cw from 'classwind';

const classes = cw({ 'bg-red-500': true, 'text-white': true, 'p-4': true });
// Result: 'bg-red-500 text-white p-4'
```

### Array Input

```javascript
import cw from 'classwind';

const classes = cw(['text-lg', 'font-bold', { 'text-red-500': true }]);
// Result: 'text-lg font-bold text-red-500'
```

### String Input

```javascript
import cw from 'classwind';

const classes = cw('bg-gray-200', 'p-4');
// Result: 'bg-gray-200 p-4'
```

### Combining Methods

```javascript
import cw from 'classwind';

const classes = cw('border-2', { 'hidden': false, 'text-green-500': true }, ['rounded-lg']);
// Result: 'border-2 text-green-500 rounded-lg'
```

### Conditional Classes

```javascript
import cw from 'classwind';

const isError = true;
const classes = cw('text-base', { 'text-error': isError, 'text-normal': !isError });
// Result when isError is true: 'text-base text-error'
```

## **Speed & Efficiency**

**Classwind stands alone in its speed and efficiency**, setting a new standard as the fastest class name generation library available. It's designed for rapid execution and minimal footprint, ensuring optimal performance in every project.
<details>
<summary> <b>Performance details</b> </summary>

Here's the comparison of each library's performance relative to the fastest in their respective categories:

### Strings

**classwind**: `Fastest`

| Library    | Operations per Second                 |
|------------|---------------------------------------|
| classcat*  | 9,105,072 ops/sec ±1.23% (93 runs sampled) |
| classnames | 8,045,903 ops/sec ±3.51% (95 runs sampled) |
| clsx       | 12,688,879 ops/sec ±0.33% (95 runs sampled)|
| classwind  | 13,019,855 ops/sec ±0.69% (94 runs sampled)|

### Objects

**classwind**: `Fastest`

| Library    | Operations per Second                 |
|------------|---------------------------------------|
| classcat*  | 9,870,900 ops/sec ±0.47% (96 runs sampled) |
| classnames | 7,653,758 ops/sec ±0.43% (97 runs sampled) |
| clsx       | 8,723,821 ops/sec ±3.15% (93 runs sampled) |
| classwind  | 10,472,793 ops/sec ±0.47% (95 runs sampled)|

### Arrays

**classwind**: `Fastest`
| Library    | Operations per Second                 |
|------------|---------------------------------------|
| classcat*  | 10,134,461 ops/sec ±0.35% (96 runs sampled)|
| classnames | 4,402,990 ops/sec ±0.72% (96 runs sampled) |
| clsx       | 10,919,566 ops/sec ±0.95% (96 runs sampled)|
| classwind  | 12,371,004 ops/sec ±0.43% (98 runs sampled)|

### Nested Arrays

**classwind**: `Fastest`

| Library    | Operations per Second                 |
|------------|---------------------------------------|
| classcat*  | 8,340,203 ops/sec ±0.48% (98 runs sampled) |
| classnames | 2,653,104 ops/sec ±0.52% (97 runs sampled) |
| clsx       | 8,788,685 ops/sec ±0.52% (97 runs sampled) |
| classwind  | 9,889,578 ops/sec ±0.69% (96 runs sampled) |

### Nested Arrays with Objects

**classwind**: `Fastest`

| Library    | Operations per Second                 |
|------------|---------------------------------------|
| classcat*  | 5,448,237 ops/sec ±0.55% (99 runs sampled)|
| classnames | 3,078,118 ops/sec ±0.47% (98 runs sampled)|
| clsx       | 6,143,398 ops/sec ±0.70% (99 runs sampled)|
| classwind  | 7,208,420 ops/sec ±0.54% (97 runs sampled)|

### Mixed

**classwind**: `Fastest`

| Library    | Operations per Second                 |
|------------|---------------------------------------|
| classcat*  | 7,354,585 ops/sec ±0.64% (97 runs sampled) |
| classnames | 5,085,826 ops/sec ±0.53% (97 runs sampled) |
| clsx       | 9,424,116 ops/sec ±0.56% (94 runs sampled) |
| classwind  | 10,192,520 ops/sec ±0.64% (97 runs sampled)|

### Mixed (Bad Data)

**classwind**: `Fastest`

| Library    | Operations per Second                 |
|------------|---------------------------------------|
| classcat*  | 2,701,503 ops/sec ±0.48% (96 runs sampled)|
| classnames | 2,403,735 ops/sec ±0.61% (96 runs sampled)|
| clsx       | 3,389,576 ops/sec ±3.83% (95 runs sampled)|
| classwind  | 3,837,358 ops/sec ±1.22% (96 runs sampled)|


> Perf on Apple M3 Pro, 36 GB RAM
</details>

## API Reference

### `classwind(input)`: string

A robust function that generates a single string of class names from various input types, be it strings, objects, or arrays.

#### Parameters

- `input`: The input classes specified in any format.

#### Returns

A single string combining all valid class names.

## Testing

Classwind maintains high standards of reliability and performance, underpinned by an extensive test suite using [vitest](https://github.com/aleclarson/vitest). Execute these tests to verify its robustness and efficiency.

## Get Involved

Your contributions are invaluable to the continuous improvement and innovation of Classwind. Whether you're enhancing features, fixing bugs, or enriching the documentation, your involvement drives the evolution of this library.

## Community & Support

### Engage with the Community

Become part of the Classwind community to find support, engage in discussions, and collaborate on projects. Share your experiences and learn from others.

### Release Notes

Stay informed about the latest updates, features, and improvements in Classwind by checking the release notes regularly.

## License

Classwind is open-sourced software licensed under the [MIT License](https://opensource.org/licenses/MIT), reflecting our dedication to the development community. For the complete text, refer to the [LICENSE](https://github.com/jalalazimi/classwind/blob/main/LICENSE) file.
