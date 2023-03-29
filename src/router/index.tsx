import { useRoutes, RouteObject } from 'react-router-dom';
import _ from 'lodash';
import About from '@/pages/About';
import Article from '@/pages/Article';
import BaseLayout from '@/layout/BaseLayout';
import Login from '@/pages/Login';
import OrderDetail from '@/pages/OrderDetail';
import BaseTable from '@/pages/Tables/BaseTable';
// 测试代码部分
import UseHookDemo from '@/pages/Demos/UseHookDemo';
import UseCallback from '@/pages/Demos/UseCallback';
import UseRefDemo from '@/pages/Demos/UseRefDemo';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <BaseLayout />,
		children: [
			{
				path: 'dashboard',
				id: '1',
				children: [
					{
						path: 'about',
						id: '11',
						element: <About />,
					},
					{
						path: 'article',
						id: '12',
						element: <Article />,
					},
					{
						id: '13',
						path: 'orderDetail',
						element: <OrderDetail />,
					},
				],
			},
			{
				path: 'tables',
				id: '2',
				children: [
					{
						id: '21',
						path: 'baseTable',
						element: <BaseTable />,
					},
				],
			},
			{
				path: 'demos',
				id: '3',
				children: [
					{
						id: '31',
						path: 'useHookDemo',
						element: <UseHookDemo />,
					},
					{
						id: '32',
						path: 'useCallbackDemo',
						element: <UseCallback />,
					},
					{
						id: '33',
						path: 'useRefDemo',
						element: <UseRefDemo />,
					},
				],
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
];

const Routes: React.FC = () => {
	const element = useRoutes(routes);
	return element;
};

export default Routes;
