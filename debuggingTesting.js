class TestShortParametersNoWrap {
  constructor(A, b, C, D, E, F, G, H, I, J) {}
}

class TestShortParametersWrap {
  constructor(A, b, C, D, E, F, G, H, I, J, K) {}
}

export class Test1LongParameterNoWrap {
  constructor(QWERTYUIOPASDFGHJKLZXCVBNMQWER) {}
}

export class Test1LongParameterWrap {
  constructor(
    QWERTYUIOPASDFGHJKLZXCVBNMQWERQWERTYUIOPASDFGHJKLZXCVBNMQWERQWE
  ) {}
}

export class Test2LongParameterNoWrap {
  constructor(QWERTYUIOPASDFGHJKL, ZXCVBNMQW) {}
}

export class Test2LongParameterWrap {
  constructor(
    QWERTYUIOPASDFGHJKLQWERTYUIOPAS,
    ZXCVBNMQWEZXCVBNMQWEZXCVBNMQWE
  ) {}
}
