[typed-assert](README.md)

# typed-assert

## Index

### Type aliases

* [Assert](README.md#assert)
* [Check](README.md#check)
* [SubType](README.md#subtype)
* [WeakAssert](README.md#weakassert)

### Variables

* [baseAssert](README.md#let-baseassert)

### Functions

* [assert](README.md#const-assert)
* [check](README.md#check)
* [defaultAssert](README.md#const-defaultassert)
* [expectedToBe](README.md#const-expectedtobe)
* [isArray](README.md#isarray)
* [isArrayOfType](README.md#isarrayoftype)
* [isBoolean](README.md#isboolean)
* [isDate](README.md#isdate)
* [isExactly](README.md#isexactly)
* [isInstanceOf](README.md#isinstanceof)
* [isNotNull](README.md#isnotnull)
* [isNotUndefined](README.md#isnotundefined)
* [isNumber](README.md#isnumber)
* [isOneOf](README.md#isoneof)
* [isOneOfType](README.md#isoneoftype)
* [isOptionOfType](README.md#isoptionoftype)
* [isPromise](README.md#ispromise)
* [isRecord](README.md#isrecord)
* [isRecordOfType](README.md#isrecordoftype)
* [isRecordWithKeys](README.md#isrecordwithkeys)
* [isString](README.md#isstring)
* [safeJsonParse](README.md#const-safejsonparse)
* [setBaseAssert](README.md#setbaseassert)

## Type aliases

###  Assert

Ƭ **Assert**: *function*

*Defined in [index.ts:7](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L7)*

#### Type declaration:

▸ (`input`: Input, `message?`: undefined | string): *asserts input is SubType<Input, Output>*

**Parameters:**

Name | Type |
------ | ------ |
`input` | Input |
`message?` | undefined &#124; string |

___

###  Check

Ƭ **Check**: *function*

*Defined in [index.ts:12](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L12)*

#### Type declaration:

▸ (`input`: Input): *input is SubType<Input, Output>*

**Parameters:**

Name | Type |
------ | ------ |
`input` | Input |

___

###  SubType

Ƭ **SubType**: *Output extends Input ? Output : never*

*Defined in [index.ts:5](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L5)*

___

###  WeakAssert

Ƭ **WeakAssert**: *function*

*Defined in [index.ts:3](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L3)*

#### Type declaration:

▸ (`input`: unknown, `message?`: undefined | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | unknown |
`message?` | undefined &#124; string |

## Variables

### `Let` baseAssert

• **baseAssert**: *function* = defaultAssert

*Defined in [index.ts:22](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L22)*

#### Type declaration:

▸ (`input`: unknown, `message?`: undefined | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | unknown |
`message?` | undefined &#124; string |

## Functions

### `Const` assert

▸ **assert**(`condition`: boolean, `message`: undefined | string): *void*

*Defined in [index.ts:24](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | boolean |
`message` | undefined &#124; string |

**Returns:** *void*

___

###  check

▸ **check**‹**Input**, **Output**›(`assertT`: [Assert](README.md#assert)‹Input, Output›): *[Check](README.md#check)‹Input, Output›*

*Defined in [index.ts:191](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L191)*

**Type parameters:**

▪ **Input**

▪ **Output**

**Parameters:**

Name | Type |
------ | ------ |
`assertT` | [Assert](README.md#assert)‹Input, Output› |

**Returns:** *[Check](README.md#check)‹Input, Output›*

___

### `Const` defaultAssert

▸ **defaultAssert**(`condition`: unknown, `message`: undefined | string): *void*

*Defined in [index.ts:16](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | unknown |
`message` | undefined &#124; string |

**Returns:** *void*

___

### `Const` expectedToBe

▸ **expectedToBe**(`type`: string): *string*

*Defined in [index.ts:1](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *string*

___

###  isArray

▸ **isArray**(`input`: unknown, `message`: string): *asserts input is unknown[]*

*Defined in [index.ts:110](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L110)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`message` | string | expectedToBe("an array") |

**Returns:** *asserts input is unknown[]*

___

###  isArrayOfType

▸ **isArrayOfType**‹**T**›(`input`: unknown, `assertT`: [Assert](README.md#assert)‹unknown, T›, `message`: string, `itemMessage`: string): *asserts input is T[]*

*Defined in [index.ts:129](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L129)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`assertT` | [Assert](README.md#assert)‹unknown, T› | - |
`message` | string | expectedToBe("an array of given type") |
`itemMessage` | string | expectedToBe("of given type") |

**Returns:** *asserts input is T[]*

___

###  isBoolean

▸ **isBoolean**(`input`: unknown, `message`: string): *asserts input is boolean*

*Defined in [index.ts:58](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`message` | string | expectedToBe("a boolean") |

**Returns:** *asserts input is boolean*

___

###  isDate

▸ **isDate**(`input`: unknown, `message`: string): *asserts input is Date*

*Defined in [index.ts:79](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L79)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`message` | string | expectedToBe("a Date") |

**Returns:** *asserts input is Date*

___

###  isExactly

▸ **isExactly**‹**Input**, **Output**›(`input`: Input, `value`: Output, `message`: string): *asserts input is SubType<Input, Output>*

*Defined in [index.ts:50](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L50)*

**Type parameters:**

▪ **Input**

▪ **Output**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | Input | - |
`value` | Output | - |
`message` | string | expectedToBe(`exactly ${value}`) |

**Returns:** *asserts input is SubType<Input, Output>*

___

###  isInstanceOf

▸ **isInstanceOf**‹**T**›(`input`: unknown, `constructor`: object, `message`: string): *asserts input is T*

*Defined in [index.ts:175](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L175)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`constructor` | object | - |
`message` | string | expectedToBe("an instance of given constructor") |

**Returns:** *asserts input is T*

___

###  isNotNull

▸ **isNotNull**‹**T**›(`input`: null | T, `message`: string): *asserts input is T*

*Defined in [index.ts:36](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L36)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | null &#124; T | - |
`message` | string | expectedToBe("not null") |

**Returns:** *asserts input is T*

___

###  isNotUndefined

▸ **isNotUndefined**‹**T**›(`input`: undefined | T, `message`: string): *asserts input is T*

*Defined in [index.ts:43](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L43)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | undefined &#124; T | - |
`message` | string | expectedToBe("not undefined") |

**Returns:** *asserts input is T*

___

###  isNumber

▸ **isNumber**(`input`: unknown, `message`: string): *asserts input is number*

*Defined in [index.ts:65](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L65)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`message` | string | expectedToBe("a number") |

**Returns:** *asserts input is number*

___

###  isOneOf

▸ **isOneOf**‹**Input**, **Output**›(`input`: Input, `values`: keyof Output[], `message`: string): *asserts input is SubType<Input, Output>*

*Defined in [index.ts:152](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L152)*

**Type parameters:**

▪ **Input**

▪ **Output**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | Input | - |
`values` | keyof Output[] | - |
`message` | string | expectedToBe(`one of ${values.join(", ")}`) |

**Returns:** *asserts input is SubType<Input, Output>*

___

###  isOneOfType

▸ **isOneOfType**‹**T**›(`input`: unknown, `assertT`: [Assert](README.md#assert)‹unknown, T›[], `message`: string, `itemMessage?`: undefined | string): *asserts input is T*

*Defined in [index.ts:160](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L160)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`assertT` | [Assert](README.md#assert)‹unknown, T›[] | - |
`message` | string | expectedToBe(`one of type`) |
`itemMessage?` | undefined &#124; string | - |

**Returns:** *asserts input is T*

___

###  isOptionOfType

▸ **isOptionOfType**‹**Input**, **Output**›(`input`: Input | undefined, `assertT`: [Assert](README.md#assert)‹Input, Output›, `message`: string): *asserts input is SubType<Input, Output | undefined>*

*Defined in [index.ts:141](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L141)*

**Type parameters:**

▪ **Input**

▪ **Output**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | Input &#124; undefined | - |
`assertT` | [Assert](README.md#assert)‹Input, Output› | - |
`message` | string | expectedToBe("option of given type") |

**Returns:** *asserts input is SubType<Input, Output | undefined>*

___

###  isPromise

▸ **isPromise**(`input`: unknown, `message`: string): *asserts input is Promise<unknown>*

*Defined in [index.ts:184](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L184)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`message` | string | expectedToBe("a promise") |

**Returns:** *asserts input is Promise<unknown>*

___

###  isRecord

▸ **isRecord**(`input`: unknown, `message`: string): *asserts input is Record<string, unknown>*

*Defined in [index.ts:86](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L86)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`message` | string | expectedToBe("a record") |

**Returns:** *asserts input is Record<string, unknown>*

___

###  isRecordOfType

▸ **isRecordOfType**‹**T**›(`input`: unknown, `assertT`: [Assert](README.md#assert)‹unknown, T›, `message`: string, `itemMessage`: string): *asserts input is Record<string, T>*

*Defined in [index.ts:117](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L117)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`assertT` | [Assert](README.md#assert)‹unknown, T› | - |
`message` | string | expectedToBe("a record of given type") |
`itemMessage` | string | expectedToBe("of given type") |

**Returns:** *asserts input is Record<string, T>*

___

###  isRecordWithKeys

▸ **isRecordWithKeys**‹**K**›(`input`: unknown, `keys`: K[], `message`: string): *asserts input is object*

*Defined in [index.ts:97](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L97)*

**Type parameters:**

▪ **K**: *string*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`keys` | K[] | - |
`message` | string | expectedToBe(`a record with keys ${keys.join(", ")}`) |

**Returns:** *asserts input is object*

___

###  isString

▸ **isString**(`input`: unknown, `message`: string): *asserts input is string*

*Defined in [index.ts:72](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L72)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`message` | string | expectedToBe("a string") |

**Returns:** *asserts input is string*

___

### `Const` safeJsonParse

▸ **safeJsonParse**(`json`: string): *unknown*

*Defined in [index.ts:33](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`json` | string |

**Returns:** *unknown*

___

###  setBaseAssert

▸ **setBaseAssert**(`assert?`: [WeakAssert](README.md#weakassert)): *void*

*Defined in [index.ts:27](https://github.com/elierotenberg/typed-assert/blob/f4fab92/src/index.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`assert?` | [WeakAssert](README.md#weakassert) |

**Returns:** *void*
