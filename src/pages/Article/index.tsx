import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '@/store/modules/article';
import _ from 'lodash';
import type { AnyAction } from '@reduxjs/toolkit';
import { Card } from 'antd';

const Article: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getList({ currentPage: 2, pageSize: 10 }) as unknown as AnyAction);
	}, []);

	const { list, total } = useSelector((store: any) => store.article);

	return (
		<Card title="测试异步 actions">
			<p>total: {total}</p>
			<Card style={{ padding: 0 }}>
				{_.map(list, (item: number, key: number) => (
					<li key={key}>{item}</li>
				))}
			</Card>
		</Card>
	);
};
export default Article;
