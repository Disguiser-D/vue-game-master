module.exports = {
    devServer: {
        proxy: {
            // 配置跨域
            '/api': {
                target: 'https://www.baidu.com',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}