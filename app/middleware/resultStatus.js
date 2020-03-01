const resultStatus = result => {
  if (!result) {
    return {
      code: 400,
      message: '数据错误',
    };
  } else {
    return {
      code: 200,
      message: 'success',
      data: result,
    };
  }
};

module.exports = resultStatus;
