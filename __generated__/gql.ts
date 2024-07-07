/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetProducts($shopId: ID!, $tagId: ID) {\n    tags(shopId: $shopId ) {\n      nodes {\n        name\n        position\n        displayTitle\n        slug\n        _id\n      }\n    }\n    catalogItems(\n      shopIds: [$shopId]\n      tagIds: [$tagId]\n    ) {\n      edges {\n        node {\n          ... on CatalogItemProduct {\n            product {\n              title\n              slug\n              description\n              _id\n              variants {\n                _id\n                title\n                media {\n                  URLs {\n                    small\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProductsDocument,
    "\n  query catalogItemProduct($shopId: ID!, $slugOrId: String!) {\n    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {\n      product {\n        title\n        slug\n        description\n        variants {\n          _id\n          title\n          attributeLabel\n          optionTitle\n          pricing {\n            displayPrice\n            price\n            currency {\n              code\n            }\n          }\n        }\n        primaryImage {\n          URLs {\n            medium\n            original\n          }\n        }\n      }\n    }\n  }\n": types.CatalogItemProductDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProducts($shopId: ID!, $tagId: ID) {\n    tags(shopId: $shopId ) {\n      nodes {\n        name\n        position\n        displayTitle\n        slug\n        _id\n      }\n    }\n    catalogItems(\n      shopIds: [$shopId]\n      tagIds: [$tagId]\n    ) {\n      edges {\n        node {\n          ... on CatalogItemProduct {\n            product {\n              title\n              slug\n              description\n              _id\n              variants {\n                _id\n                title\n                media {\n                  URLs {\n                    small\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProducts($shopId: ID!, $tagId: ID) {\n    tags(shopId: $shopId ) {\n      nodes {\n        name\n        position\n        displayTitle\n        slug\n        _id\n      }\n    }\n    catalogItems(\n      shopIds: [$shopId]\n      tagIds: [$tagId]\n    ) {\n      edges {\n        node {\n          ... on CatalogItemProduct {\n            product {\n              title\n              slug\n              description\n              _id\n              variants {\n                _id\n                title\n                media {\n                  URLs {\n                    small\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query catalogItemProduct($shopId: ID!, $slugOrId: String!) {\n    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {\n      product {\n        title\n        slug\n        description\n        variants {\n          _id\n          title\n          attributeLabel\n          optionTitle\n          pricing {\n            displayPrice\n            price\n            currency {\n              code\n            }\n          }\n        }\n        primaryImage {\n          URLs {\n            medium\n            original\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query catalogItemProduct($shopId: ID!, $slugOrId: String!) {\n    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {\n      product {\n        title\n        slug\n        description\n        variants {\n          _id\n          title\n          attributeLabel\n          optionTitle\n          pricing {\n            displayPrice\n            price\n            currency {\n              code\n            }\n          }\n        }\n        primaryImage {\n          URLs {\n            medium\n            original\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;