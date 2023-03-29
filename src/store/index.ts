import { configureStore } from '@reduxjs/toolkit';
import * as reducer from './modules';

// 使用configureStore创建redux数据
const store = configureStore({
	// 合并多个slice
	reducer: {
		...reducer,
	},
});
export default store;
