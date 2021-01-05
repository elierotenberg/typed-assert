typed-assert

# typed-assert

## Index

### Type aliases

* [Assert](API.md#assert)
* [Check](API.md#check)
* [SubType](API.md#subtype)
* [WeakAssert](API.md#weakassert)

### Functions

* [assert](API.md#assert)
* [check](API.md#check)
* [defaultAssert](API.md#defaultassert)
* [isArray](API.md#isarray)
* [isArrayOfType](API.md#isarrayoftype)
* [isBoolean](API.md#isboolean)
* [isDate](API.md#isdate)
* [isExactly](API.md#isexactly)
* [isInstanceOf](API.md#isinstanceof)
* [isNotNull](API.md#isnotnull)
* [isNotUndefined](API.md#isnotundefined)
* [isNumber](API.md#isnumber)
* [isOneOf](API.md#isoneof)
* [isOneOfType](API.md#isoneoftype)
* [isOptionOfType](API.md#isoptionoftype)
* [isPromise](API.md#ispromise)
* [isRecord](API.md#isrecord)
* [isRecordOfType](API.md#isrecordoftype)
* [isRecordWithKeys](API.md#isrecordwithkeys)
* [isString](API.md#isstring)
* [isUnknown](API.md#isunknown)
* [safeJsonParse](API.md#safejsonparse)
* [setBaseAssert](API.md#setbaseassert)

## Type aliases

### Assert

Ƭ **Assert**<Input, Output\>: (`input`: Input, `message?`: *string*) => asserts input is SubType<Input, Output\>

#### Type parameters:

Name | Default |
------ | ------ |
`Input` | *unknown* |
`Output` | Input |

Defined in: [index.ts:7](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L7)

___

### Check

Ƭ **Check**<Input, Output\>: (`input`: Input) => input is SubType<Input, Output\>

#### Type parameters:

Name | Default |
------ | ------ |
`Input` | *unknown* |
`Output` | Input |

Defined in: [index.ts:12](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L12)

___

### SubType

Ƭ **SubType**<Input, Output\>: Output *extends* Input ? Output : *never*

#### Type parameters:

Name |
------ |
`Input` |
`Output` |

Defined in: [index.ts:5](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L5)

___

### WeakAssert

Ƭ **WeakAssert**: (`input`: *unknown*, `message?`: *string*) => *void*

Defined in: [index.ts:3](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L3)

## Functions

### assert

▸ `Const`**assert**(`input`: *boolean*, `message?`: *string*): asserts input is true

#### Parameters:

Name | Type |
------ | ------ |
`input` | *boolean* |
`message?` | *string* |

**Returns:** asserts input is true

Defined in: [index.ts:24](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L24)

___

### check

▸ **check**<Input, Output\>(`assertT`: [*Assert*](API.md#assert)<Input, Output\>): [*Check*](README.md#check)<Input, Output\>

#### Type parameters:

Name |
------ |
`Input` |
`Output` |

#### Parameters:

Name | Type |
------ | ------ |
`assertT` | [*Assert*](API.md#assert)<Input, Output\> |

**Returns:** [*Check*](API.md#check)<Input, Output\>

Defined in: [index.ts:195](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L195)

___

### defaultAssert

▸ `Const`**defaultAssert**(`input`: *unknown*, `message?`: *string*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`input` | *unknown* |
`message?` | *string* |

**Returns:** *void*

Defined in: [index.ts:16](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L16)

___

### isArray

▸ **isArray**(`input`: *unknown*, `message?`: *string*): asserts input is unknown[]

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | *unknown* | - |
`message` | *string* | ... |

**Returns:** asserts input is unknown[]

Defined in: [index.ts:114](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L114)

___

### isArrayOfType

▸ **isArrayOfType**<T\>(`input`: *unknown*, `assertT`: [*Assert*](API.md#assert)<*unknown*, T\>, `message?`: *string*, `itemMessage?`: *string*): asserts input is T[]

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | *unknown* | - |
`assertT` | [*Assert*](API.md#assert)<*unknown*, T\> | - |
`message` | *string* | ... |
`itemMessage` | *string* | ... |

**Returns:** asserts input is T[]

Defined in: [index.ts:133](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L133)

___

### isBoolean

▸ **isBoolean**(`input`: *unknown*, `message?`: *string*): asserts input is boolean

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | *unknown* | - |
`message` | *string* | ... |

**Returns:** asserts input is boolean

Defined in: [index.ts:62](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L62)

___

### isDate

▸ **isDate**(`input`: *unknown*, `message?`: *string*): asserts input is Date

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | *unknown* | - |
`message` | *string* | ... |

**Returns:** asserts input is Date

Defined in: [index.ts:83](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L83)

___

### isExactly

▸ **isExactly**<Input, Output\>(`input`: Input, `value`: Output, `message?`: *string*): asserts input is SubType<Input, Output\>

#### Type parameters:

Name |
------ |
`Input` |
`Output` |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | Input | - |
`value` | Output | - |
`message` | *string* | ... |

**Returns:** asserts input is SubType<Input, Output\>

Defined in: [index.ts:54](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L54)

___

### isInstanceOf

▸ **isInstanceOf**<T\>(`input`: *unknown*, `constructor`: (...`args`: *any*[]) => T, `message?`: *string*): asserts input is T

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | *unknown* | - |
`constructor` | (...`args`: *any*[]) => T | - |
`message` | *string* | ... |

**Returns:** asserts input is T

Defined in: [index.ts:179](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L179)

___

### isNotNull

▸ **isNotNull**<T\>(`input`: *null* \| T, `message?`: *string*): asserts input is T

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | *null* \| T | - |
`message` | *string* | ... |

**Returns:** asserts input is T

Defined in: [index.ts:40](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L40)

___

### isNotUndefined

▸ **isNotUndefined**<T\>(`input`: *undefined* \| T, `message?`: *string*): asserts input is T

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | *undefined* \| T | - |
`message` | *string* | ... |

**Returns:** asserts input is T

Defined in: [index.ts:47](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L47)

___

### isNumber

▸ **isNumber**(`input`: *unknown*, `message?`: *string*): asserts input is number

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | *unknown* | - |
`message` | *string* | ... |

**Returns:** asserts input is number

Defined in: [index.ts:69](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L69)

___

### isOneOf

▸ **isOneOf**<Input, Output\>(`input`: Input, `values`: readonly Output[], `message?`: *string*): asserts input is SubType<Input, Output\>

#### Type parameters:

Name |
------ |
`Input` |
`Output` |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | Input | - |
`values` | readonly Output[] | - |
`message` | *string* | ... |

**Returns:** asserts input is SubType<Input, Output\>

Defined in: [index.ts:156](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L156)

___

### isOneOfType

▸ **isOneOfType**<T\>(`input`: *unknown*, `assertT`: [*Assert*](API.md#assert)<*unknown*, T\>[], `message?`: *string*, `itemMessage?`: *string*): asserts input is T

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | *unknown* | - |
`assertT` | [*Assert*](API.md#assert)<*unknown*, T\>[] | - |
`message` | *string* | ... |
`itemMessage?` | *string* | - |

**Returns:** asserts input is T

Defined in: [index.ts:164](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L164)

___

### isOptionOfType

▸ **isOptionOfType**<Input, Output\>(`input`: *undefined* \| Input, `assertT`: [*Assert*](API.md#assert)<Input, Output\>, `message?`: *string*): asserts input is SubType<Input, undefined\> \| SubType<Input, Output\>

#### Type parameters:

Name |
------ |
`Input` |
`Output` |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | *undefined* \| Input | - |
`assertT` | [*Assert*](API.md#assert)<Input, Output\> | - |
`message` | *string* | ... |

**Returns:** asserts input is SubType<Input, undefined\> \| SubType<Input, Output\>

Defined in: [index.ts:145](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L145)

___

### isPromise

▸ **isPromise**(`input`: *unknown*, `message?`: *string*): asserts input is Promise<unknown\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | *unknown* | - |
`message` | *string* | ... |

**Returns:** asserts input is Promise<unknown\>

Defined in: [index.ts:188](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L188)

___

### isRecord

▸ **isRecord**(`input`: *unknown*, `message?`: *string*): asserts input is Record<string, unknown\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | *unknown* | - |
`message` | *string* | ... |

**Returns:** asserts input is Record<string, unknown\>

Defined in: [index.ts:90](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L90)

___

### isRecordOfType

▸ **isRecordOfType**<T\>(`input`: *unknown*, `assertT`: [*Assert*](API.md#assert)<*unknown*, T\>, `message?`: *string*, `itemMessage?`: *string*): asserts input is Record<string, T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | *unknown* | - |
`assertT` | [*Assert*](API.md#assert)<*unknown*, T\> | - |
`message` | *string* | ... |
`itemMessage` | *string* | ... |

**Returns:** asserts input is Record<string, T\>

Defined in: [index.ts:121](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L121)

___

### isRecordWithKeys

▸ **isRecordWithKeys**<K\>(`input`: *unknown*, `keys`: K[], `message?`: *string*): asserts input is { readonly[Key in string]: unknown}

#### Type parameters:

Name | Type |
------ | ------ |
`K` | *string* |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | *unknown* | - |
`keys` | K[] | - |
`message` | *string* | ... |

**Returns:** asserts input is { readonly[Key in string]: unknown}

Defined in: [index.ts:101](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L101)

___

### isString

▸ **isString**(`input`: *unknown*, `message?`: *string*): asserts input is string

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | *unknown* | - |
`message` | *string* | ... |

**Returns:** asserts input is string

Defined in: [index.ts:76](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L76)

___

### isUnknown

▸ **isUnknown**(`_input`: *unknown*): \_input is unknown

#### Parameters:

Name | Type |
------ | ------ |
`_input` | *unknown* |

**Returns:** \_input is unknown

Defined in: [index.ts:36](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L36)

___

### safeJsonParse

▸ `Const`**safeJsonParse**(`json`: *string*): *unknown*

#### Parameters:

Name | Type |
------ | ------ |
`json` | *string* |

**Returns:** *unknown*

Defined in: [index.ts:33](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L33)

___

### setBaseAssert

▸ **setBaseAssert**(`assert?`: [*WeakAssert*](API.md#weakassert)): *void*

#### Parameters:

Name | Type |
------ | ------ |
`assert?` | [*WeakAssert*](API.md#weakassert) |

**Returns:** *void*

Defined in: [index.ts:27](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L27)
