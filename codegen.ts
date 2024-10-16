import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  documents: ["src/**/*.graphql"],
  generates: {
    "src/types/schemaTypes.ts": {
      plugins: ["typescript"],
    },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "types/schemaTypes.ts",
      },
      plugins: ["typescript-operations", "typed-document-node"],
      config: {
        withHooks: true,
        withMutationFn: true,
      },
    },
  },
  config: {
    scalars: {
      DateTime: "Date",
    },
  },
};

export default config;
