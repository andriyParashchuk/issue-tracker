/**
 * @generated SignedSource<<d0c6910040020401fa18358ea2e5210e>>
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
export type IssueFormMutation$variables = {
  id: any;
  set: issuesUpdateInput;
};
export type IssueFormMutation$data = {
  readonly updateissuesCollection: {
    readonly affectedCount: number;
    readonly records: ReadonlyArray<{
      readonly created_at: any | null;
      readonly description: string | null;
      readonly id: string;
      readonly priority: string | null;
      readonly status: string | null;
      readonly title: string;
    }>;
  };
};
export type IssueFormMutation = {
  response: IssueFormMutation$data;
  variables: IssueFormMutation$variables;
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "created_at",
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
    "name": "IssueFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IssueFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9839d2c01369cddcd8416ef3c9dc77a2",
    "id": null,
    "metadata": {},
    "name": "IssueFormMutation",
    "operationKind": "mutation",
    "text": "mutation IssueFormMutation(\n  $id: UUID!\n  $set: issuesUpdateInput!\n) {\n  updateissuesCollection(filter: {id: {eq: $id}}, set: $set) {\n    affectedCount\n    records {\n      id\n      title\n      description\n      status\n      priority\n      created_at\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f0701f073d10de560f5acf1bc093b723";

export default node;
