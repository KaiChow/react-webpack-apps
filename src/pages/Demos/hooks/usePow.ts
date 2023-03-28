import { useMemo } from "react";

// usePow.ts
const Index = (list: number[]) => {

    // 普通版本
    // return list.map((item:number) => {
    //     console.log(1)
    //     return Math.pow(item, 2)
    //   })
    
    // 使用useMemo优化的版本
    return useMemo(() => list.map((item:number) => {
        console.log(1)
        return Math.pow(item, 2)
      }), []) 
  }
  
export default Index;
/**
 * useMemo
 * 
 * 简单的理解下，当一个页面内容非常复杂，模块非常多的时候，函数式组件会从头更新到尾，只要一处改变，所有的模块都会进行刷新，这种情况显然是没有必要的。
 * 我们理想的状态是各个模块只进行自己的更新，不要相互去影响，那么此时用useMemo是最佳的解决方案。
 * 这里要尤其注意一点，只要父组件的状态更新，无论有没有对自组件进行操作，子组件都会进行更新，useMemo就是为了防止这点而出现的
 */