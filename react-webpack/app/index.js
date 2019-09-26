import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom'
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Nav from './nav';
import Error from './error';
 
ReactDOM.render(
    // Route和NavLink的exact选项
    // exact可以使我们的匹配更精确



    // 路由的5种模式讲解。
        // BrowserRouter：浏览器的路由方式，也是我们一直在学习的路由方式，在开发中最常使用。
        // HashRouter：在路径前加入#号成为一个哈希值。Hash模式的好处是，再也不会因为我们刷新而找不到我们的对应路径了。
        // MemoryRouter：不存储history，所有路由过程保存在内存里，不能进行前进后退，因为地址栏没有发生任何变化。
        // NativeRouter：经常配合ReactNative使用，多用于移动端，以后ReactNative课程中会详细讲解。
        // StaticRouter：设置静态路由，需要和后台服务器配合设置，比如设置服务端渲染时使用。


    //两种路由属性
        // basename的作用是个我们增加一级导航目录
        // forceRefresh属性的作用是开启或者关闭React Router
    <Router basename="demo">
        <div>
            <Nav/>
                <Switch>
                    {/* from：表示来自于什么链接，也就是当链接是redirect时，我们触发跳转命令。
                    to：表示要跳转到的链接，这里是跳转到Page2的组件中。 */}
                    <Redirect from="/redirect" to="/Page3" />
                    <Route exact path="/" component={Page1} />
                    <Route  path="/Page2/:param" component={Page2} />
                    <Route  path="/Page3" component={Page3} />
                    {/* 错误页面应该在最后面 */}
                    <Route  component={Error} />
                </Switch> 
        </div>
    </Router>,
    document.getElementById("app")
);