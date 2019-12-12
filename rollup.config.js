"use strict"
import commonjs   from "rollup-plugin-commonjs"
import resolve    from "rollup-plugin-node-resolve"
import external   from "rollup-plugin-peer-deps-external"
import typescript from "rollup-plugin-typescript"

import pkg from "./package.json"

export default {
    input: "src/index.ts",

    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true,
        },

        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true,
        },
    ],

    plugins: [
        external(),
        resolve({ preferBuiltins: true }),
        typescript({
            exclude: "**/__tests__/**",
        }),
        commonjs(),
    ],
}
