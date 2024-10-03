const {
  DobHttpApi
} = require('@dob/http');
const {
  DobTronApi
} = require('../index');

DobHttpApi.createClient(
  {
    name: 'tron',
    config: {
      baseURL: 'https://nile.trongrid.io',
      timeout: 30000
    }
  }
);

test(
  'getTrc20TransactionList',
  async () => {
    const result = await DobTronApi.getTrc20TransactionList(
      {
        walletAddress: 'TPtU6QxgQJMBtH6XeiN6dtWvAdM74CBy6t',
        contractAddress: 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf'
      },
      {
        throwErrorFlag: false
      }
    );
    
    expect(result).toBeDefined();
    expect(result.success).toBe(true);
  }
)