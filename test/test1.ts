import { describe, it } from "mocha";
import { assert } from "chai";
import { diContainer } from "../src/inversify.config";
import { Person } from "../src/interfaces";
import { TYPES } from "../src/types";

const Alice = diContainer.get<Person>(TYPES.Person);

describe("di container test:", () => {
  it("Alice should say, first test implementation", () => {
    assert.equal(Alice.aisatsu(), "first test implementation.");
  });
});
