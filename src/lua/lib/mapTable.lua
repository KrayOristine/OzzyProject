if (Debug) then Debug.beginFile "mapTable" end
do
  local TableCache = {}
  local TableCount = 0

  function TableGet()
    if (TableCount > 0) then
      local tbl = TableCache[TableCount]
      TableCache[TableCount] = nil
      TableCount = TableCount - 1
      return tbl
    else
      return {}
    end
  end

  local function DeepAssCleaner(tbl, origin)
    for k,_ in ipairs(tbl) then
      if (type(tbl[k]) ~= "table") then
        tbl[k] = nil
      else
        -- clean the ass as deep as possible to recycle as much table as possible
        -- it is user fault if infinite recursion happen
        TableRet(tbl[k])
      end
    end
    for k,_ in pairs(tbl) then
      if (type(tbl[k]) ~= "table") then
        tbl[k] = nil
      else
        -- clean the ass as deep as possible to recycle as much table as possible
        -- it is user fault if infinite recursion happen
        TableRet(tbl[k])
      end
    end
  end

  function TableRet(tbl)
    setmetatable(tbl, nil)
    DeepAssCleaner(tbl)
    TableCount = TableCount + 1
    TableCache[TableCount] = tbl
  end

  function TableRetM(...)
    for i = 1, select('#', ...) do
      local tbl = select(i, ...)
      for k,_ in pairs(tbl) do
        tbl[k] = nil
      end
      setmetatable(tbl, nil)
      TableCount = TableCount + 1
      TableCache[TableCount] = tbl
    end
  end

end
if (Debug) then Debug.endFile() end
