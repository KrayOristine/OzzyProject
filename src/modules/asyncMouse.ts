/**
  Copyright (C) ModdieMads
This software is provided 'as-is', without any express or implied
warranty.  In no event will the authors be held liable for any damages
arising from the use of this software.

Permission is granted to anyone to use this software for any purpose,
excluding commercial applications, and to alter it and redistribute it
freely, subject to the following restrictions:

1. The origin of this software must not be misrepresented; you must not
   claim that you wrote the original software. If you use this software
   in a product, an acknowledgment in the product documentation and public
   profiles IS REQUIRED.
2. Altered source versions must be plainly marked as such, and must not be
   misrepresented as being the original software.
3. This notice may not be removed or altered from any source distribution.
 */

/*
  //-+------------------------------------+---
  // | Perfect Async Mouse Screen XY v1.0 | --
  //-+------------------------------------+---
  //> https://www.hiveworkshop.com/threads/perfect-async-mouse-screen-xy.354135/

	- Originally made by ModdieMads, with special thanks to:
		- #modding channel on the HiveWorkshop Discord. The best part of modding WC3!
		- @Tasyen, for the herculean job of writing The Big UI-Frame Tutorial (https://www.hiveworkshop.com/pastebin/e23909d8468ff4942ccea268fbbcafd1.20598).
		- @Water, for the support while we're trying to push WC3 to its limits.
		- @Eikonium, for providing the DebugUtils and the IngameConsole. Big W.
		- @Vinz, for the crosshair texture!
  - Modified by Ozzzzymaniac with special thanks to:
    - ModdieMads for permission to analyze, modify, usage within the map
    - ChatGPT for helping me naming variable

  -- ATTENTION!
  -- 	The system has 8 getters for ease of use:
  --			GetMouseFrameX(), GetMouseFrameY(),
  --			GetMouseSaneX(), GetMouseSaneY()

  --	These are stabilized coords. It is done by using a buffer and a moving average.
  --			GetMouseFrameXStable(), GetMouseFrameYStable(),
--			GetMouseSaneXStable(), GetMouseSaneYStable()
*/

//The 3 pairs of coordinates this system can provide.
//They do as they are named, nothing too fancy.
//They are explained in more detail down below.

let mouseFrameX = 0;
let mouseFrameY = 0;

let mouseSaneX = 0;
let mouseSaneY = 0;


// Hello again, interloper! Welcome to another crazy project by me, Moddie!

// Today, we breakthrough the impossible!
// For years, perfect mouse tracking in a screen was the golden relic hidden inside the deepest abyss!
// But now, it is ours! From me and all the giants whose shoulders I have stood on, to you.

// IMPORTANT NOTE:
// Please don't take any of this too seriously. I am playing up a character.
// I aspire to be an entertainer, if nothing else.

// For today's show, the impossible is now possible!
// Perfect mouse tracking in screen space, in an asynchronous fashion!

// Read on, interloper, and bask yourself in the blazing light of the future!

let globalFrame = 0;


// WE BEGIN EXTRA HOT, SUPER DUPER ULTIMATE INLINER
const enum Inliner {
  // We begin hot! This here are the parameters for a Cybernetic Quadratic Lattice.
  // Cybernetic not in the sense of science fiction, but in the etymology's.
  // Cybernetic as in derived from principles of circular causal processes.
  // As in, self-centering quadratic lattice.
  // Fun fact: Supposedly, this is a Grandmaster-level coding technique.
  // Meaning that if you know how to build one and how to use it, you are in the 0.1 percentile of coders! yay.
  // I shall explain in further detail what it does when we get to the functions.
  TRACKER_ERROR_BOUND = 0.15,

  baseSize = 0.002,
  trackerLevelsOffset = 6,
  trackerLevels = trackerLevelsOffset - 1,

  // These two should always be integer powers of 2.
  // Changing them will make the stabilization stronger/weaker, and the coords update lag bigger/smaller.
  trackerBuffer = 32,
  trackerBufferPeriod = 32,

  ts3 = baseSize * 3,
  ts33 = baseSize * 3 * 3,
  ts337 = baseSize * 3 * 3 * 7,
  ts3373 = baseSize * 3 * 3 * 7 * 3,
  ts33733 = baseSize * 3 * 3 * 7 * 3 * 3,
}

let trackerTilesGaps = [3, 3, 3, 1, 1, 1];
let trackerTilesClms = [9, 9, 7, 3, 3, 3];
let trackerTilesSizes = [Inliner.baseSize, Inliner.ts3, Inliner.ts33, Inliner.ts337, Inliner.ts3373, Inliner.ts33733];

// These are the arrays for the frames used in the lattice. It uses SIMPLEFRAMES, in fact.
let trackerTilesButtons: framehandle[] = [];
let trackerTilesTooltips: framehandle[] = [];
let trackerTilesN = 0;

// These two are for internal use of the Tracker only.
let trackerRawX = 0.0;
let trackerRawY = 0.0;



let curTrackerBufferInd = -1;
let trackerXBuffer: number[] = [];
let trackerYBuffer: number[] = [];

let trackerFlickerFrame = 0;
let screenWid = 0;
let screenHei = 0;
let screenAspectRatio = 0;

let timTick: timer;

const Fill = (arr: number[], arrLen: number, val: number) => {
  for (const i of $range(1, arrLen)) arr[i] = val;

  return arr;
};

/*
const Mean = (arr: number[]) => {
  let sum = 0;
  let arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) sum = sum + arr[i];

  return sum / arrLen;
};
*/

const AvgMovingBuffer = (arr: number[], fromInd: number) => {
  // You can use this instead of Mean when sampling the buffer.
  // The lines are already added on the Getter functions. Just switch them up.

  // This makes more recent values in the buffer have more weight.
  let sum = 0.0;
  let divSum = 0.0;
  let arrLen = arr.length;
  let factor = 1.0;
  for (let i = 0; i < arrLen; i++) {
    factor = (arrLen - i + fromInd - 1) % (arrLen + 1);
    divSum = divSum + factor;
    sum = sum + factor * arr[i];
  }

  return sum / divSum;
};

// The Getters this system provides. 8 of them!
export function GetMouseFrameX() {
  return mouseFrameX;
}

export function GetMouseFrameY() {
  return mouseFrameY;
}

export function GetMouseFrame() {
  return $multi(mouseFrameX, mouseFrameY);
}

export function GetMouseSaneX() {
  return mouseSaneX;
}

export function GetMouseSaneY() {
  return mouseSaneY;
}

export function GetMouseSane() {
  return $multi(mouseSaneX, mouseSaneY);
}

export function GetMouseFrameXStable() {
  return AvgMovingBuffer(trackerXBuffer, curTrackerBufferInd) + .4;
  //return Mean(trackerXBuffer) + 0.4;
}

export function GetMouseFrameYStable() {
  return AvgMovingBuffer(trackerYBuffer, curTrackerBufferInd) + .3;
  //return Mean(trackerYBuffer) + 0.3;
}

export function GetMouseFrameStable(){
  return $multi(
    AvgMovingBuffer(trackerXBuffer, curTrackerBufferInd) + 0.4,
    AvgMovingBuffer(trackerYBuffer, curTrackerBufferInd) + .3
  )
}

export function GetMouseSaneXStable() {
  return 1.666667*(AvgMovingBuffer(trackerXBuffer, curTrackerBufferInd) + .3*screenAspectRatio)/screenAspectRatio;
  //return (1.666667 * (Mean(trackerXBuffer) + 0.3 * screenAspectRatio)) / screenAspectRatio;
}

export function GetMouseSaneYStable() {
  return 1.0 - 1.666667*(AvgMovingBuffer(trackerYBuffer, curTrackerBufferInd) + .3);
  //return 1.0 - 1.666667 * (Mean(trackerYBuffer) + 0.3);
}

export function GetMouseSaneStable(){
  return $multi(
    1.666667*(AvgMovingBuffer(trackerXBuffer, curTrackerBufferInd) + .3*screenAspectRatio)/screenAspectRatio,
    1.0 - 1.666667*(AvgMovingBuffer(trackerYBuffer, curTrackerBufferInd) + .3)
  );
}

// Ok, below now is the first function concerning the Cybernetic Quadratic Lattice, or as I call it, the Tracker.

// A brief introduction:
// The quadratic lattice is a grid of tiles laid out from the center to the border.
// In this case, because we want a self-centering process, the pattern is hollowed out in the very center.

// The tiles grow in size following a pattern determined by trackerTilesGaps, trackerTilesClms and trackerTilesSizes.
// It's called quadratic because the tiles are squares and grow by squaring up on the previous size.

// Every time a tile is hit, the whole lattice is moved to the coordinates of the hit.
// Because the self-governing gradient of a quadratic lattice always points to the center, this process will always center
// the lattice around the hit point, given non-catastrophic conditions.

const MoveTracker = (x: number, y: number) => {
  // MoveTracker moves the entire lattice to the x,y pair provided. (in raw coordinates, meaning center of the screen is 0,0)

  // First calculate the sane coordinates, as sanity is a treasured resource.
  mouseSaneX = (1.666667 * (x + 0.3 * screenAspectRatio)) / screenAspectRatio;
  mouseSaneY = 1.0 - 1.666667 * (y + 0.3);

  // Check if the tracker was catastrophically shaken.
  // If it left the screen, reposition it on the center and try again.
  if (mouseSaneX > 1.0 + Inliner.TRACKER_ERROR_BOUND || mouseSaneY > 1.0 + Inliner.TRACKER_ERROR_BOUND || mouseSaneX < -Inliner.TRACKER_ERROR_BOUND || mouseSaneY < -Inliner.TRACKER_ERROR_BOUND)
    return MoveTracker(0.0, 0.0);

  trackerRawX = x;
  trackerRawY = y;

  mouseFrameX = x + 0.4;
  mouseFrameY = y + 0.3;

  let curSize, curGap, gapInd0, gapInd1, clms, clmCenter, ind;

  // Here is the centering loops.
  // They may look a little scary, but they are big pushovers.
  ind = 0;
  for (const lvl of $range(0, Inliner.trackerLevels)) {
    curSize = trackerTilesSizes[lvl];
    curGap = trackerTilesGaps[lvl];
    clms = trackerTilesClms[lvl];

    clmCenter = clms >>> 1;
    gapInd0 = (clms - curGap) >>> 1;
    gapInd1 = clms - gapInd0;

    for (const i of $range(0, clms - 1)) {
      for (const j of $range(0, clms - 1)) {
        if (!(i < gapInd0 && i >= gapInd1 && j < gapInd0 && j >= gapInd1)) {
          ind = ind + 1;

          // Re-center the Tracker tiles. It really is doing just that.
          BlzFrameSetAbsPoint(trackerTilesButtons[ind], FRAMEPOINT_CENTER, mouseFrameX + curSize * (j - clmCenter), mouseFrameY - curSize * (i - clmCenter));
        }
      }
    }
  }
};

// Also very simple. Just sets visibility for all tiles in the tracker.
const SetTrackerVisible = (val: boolean) => {
  for (const i of $range(0, trackerTilesN-1)) {
    BlzFrameSetVisible(trackerTilesButtons[i], val);
  }
};

// Now here we have a more meat.
// What this does is check if the mouse is on top of a tile.
// It does so by using the tooltip trick, explained by Tasyen in his tutorial.
// Basically, if the mouse is over a tooltipped SIMPLEBUTTON, the tooltip will say it's visible (even if it isn't drawing anything on the screen)

const UpdateTracker = () => {
  let curSize, curGap, gapInd0, gapInd1, clms, clmCenter, ind;

  ind = -1;
  for (const lvl of $range(0, Inliner.trackerLevels)) {
    curSize = trackerTilesSizes[lvl];
    curGap = trackerTilesGaps[lvl];
    clms = trackerTilesClms[lvl];

    clmCenter = clms >>> 1;
    gapInd0 = (clms - curGap) >>> 1;
    gapInd1 = clms - gapInd0;

    for (const i of $range(0, clms - 1)) {
      for (const j of $range(0, clms - 1)) {
        if (i < gapInd0 && i >= gapInd1 && j < gapInd0 && j >= gapInd1) {
          ind = ind + 1;

          // If mouse on top of the tile at ind...
          if (BlzFrameIsVisible(trackerTilesTooltips[ind])) {
            // Immediately hide the tooltip, important to prevent double-procs of the hit detection.
            BlzFrameSetVisible(trackerTilesTooltips[ind], false);

            // You know what, better be safe and hide the whole tracker.
            SetTrackerVisible(false);

            // And here is the golden nugget!
            // I have made a big discovery regarding frames! (I think, maybe it was already known)
            // Read on to unlock the mystery! And remember, the answer is 25!

            // I think this could be called FlickerDelay, but since this really turned out to be a Magic Number..
            // Why not make it true to its nature?
            trackerFlickerFrame = globalFrame + 25;

            // After the hit is detected, re-center the tracker on the position of the hit tile to
            // initiate the cybernetic process.
            MoveTracker(trackerRawX + curSize * (j - clmCenter), trackerRawY - curSize * (i - clmCenter));

            return true;
          }
        }
      }
    }
  }

  // Nothing was hit, so return false.
  return false;
};

// Creates a tile for the tracker.
const CreateTrackerButton = (size: number) => {
  let button = BlzCreateSimpleFrame("Tile", BlzGetOriginFrame(ORIGIN_FRAME_SIMPLE_UI_PARENT, 0)!, 0)!;

  // Important for the tracker to stay above buttons and the top UI bar.
  BlzFrameSetLevel(button, 5);
  BlzFrameSetSize(button, size, size);

  return button;
};

// Tooltip for the hit detection.
const CreateTrackerTooltip = (button: framehandle) => {
  let tooltip = BlzCreateFrameByType("SIMPLEFRAME", "", button, "", 0)!;

  BlzFrameSetTooltip(button, tooltip);
  BlzFrameSetEnable(tooltip, false);
  BlzFrameSetVisible(tooltip, false);

  return tooltip;
};

// This only runs once. Here we create all the tiles. Very basic stuff.
const CreateTracker = () => {
  let button, curSize, curGap, gapInd0, gapInd1, clms, ind;

  ind = -1;
  for (const lvl of $range(0, Inliner.trackerLevels)) {
    curSize = trackerTilesSizes[lvl];
    curGap = trackerTilesGaps[lvl];
    clms = trackerTilesClms[lvl];

    gapInd0 = (clms - curGap) >>> 1;
    gapInd1 = clms - gapInd0;

    for (const i of $range(0, clms - 1)) {
      for (const j of $range(0, clms - 1)) {
        if (i < gapInd0 && i >= gapInd1 && j < gapInd0 && j >= gapInd1) {
          button = CreateTrackerButton(curSize);

          ind = ind + 1;
          trackerTilesButtons[ind] = button;
          trackerTilesTooltips[ind] = CreateTrackerTooltip(button);
        }
      }
    }
  }

  trackerTilesN = ind;
  MoveTracker(0.0, 0.0);
};

// Now here is the beating heart of the system.
// And what a beat it has! This Tick is proc-ing every 0.001 seconds.
const TimerTick = () => {
  globalFrame = globalFrame + 1;

  // I think this is a good spot to explain the Flicker technique, and what the number 25 has to do with frames.

  // I discovered that it takes ~255 ticks of a 0.0 timer to change the state of a tile's tooltip after the tile has been moved.
  // So, if you set the tile on a new position right under the mouse (or away from it)
  //		it takes ~25 ticks of a 0.001 timer for the tooltip to update its visible state.

  // Nothing extraordinary, I know, but the key part of the discovery is that the visibility update happens even if the tile is INVISIBLE!
  // Which means that after you move your tile, YOU DON'T NEED to make it visible until after 25 timer-ticks after!

  // The big result of this discovery is that all you need to do is flicker the tiles for the smallest amount of frames possible to check if the mouse
  //		is on top of them! Which means....... THE FRAMES DON'T HAVE ENOUGH TIME TO MESS WITH YOUR MOUSE INPUTS!!
  // HA!

  // I guess it's time to rectify a little lie I've told you earlier, interloper.
  // You see, it's not completely true that the tracker does not mess with mouse inputs.
  // It can block inputs, but only in 1 out of 25 frames. Very rare, but it can happen.
  // In practice, I can almost never feel it happening.
  // Not sure if there's a way to solve it, though.
  // But hey, this whole thing was thought to be impossible, so who truly knows?

  // Back to the code.
  // If it's time to flicker...
  if (globalFrame == trackerFlickerFrame) {
    // Turn on the tracker!
    SetTrackerVisible(true);
  }

  // This if block here is just in case the player is using a window and changed its size.
  // Now because we are at laser speed, we need to tick-limit this kind of stuff.
  // This block only runs once every 512 ticks.
  if ((globalFrame & 511) == 1) {
    if (BlzGetLocalClientWidth() != screenWid) {
      MoveTracker(0, 0);
    }

    screenWid = BlzGetLocalClientWidth();
    screenHei = BlzGetLocalClientHeight();

    screenAspectRatio = screenWid / screenHei;
  }

  if ((globalFrame & (Inliner.trackerBufferPeriod - 1)) == 1) {
    curTrackerBufferInd = (curTrackerBufferInd + 1) & (Inliner.trackerBuffer - 1);

    trackerXBuffer[curTrackerBufferInd + 1] = trackerRawX;
    trackerYBuffer[curTrackerBufferInd + 1] = trackerRawY;
  }

  // Here the tracker is updating itself after it has been flickered on.
  // Once the player hovers a tile with the mouse, the tracker instantly goes dark, and re-sets the flicker frame,
  // 		freeing up the screen for any inputs!
  if (trackerFlickerFrame <= globalFrame) {
    UpdateTracker();
  }
};

export function ResumeMouseTracker() {
  screenWid = BlzGetLocalClientWidth();
  screenHei = BlzGetLocalClientHeight();

  screenAspectRatio = screenWid / screenHei;

  BlzSetMousePos(screenWid >>> 1, screenHei >>> 1);

  MoveTracker(0, 0);
  SetTrackerVisible(true);

  TimerStart(timTick, 0.001, true, TimerTick);
}

export function PauseMouseTracker() {
  PauseTimer(timTick);
  SetTrackerVisible(false);
}

// That is the function that needs to be called to get the whole thing started!
export function InitMouseTracker() {
  //DisplayTextToPlayer(GetLocalPlayer(), 0, 0, "|cff66ddffPerfect Async Mouse Screen Tracker by|r |cffffdd00@ModdieMads!|r");
  //DisplayTextToPlayer(GetLocalPlayer(), 0, 0, "|cffffcc22This project is hosted on HiveWorkshop! Find me there!|r");
  //DisplayTextToPlayer(GetLocalPlayer(), 0, 0, "|cffff3333If you Use or Modify ANY part of this, you|r |cffff9933MUST give me CREDIT!!|r");
  //DisplayTextToPlayer(GetLocalPlayer(), 0, 0, "|cffff9933And link back to my HiveWorkshop page!!|r");
  // oh shit time to remove the original owner, i own all of this hahahahahh

  // Some boilerplate ahead.
  screenWid = BlzGetLocalClientWidth();
  screenHei = BlzGetLocalClientHeight();

  screenAspectRatio = screenWid / screenHei;

  BlzSetMousePos(screenWid >>> 1, screenHei >>> 1);
  CreateTracker();

  Fill(trackerXBuffer, Inliner.trackerBuffer, 0.0);
  Fill(trackerYBuffer, Inliner.trackerBuffer, 0.0);

  timTick = CreateTimer();
  TimerStart(timTick, 0.001, true, TimerTick);
}

// And here we are. At the very }, once more.
// It was a pleasure having you on this tour. Hope you come back for future updates.
// Have a good one and travel well, dear interloper.

// If you have any questions, reach me out on Discord! @moddiemads
