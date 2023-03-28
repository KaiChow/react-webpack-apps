import React, { useState, useCallback } from 'react';
import { Button } from 'antd';

const MockMemo: React.FC<any> = () => {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)

    const add = useCallback(() => {
        setCount(count + 1)
    }, [count])

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <TestButton title="普通点击" onClick={() => setCount(count + 1)} />
                <TestButton title="useCallback点击" onClick={add} />
            </div>
            <div style={{ marginTop: 20 }}>count: {count}</div>
            <Button onClick={() => { setShow(!show) }}> 切换</Button>
        </div>
    )
}

const TestButton = React.memo((props: any) => {
    console.log(props.title)
    return <Button color='primary' onClick={props.onClick} style={props.title === 'useCallback点击' ? {
        marginLeft: 20
    } : undefined}>{props.title}</Button>
})

export default MockMemo;


/**
 * useCallback与useMemo极其类似,可以说是一模一样，唯一不同的是useMemo返回的是函数运行的结果，而useCallback返回的是函数
 * 注意：这个函数是父组件传递子组件的一个函数，防止做无关的刷新，
 * 其次，这个组件必须配合memo,否则不但不会提升性能，还有可能降低性能
 */