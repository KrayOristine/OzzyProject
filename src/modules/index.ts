
import s from './sync';
import {InitMouseTracker} from './asyncMouse';
import {File} from './fileIO';




export function module_init(){
  s.init();
  InitMouseTracker();

}
