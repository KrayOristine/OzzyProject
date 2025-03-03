
export function Debug(className: string, message: string)
{
    DisplayTextToPlayer(GetLocalPlayer(), 0, 0.35, `[|c000000ffDEBUG|r - ${className}]: ${message}`);
}

export function Verbose(className: string, message: string) {
    DisplayTextToPlayer(GetLocalPlayer(), 0, 0.35, `[|c00ffff00VERBOSE|r - ${className}]: ${message}`);
}

export function Error(className: string, message: string)
{
    DisplayTextToPlayer(GetLocalPlayer(), 0, 0.35, `[|c00ff0000ERROR|r - ${className}]: ${message}`);
}

export function Warning(className: string, message: string)
{
    DisplayTextToPlayer(GetLocalPlayer(), 0, 0.35, `[|c00ffff00WARN|r - ${className}]: ${message}`);
}

export function Log(className: string, message: string)
{
    DisplayTextToPlayer(GetLocalPlayer(), 0, 0.35, `[${className}]: ${message}`);
}
