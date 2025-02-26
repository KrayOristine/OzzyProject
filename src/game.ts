/* eslint-disable @typescript-eslint/no-unused-vars */
  // Copyright (C) 2025  Kray Oristine

  // This program is free software: you can redistribute it and/or modify
  // it under the terms of the GNU General Public License as published by
  // the Free Software Foundation, either version 3 of the License, or
  // (at your option) any later version.

  // This program is distributed in the hope that it will be useful,
  // but WITHOUT ANY WARRANTY; without even the implied warranty of
  // MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  // GNU General Public License for more details.

  // You should have received a copy of the GNU General Public License
  // along with this program.  If not, see <https://www.gnu.org/licenses/>.


import * as h from "shared/hooks";
//import * as lg from "shared/Logger";
//import * as js from "shared/jsNative";
//import * as wb from "shared/worldBounds";
//import * as wex from "shared/WarEX";
//import * as ll from "shared/LinkedList";

// prepare modules import

//import * as d from "modules/damage";
//import * as ms from "modules/missile";
//import * as ns from "modules/noise";

// prepare games trigger import

// prepare other stuff?


// These below are just for specifying version
const BUILD_DATE = compiletime(() => new Date().toUTCString());
const TS_VERSION = compiletime(() => require("typescript").version);
const TSTL_VERSION = compiletime(() => require("typescript-to-lua").version);
//const MAP_VERSION = compiletime(() => require("./package.json").version);

function tsMain() {
	print(`Build Date: ${BUILD_DATE}`);
	print(`Typescript Version: ${TS_VERSION}`);
	print(`TSTL Version: ${TSTL_VERSION}`);
	//print(`Map Version: ${MAP_VERSION}`);
}

h.final(tsMain);
