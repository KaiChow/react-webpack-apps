import { useEffect, useState } from 'react';
import styles from './orderInfo.module.less';
import { Collapse, Space, Form, Input, Row, Col, Card, Button, Select, Spin, message } from 'antd';
import SearchPort from './searchPort/Index';
import { GetOrderInfoApi } from '@/services/orderInfo';
import { PortItemTypes } from '@/services/baseData';
import Cargos from './cargos';

export default function OrderInfos() {
	const [form] = Form.useForm();
	const [baseInfoForm] = Form.useForm();
	const [loading, setLoading] = useState(true);
	const getInfo = async () => {
		setLoading(true);
		const result = await GetOrderInfoApi<API.GET_ORDER_INFO>(2774);
		setLoading(false);
		const {
			OrderNo,
			HblNo,
			FactoryReleaseTimeStr,
			AgentReleaseTimeStr,
			RefWarehouseNo,
			CreatedTime,
			MblNo,
			BusinessType,
			BaseData,
		} = result;
		form.setFieldsValue({
			OrderNo,
			HblNo,
			FactoryReleaseTimeStr,
			AgentReleaseTimeStr,
			RefWarehouseNo,
			CreatedTime,
			MblNo,
			BusinessType,
		});
		baseInfoForm.setFieldsValue(BaseData);
	};
	useEffect(() => {
		getInfo();
	}, []);

	const handleSave = () => {
		form.validateFields();
		baseInfoForm.validateFields();
		const orderValidate = form.getFieldsValue();
		const baseInfoValidate = baseInfoForm.getFieldsValue();

		if (!orderValidate && !baseInfoValidate) {
			message.success('提交成功!');
		}
	};

	const handleLoaddingPortChange = (val: PortItemTypes) => {
		baseInfoForm.setFieldValue('LoaddingPortCode', val?.NameEn || '');
	};
	const handleDeliveryPortChange = (val: PortItemTypes) => {
		baseInfoForm.setFieldValue('DeliveryPortCode', val?.NameEn || '');
	};
	return (
		<div className={styles.orderInfo_wrapper}>
			<Spin spinning={loading}>
				<Space direction="vertical" style={{ width: '100%' }}>
					<Collapse collapsible="header" defaultActiveKey={['1']}>
						<Collapse.Panel header="订单信息" key="1">
							{/* 订单信息 */}
							<Form name="orderInfo" autoComplete="off" labelWrap={true} colon={false} form={form}>
								<Row gutter={[8, 8]}>
									<Col xs={24} sm={12} md={12} lg={8} xl={6} span={6}>
										<Form.Item
											label="业务单号"
											name="OrderNo"
											rules={[
												{
													required: true,
													message: 'Please input your username!',
												},
											]}>
											<Input placeholder="请输入订单编号" />
										</Form.Item>
									</Col>
									<Col xs={24} sm={12} md={12} lg={8} xl={6} span={6}>
										<Form.Item
											label="HBL单号"
											name="HblNo"
											rules={[
												{
													required: true,
													message: '请输入HBL单号',
												},
											]}>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={12} md={12} lg={8} xl={6} span={6}>
										<Form.Item
											label="工厂电放时间"
											name="FactoryReleaseTimeStr"
											rules={[
												{
													required: true,
													message: '工厂电放时间',
												},
											]}>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={12} md={12} lg={8} xl={6} span={6}>
										<Form.Item
											label="代理电放时间"
											name="AgentReleaseTimeStr"
											rules={[
												{
													required: true,
													message: '代理电放时间',
												},
											]}>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={12} md={12} lg={8} xl={6} span={6}>
										<Form.Item
											label="入仓单号"
											name="RefWarehouseNo"
											rules={[
												{
													required: true,
													message: '入仓单号',
												},
											]}>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={12} md={12} lg={8} xl={6} span={6}>
										<Form.Item
											label="下单日期"
											name="CreatedTime"
											rules={[
												{
													required: true,
													message: '下单日期',
												},
											]}>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={12} md={12} lg={8} xl={6} span={6}>
										<Form.Item
											label="MBL单号"
											name="MblNo"
											rules={[
												{
													required: true,
													message: 'MBL单号',
												},
											]}>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={12} md={12} lg={8} xl={6} span={6}>
										<Form.Item
											label="业务类型"
											name="BusinessType"
											rules={[
												{
													required: true,
													message: '业务类型',
												},
											]}>
											<Select
												options={[
													{ value: 0, label: 'FOB' },
													{ value: 1, label: 'FBA' },
												]}
											/>
										</Form.Item>
									</Col>
								</Row>
							</Form>
						</Collapse.Panel>
					</Collapse>
					<Collapse collapsible="header" defaultActiveKey={['1']}>
						<Collapse.Panel header="基础信息" key="1">
							{/* 基本信息 */}
							<Form
								name="basicInfo"
								autoComplete="off"
								labelWrap={true}
								colon={false}
								form={baseInfoForm}>
								<Row gutter={[8, 8]}>
									<Col xs={24} sm={12} md={12} lg={8} xl={6} span={6}>
										<Form.Item
											label="起运港"
											name="LoaddingPortCode"
											rules={[
												{
													required: true,
													message: '起运港',
												},
											]}>
											<SearchPort onPortChange={handleLoaddingPortChange} />
										</Form.Item>
									</Col>
									<Col xs={24} sm={12} md={12} lg={8} xl={6} span={6}>
										<Form.Item
											label="目的港"
											name="DeliveryPortCode"
											rules={[
												{
													required: true,
													message: '目的港',
												},
											]}>
											<SearchPort onPortChange={handleDeliveryPortChange} />
										</Form.Item>
									</Col>
									<Col xs={24} sm={12} md={12} lg={8} xl={6} span={6}>
										<Form.Item
											label="目的地"
											rules={[
												{
													required: true,
													message: 'Please input your password!',
												},
											]}>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={12} md={12} lg={8} xl={6} span={6}>
										<Form.Item
											label="船司"
											rules={[
												{
													required: true,
													message: 'Please input your username!',
												},
											]}>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={12} md={12} lg={8} xl={6} span={6}>
										<Form.Item
											label="合约号"
											rules={[
												{
													required: true,
													message: 'Please input your password!',
												},
											]}>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={12} md={12} lg={8} xl={6} span={6}>
										<Form.Item
											label="同行合约抬头"
											rules={[
												{
													required: true,
													message: 'Please input your username!',
												},
											]}>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={12} md={12} lg={8} xl={6} span={6}>
										<Form.Item
											label="合约费用"
											rules={[
												{
													required: true,
													message: 'Please input your password!',
												},
											]}>
											<Input />
										</Form.Item>
									</Col>
								</Row>
							</Form>
						</Collapse.Panel>
					</Collapse>
					{/* 货物信息 */}
					<Collapse collapsible="header" defaultActiveKey={['1']}>
						<Collapse.Panel header="货物信息" key="1">
							<Cargos />
						</Collapse.Panel>
					</Collapse>
				</Space>
				{/* 底部按钮组 */}
				<Card>
					<Space>
						<Button type={'primary'} onClick={handleSave}>
							保存
						</Button>
					</Space>
				</Card>
			</Spin>
		</div>
	);
}
