import { Environment, Network, Store, RecordSource } from "relay-runtime";
import { fetchGraphQL } from "./fetchGraphQL";

export const environment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource())
});
