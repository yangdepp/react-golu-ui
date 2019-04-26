import classes, { scopedClassMaker } from '../classes';
//  bdd行为驱动测试

describe('scopedClassMaker测试', () => {
  it('接受字符串或对象，生成多个className', () => {
    const sc = scopedClassMaker('golu-layout');
    expect(sc('')).toEqual('golu-layout');
    expect(sc('x')).toEqual('golu-layout-x');
    expect(sc('x', { extra: 'yyy' })).toEqual('golu-layout-x yyy');
    expect(sc({ '': true })).toEqual('golu-layout');
    expect(sc({ '': true, hasSider: true })).toEqual('golu-layout golu-layout-hasSider');
    expect(sc({ '': true, hasSider: false }, { extra: 'xxx' })).toEqual('golu-layout xxx');
    expect(sc({ '': false, hasSider: true }, { extra: 'xxx' })).toEqual('golu-layout-hasSider xxx');
  });
});
