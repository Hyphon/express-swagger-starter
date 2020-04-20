var Mock = require('mockjs')
var ok = require('../../utils').ok

module.exports = function (app) {
  /**
   * This function comment is parsed by doctrine
   * @route GET /h5banner/list
   * @group h5banner - 微信打卡小程序banner管理
   */
  app.get('/h5banner/list', function (req, res) {
    var data = Mock.mock({
      'records|5-10': [
        {
          banner: "@image('670x230')",
          'type|1': ['1', '2'],
          'status|1': ['1', '2', '3'],
          createTime: "@datetime('yyyy-MM-dd HH:mm:ss')",
          createBy: '@cname',
          publishTime: "@datetime('yyyy-MM-dd HH:mm:ss')",
          clickTimes: '@natural(10, 20)',
        },
      ],
    })

    res.send(ok(data))
  })
}

/**
 * @typedef H5Banner
 * @property {string} banner
 * @property {string} type
 * @property {string} status
 * @property {string} createTime
 * @property {string} createBy
 * @property {string} publishTime
 * @property {integer} clickTimes
 */
