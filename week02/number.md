> NumericLiteral
> 
> NonZeroDigit
^-?[1-9]\d*$　　 

> DecimalLiteral
> 
> DecimalIntegerLiteral
> 
> DecimalDigits
> 
> DecimalDigit

^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$

> ExponentPart
> 
> ExponentIndicator
> 
> SignedInteger

^\d(\.\d+)?E\+-?\d+

> HexIntegerLiteral
> 
> HexDigit
> 
([0-9A-Fa-f]{2})+

>  结果

/^-?[1-9]\d*$|^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$|^\d(\.\d+)?E\+-?\d+|([0-9A-Fa-f]{2})+/



