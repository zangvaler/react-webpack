var path =require('path');
module.exports = {
    //入口文件
    entry:'./app/index.js',
    //出口文件
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist'),
        // 实时刷新页面
        publicPath:'temp/'
    },
    // 实时更新服务
    devServer:{
        contentBase:'./',
        host:'localhost',
        compress:true,
        port:1717
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders:"babel-loader",
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test:/\.css$/,
                loader:['style-loader','css-loader']
            }
        ]
    }
}