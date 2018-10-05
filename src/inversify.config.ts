import { Container } from "inversify";
import { TYPES } from "./types";
import { Test, Person } from "./interfaces";
import { TestImpl1, TestImpl2, PersonImpl } from "./entities";

const diContainer = new Container();
diContainer.bind<Test>(TYPES.Test).to(TestImpl1);
diContainer.bind<Person>(TYPES.Person).to(PersonImpl);

export { diContainer };