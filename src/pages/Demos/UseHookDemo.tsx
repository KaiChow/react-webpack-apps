
import React,{ useState } from 'react';
import  usePow  from './hooks/usePow';
import { Button, Card } from 'antd';

const UseHookDemo:React.FC<any> = ()=> {
  const [flag, setFlag] = useState<boolean>(true)
  const data = usePow([1, 2, 3])
  
  return (
    <Card>
      <div>数字：{JSON.stringify(data)}</div>
      <Button color='primary' onClick={() => {setFlag(v => !v)}}>切换</Button>
       <div>切换状态：{JSON.stringify(flag)}</div>
    </Card>
  );
}

export default UseHookDemo;
