import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import { mount } from 'enzyme'

describe('icon', () => {
  it('是个svg', () => {
    const json = renderer.create(<Icon name="alipay" />).toJSON()
    expect(json).toMatchSnapshot()
  })

  it('onClick', () => {
    let n = 1
    const fn = () => {
      n = 2
    }
    const component = mount(<Icon name="alipay" onClick={fn} />)
    component.find('svg').simulate('click')
    expect(n).toEqual(2)
  })

  //  可以用jest生成一个fn函数，然后被调用toBeCalled,则代表测试成功
  it('onClick jest fn', () => {
    const fn = jest.fn()
    const component = mount(<Icon onClick={fn} />)
    component.find('use').simulate('click')
    expect(fn).toBeCalled()
  })

})

//  什么是Snapshot（快照）
//  明确知道测试是对的，就运行yarn test -u，保存对的快照到__snapshots__文件夹中
//  每次运行就会对比上一次存下来的快照