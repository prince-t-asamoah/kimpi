import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { eslintSharedRules } from "../eslint.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", 'eslint-config-prettier'),
   {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...eslintSharedRules,
      '@next/next/no-img-element': 'warn',
    },
  },
];

export default eslintConfig;
