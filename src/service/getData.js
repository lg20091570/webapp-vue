import fetch from '../config/fetch'
import {randomCodeUrl} from '../config/env'

/**
 * 获取用户信息
 */
export const getUser = () => fetch('/login/info');



