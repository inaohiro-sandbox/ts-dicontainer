// import {expect} from "chai";

import { diContainer } from "./inversify.config";
import { TYPES } from "./types";
import { Person } from "./interfaces";

const Alice = diContainer.get<Person>(TYPES.Person);

// expect(Alice.aisatsu()).to.equal('first test implementation.');
