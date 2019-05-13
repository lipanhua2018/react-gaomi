import React, { Component } from 'react';
// 只做一件事，把`WrappedComponent`回传个`getInstance`（如果有的话）
export default (WrappedComponent) => {
    return class withRef extends Component {
      static displayName = `withRef(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
      render() {
        // 这里重新定义一个props的原因是:
        // 你直接去修改this.props.ref在react开发模式下会报错，不允许你去修改
        const props = {
          ...this.props,
        };
        // 在这里把getInstance赋值给ref，
        // 传给`WrappedComponent`，这样就getInstance能获取到`WrappedComponent`实例
        props.ref = (el)=>{
            this.props.getInstance && this.props.getInstance(el);
            this.props.ref && this.props.ref(el);
        }
        return (
          <WrappedComponent {...props} />
        );
      }
    };
  };
  

// 链接：https://www.jianshu.com/p/2609fd3777cd
 