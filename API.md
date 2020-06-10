[typed-assert](README.md)

# typed-assert

## Index

### Type aliases

* [Assert](README.md#assert)
* [Check](README.md#check)
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

*Defined in [index.ts:22](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L22)*

#### Type declaration:

▸ (`input`: unknown, `message?`: undefined | string): *asserts input is T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | unknown |
`message?` | undefined &#124; string |

___

###  Check

Ƭ **Check**: *function*

*Defined in [index.ts:27](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L27)*

#### Type declaration:

▸ (`input`: unknown): *input is T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | unknown |

___

###  WeakAssert

Ƭ **WeakAssert**: *function*

*Defined in [index.ts:3](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L3)*

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

*Defined in [index.ts:11](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L11)*

#### Type declaration:

▸ (`input`: unknown, `message?`: undefined | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | unknown |
`message?` | undefined &#124; string |

## Functions

### `Const` assert

▸ **assert**(`condition`: unknown, `message`: undefined | string): *void*

*Defined in [index.ts:13](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | unknown |
`message` | undefined &#124; string |

**Returns:** *void*

___

###  check

▸ **check**‹**T**›(`assertT`: [Assert](README.md#assert)‹T›): *[Check](README.md#check)‹T›*

*Defined in [index.ts:187](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L187)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`assertT` | [Assert](README.md#assert)‹T› |

**Returns:** *[Check](README.md#check)‹T›*

___

### `Const` defaultAssert

▸ **defaultAssert**(`condition`: unknown, `message`: undefined | string): *void*

*Defined in [index.ts:5](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | unknown |
`message` | undefined &#124; string |

**Returns:** *void*

___

### `Const` expectedToBe

▸ **expectedToBe**(`type`: string): *string*

*Defined in [index.ts:1](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *string*

___

###  isArray

▸ **isArray**(`input`: unknown, `message`: string): *asserts input is unknown[]*

*Defined in [index.ts:106](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L106)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`message` | string | expectedToBe("an array") |

**Returns:** *asserts input is unknown[]*

___

###  isArrayOfType

▸ **isArrayOfType**‹**T**›(`input`: unknown, `assertT`: function, `message`: string, `itemMessage`: string): *asserts input is T[]*

*Defined in [index.ts:125](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L125)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **input**: *unknown*

▪ **assertT**: *function*

▸ (`input`: unknown, `message?`: undefined | string): *asserts input is T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | unknown |
`message?` | undefined &#124; string |

▪`Default value`  **message**: *string*= expectedToBe("an array of given type")

▪`Default value`  **itemMessage**: *string*= expectedToBe("of given type")

**Returns:** *asserts input is T[]*

___

###  isBoolean

▸ **isBoolean**(`input`: unknown, `message`: string): *asserts input is boolean*

*Defined in [index.ts:54](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L54)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`message` | string | expectedToBe("a boolean") |

**Returns:** *asserts input is boolean*

___

###  isDate

▸ **isDate**(`input`: unknown, `message`: string): *asserts input is Date*

*Defined in [index.ts:75](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L75)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`message` | string | expectedToBe("a Date") |

**Returns:** *asserts input is Date*

___

###  isExactly

▸ **isExactly**‹**T**›(`input`: unknown, `value`: T, `message`: string): *asserts input is T*

*Defined in [index.ts:46](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L46)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`value` | T | - |
`message` | string | expectedToBe(`exactly ${value}`) |

**Returns:** *asserts input is T*

___

###  isInstanceOf

▸ **isInstanceOf**‹**T**›(`input`: unknown, `constructor`: object, `message`: string): *asserts input is T*

*Defined in [index.ts:171](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L171)*

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

*Defined in [index.ts:32](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L32)*

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

*Defined in [index.ts:39](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L39)*

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

*Defined in [index.ts:61](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L61)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`message` | string | expectedToBe("a number") |

**Returns:** *asserts input is number*

___

###  isOneOf

▸ **isOneOf**‹**T**›(`input`: unknown, `values`: keyof T[], `message`: string): *asserts input is T*

*Defined in [index.ts:148](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L148)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`values` | keyof T[] | - |
`message` | string | expectedToBe(`one of ${values.join(", ")}`) |

**Returns:** *asserts input is T*

___

###  isOneOfType

▸ **isOneOfType**‹**T**›(`input`: unknown, `assertT`: [Assert](README.md#assert)‹T›[], `message`: string, `itemMessage?`: undefined | string): *asserts input is T*

*Defined in [index.ts:156](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L156)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`assertT` | [Assert](README.md#assert)‹T›[] | - |
`message` | string | expectedToBe(`one of type`) |
`itemMessage?` | undefined &#124; string | - |

**Returns:** *asserts input is T*

___

###  isOptionOfType

▸ **isOptionOfType**‹**T**›(`input`: unknown, `assertT`: [Assert](README.md#assert)‹T›, `message`: string): *asserts input is T | undefined*

*Defined in [index.ts:137](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L137)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`assertT` | [Assert](README.md#assert)‹T› | - |
`message` | string | expectedToBe("option of given type") |

**Returns:** *asserts input is T | undefined*

___

###  isPromise

▸ **isPromise**(`input`: unknown, `message`: string): *asserts input is Promise<unknown>*

*Defined in [index.ts:180](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L180)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`message` | string | expectedToBe("a promise") |

**Returns:** *asserts input is Promise<unknown>*

___

###  isRecord

▸ **isRecord**(`input`: unknown, `message`: string): *asserts input is Record<string, unknown>*

*Defined in [index.ts:82](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L82)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`message` | string | expectedToBe("a record") |

**Returns:** *asserts input is Record<string, unknown>*

___

###  isRecordOfType

▸ **isRecordOfType**‹**T**›(`input`: unknown, `assertT`: function, `message`: string, `itemMessage`: string): *asserts input is Record<string, T>*

*Defined in [index.ts:113](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L113)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **input**: *unknown*

▪ **assertT**: *function*

▸ (`input`: unknown, `message?`: undefined | string): *asserts input is T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | unknown |
`message?` | undefined &#124; string |

▪`Default value`  **message**: *string*= expectedToBe("a record of given type")

▪`Default value`  **itemMessage**: *string*= expectedToBe("of given type")

**Returns:** *asserts input is Record<string, T>*

___

###  isRecordWithKeys

▸ **isRecordWithKeys**‹**K**›(`input`: unknown, `keys`: K[], `message`: string): *asserts input is object*

*Defined in [index.ts:93](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L93)*

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

*Defined in [index.ts:68](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L68)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | unknown | - |
`message` | string | expectedToBe("a string") |

**Returns:** *asserts input is string*

___

### `Const` safeJsonParse

▸ **safeJsonParse**(`json`: string): *unknown*

*Defined in [index.ts:29](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`json` | string |

**Returns:** *unknown*

___

###  setBaseAssert

▸ **setBaseAssert**(`assert?`: [WeakAssert](README.md#weakassert)): *void*

*Defined in [index.ts:16](https://github.com/elierotenberg/typed-assert/blob/0c3581d/src/index.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`assert?` | [WeakAssert](README.md#weakassert) |

**Returns:** *void*
