const {
  DobLogApi
} = require('@dob/log');
const {
  DobUtilConstant,
  DobUtilApi
} = require('@dob/util');
const {
  DobHttpApi
} = require('@dob/http');

class TronApi {
  /**
   * @description: 获取TRC20交易记录
   * 
   * @static
   * 
   * @async
   * 
   * @param {Object} param1
   * @param {String} param1.walletAddress 钱包地址
   * @param {String} param1.contractAddress 合约地址
   * @param {Number} [param1.minTimestamp = 0] 最小时间戳
   * @param {String} [param1.fingerprint = null] 指纹
   * @param {Object} param2
   * @param {Boolean} [param2.throwErrorFlag = true] 抛出错误标志
   * @param {Object} param2.ctx 上下文
   * 
   * @returns {Promise<Object>} 交易记录
   */
  static async getTrc20TransactionList(
    {
      walletAddress,
      contractAddress,
      minTimestamp = 0,
      fingerprint = null
    },
    {
      throwErrorFlag = true,
    }
  ) {
    const identifier = 'TronApi::getTrc20TransactionList';
    
    //获取日志器
    const logger = DobLogApi.getLogger(
      {
        category: identifier
      }
    );
    
    //开始执行
    logger.debug(`=====开始执行${identifier}=====`);
    
    try {
      //获取http client
      let client = DobHttpApi.getClient(
        {
          name: 'tron'
        }
      );

      const response = await client.request(
        {
          url: `/v1/accounts/${walletAddress}/transactions/trc20`,
          method: 'GET',
          params: {
            only_confirmed: true, // 仅获取已确认的交易
            only_to: true, // 仅获取转入记录
            limit: 20, // 每页记录数
            fingerprint, // 指纹参数，用于获取下一页记录
            min_timestamp: minTimestamp, // 最小时间戳
            contract_address: contractAddress // 合约地址
          }
        }
      );

      //返回
      return response.data;
    }
    catch(error) {
      //抛出错误
      if(throwErrorFlag === true) {
        throw error;
      }
      //返回
      else {
        return null;
      }
    }
    finally {
      //结束执行
      logger.debug(`=====结束执行${identifier}=====`);
    }
  }
}

module.exports = TronApi;