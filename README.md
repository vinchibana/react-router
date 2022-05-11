# Router in React

## 路由的基本使用
1. 明确好界面中的导航区、展示区
2. 导航区的 a 标签改为 Link 标签
3. 展示区用 Route 标签进行路径的匹配
    `<Route path='/xxx component={Demo} />`
4. `<App>` 的最外侧包裹 `<BrowserRouter>` 或 `<HashRouter>`