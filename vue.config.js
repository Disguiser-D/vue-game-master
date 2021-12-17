module.exports = {
    devServer: {
        proxy: {
            // 配置跨域
            '/api': {
                target: 'http://localhost:8089/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}