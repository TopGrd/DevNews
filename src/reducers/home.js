const list = [
  {
    title: '关于HTTP协议，一篇就够了',
    uri: 'http-30',
    img: '4.jpg',
    content:
      'HTTP是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。它于1990年提出，经过几年的使用与发展，得到不断地完善和扩展。目前在WWW中使用的是HTTP/1.0的第六版，HTTP/1.1的规范化工作正在进行之中，而且HTTP-NG(Next Generation of HTTP)的建议已经提出。',
    category: ['TCP/IP'],
    date: 'April 20, 2016',
  },
]

const Home = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BLOG_LIST':
      return [...state, ...list]
    default:
      return state
  }
}

export default Home
