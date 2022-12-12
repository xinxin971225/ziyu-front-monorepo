export * from './types/entry'

import ZiYuUI from './types/entry'

export default ZiYuUI
​
declare module 'vue' {
    export interface GlobalComponents {
            JSXButton: typeof import("./types/entry").JSXButton,
            SFCButton: typeof import("./types/entry").SFCButton,
    }
}
