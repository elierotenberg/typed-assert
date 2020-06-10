module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/build/"],
  maxConcurrency: 50,
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "d.ts"],
};
