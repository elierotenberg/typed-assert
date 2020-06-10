import nodeAssert from "assert";

import * as assert from "..";

class C {}

const fixtures = {
  null: null,
  undefined: undefined,
  string: "",
  number: 0,
  boolean: true,
  date: new Date(),
  promise: Promise.resolve(null),
  record: {} as Record<string, unknown>,
  array: [] as unknown[],
  recordWithKeys: {
    a: {
      b: {
        c: "d",
      },
      e: null,
    },
    f: "g",
  } as const,
  recordOfStrings: {
    a: "",
    b: "",
  } as Record<string, string>,
  recordOfNumbers: {
    a: 0,
    b: 1,
  } as Record<string, number>,
  strings: ["a", "b", "c"] as string[],
  numbers: [0, 1, 2] as number[],
  c: new C(),
};

const entries = Object.entries(fixtures) as [
  keyof typeof fixtures,
  typeof fixtures[keyof typeof fixtures],
][];

const orNull = <T>(t: T): T | null => t;
const orUndefined = <T>(t: T): T | undefined => t;

const baseAsserts: [string, assert.WeakAssert][] = [
  ["default", assert.defaultAssert],
  ["node", nodeAssert],
];

describe("typed-assert", () => {
  for (const [label, baseAssert] of baseAsserts) {
    describe(label, () => {
      assert.setBaseAssert(baseAssert);
      test("isNotNull", () => {
        const v = orNull(fixtures.string);
        assert.isNotNull(v);
        // v is "string"
        for (const [key, value] of entries) {
          if (key === "null") {
            expect(() => assert.isNotNull(value)).toThrow();
          } else {
            expect(() => assert.isNotNull(value)).not.toThrow();
          }
        }
      });

      test("isNotUndefined", () => {
        const v = orUndefined(fixtures.string);
        assert.isNotUndefined(v);
        // v is "string"
        for (const [key, value] of entries) {
          if (key === "undefined") {
            expect(() => assert.isNotUndefined(value)).toThrow();
          } else {
            expect(() => assert.isNotUndefined(value)).not.toThrow();
          }
        }
      });

      test("isExactly", () => {
        const v = orUndefined("value");
        assert.isExactly(v, "value");
        // v is "value"
        for (const [, value] of entries) {
          expect(() => assert.isExactly(value, value)).not.toThrow();
          for (const [, otherValue] of entries) {
            if (otherValue !== value) {
              expect(() => assert.isExactly(value, otherValue)).toThrow();
              expect(() => assert.isExactly(otherValue, value)).toThrow();
            }
          }
        }
      });

      test("isBoolean", () => {
        const v = orNull(fixtures.boolean);
        assert.isBoolean(v);
        // v is "boolean"
        for (const [key, value] of entries) {
          if (key === "boolean") {
            expect(() => assert.isBoolean(value)).not.toThrow();
          } else {
            expect(() => assert.isBoolean(value)).toThrow();
          }
        }
      });

      test("isNumber", () => {
        const v = orNull(fixtures.number);
        assert.isNumber(v);
        // v is "number"
        for (const [key, value] of entries) {
          if (key === "string") {
            expect(() => assert.isString(value)).not.toThrow();
          } else {
            expect(() => assert.isString(value)).toThrow();
          }
        }
      });

      test("isString", () => {
        const v = orNull(fixtures.string);
        assert.isString(v);
        // v is "string"
        for (const [key, value] of entries) {
          if (key === "string") {
            expect(() => assert.isString(value)).not.toThrow();
          } else {
            expect(() => assert.isString(value)).toThrow();
          }
        }
      });

      test("isDate", () => {
        const v = orNull(fixtures.date);
        assert.isDate(v);
        // v is "Date"
        for (const [key, value] of entries) {
          if (key === "date") {
            expect(() => assert.isDate(value)).not.toThrow();
          } else {
            expect(() => assert.isDate(value)).toThrow();
          }
        }
      });

      test("isPromise", () => {
        const v = orNull(fixtures.promise);
        assert.isPromise(v);
        // v is "Promise<null>"
        for (const [key, value] of entries) {
          if (key === "promise") {
            expect(() => assert.isPromise(value)).not.toThrow();
          } else {
            expect(() => assert.isPromise(value)).toThrow();
          }
        }
      });

      test("isRecord", () => {
        const v = orNull(fixtures.record);
        assert.isRecord(v);
        // v is "Record<string, unkown>"
        for (const [key, value] of entries) {
          if (
            [
              "record",
              "recordOfStrings",
              "recordOfNumbers",
              "recordWithKeys",
              "date",
              "promise",
              "array",
              "strings",
              "numbers",
              "c",
            ].includes(key)
          ) {
            expect(() => assert.isRecord(value)).not.toThrow();
          } else {
            expect(() => assert.isRecord(value)).toThrow();
          }
        }
      });

      test("isArray", () => {
        const v = orNull(fixtures.array);
        assert.isArray(v);
        // v is unknown[]
        for (const [key, value] of entries) {
          if (["array", "strings", "numbers"].includes(key)) {
            expect(() => assert.isArray(value)).not.toThrow();
          } else {
            expect(() => assert.isArray(value)).toThrow();
          }
        }
      });

      test("isRecordWithKeys", () => {
        const keys = Object.keys(fixtures.recordWithKeys);
        const v = orNull(fixtures.recordWithKeys);
        assert.isRecordWithKeys(v, keys);
        // v is typeof fixtures.recordWithKeys
        for (const [key, value] of entries) {
          if (key === "recordWithKeys") {
            expect(() => assert.isRecordWithKeys(value, keys)).not.toThrow();
          } else {
            expect(() => assert.isRecordWithKeys(value, keys)).toThrow();
          }
        }

        expect(() =>
          assert.isRecordWithKeys(fixtures.recordWithKeys, ["a"]),
        ).not.toThrow();
        expect(() =>
          assert.isRecordWithKeys(fixtures.recordWithKeys, ["b"]),
        ).toThrow();
        expect(() =>
          assert.isRecordWithKeys(fixtures.recordWithKeys, ["f"]),
        ).not.toThrow();
        expect(() =>
          assert.isRecordWithKeys(fixtures.recordWithKeys.a, ["b", "e"]),
        ).not.toThrow();
        expect(() =>
          assert.isRecordWithKeys(fixtures.recordWithKeys, ["a", "b"]),
        ).toThrow();
      });

      test("isRecordOfType", () => {
        const v = orNull(fixtures.recordOfNumbers);
        assert.isRecordOfType(v, assert.isNumber);
        // v is Record<string, number>
        for (const [key, value] of entries) {
          if (
            [
              "record",
              "recordOfNumbers",
              "array",
              "numbers",
              "date",
              "promise",
              "c",
            ].includes(key)
          ) {
            expect(() =>
              assert.isRecordOfType(value, assert.isNumber),
            ).not.toThrow();
          } else {
            expect(() =>
              assert.isRecordOfType(value, assert.isNumber),
            ).toThrow();
          }
        }
      });

      test("isArrayOfType", () => {
        const v = orNull(fixtures.numbers);
        assert.isArrayOfType(v, assert.isNumber);
        // v is number[]
        for (const [key, value] of entries) {
          if (["array", "numbers"].includes(key)) {
            expect(() =>
              assert.isArrayOfType(value, assert.isNumber),
            ).not.toThrow();
          } else {
            expect(() =>
              assert.isArrayOfType(value, assert.isNumber),
            ).toThrow();
          }
        }
      });

      test("isOptionOfType", () => {
        const v = orNull(fixtures.number);
        assert.isOptionOfType(v, assert.isNumber);
        // v is "number"
        for (const [key, value] of entries) {
          if (["undefined", "number"].includes(key)) {
            expect(() =>
              assert.isOptionOfType(value, assert.isNumber),
            ).not.toThrow();
          } else {
            expect(() =>
              assert.isOptionOfType(value, assert.isNumber),
            ).toThrow();
          }
        }
      });

      test("isOneOf", () => {
        const v = orNull("a");
        assert.isOneOf(v, ["a", "b"] as const);
        // v is "a"
        for (const [key, value] of entries) {
          if (key === "number") {
            expect(() =>
              assert.isOneOf(value, [fixtures.number, fixtures.number + 1]),
            ).not.toThrow();
          } else {
            expect(() =>
              assert.isOneOf(value, [fixtures.number, fixtures.number + 1]),
            ).toThrow();
          }
        }
      });

      test("isOneOfType", () => {
        const v = orNull(fixtures.string);
        assert.isOneOfType(v, [assert.isString, assert.isNumber]);
        // v is "string"
        for (const [key, value] of entries) {
          if (["string", "number"].includes(key)) {
            expect(() =>
              assert.isOneOfType(value, [assert.isString, assert.isNumber]),
            ).not.toThrow();
          } else {
            expect(() =>
              assert.isOneOfType(value, [assert.isString, assert.isNumber]),
            ).toThrow();
          }
        }
      });

      test("isInstanceOf", () => {
        const v = orNull(fixtures.date);
        assert.isInstanceOf(v, Date);
        // v is Date
        for (const [key, value] of entries) {
          if (key === "c") {
            expect(() => assert.isInstanceOf(value, C)).not.toThrow();
          } else {
            expect(() => assert.isInstanceOf(value, C)).toThrow();
          }
        }
      });

      test("safeJsonParse", () => {
        const input = {
          a: {
            b: {
              c: "d",
            },
            e: null,
          },
          f: "g",
        };

        function assertIsInput(
          input: unknown,
        ): asserts input is typeof fixtures.recordWithKeys {
          assert.isRecordWithKeys(input, ["a", "f"]);
          assert.isRecordWithKeys(input.a, ["b", "e"]);
          assert.isRecordWithKeys(input.a.b, ["c"]);
          assert.isExactly(input.a.b.c, "d" as const);
          assert.isExactly(input.a.e, null);
          assert.isExactly(input.f, "g");
        }

        const json = JSON.stringify(input);
        const output = assert.safeJsonParse(json);

        assertIsInput(output);

        const typedOutput: typeof fixtures.recordWithKeys = output;

        expect(typedOutput).toEqual(input);
      });

      test("check filter", () => {
        const t = entries
          .map(([, value]) => value)
          .filter(assert.check(assert.isNumber));
        for (const item of t) {
          expect(() => assert.isNumber(item)).not.toThrow();
        }
      });
    });
  }
});
