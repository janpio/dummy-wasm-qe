import * as wasm from "./index_bg_bg.wasm";

import { __wbg_set_wasm } from "./index_bg_bg.js";
__wbg_set_wasm(wasm);

export * from "./index_bg_bg.js";



import * as imports from "./mywasmlib_bg.js";
 
// switch between both syntax for node and for workerd
import wkmod from "./mywasmlib_bg.wasm";
import * as nodemod from "./mywasmlib_bg.wasm";
if ((typeof process !== 'undefined') && (process.release.name === 'node')) {
    imports.__wbg_set_wasm(nodemod);
} else {
    const instance = new WebAssembly.Instance(wkmod, { "./mywasmlib_bg.js": imports });
    imports.__wbg_set_wasm(instance.exports);
}
 
export * from "./mywasmlib_bg.js";