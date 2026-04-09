/**
 * @generated SignedSource<<ca47234081f69a86e28a67cac22bcea0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueRow_issue$data = {
  readonly created_at: any | null;
  readonly description: string | null;
  readonly id: string;
  readonly priority: string | null;
  readonly status: string | null;
  readonly title: string;
  readonly " $fragmentType": "IssueRow_issue";
};
export type IssueRow_issue$key = {
  readonly " $data"?: IssueRow_issue$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueRow_issue">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueRow_issue",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "issues",
  "abstractKey": null
};

(node as any).hash = "be36826ab12e266c06f34c1cc7a03457";

export default node;
