(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/components/Predictor.js":
/*!*************************************!*\
  !*** ./src/components/Predictor.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/src/components/Predictor.js: Unexpected token (39:58)\\n\\n\\u001b[0m \\u001b[90m 37 | \\u001b[39m                    }\\u001b[0m\\n\\u001b[0m \\u001b[90m 38 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 39 | \\u001b[39m                    console\\u001b[33m.\\u001b[39mlog(resultSet\\u001b[33m.\\u001b[39mtablePivot()[\\u001b[35m0\\u001b[39m]\\u001b[33m.\\u001b[39m\\u001b[32m\\\"PollutionStation.name\\\"\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                                                          \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 40 | \\u001b[39m                    \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m \\u001b[90m 41 | \\u001b[39m                        \\u001b[33m<\\u001b[39m\\u001b[33mReact\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[33mFragment\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 42 | \\u001b[39m                            {\\u001b[90m/* {resultSet.rawData().map((fila, index) => {\\u001b[39m\\u001b[0m\\n    at Object._raise (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:745:17)\\n    at Object.raiseWithData (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:738:17)\\n    at Object.raise (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:732:17)\\n    at Object.unexpected (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:8806:16)\\n    at Object.parseIdentifierName (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:10822:18)\\n    at Object.parseIdentifier (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:10799:23)\\n    at Object.parseMaybePrivateName (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:10156:19)\\n    at Object.parseSubscript (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9713:64)\\n    at Object.parseSubscripts (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9678:19)\\n    at Object.parseExprSubscripts (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9661:17)\\n    at Object.parseMaybeUnary (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9635:21)\\n    at Object.parseExprOps (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9505:23)\\n    at Object.parseMaybeConditional (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9478:23)\\n    at Object.parseMaybeAssign (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9433:21)\\n    at Object.parseExprListItem (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:10791:18)\\n    at Object.parseCallExpressionArguments (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9849:22)\\n    at Object.parseSubscript (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9749:31)\\n    at Object.parseSubscripts (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9678:19)\\n    at Object.parseExprSubscripts (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9661:17)\\n    at Object.parseMaybeUnary (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9635:21)\\n    at Object.parseExprOps (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9505:23)\\n    at Object.parseMaybeConditional (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9478:23)\\n    at Object.parseMaybeAssign (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9433:21)\\n    at Object.parseExpression (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:9385:23)\\n    at Object.parseStatementContent (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:11284:23)\\n    at Object.parseStatement (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:11155:17)\\n    at Object.parseBlockOrModuleBlockBody (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:11730:25)\\n    at Object.parseBlockBody (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:11716:10)\\n    at Object.parseBlock (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:11700:10)\\n    at Object.parseFunctionBody (/home/autumndroid/hackspace/EnvGlobel/services/envglobeldjango/frontend/node_modules/@babel/parser/lib/index.js:10707:24)\");\n\n//# sourceURL=webpack:///./src/components/Predictor.js?");

/***/ })

}]);