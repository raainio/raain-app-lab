"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5534],{

/***/ 45534:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_route": () => (/* binding */ Route),
/* harmony export */   "ion_route_redirect": () => (/* binding */ RouteRedirect),
/* harmony export */   "ion_router": () => (/* binding */ Router),
/* harmony export */   "ion_router_link": () => (/* binding */ RouterLink)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-c74e4951.js */ 95823);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-7670341c.js */ 50320);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const Route = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionRouteDataChanged = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionRouteDataChanged", 7);
    /**
     * Relative path that needs to match in order for this route to apply.
     *
     * Accepts paths similar to expressjs so that you can define parameters
     * in the url /foo/:bar where bar would be available in incoming props.
     */
    this.url = '';
  }
  onUpdate(newValue) {
    this.ionRouteDataChanged.emit(newValue);
  }
  onComponentProps(newValue, oldValue) {
    if (newValue === oldValue) {
      return;
    }
    const keys1 = newValue ? Object.keys(newValue) : [];
    const keys2 = oldValue ? Object.keys(oldValue) : [];
    if (keys1.length !== keys2.length) {
      this.onUpdate(newValue);
      return;
    }
    for (const key of keys1) {
      if (newValue[key] !== oldValue[key]) {
        this.onUpdate(newValue);
        return;
      }
    }
  }
  connectedCallback() {
    this.ionRouteDataChanged.emit();
  }
  static get watchers() {
    return {
      "url": ["onUpdate"],
      "component": ["onUpdate"],
      "componentProps": ["onComponentProps"]
    };
  }
};
const RouteRedirect = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionRouteRedirectChanged = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionRouteRedirectChanged", 7);
  }
  propDidChange() {
    this.ionRouteRedirectChanged.emit();
  }
  connectedCallback() {
    this.ionRouteRedirectChanged.emit();
  }
  static get watchers() {
    return {
      "from": ["propDidChange"],
      "to": ["propDidChange"]
    };
  }
};
const ROUTER_INTENT_NONE = 'root';
const ROUTER_INTENT_FORWARD = 'forward';
const ROUTER_INTENT_BACK = 'back';

/** Join the non empty segments with "/". */
const generatePath = segments => {
  const path = segments.filter(s => s.length > 0).join('/');
  return '/' + path;
};
const generateUrl = (segments, useHash, queryString) => {
  let url = generatePath(segments);
  if (useHash) {
    url = '#' + url;
  }
  if (queryString !== undefined) {
    url += '?' + queryString;
  }
  return url;
};
const writeSegments = (history, root, useHash, segments, direction, state, queryString) => {
  const url = generateUrl([...parsePath(root).segments, ...segments], useHash, queryString);
  if (direction === ROUTER_INTENT_FORWARD) {
    history.pushState(state, '', url);
  } else {
    history.replaceState(state, '', url);
  }
};
/**
 * Transforms a chain to a list of segments.
 *
 * Notes:
 * - parameter segments of the form :param are replaced with their value,
 * - null is returned when a value is missing for any parameter segment.
 */
const chainToSegments = chain => {
  const segments = [];
  for (const route of chain) {
    for (const segment of route.segments) {
      if (segment[0] === ':') {
        const param = route.params && route.params[segment.slice(1)];
        if (!param) {
          return null;
        }
        segments.push(param);
      } else if (segment !== '') {
        segments.push(segment);
      }
    }
  }
  return segments;
};
/**
 * Removes the prefix segments from the path segments.
 *
 * Return:
 * - null when the path segments do not start with the passed prefix,
 * - the path segments after the prefix otherwise.
 */
const removePrefix = (prefix, segments) => {
  if (prefix.length > segments.length) {
    return null;
  }
  if (prefix.length <= 1 && prefix[0] === '') {
    return segments;
  }
  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i] !== segments[i]) {
      return null;
    }
  }
  if (segments.length === prefix.length) {
    return [''];
  }
  return segments.slice(prefix.length);
};
const readSegments = (loc, root, useHash) => {
  const prefix = parsePath(root).segments;
  const pathname = useHash ? loc.hash.slice(1) : loc.pathname;
  const segments = parsePath(pathname).segments;
  return removePrefix(prefix, segments);
};
/**
 * Parses the path to:
 * - segments an array of '/' separated parts,
 * - queryString (undefined when no query string).
 */
const parsePath = path => {
  let segments = [''];
  let queryString;
  if (path != null) {
    const qsStart = path.indexOf('?');
    if (qsStart > -1) {
      queryString = path.substring(qsStart + 1);
      path = path.substring(0, qsStart);
    }
    segments = path.split('/').map(s => s.trim()).filter(s => s.length > 0);
    if (segments.length === 0) {
      segments = [''];
    }
  }
  return {
    segments,
    queryString
  };
};
const printRoutes = routes => {
  console.group(`[ion-core] ROUTES[${routes.length}]`);
  for (const chain of routes) {
    const segments = [];
    chain.forEach(r => segments.push(...r.segments));
    const ids = chain.map(r => r.id);
    console.debug(`%c ${generatePath(segments)}`, 'font-weight: bold; padding-left: 20px', '=>\t', `(${ids.join(', ')})`);
  }
  console.groupEnd();
};
const printRedirects = redirects => {
  console.group(`[ion-core] REDIRECTS[${redirects.length}]`);
  for (const redirect of redirects) {
    if (redirect.to) {
      console.debug('FROM: ', `$c ${generatePath(redirect.from)}`, 'font-weight: bold', ' TO: ', `$c ${generatePath(redirect.to.segments)}`, 'font-weight: bold');
    }
  }
  console.groupEnd();
};

/**
 * Activates the passed route chain.
 *
 * There must be exactly one outlet per route entry in the chain.
 *
 * The methods calls setRouteId on each of the outlet with the corresponding route entry in the chain.
 * setRouteId will create or select the view in the outlet.
 */
const _writeNavState = /*#__PURE__*/function () {
  var _ref = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (root, chain, direction, index, changed = false, animation) {
    try {
      // find next navigation outlet in the DOM
      const outlet = searchNavNode(root);
      // make sure we can continue interacting the DOM, otherwise abort
      if (index >= chain.length || !outlet) {
        return changed;
      }
      yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.c)(outlet, resolve));
      const route = chain[index];
      const result = yield outlet.setRouteId(route.id, route.params, direction, animation);
      // if the outlet changed the page, reset navigation to neutral (no direction)
      // this means nested outlets will not animate
      if (result.changed) {
        direction = ROUTER_INTENT_NONE;
        changed = true;
      }
      // recursively set nested outlets
      changed = yield _writeNavState(result.element, chain, direction, index + 1, changed, animation);
      // once all nested outlets are visible let's make the parent visible too,
      // using markVisible prevents flickering
      if (result.markVisible) {
        yield result.markVisible();
      }
      return changed;
    } catch (e) {
      console.error(e);
      return false;
    }
  });
  return function writeNavState(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Recursively walks the outlet in the DOM.
 *
 * The function returns a list of RouteID corresponding to each of the outlet and the last outlet without a RouteID.
 */
const readNavState = /*#__PURE__*/function () {
  var _ref2 = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (root) {
    const ids = [];
    let outlet;
    let node = root;
    // eslint-disable-next-line no-cond-assign
    while (outlet = searchNavNode(node)) {
      const id = yield outlet.getRouteId();
      if (id) {
        node = id.element;
        id.element = undefined;
        ids.push(id);
      } else {
        break;
      }
    }
    return {
      ids,
      outlet
    };
  });
  return function readNavState(_x5) {
    return _ref2.apply(this, arguments);
  };
}();
const waitUntilNavNode = () => {
  if (searchNavNode(document.body)) {
    return Promise.resolve();
  }
  return new Promise(resolve => {
    window.addEventListener('ionNavWillLoad', () => resolve(), {
      once: true
    });
  });
};
/** Selector for all the outlets supported by the router. */
const OUTLET_SELECTOR = ':not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet';
const searchNavNode = root => {
  if (!root) {
    return undefined;
  }
  if (root.matches(OUTLET_SELECTOR)) {
    return root;
  }
  const outlet = root.querySelector(OUTLET_SELECTOR);
  return outlet !== null && outlet !== void 0 ? outlet : undefined;
};

/**
 * Returns whether the given redirect matches the given path segments.
 *
 * A redirect matches when the segments of the path and redirect.from are equal.
 * Note that segments are only checked until redirect.from contains a '*' which matches any path segment.
 * The path ['some', 'path', 'to', 'page'] matches both ['some', 'path', 'to', 'page'] and ['some', 'path', '*'].
 */
const matchesRedirect = (segments, redirect) => {
  const {
    from,
    to
  } = redirect;
  if (to === undefined) {
    return false;
  }
  if (from.length > segments.length) {
    return false;
  }
  for (let i = 0; i < from.length; i++) {
    const expected = from[i];
    if (expected === '*') {
      return true;
    }
    if (expected !== segments[i]) {
      return false;
    }
  }
  return from.length === segments.length;
};
/** Returns the first redirect matching the path segments or undefined when no match found. */
const findRouteRedirect = (segments, redirects) => {
  return redirects.find(redirect => matchesRedirect(segments, redirect));
};
const matchesIDs = (ids, chain) => {
  const len = Math.min(ids.length, chain.length);
  let score = 0;
  for (let i = 0; i < len; i++) {
    const routeId = ids[i];
    const routeChain = chain[i];
    // Skip results where the route id does not match the chain at the same index
    if (routeId.id.toLowerCase() !== routeChain.id) {
      break;
    }
    if (routeId.params) {
      const routeIdParams = Object.keys(routeId.params);
      // Only compare routes with the chain that have the same number of parameters.
      if (routeIdParams.length === routeChain.segments.length) {
        // Maps the route's params into a path based on the path variable names,
        // to compare against the route chain format.
        //
        // Before:
        // ```ts
        // {
        //  params: {
        //    s1: 'a',
        //    s2: 'b'
        //  }
        // }
        // ```
        //
        // After:
        // ```ts
        // [':s1',':s2']
        // ```
        //
        const pathWithParams = routeIdParams.map(key => `:${key}`);
        for (let j = 0; j < pathWithParams.length; j++) {
          // Skip results where the path variable is not a match
          if (pathWithParams[j].toLowerCase() !== routeChain.segments[j]) {
            break;
          }
          // Weight path matches for the same index higher.
          score++;
        }
      }
    }
    // Weight id matches
    score++;
  }
  return score;
};
/**
 * Matches the segments against the chain.
 *
 * Returns:
 * - null when there is no match,
 * - a chain with the params properties updated with the parameter segments on match.
 */
const matchesSegments = (segments, chain) => {
  const inputSegments = new RouterSegments(segments);
  let matchesDefault = false;
  let allparams;
  for (let i = 0; i < chain.length; i++) {
    const chainSegments = chain[i].segments;
    if (chainSegments[0] === '') {
      matchesDefault = true;
    } else {
      for (const segment of chainSegments) {
        const data = inputSegments.next();
        // data param
        if (segment[0] === ':') {
          if (data === '') {
            return null;
          }
          allparams = allparams || [];
          const params = allparams[i] || (allparams[i] = {});
          params[segment.slice(1)] = data;
        } else if (data !== segment) {
          return null;
        }
      }
      matchesDefault = false;
    }
  }
  const matches = matchesDefault ? matchesDefault === (inputSegments.next() === '') : true;
  if (!matches) {
    return null;
  }
  if (allparams) {
    return chain.map((route, i) => ({
      id: route.id,
      segments: route.segments,
      params: mergeParams(route.params, allparams[i]),
      beforeEnter: route.beforeEnter,
      beforeLeave: route.beforeLeave
    }));
  }
  return chain;
};
/**
 * Merges the route parameter objects.
 * Returns undefined when both parameters are undefined.
 */
const mergeParams = (a, b) => {
  return a || b ? Object.assign(Object.assign({}, a), b) : undefined;
};
/**
 * Finds the best match for the ids in the chains.
 *
 * Returns the best match or null when no match is found.
 * When a chain is returned the parameters are updated from the RouteIDs.
 * That is they contain both the componentProps of the <ion-route> and the parameter segment.
 */
const findChainForIDs = (ids, chains) => {
  let match = null;
  let maxMatches = 0;
  for (const chain of chains) {
    const score = matchesIDs(ids, chain);
    if (score > maxMatches) {
      match = chain;
      maxMatches = score;
    }
  }
  if (match) {
    return match.map((route, i) => {
      var _a;
      return {
        id: route.id,
        segments: route.segments,
        params: mergeParams(route.params, (_a = ids[i]) === null || _a === void 0 ? void 0 : _a.params)
      };
    });
  }
  return null;
};
/**
 * Finds the best match for the segments in the chains.
 *
 * Returns the best match or null when no match is found.
 * When a chain is returned the parameters are updated from the segments.
 * That is they contain both the componentProps of the <ion-route> and the parameter segments.
 */
const findChainForSegments = (segments, chains) => {
  let match = null;
  let bestScore = 0;
  for (const chain of chains) {
    const matchedChain = matchesSegments(segments, chain);
    if (matchedChain !== null) {
      const score = computePriority(matchedChain);
      if (score > bestScore) {
        bestScore = score;
        match = matchedChain;
      }
    }
  }
  return match;
};
/**
 * Computes the priority of a chain.
 *
 * Parameter segments are given a lower priority over fixed segments.
 *
 * Considering the following 2 chains matching the path /path/to/page:
 * - /path/to/:where
 * - /path/to/page
 *
 * The second one will be given a higher priority because "page" is a fixed segment (vs ":where", a parameter segment).
 */
const computePriority = chain => {
  let score = 1;
  let level = 1;
  for (const route of chain) {
    for (const segment of route.segments) {
      if (segment[0] === ':') {
        score += Math.pow(1, level);
      } else if (segment !== '') {
        score += Math.pow(2, level);
      }
      level++;
    }
  }
  return score;
};
class RouterSegments {
  constructor(segments) {
    this.segments = segments.slice();
  }
  next() {
    if (this.segments.length > 0) {
      return this.segments.shift();
    }
    return '';
  }
}
const readProp = (el, prop) => {
  if (prop in el) {
    return el[prop];
  }
  if (el.hasAttribute(prop)) {
    return el.getAttribute(prop);
  }
  return null;
};
/**
 * Extracts the redirects (that is <ion-route-redirect> elements inside the root).
 *
 * The redirects are returned as a list of RouteRedirect.
 */
const readRedirects = root => {
  return Array.from(root.children).filter(el => el.tagName === 'ION-ROUTE-REDIRECT').map(el => {
    const to = readProp(el, 'to');
    return {
      from: parsePath(readProp(el, 'from')).segments,
      to: to == null ? undefined : parsePath(to)
    };
  });
};
/**
 * Extracts all the routes (that is <ion-route> elements inside the root).
 *
 * The routes are returned as a list of chains - the flattened tree.
 */
const readRoutes = root => {
  return flattenRouterTree(readRouteNodes(root));
};
/**
 * Reads the route nodes as a tree modeled after the DOM tree of <ion-route> elements.
 *
 * Note: routes without a component are ignored together with their children.
 */
const readRouteNodes = node => {
  return Array.from(node.children).filter(el => el.tagName === 'ION-ROUTE' && el.component).map(el => {
    const component = readProp(el, 'component');
    return {
      segments: parsePath(readProp(el, 'url')).segments,
      id: component.toLowerCase(),
      params: el.componentProps,
      beforeLeave: el.beforeLeave,
      beforeEnter: el.beforeEnter,
      children: readRouteNodes(el)
    };
  });
};
/**
 * Flattens a RouterTree in a list of chains.
 *
 * Each chain represents a path from the root node to a terminal node.
 */
const flattenRouterTree = nodes => {
  const chains = [];
  for (const node of nodes) {
    flattenNode([], chains, node);
  }
  return chains;
};
/** Flattens a route node recursively and push each branch to the chains list. */
const flattenNode = (chain, chains, node) => {
  chain = [...chain, {
    id: node.id,
    segments: node.segments,
    params: node.params,
    beforeLeave: node.beforeLeave,
    beforeEnter: node.beforeEnter
  }];
  if (node.children.length === 0) {
    chains.push(chain);
    return;
  }
  for (const child of node.children) {
    flattenNode(chain, chains, child);
  }
};
const Router = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionRouteWillChange = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionRouteWillChange", 7);
    this.ionRouteDidChange = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionRouteDidChange", 7);
    this.previousPath = null;
    this.busy = false;
    this.state = 0;
    this.lastState = 0;
    /**
     * The root path to use when matching URLs. By default, this is set to "/", but you can specify
     * an alternate prefix for all URL paths.
     */
    this.root = '/';
    /**
     * The router can work in two "modes":
     * - With hash: `/index.html#/path/to/page`
     * - Without hash: `/path/to/page`
     *
     * Using one or another might depend in the requirements of your app and/or where it's deployed.
     *
     * Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might
     * requires additional server-side configuration in order to properly work.
     *
     * On the other side hash-navigation is much easier to deploy, it even works over the file protocol.
     *
     * By default, this property is `true`, change to `false` to allow hash-less URLs.
     */
    this.useHash = true;
  }
  componentWillLoad() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield waitUntilNavNode();
      const canProceed = yield _this.runGuards(_this.getSegments());
      if (canProceed !== true) {
        if (typeof canProceed === 'object') {
          const {
            redirect
          } = canProceed;
          const path = parsePath(redirect);
          _this.setSegments(path.segments, ROUTER_INTENT_NONE, path.queryString);
          yield _this.writeNavStateRoot(path.segments, ROUTER_INTENT_NONE);
        }
      } else {
        yield _this.onRoutesChanged();
      }
    })();
  }
  componentDidLoad() {
    window.addEventListener('ionRouteRedirectChanged', (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.q)(this.onRedirectChanged.bind(this), 10));
    window.addEventListener('ionRouteDataChanged', (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.q)(this.onRoutesChanged.bind(this), 100));
  }
  onPopState() {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const direction = _this2.historyDirection();
      let segments = _this2.getSegments();
      const canProceed = yield _this2.runGuards(segments);
      if (canProceed !== true) {
        if (typeof canProceed === 'object') {
          segments = parsePath(canProceed.redirect).segments;
        } else {
          return false;
        }
      }
      return _this2.writeNavStateRoot(segments, direction);
    })();
  }
  onBackButton(ev) {
    ev.detail.register(0, processNextHandler => {
      this.back();
      processNextHandler();
    });
  }
  /** @internal */
  canTransition() {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const canProceed = yield _this3.runGuards();
      if (canProceed !== true) {
        if (typeof canProceed === 'object') {
          return canProceed.redirect;
        } else {
          return false;
        }
      }
      return true;
    })();
  }
  /**
   * Navigate to the specified path.
   *
   * @param path The path to navigate to.
   * @param direction The direction of the animation. Defaults to `"forward"`.
   */
  push(_x6) {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (path, direction = 'forward', animation) {
      var _a;
      if (path.startsWith('.')) {
        const currentPath = (_a = _this4.previousPath) !== null && _a !== void 0 ? _a : '/';
        // Convert currentPath to an URL by pre-pending a protocol and a host to resolve the relative path.
        const url = new URL(path, `https://host/${currentPath}`);
        path = url.pathname + url.search;
      }
      let parsedPath = parsePath(path);
      const canProceed = yield _this4.runGuards(parsedPath.segments);
      if (canProceed !== true) {
        if (typeof canProceed === 'object') {
          parsedPath = parsePath(canProceed.redirect);
        } else {
          return false;
        }
      }
      _this4.setSegments(parsedPath.segments, direction, parsedPath.queryString);
      return _this4.writeNavStateRoot(parsedPath.segments, direction, animation);
    }).apply(this, arguments);
  }
  /** Go back to previous page in the window.history. */
  back() {
    window.history.back();
    return Promise.resolve(this.waitPromise);
  }
  /** @internal */
  printDebug() {
    var _this5 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      printRoutes(readRoutes(_this5.el));
      printRedirects(readRedirects(_this5.el));
    })();
  }
  /** @internal */
  navChanged(direction) {
    var _this6 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.busy) {
        console.warn('[ion-router] router is busy, navChanged was cancelled');
        return false;
      }
      const {
        ids,
        outlet
      } = yield readNavState(window.document.body);
      const routes = readRoutes(_this6.el);
      const chain = findChainForIDs(ids, routes);
      if (!chain) {
        console.warn('[ion-router] no matching URL for ', ids.map(i => i.id));
        return false;
      }
      const segments = chainToSegments(chain);
      if (!segments) {
        console.warn('[ion-router] router could not match path because some required param is missing');
        return false;
      }
      _this6.setSegments(segments, direction);
      yield _this6.safeWriteNavState(outlet, chain, ROUTER_INTENT_NONE, segments, null, ids.length);
      return true;
    })();
  }
  /** This handler gets called when a `ion-route-redirect` component is added to the DOM or if the from or to property of such node changes. */
  onRedirectChanged() {
    const segments = this.getSegments();
    if (segments && findRouteRedirect(segments, readRedirects(this.el))) {
      this.writeNavStateRoot(segments, ROUTER_INTENT_NONE);
    }
  }
  /** This handler gets called when a `ion-route` component is added to the DOM or if the from or to property of such node changes. */
  onRoutesChanged() {
    return this.writeNavStateRoot(this.getSegments(), ROUTER_INTENT_NONE);
  }
  historyDirection() {
    var _a;
    const win = window;
    if (win.history.state === null) {
      this.state++;
      win.history.replaceState(this.state, win.document.title, (_a = win.document.location) === null || _a === void 0 ? void 0 : _a.href);
    }
    const state = win.history.state;
    const lastState = this.lastState;
    this.lastState = state;
    if (state > lastState || state >= lastState && lastState > 0) {
      return ROUTER_INTENT_FORWARD;
    }
    if (state < lastState) {
      return ROUTER_INTENT_BACK;
    }
    return ROUTER_INTENT_NONE;
  }
  writeNavStateRoot(segments, direction, animation) {
    var _this7 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!segments) {
        console.error('[ion-router] URL is not part of the routing set');
        return false;
      }
      // lookup redirect rule
      const redirects = readRedirects(_this7.el);
      const redirect = findRouteRedirect(segments, redirects);
      let redirectFrom = null;
      if (redirect) {
        const {
          segments: toSegments,
          queryString
        } = redirect.to;
        _this7.setSegments(toSegments, direction, queryString);
        redirectFrom = redirect.from;
        segments = toSegments;
      }
      // lookup route chain
      const routes = readRoutes(_this7.el);
      const chain = findChainForSegments(segments, routes);
      if (!chain) {
        console.error('[ion-router] the path does not match any route');
        return false;
      }
      // write DOM give
      return _this7.safeWriteNavState(document.body, chain, direction, segments, redirectFrom, 0, animation);
    })();
  }
  safeWriteNavState(_x7, _x8, _x9, _x0, _x1) {
    var _this8 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (node, chain, direction, segments, redirectFrom, index = 0, animation) {
      const unlock = yield _this8.lock();
      let changed = false;
      try {
        changed = yield _this8.writeNavState(node, chain, direction, segments, redirectFrom, index, animation);
      } catch (e) {
        console.error(e);
      }
      unlock();
      return changed;
    }).apply(this, arguments);
  }
  lock() {
    var _this9 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const p = _this9.waitPromise;
      let resolve;
      _this9.waitPromise = new Promise(r => resolve = r);
      if (p !== undefined) {
        yield p;
      }
      return resolve;
    })();
  }
  /**
   * Executes the beforeLeave hook of the source route and the beforeEnter hook of the target route if they exist.
   *
   * When the beforeLeave hook does not return true (to allow navigating) then that value is returned early and the beforeEnter is executed.
   * Otherwise the beforeEnterHook hook of the target route is executed.
   */
  runGuards() {
    var _this0 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (to = _this0.getSegments(), from) {
      if (from === undefined) {
        from = parsePath(_this0.previousPath).segments;
      }
      if (!to || !from) {
        return true;
      }
      const routes = readRoutes(_this0.el);
      const fromChain = findChainForSegments(from, routes);
      const beforeLeaveHook = fromChain && fromChain[fromChain.length - 1].beforeLeave;
      const canLeave = beforeLeaveHook ? yield beforeLeaveHook() : true;
      if (canLeave === false || typeof canLeave === 'object') {
        return canLeave;
      }
      const toChain = findChainForSegments(to, routes);
      const beforeEnterHook = toChain && toChain[toChain.length - 1].beforeEnter;
      return beforeEnterHook ? beforeEnterHook() : true;
    }).apply(this, arguments);
  }
  writeNavState(_x10, _x11, _x12, _x13, _x14) {
    var _this1 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (node, chain, direction, segments, redirectFrom, index = 0, animation) {
      if (_this1.busy) {
        console.warn('[ion-router] router is busy, transition was cancelled');
        return false;
      }
      _this1.busy = true;
      // generate route event and emit will change
      const routeEvent = _this1.routeChangeEvent(segments, redirectFrom);
      if (routeEvent) {
        _this1.ionRouteWillChange.emit(routeEvent);
      }
      const changed = yield _writeNavState(node, chain, direction, index, false, animation);
      _this1.busy = false;
      // emit did change
      if (routeEvent) {
        _this1.ionRouteDidChange.emit(routeEvent);
      }
      return changed;
    }).apply(this, arguments);
  }
  setSegments(segments, direction, queryString) {
    this.state++;
    writeSegments(window.history, this.root, this.useHash, segments, direction, this.state, queryString);
  }
  getSegments() {
    return readSegments(window.location, this.root, this.useHash);
  }
  routeChangeEvent(toSegments, redirectFromSegments) {
    const from = this.previousPath;
    const to = generatePath(toSegments);
    this.previousPath = to;
    if (to === from) {
      return null;
    }
    const redirectedFrom = redirectFromSegments ? generatePath(redirectFromSegments) : null;
    return {
      from,
      redirectedFrom,
      to
    };
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
};
const routerLinkCss = ":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";
const RouterLink = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    this.routerDirection = 'forward';
    this.onClick = ev => {
      (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__.o)(this.href, ev, this.routerDirection, this.routerAnimation);
    };
  }
  render() {
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    const attrs = {
      href: this.href,
      rel: this.rel,
      target: this.target
    };
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      onClick: this.onClick,
      class: (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__.c)(this.color, {
        [mode]: true,
        'ion-activatable': true
      })
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("a", Object.assign({}, attrs), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null)));
  }
};
RouterLink.style = routerLinkCss;


/***/ }),

/***/ 50320:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-7670341c.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};
const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }
  return [];
};
const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = /*#__PURE__*/function () {
  var _ref = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, ev, direction, animation) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
      const router = document.querySelector('ion-router');
      if (router) {
        if (ev != null) {
          ev.preventDefault();
        }
        return router.push(url, direction, animation);
      }
    }
    return false;
  });
  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();


/***/ })

}]);
//# sourceMappingURL=5534.6556c0ea4aac9d3e.js.map