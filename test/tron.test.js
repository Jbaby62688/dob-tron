const {
  DobTronConstant,
  DobTronConfig,
  DobTronApi
} = require('../index');

//测试是否定义
test(
  'DobTronConstant is defined',
  () => {
    expect(DobTronConstant).toBeDefined();
  }
);

test(
  'DobTronConfig is defined',
  () => {
    expect(DobTronConfig).toBeDefined();
  }
);

test(
  'DobTronApi is defined',
  () => {
    expect(DobTronApi).toBeDefined();
  }
);