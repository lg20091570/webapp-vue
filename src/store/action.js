import {
	getUser,
} from '../service/getData'
import {
	RECORD_USERINFO,
	OUT_LOGIN
} from './mutation-types.js'

export default {

	async getUserInfo({
		commit,
		state
	}) {
		let res = await getUser();
		if(res.success) {
            commit(RECORD_USERINFO, res.data);
        }else{
			commit(OUT_LOGIN);
		}
	}
}
