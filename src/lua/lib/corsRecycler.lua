if Debug then Debug.beginfile("corsRecycler") end
do
  local deadCors = setmetatable({},{__index=function(self,key)self[key]={};self[key].count=0;return self[key]end})
  local deadWraps = {}
  local wrapCount = 0
  local unpack = table.unpack
  local originCreateCors = coroutine.create
  local originWrap = coroutine.wrap

  local function pack()
    local tbl = TableGet()
    local count = 0
    local max = select('#', ...)
    for i =1, max do
      count = count + 1
      tbl[i] = select(i, ...)
    end

    tbl.n = count
    return tbl
  end

  local function getCors(whichFunc)
      local carrot
      local dead = deadCors[whichFunc]
      if dead.count == 0 then
          local wrapper = function(...)
              local args = pack(...)
              ::cors_begin::
              local returnValue = whichFunc(unpack(args, 1, args.n))
              dead.count = dead.count + 1
              dead[dead.count] = carrot
              TableRet(args)
              args = pack(coroutine.yield(returnValue))
              goto cors_begin
          end
          carrot = originCreateCors(wrapper)
      else
          carrot = dead[dead.count]
          dead[dead.count] = nil
          dead.count = dead.count - 1
      end
      return carrot
  end

  local function getCorsArg(whichFunc, ...)
    local wrap = deadWraps[whichFunc]
    local res
    if wrap == nil then
      local wrapper = function(...)
        local args = pack(...)
        ::cors_begin::
        local returnValue = whichFunc(unpack(args, 1, args.n))
        dead.count = dead.count + 1
        dead[dead.count] = carrot
        TableRet(args)
        args = pack(coroutine.yield(returnValue))
        goto cors_begin
      end

      res = originWrap(args, ...)
      deadWraps[whichFunc] = res
    else
      res = wrap
    end

    return res
  end

  _G['coroutine'].create = getCors
  _G['coroutine'].wrap = getCorsArg
end
if Debug then Debug.endFile() end
