import { SET_THEME } from "../action/type"

const init = 'flatly'
const dark = 'darkly'
let x = false;
export default function theme(state = init, action) {
    if (action === SET_THEME) {
        if (x) {
            return dark
        } else return init
    }
    return state;
}