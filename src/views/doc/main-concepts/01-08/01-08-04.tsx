/*
 * Lists and Keys: Extracting Components with Keys
 */

import React from 'react';

class MyLi extends React.Component<{ value: string }> {
  public render() {
    return <li>{this.props.value}</li>;
  }
}

interface IProps {}

interface IState {}

/*
 * 一般在使用 Array.map() 方法展开一个列表数据时，需要设置 key 属性；
 * key 属性需要设置在循环项的最顶层标签上；
 */
class C010804 extends React.Component<IProps, IState> {
  public render() {
    return (
      <div>
        {['a', 'b', 'c'].map((n: string) => {
          /*
           * key 属性设置在 <MyLi> 标签上，而不是它里面的 <li> 标签上；
           */
          return <MyLi value={n} key={n} />;
        })}
      </div>
    );
  }
}

export { C010804 };
