/**
 * @generated SignedSource<<dd0c4d874aef59e3c746c325d62011d2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pageIssuesQuery$variables = {};
export type pageIssuesQuery$data = {
  readonly issuesCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
      };
    }>;
  } | null;
};
export type pageIssuesQuery = {
  response: pageIssuesQuery$data;
  variables: pageIssuesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 10
      }
    ],
    "concreteType": "issuesConnection",
    "kind": "LinkedField",
    "name": "issuesCollection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "issuesEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "issues",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "issuesCollection(first:10)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageIssuesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pageIssuesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "199b3fc7334501de046b38dbc3b8ca14",
    "id": null,
    "metadata": {},
    "name": "pageIssuesQuery",
    "operationKind": "query",
    "text": "query pageIssuesQuery {\n  issuesCollection(first: 10) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d0030debc5b73c37934c3b2e4119f8ab";

export default node;
