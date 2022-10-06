class TestShortParametersNoWrap {
  constructor(a: A, b: b, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) {}
}

class TestShortParametersWrap {
  constructor(
    a: A,
    b: b,
    c: C,
    d: D,
    e: E,
    f: F,
    g: G,
    h: H,
    i: I,
    j: J,
    k: K
  ) {}
}

function testFunctionNoWrap(a: A, b: b, c: C, d: D, e: E, f: F, g: G, h: H) {}

function testFunctionWrap(
  a: A,
  b: b,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  i: I,
  j: J,
  k: K
) {}

export class Test1LongParameterNoWrap {
  constructor(qwertyuiopasdfghjklzxcvbnmqwer: QWERTYUIOPASDFGHJKLZXCVBNMQWER) {}
}

export class Test1LongParameterWrap {
  constructor(
    qwertyuiopasdfghjklzxcvbnmqwert: QWERTYUIOPASDFGHJKLZXCVBNMQWER
  ) {}
}

export class Test2LongParameterNoWrap {
  constructor(qwertyuiopasdfghjkl: QWERTYUIOPASDFGHJKL, zxcvbnmqw: ZXCVBNMQW) {}
}

export class Test2LongParameterWrap {
  constructor(
    qwertyuiopasdfghjkl: QWERTYUIOPASDFGHJKL,
    zxcvbnmqwe: ZXCVBNMQWE
  ) {}
}
