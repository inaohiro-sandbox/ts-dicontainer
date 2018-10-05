import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Test, Person } from "./interfaces";
import { TYPES } from "./types";

@injectable()
class TestImpl1 implements Test {
  public greeting() {
    return "first test implementation.";
  }
}

@injectable()
class TestImpl2 implements Test {
  public greeting() {
    return "second test implementation.";
  }
}

@injectable()
class PersonImpl implements Person {
  private _test: Test;

  public constructor(@inject(TYPES.Test) test: Test) {
    this._test = test;
  }

  public aisatsu() {
    return this._test.greeting();
  }
}

export { TestImpl1, TestImpl2, PersonImpl };
