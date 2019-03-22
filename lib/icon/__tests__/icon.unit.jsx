import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'

describe('icon', () => {
  it('是个svg', () => {
    const json = renderer.create(<Icon name="alipay"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
})



//  什么是Snapshot（快照）
//  明确知道测试是对的，就运行yarn test -u，保存对的快照到__snapshots__文件夹中
//  每次运行就会对比上一次存下来的快照