import classes from '../classes'
//  bdd行为驱动测试

describe('classes', () => {
  it('接受一个 className', () => {
    const result = classes('a')
    expect(result).toEqual('a')
  })
  it('接受两个 className', () => {
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  })
  it('接受含有falsy值 className', () => {
    const result = classes('a', undefined, null, 0, '', false)
    expect(result).toEqual('a')
  })
  it('什么都不传', () => {
    const result = classes()
    expect(result).toEqual('')
  })
})