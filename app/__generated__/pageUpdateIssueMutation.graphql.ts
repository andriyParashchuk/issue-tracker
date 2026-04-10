/**
 * @generated SignedSource<<2b1784cab25ad87673e10528abae570e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type issuesUpdateInput = {
  assignee_id?: any | null;
  created_at?: any | null;
  description?: string | null;
  id?: any | null;
  priority?: string | null;
  status?: string | null;
  title?: string | null;
};
export type pageUpdateIssueMutation$variables = {
  id: any;
  set: issuesUpdateInput;
};
export type pageUpdateIssueMutation$data = {
  readonly updateissuesCollection: {
    readonly affectedCount: number;
    readonly records: ReadonlyArray<{
      readonly description: string | null;
      readonly id: string;
      readonly priority: string | null;
      readonly status: string | null;
      readonly title: string;
    }>;
  };
};
export type pageUpdateIssueMutation = {
  response: pageUpdateIssueMutation$data;
  variables: pageUpdateIssueMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "set"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "eq",
                "variableName": "id"
              }
            ],
            "kind": "ObjectValue",
            "name": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "filter"
      },
      {
        "kind": "Variable",
        "name": "set",
        "variableName": "set"
      }
    ],
    "concreteType": "issuesUpdateResponse",
    "kind": "LinkedField",
    "name": "updateissuesCollection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "affectedCount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "issues",
        "kind": "LinkedField",
        "name": "records",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "priority",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pageUpdateIssueMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pageUpdateIssueMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b44b30410fcfd0f2dd6ce00e97884623",
    "id": null,
    "metadata": {},
    "name": "pageUpdateIssueMutation",
    "operationKind": "mutation",
    "text": "mutation pageUpdateIssueMutation(\n  $id: UUID!\n  $set: issuesUpdateInput!\n) {\n  updateissuesCollection(filter: {id: {eq: $id}}, set: $set) {\n    affectedCount\n    records {\n      id\n      title\n      description\n      status\n      priority\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3a5ec5517efaac299a940e405cc37582";

export default node;
