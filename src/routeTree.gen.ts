/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProfileImport } from './routes/profile'
import { Route as LoginImport } from './routes/login'
import { Route as ExpensiveImport } from './routes/expensive'
import { Route as DashboardRouteImport } from './routes/dashboard.route'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardIndexImport } from './routes/dashboard.index'
import { Route as PathlessLayoutRouteBImport } from './routes/_pathlessLayout.route-b'
import { Route as PathlessLayoutRouteAImport } from './routes/_pathlessLayout.route-a'
import { Route as DashboardInvoicesIndexImport } from './routes/dashboard.invoices.index'

// Create/Update Routes

const ProfileRoute = ProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const ExpensiveRoute = ExpensiveImport.update({
  id: '/expensive',
  path: '/expensive',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRouteRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const PathlessLayoutRouteBRoute = PathlessLayoutRouteBImport.update({
  id: '/_pathlessLayout/route-b',
  path: '/route-b',
  getParentRoute: () => rootRoute,
} as any)

const PathlessLayoutRouteARoute = PathlessLayoutRouteAImport.update({
  id: '/_pathlessLayout/route-a',
  path: '/route-a',
  getParentRoute: () => rootRoute,
} as any)

const DashboardInvoicesIndexRoute = DashboardInvoicesIndexImport.update({
  id: '/invoices/',
  path: '/invoices/',
  getParentRoute: () => DashboardRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRoute
    }
    '/expensive': {
      id: '/expensive'
      path: '/expensive'
      fullPath: '/expensive'
      preLoaderRoute: typeof ExpensiveImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/_pathlessLayout/route-a': {
      id: '/_pathlessLayout/route-a'
      path: '/route-a'
      fullPath: '/route-a'
      preLoaderRoute: typeof PathlessLayoutRouteAImport
      parentRoute: typeof rootRoute
    }
    '/_pathlessLayout/route-b': {
      id: '/_pathlessLayout/route-b'
      path: '/route-b'
      fullPath: '/route-b'
      preLoaderRoute: typeof PathlessLayoutRouteBImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardRouteImport
    }
    '/dashboard/invoices/': {
      id: '/dashboard/invoices/'
      path: '/invoices'
      fullPath: '/dashboard/invoices'
      preLoaderRoute: typeof DashboardInvoicesIndexImport
      parentRoute: typeof DashboardRouteImport
    }
  }
}

// Create and export the route tree

interface DashboardRouteRouteChildren {
  DashboardIndexRoute: typeof DashboardIndexRoute
  DashboardInvoicesIndexRoute: typeof DashboardInvoicesIndexRoute
}

const DashboardRouteRouteChildren: DashboardRouteRouteChildren = {
  DashboardIndexRoute: DashboardIndexRoute,
  DashboardInvoicesIndexRoute: DashboardInvoicesIndexRoute,
}

const DashboardRouteRouteWithChildren = DashboardRouteRoute._addFileChildren(
  DashboardRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/expensive': typeof ExpensiveRoute
  '/login': typeof LoginRoute
  '/profile': typeof ProfileRoute
  '/route-a': typeof PathlessLayoutRouteARoute
  '/route-b': typeof PathlessLayoutRouteBRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/dashboard/invoices': typeof DashboardInvoicesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/expensive': typeof ExpensiveRoute
  '/login': typeof LoginRoute
  '/profile': typeof ProfileRoute
  '/route-a': typeof PathlessLayoutRouteARoute
  '/route-b': typeof PathlessLayoutRouteBRoute
  '/dashboard': typeof DashboardIndexRoute
  '/dashboard/invoices': typeof DashboardInvoicesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/expensive': typeof ExpensiveRoute
  '/login': typeof LoginRoute
  '/profile': typeof ProfileRoute
  '/_pathlessLayout/route-a': typeof PathlessLayoutRouteARoute
  '/_pathlessLayout/route-b': typeof PathlessLayoutRouteBRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/dashboard/invoices/': typeof DashboardInvoicesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard'
    | '/expensive'
    | '/login'
    | '/profile'
    | '/route-a'
    | '/route-b'
    | '/dashboard/'
    | '/dashboard/invoices'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/expensive'
    | '/login'
    | '/profile'
    | '/route-a'
    | '/route-b'
    | '/dashboard'
    | '/dashboard/invoices'
  id:
    | '__root__'
    | '/'
    | '/dashboard'
    | '/expensive'
    | '/login'
    | '/profile'
    | '/_pathlessLayout/route-a'
    | '/_pathlessLayout/route-b'
    | '/dashboard/'
    | '/dashboard/invoices/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardRouteRoute: typeof DashboardRouteRouteWithChildren
  ExpensiveRoute: typeof ExpensiveRoute
  LoginRoute: typeof LoginRoute
  ProfileRoute: typeof ProfileRoute
  PathlessLayoutRouteARoute: typeof PathlessLayoutRouteARoute
  PathlessLayoutRouteBRoute: typeof PathlessLayoutRouteBRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRouteRoute: DashboardRouteRouteWithChildren,
  ExpensiveRoute: ExpensiveRoute,
  LoginRoute: LoginRoute,
  ProfileRoute: ProfileRoute,
  PathlessLayoutRouteARoute: PathlessLayoutRouteARoute,
  PathlessLayoutRouteBRoute: PathlessLayoutRouteBRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/expensive",
        "/login",
        "/profile",
        "/_pathlessLayout/route-a",
        "/_pathlessLayout/route-b"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.route.tsx",
      "children": [
        "/dashboard/",
        "/dashboard/invoices/"
      ]
    },
    "/expensive": {
      "filePath": "expensive.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/profile": {
      "filePath": "profile.tsx"
    },
    "/_pathlessLayout/route-a": {
      "filePath": "_pathlessLayout.route-a.tsx"
    },
    "/_pathlessLayout/route-b": {
      "filePath": "_pathlessLayout.route-b.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard.index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/invoices/": {
      "filePath": "dashboard.invoices.index.tsx",
      "parent": "/dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
