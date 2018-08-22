/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = '';
let routerMode = 'hash';
let imgBaseUrl;
let randomCodeUrl;

if (process.env.NODE_ENV == 'development') {
    baseUrl = '/api';
    imgBaseUrl = 'http://img.dev.kmnzrj.net';
    randomCodeUrl = 'http://8046.dev.kmnzrj.net/dzz-api';

} else if (process.env.NODE_ENV == 'production') {
    baseUrl = 'http://api.bmy365.com';
    imgBaseUrl = 'http://img.bmy365.com';
    randomCodeUrl = baseUrl;
}

export {
    baseUrl,
    routerMode,
    imgBaseUrl,
    randomCodeUrl
}
