"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6115],{3905:(n,e,o)=>{o.d(e,{Zo:()=>d,kt:()=>b});var t=o(7294);function r(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function a(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function i(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function s(n,e){if(null==n)return{};var o,t,r=function(n,e){if(null==n)return{};var o,t,r={},a=Object.keys(n);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||(r[o]=n[o]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}var c=t.createContext({}),m=function(n){var e=t.useContext(c),o=e;return n&&(o="function"==typeof n?n(e):i(i({},e),n)),o},d=function(n){var e=m(n.components);return t.createElement(c.Provider,{value:e},n.children)},l="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var o=n.components,r=n.mdxType,a=n.originalType,c=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),l=m(o),f=r,b=l["".concat(c,".").concat(f)]||l[f]||u[f]||a;return o?t.createElement(b,i(i({ref:e},d),{},{components:o})):t.createElement(b,i({ref:e},d))}));function b(n,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=o.length,i=new Array(a);i[0]=f;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s[l]="string"==typeof n?n:r,i[1]=s;for(var m=2;m<a;m++)i[m]=o[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}f.displayName="MDXCreateElement"},3611:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var t=o(7462),r=(o(7294),o(3905));const a={},i=void 0,s={unversionedId:"personal-notes/VsCode/My configuration/settings",id:"personal-notes/VsCode/My configuration/settings",title:"settings",description:"",source:"@site/docs/personal-notes/VsCode/My configuration/settings.md",sourceDirName:"personal-notes/VsCode/My configuration",slug:"/personal-notes/VsCode/My configuration/settings",permalink:"/docs/personal-notes/VsCode/My configuration/settings",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"personalNotes",previous:{title:"keybindings",permalink:"/docs/personal-notes/VsCode/My configuration/keybindings"}},c={},m=[],d={toc:m},l="wrapper";function u(n){let{components:e,...o}=n;return(0,r.kt)(l,(0,t.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="settings.json"',title:'"settings.json"'},'{\n    // vim\n    "vim.disableExtension": false,\n    "vim.vimrc.enable": false,\n    "vim.vimrc.path": "c:\\\\Users\\\\rdiazlar\\\\.vscodevimrc",\n    "vim.timeout": 250,\n    "vim.useSystemClipboard": true,\n    "vim.easymotion": true,\n    "vim.neovimConfigPath": "C:\\\\Users\\\\rdiazlar\\\\.vscodevimrc",\n    "vim.cursorStylePerMode.insert": "line-thin",\n    "vim.cursorStylePerMode.visual": "line-thin",\n    "vim.cursorStylePerMode.normal": "block",\n    "vim.highlightedyank.color": "#f79a32",\n    "vim.useCtrlKeys": true,\n    "vim.leader": "<space>",\n    "vim.foldfix": true,\n    "vim.sneak": false,\n    "vim.highlightedyank.enable": true,\n    "vim.highlightedyank.duration": 100,\n    "window.customMenuBarAltFocus": false,\n    "window.enableMenuBarMnemonics": false,\n    "vim.overrideCopy": false,\n    "vim.startInInsertMode": false,\n    "vim.surround": true,\n    "vim.statusBarColorControl": false,\n    "vim.statusBarColors.normal": ["#6e583b", "#CCCCCC"],\n    "vim.statusBarColors.insert": ["#889b4a", "#CCCCCC"],\n    "vim.statusBarColors.visual": ["#6e583b", "#CCCCCC"],\n    "vim.statusBarColors.visualline": ["#572c55", "#CCCCCC"],\n    "vim.statusBarColors.visualblock": "#A3BE8C",\n    "vim.statusBarColors.replace": "#D08770",\n    "vim.statusBarColors.commandlineinprogress": "#007ACC",\n    "vim.statusBarColors.searchinprogressmode": "#007ACC",\n    "vim.statusBarColors.surroundinputmode": "#007ACC",\n    "vim.mouseSelectionGoesIntoVisualMode": true,\n    "vim.camelCaseMotion.enable": true,\n    "vim.autoindent": true,\n    "vim.smartRelativeLine": true,\n    "vim.operatorPendingModeKeyBindings": [\n        {\n            "before": ["i", "e"],\n            "after": ["i", "w"]\n        },\n    ],\n    "vim.handleKeys": {\n        "<C-d>": true,\n        "<C-f>": false,\n        "<C-y>": false,\n        "<C-z>": false,\n        "<C-o>": false,\n        "<C-x>": false,\n        "<C-c>": false,\n    },\n    // VISUAL\n    "vim.visualModeKeyBindingsNonRecursive": [\n        // Add escape to paste action\n        {\n            "before": ["p"],\n            "commands": [\n                "editor.action.clipboardPasteAction",\n                "extension.vim_escape"\n            ],\n            "silent": true\n        },\n        // Fix bug, don\'t copy current clipboard\n        {\n            "before": ["c"],\n            "after": ["\\"", "_", "c"]\n        },\n        // Fix bug, don\'t copy current clipboard\n        {\n            "before": ["d"],\n            "after": ["\\"", "_", "d"]\n        },\n        // Fix don\'t copy into current clipboard\n        {\n            "before": ["s"],\n            "after": ["\\"", "_", "s"]\n        },\n        // fix bug select all page\n        {\n            "before": ["i", "e"],\n            "after": []\n        },\n\n    ],\n    "vim.visualModeKeyBindings": [\n        // correct behavior in visual line go back to Normal\n        {\n            "before": ["v"],\n            "after": ["<Esc>"]\n        },\n        // movement to bookmarks\n        {\n            "before": ["leader", "k"],\n            "commands": ["bookmarks.expandSelectionToPrevious"]\n        },\n        {\n            "before": ["leader", "j"],\n            "commands": ["bookmarks.expandSelectionToNext"]\n        },\n        // behavior with ctrl+d in insert.mode\n        {\n            "before": ["I"],\n            "after": ["v", "i"]\n        },\n        {\n            "before": ["A"],\n            "after": ["v", "a"]\n        },\n        // add behavior backspace and enter to insert.mode\n        {\n            "before": ["backspace"],\n            "commands": ["deleteLeft"]\n        },\n        // behavior enter\n        {\n            "before": ["enter"],\n            "after": ["<Esc>", "a", "enter"]\n        },\n        // show menu contextual right click\n        {\n            "before": ["g", "enter"],\n            "commands": ["editor.action.showContextMenu"],\n            "silent": true\n        },\n        // format selection\n        {\n            "before": ["g", "f"],\n            "commands": ["editor.action.formatSelection"],\n            "silent": true\n        },\n        // indent lines\n        {\n            "before": ["g", "j"],\n            "commands": ["editor.action.outdentLines"],\n            "silent": true\n        },\n        {\n            "before": ["g", "k"],\n            "commands": ["editor.action.indentLines"],\n            "silent": true\n        },\n        {\n            "before": ["g", "r"],\n            "commands": ["editor.action.startFindReplaceAction"]\n        },\n        {\n            "before": ["g", "L"],\n            "commands": ["editor.action.selectHighlights"],\n            "silent": true\n        },\n        // Decrement selection with smart select functionality\n        {\n            "before": ["N"],\n            "commands": ["editor.action.smartSelect.shrink"],\n            "silent": true\n        },\n        // Increment selection with smart select functionality\n        {\n            "before": ["n"],\n            "commands": ["editor.action.smartSelect.grow"],\n            "silent": true\n        },\n        {\n            "before": ["u"],\n            "after": [],\n            "silent": true\n        },\n        {\n            "before": ["g","h"],\n            "after":["0"],\n            "silent": true\n        },\n        {\n            "before": ["g","l"],\n            "after":["$", "h"],\n            "silent": true\n        },\n        {\n            "before": ["g","c"],\n            "commands": ["editor.action.commentLine"],\n            // "silent": true\n        },\n        // emmet next Item\n        {\n            "before": ["t", "l"],\n            "commands": ["editor.emmet.action.selectNextItem"],\n            "silent": true\n        },\n        // emmet prev item\n        {\n            "before": ["t", "h"],\n            "commands": ["editor.emmet.action.selectPrevItem"],\n            "silent": true\n        },\n        {\n            "before": ["t", "u"],\n            "commands": ["editor.emmet.action.updateTag"],\n            "silent": true\n        },\n        \n    ],\n    // INSERT\n    "vim.insertModeKeyBindings": [\n    ],\n\n    "vim.insertModeKeyBindingsNonRecursive": [\n\n        // Escape in insert.mode\n        {\n            "before": ["j", "j"],\n            "after": ["<Esc>"]\n        },\n        // Escape in insert.mode\n        {\n            "before": ["k", "k"],\n            "after": ["<Esc>"]\n        },\n        // Escape in insert.mode\n        {\n            "before": ["h", "h"],\n            "after": ["<Esc>"]\n        },\n        // Execute one command in Normal mode go back to Insert.mode\n        {\n            "before": ["j", "k"],\n            "after": ["<C-o>"]\n        },\n        // Execute one command in Normal mode go back to Insert.mode\n        {\n            "before": ["k", "j"],\n            "after": ["<C-o>"]\n        }\n    ],\n    // NORMAL\n    "vim.normalModeKeyBindingsNonRecursive": [\n        // Fix don\'t copy into current clipboard\n        {\n            "before": ["c"],\n            "after": ["\\"", "_", "c"]\n        },\n        // Fix don\'t copy into current clipboard\n        {\n            "before": ["C"],\n            "after": ["\\"", "_", "C"]\n        },\n        // Fix don\'t copy into current clipboard\n        {\n            "before": ["d"],\n            "after": ["\\"", "_", "d"]\n        },\n        // Fix don\'t copy into current clipboard\n        {\n            "before": ["D"],\n            "after": ["\\"", "_", "D"]\n        },\n        // Fix don\'t copy into current clipboard\n        {\n            "before": ["s"],\n            "after": ["\\"", "_", "s"]\n        },\n        // Fix don\'t copy into current clipboard\n        {\n            "before": ["S"],\n            "after": ["\\"", "_", "S"]\n        },\n    ],\n    "vim.normalModeKeyBindings": [\n        // Decrement selection with smart select functionality\n        {\n            "before": ["N"],\n            "commands": ["editor.action.smartSelect.shrink"],\n            "silent": true\n        },\n        // Increment selection with smart select functionality\n        {\n            "before": ["n"],\n            "commands": ["editor.action.smartSelect.grow"],\n            "silent": true\n        },\n        // replace find vim by easymotion\n        {\n            "before": ["U"],\n            "after": ["leader","leader", "b"],\n            "silent": true\n        },\n        {\n            "before": ["u"],\n            "after": ["leader","leader", "w"],\n            "silent": true\n        },\n\n        // salto de line y volver al modo normal\n        {\n            "before": ["enter"],\n            "after": ["a", "enter"]\n        },\n        // focus explorer\n        {\n            "before": ["leader", "e"],\n            "commands": ["workbench.explorer.fileView.focus"],\n            "silent": true\n        },\n        // focus open editors menu\n        {\n            "before": ["leader", "o"],\n            "commands": ["workbench.files.action.focusOpenEditorsView"],\n            "silent": true\n        },\n        //  Show quick open view\n        {\n            "before": ["leader", "h"],\n            "commands": ["workbench.action.quickOpenView"],\n            "silent": true\n        },\n        // Show current tabs open is\n        {\n            "before": ["leader", "t"],\n            "commands": [\n                "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup"\n            ],\n            "silent": true\n        },\n        // Fold/Unfold action\n        {\n            "before": ["leader", "p"],\n            "commands": ["editor.toggleFold"],\n            "silent": true\n        },\n        // Focus git in sidebar\n        {\n            "before": ["leader", "g"],\n            "commands": ["workbench.scm.focus"],\n            "silent": true\n        },\n        // Show breadcrumbs\n        {\n            "before": ["leader", "b"],\n            "commands": ["breadcrumbs.focusAndSelect"],\n            "silent": true\n        },\n        // Show zen mode\n        {\n            "before": ["leader", "z"],\n            "commands": ["workbench.action.toggleZenMode"],\n            "silent": true\n        },\n        // Add boomark action with extesion\n        {\n            "before": ["leader", "m"],\n            "commands": ["bookmarks.toggle"]\n        },\n        // Jump prev bookmar\n        {\n            "before": ["leader", "k"],\n            "commands": ["bookmarks.jumpToPrevious"]\n        },\n        // Jump next bookmar\n        {\n            "before": ["leader", "j"],\n            "commands": ["bookmarks.jumpToNext"]\n        },\n        {\n            "before": ["leader", "v"],\n            "after": ["I", "<Esc>", "v", "$"]\n        },\n        // select group editor [ctrl + n\xba ]\n        {\n            "before": ["leader", "1"],\n            "commands": ["workbench.action.focusFirstEditorGroup"],\n            "silent": true\n        },\n        {\n            "before": ["leader", "2"],\n            "commands": ["workbench.action.focusSecondEditorGroup"],\n            "silent": true\n        },\n        {\n            "before": ["leader", "3"],\n            "commands": ["workbench.action.focusThirdEditorGroup"],\n            "silent": true\n        },\n        {\n            "before": ["leader", "4"],\n            "commands": ["workbench.action.focusFourthEditorGroup"],\n            "silent": true\n        },\n        {\n            "before": ["leader", "5"],\n            "commands": ["workbench.action.focusFifthEditorGroup"],\n            "silent": true\n        },\n        //go to ts or html angular\n        {\n          "before": ["leader", "leader", "t"],\n          "commands": ["angular.goToComponentWithTemplateFile"]\n        },\n        {\n          "before": ["leader", "leader", "h"],\n          "commands": ["angular.goToTemplateForComponent"]\n        },\n        // Fix Copy into clipboard\n        {\n            "before": ["X"],\n            "after": ["y", "y", "d", "d"]\n        },\n        // Comentado porque a\xf1ade al hacer vi" a\xf1ade " a la palabra\n        // {\n        //   "before": ["\\""],\n        //   "after": ["v", "i", "\\""]\n        // },\n        // {\n        //   "before": ["\'"],\n        //   "after": ["v", "i", "\'"]\n        // },\n        {\n            "before": ["("],\n            "after": ["v", "i", "("]\n        },\n        {\n            "before": ["{"],\n            "after": ["v", "i", "{"]\n        },\n        {\n            "before": ["["],\n            "after": ["v", "i", "["]\n        },\n        {\n            "before": [")"],\n            "after": ["v", "a", "("]\n        },\n        {\n            "before": ["}"],\n            "after": ["v", "a", "{"]\n        },\n        {\n            "before": ["]"],\n            "after": ["v", "a", "["]\n        },\n        {\n            "before": ["leader", "f"],\n            "after": ["$", "V", "%"]\n        },\n        {\n            "before": ["<C-W>"],\n            "commands": ["workbench.action.closeActiveEditor"]\n        },\n        {\n            "before": ["g", "t"],\n            "commands": ["editor.emmet.action.matchTag"],\n            "silent": true\n        },\n        {\n            "before": ["g", "f"],\n            "commands": ["actions.find"],\n            "silent": true\n        },\n        {\n            "before": ["g", "F"],\n            "commands": ["workbench.action.findInFiles"],\n            "silent": true\n        },\n        {\n            "before": ["g", "r"],\n            "commands": ["editor.action.startFindReplaceAction"]\n        },\n        {\n            "before": ["g", "e"],\n            "commands": ["editor.action.marker.next"]\n        },\n        // Go to sho Definition\n        // {\n        //     "before": ["g", "i"],\n        //     "commands": ["editor.action.showDefinitionPreviewHover"],\n        //     "silent": true\n        // },\n        {\n            "before": ["g", "i"],\n            "commands": [\n                "editor.action.peekDefinition",\n                "togglePeekWidgetFocus"\n            ],\n            "silent": true\n        },\n        {\n            "before": ["g", "u"],\n            "commands": [\n                "editor.action.showDefinitionPreviewHover",\n            ],\n            "silent": true\n        },\n        // Go to line equal ctrl + p and :\n        // {\n        //     "before": ["g", "l"],\n        //     "commands": ["workbench.action.gotoLine"],\n        //     "silent": true\n        // },\n        {\n            "before": ["g","l"],\n            "commands":["cursorEnd"],\n            "silent": true\n        },\n        {\n            "before": ["g","h"],\n            "commands":["cursorHome"],\n            "silent": true\n        },\n        \n        // show menu contextual right click\n        {\n            "before": ["g", "enter"],\n            "commands": ["editor.action.showContextMenu"],\n            "silent": true\n        },\n        // Show code actions\n        {\n            "before": ["g", "."],\n            "commands": ["editor.action.quickFix"],\n            "silent": true\n        },\n        //surround change double quotes by simple\n        {\n            "before": ["g", "\'"],\n            "after": ["c", "s", "\\"", "\'"]\n        },\n        //surround change simple quotes by doubles\n        {\n            "before": ["g", "\\""],\n            "after": ["c", "s", "\'", "\\""]\n        },\n        // avoid erase all page\n        {\n            "before": ["c", "i", "e"],\n            "commands": []\n        },\n        // equal to ctrl+p\n        {\n            "before": ["g", "p"],\n            "commands": ["workbench.action.quickOpen"],\n            "silent": true\n        },\n        // Search symbol editor: equal ctrl+f+@\n        {\n            "before": ["g", "o"],\n            "commands": ["workbench.action.gotoSymbol"],\n            "silent": true\n        },\n        {\n            "before": ["g", "d"],\n            "commands": ["editor.action.revealDefinition"],\n            "silent": true\n        },\n\n        {\n            "before": ["g", "j"],\n            "commands": ["editor.action.outdentLines"],\n            "silent": true\n        },\n        {\n            "before": ["g", "k"],\n            "commands": ["editor.action.indentLines"],\n            "silent": true\n        },\n        {\n            "before": ["g", "L"],\n            "commands": ["editor.action.selectHighlights"],\n            "silent": true\n        },\n        {\n            "before": ["g", "a"],\n            "commands": ["references-view.findReferences"],\n            "silent": true\n        },\n        // surround\n        {\n            "before": ["<leader>", "("],\n            "after": ["y", "s", "s", "("]\n        },\n        {\n            "before": ["<leader>", ")"],\n            "after": ["y", "s", "i", "e", ")"]\n        },\n        {\n            "before": ["<leader>", "{"],\n            "after": ["y", "s", "s", "{"]\n        },\n        {\n            "before": ["<leader>", "}"],\n            "after": ["y", "s", "a", "w", "}"]\n        },\n        // Go to next Hightlight\n        // {\n        //     "before": ["m"],\n        //     "commands": ["editor.action.wordHighlight.next"],\n        //     "silent": true\n\n        // },\n        // Go to prev Hightlight\n        // {\n            // "before": ["M"],\n            // "commands": ["editor.action.wordHighlight.prev"],\n            // "silent": true\n        // },\n        // tags emmet\n\n        // update tag\n        {\n            "before": ["t", "u"],\n            "commands": ["editor.emmet.action.updateTag"],\n            "silent": true\n        },\n        // add around tag\n        {\n            "before": ["t", "e"],\n            "commands": ["editor.emmet.action.wrapWithAbbreviation"],\n            "silent": true\n        },\n        // emmet next Item\n        {\n            "before": ["t", "l"],\n            "commands": ["editor.emmet.action.selectNextItem"],\n            "silent": true\n        },\n        // emmet prev item\n        {\n            "before": ["t", "h"],\n            "commands": ["editor.emmet.action.selectPrevItem"],\n            "silent": true\n        },\n        // emmet next Item\n        {\n            "before": ["t", "j"],\n            "commands": ["editor.emmet.action.nextEditPoint"],\n            "silent": true\n        },\n        {\n            "before": ["d", "b"],\n            "commands": ["editor.action.removeBrackets"],\n            "silent": true\n        },\n    ],\n    "whichkey.bindings": [\n        {\n            "key": ",",\n            "name": "--\x3e OPTIONS LEADER",\n            "type": "command",\n            "bindings": [\n                {\n                    "key": "b",\n                    "name": "--\x3e Breadcrumbs focus",\n                    "type": "command",\n                    "commands": ["breadcrumbs.focusAndSelect"]\n                },\n                {\n                    "key": "e",\n                    "name": "--\x3e Explorer focus",\n                    "type": "command",\n                    "commands": ["workbench.explorer.fileView.focus"]\n                },\n                {\n                    "key": "f",\n                    "name": "--\x3e Select all function ( not execute command )"\n                },\n                {\n                    "key": "g",\n                    "name": "--\x3e Git focus",\n                    "type": "command",\n                    "commands": ["workbench.view.scm"],\n                    "when": "workbench.scm.active && !gitlens:disabled && config.gitlens.keymap == \'chorded\'"\n                },\n                {\n                    "key": "h",\n                    "name": "--\x3e Open quick view",\n                    "type": "command",\n                    "commands": ["workbench.action.quickOpenView"]\n                },\n                {\n                    "key": "j",\n                    "name": "--\x3e Jump to next boomark",\n                    "type": "command",\n                    "commands": ["bookmarks.jumpToNext"]\n                },\n                {\n                    "key": "k",\n                    "name": "--\x3e Jump to previous boomark",\n                    "type": "command",\n                    "commands": ["bookmarks.jumpToPrevious"]\n                },\n                {\n                    "key": "m",\n                    "name": "--\x3e Toogle boomarks",\n                    "type": "command",\n                    "commands": ["bookmarks.toggle"]\n                },\n                {\n                    "key": "p",\n                    "name": "--\x3e Toogle fold",\n                    "type": "command",\n                    "commands": ["editor.toggleFold"]\n                },\n                {\n                    "key": "o",\n                    "name": "--\x3e Open editor focus",\n                    "type": "command",\n                    "commands": ["workbench.files.action.focusOpenEditorsView"]\n                },\n                {\n                    "key": "q",\n                    "name": "--\x3e Close editor",\n                    "type": "command",\n                    "commands": ["workbench.action.closeActiveEditor"]\n                },\n                {\n                    "key": "t",\n                    "name": "--\x3e Open quick editors in group",\n                    "type": "command",\n                    "commands": [\n                        "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup"\n                    ]\n                },\n                {\n                    "key": "w",\n                    "name": "--\x3e Save",\n                    "type": "command",\n                    "commands": ["workbench.action.files.save"]\n                },\n                {\n                    "key": "z",\n                    "name": "--\x3e Toogle zen mode",\n                    "type": "command",\n                    "commands": ["workbench.action.toggleZenMode"]\n                },\n                {\n                    "key": "1",\n                    "name": "--\x3e Focus 1 editor",\n                    "type": "command",\n                    "commands": ["workbench.action.focusFirstEditorGroup"]\n                },\n                {\n                    "key": "2",\n                    "name": "--\x3e Focus 2 editor group",\n                    "type": "command",\n                    "commands": ["workbench.action.focusSecondEditorGroup"]\n                },\n                {\n                    "key": "3",\n                    "name": "--\x3e Focus 3 editor group",\n                    "type": "command",\n                    "commands": ["workbench.action.focusThirdEditorGroup"]\n                },\n                {\n                    "key": "4",\n                    "name": "--\x3e Focus 4 editor group",\n                    "type": "command",\n                    "commands": ["workbench.action.focusFourthEditorGroup"]\n                }\n            ]\n        },\n        {\n            "key": "m",\n            "name": "--\x3e Bookmarks+",\n            "type": "command",\n            "bindings": [\n                {\n                    "key": "m",\n                    "name": "--\x3e Set BookMark",\n                    "type": "command",\n                    "commands": ["bookmarks.toggle"]\n                },\n                {\n                    "key": "l",\n                    "name": "--\x3e List BookMarks",\n                    "type": "command",\n                    "commands": ["bookmarks.list"]\n                },\n                {\n                    "key": "e",\n                    "name": "--\x3e Explorer BookMarks",\n                    "type": "command",\n                    "commands": ["bookmarksExplorer.focus"]\n                },\n                {\n                    "key": ["c"],\n                    "name": "--\x3e Clean BookMarks current file",\n                    "type": "command",\n                    "commands": ["bookmarks.clear"]\n                }\n            ]\n        },\n        {\n            "key": "e",\n            "name": "--\x3e Emmet+",\n            "type": "bindings",\n            "bindings": [\n                {\n                    "key": "e",\n                    "name": "--\x3e Emmet: Encapsular con abreviatura",\n                    "type": "command",\n                    "command": "editor.emmet.action.wrapWithAbbreviation"\n                },\n                {\n                    "key": "u",\n                    "name": "--\x3e Emmet: Update tag",\n                    "type": "command",\n                    "command": "editor.emmet.action.updateTag"\n                },\n                {\n                    "key": "r",\n                    "name": "--\x3e Emmet: Remove Tag",\n                    "type": "command",\n                    "command": "editor.emmet.action.removeTag"\n                }\n            ]\n        },\n        {\n            "key": "s",\n            "name": "--\x3e Show+",\n            "type": "bindings",\n            "bindings": [\n                {\n                    "key": "e",\n                    "name": "--\x3e Show in Explorer",\n                    "type": "command",\n                    "commands": ["revealFileInOS"]\n                },\n                {\n                    "key": "m",\n                    "name": "--\x3e Minimap Toggle",\n                    "type": "command",\n                    "command": "editor.action.toggleMinimap"\n                },\n                {\n                    "key": "c",\n                    "name": "--\x3e Compare with file saved",\n                    "type": "command",\n                    "command": "workbench.files.action.compareWithSaved"\n                }\n            ]\n        },\n        {\n            "key": "g",\n            "name": "--\x3e Git+",\n            "type": "bindings",\n            "bindings": [\n                {\n                    "key": "a",\n                    "name": "--\x3e STAGE current file",\n                    "type": "command",\n                    "command": "git.stage"\n                },\n                {\n                    "key": "u",\n                    "name": "--\x3e UNSTAGE current file",\n                    "type": "command",\n                    "command": "git.unstage"\n                },\n                {\n                    "key": "d",\n                    "name": "--\x3e DISCARD current file",\n                    "type": "command",\n                    "command": "git.clean"\n                },\n                {\n                    "key": "o",\n                    "name": "--\x3e OPEN all files changes",\n                    "type": "command",\n                    "command": "git.openAllChanges"\n                }\n            ]\n        }\n    ],\n    "gitlens.statusBar.reduceFlicker": false,\n    "[html]": {\n        "editor.tabSize": 4,\n        "editor.insertSpaces": true,\n        "editor.defaultFormatter": "mohd-akram.vscode-html-format"\n    },\n    "gitlens.mode.statusBar.enabled": true,\n    "sync.gist": "685c1b624b4f6853750584ab07293189",\n    "prettier.endOfLine": "auto",\n    "[typescript]": {\n        "editor.defaultFormatter": "vscode.typescript-language-features"\n    },\n    "peacock.affectStatusBar": false,\n    "peacock.affectActivityBar": false,\n    // "workbench.colorTheme": "Visual Studio Dark",\n    "editor.fontFamily": "Ubuntu Medium Nerd Font Complete, JetBrains Mono NL Extralight, Consolas, \'Courier New\', monospace",\n    "editor.cursorStyle": "line",\n    "typescript.tsserver.log": "verbose",\n    "[typescriptreact]": {\n        "editor.defaultFormatter": "vscode.typescript-language-features"\n    },\n    "background.enabled": true,\n    "background.customImages": ["file:///c:\\\\spiderman1.jpg"],\n    "background.loop": false,\n    "background.useDefault": false,\n    "background.useFront": false,\n    "background.style": {\n        "background-size": "center",\n        "background-repeat": "no-repeat",\n        "width": "100vw",\n        "height": "100vh",\n        "opacity": ".1"\n    },\n    "wrapSelection.patterns": {\n        "log": "console.log(`${text}`, ${text})",\n        "promise": "new Promise((yeah, nah) => yeah(${text}))",\n        "=>": "() => ${text}"\n    },\n    "customizeUI.stylesheet": {\n        "#vscodevim\\\\.vim\\\\.primary[aria-label=\\"-- INSERT --\\"]": "background-color: #aab533 !important; border-radius: 20px",\n        // "#vscodevim\\\\.vim\\\\.primary[aria-label=\\"-- VISUAL --\\"]": "background-color: #b16286 !important;border-radius: 20px",\n        "#vscodevim\\\\.vim\\\\.primary[aria-label=\\"-- VISUAL --\\"]": "background-color: #4A235A  !important;border-radius: 20px",\n        "#vscodevim\\\\.vim\\\\.primary[aria-label=\\"-- VISUAL LINE --\\"]": "background-color: #7D3C98 !important;border-radius: 20px",\n        "#vscodevim\\\\.vim\\\\.primary[aria-label=\\"-- VISUAL --  MULTI CURSOR\\"]": "background-color: #b16286 !important;border-radius: 20px",\n        "#vscodevim\\\\.vim\\\\.primary[aria-label=\\"-- EASYMOTION INPUT --\\"]": "background-color: #A93226 !important;border-radius: 20px"\n    },\n    "editor.lineNumbers": "on",\n    "sonarlint.ls.javaHome": "C:\\\\Program Files\\\\Java\\\\jdk-17.0.2",\n    "sonarlint.connectedMode.connections.sonarcloud": [\n        {\n            "connectionId": "skmo",\n            "organizationKey": "teamserviceskmo"\n        }\n    ],\n    "terminal.integrated.defaultProfile.windows": "Git Bash",\n    "workbench.colorCustomizations": {\n        "editor.lineHighlightBackground": "#6e583b32",\n        "statusBar.background": "#6e583b",\n        "statusBar.noFolderBackground": "#889b4a",\n        "statusBar.debuggingBackground": "#889b4a",\n        "statusBar.foreground": "#CCCCCC",\n        "statusBar.debuggingForeground": "#CCCCCC",\n        "bookmarks.overviewRuler": "#b62e2e",\n        "bookmarks.lineBorder": "#6e583b",\n        "bookmarks.lineBackground": "#1515fb23",\n        "tab.activeBackground": "#6e583b",\n        "tab.activeBorder": "#f79a32"\n    },\n    "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": false,\n    "javascript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": false,\n    "javascript.format.semicolons": "insert",\n    "typescript.format.semicolons": "insert",\n    "typescript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": false,\n    "html.format.wrapAttributes": "preserve",\n    "prettier.tabWidth": 4,\n    "javascript.referencesCodeLens.showOnAllFunctions": true,\n    "js/ts.implicitProjectConfig.checkJs": true,\n    "search.searchOnType": false,\n    "html.format.enable": false,\n    "[json]": {\n        "editor.defaultFormatter": "esbenp.prettier-vscode"\n    },\n    "editor.minimap.enabled": false,\n    "sonarlint.rules": {\n        "typescript:S1874": {\n            "level": "off"\n        },\n        "typescript:S1871": {\n            "level": "off"\n        }\n    },\n    "[javascript]": {\n        "editor.defaultFormatter": "vscode.typescript-language-features"\n    },\n    "editor.accessibilitySupport": "off",\n    "errorLens.excludeBySource": [\n        "ts(2794)"\n    ],\n    "git.enableSmartCommit": true,\n    "[scss]": {\n        "editor.defaultFormatter": "vscode.css-language-features"\n    },\n    "gitlens.views.commitDetails.files.layout": "list",\n    "editor.unicodeHighlight.ambiguousCharacters": false,\n    "editor.multiCursorLimit": 25000,\n    "vim.history": 200,\n    "editor.multiCursorModifier": "ctrlCmd",\n    "zenMode.hideStatusBar": false,\n    "zenMode.hideLineNumbers": false,\n    "zenMode.hideActivityBar": false,\n    "zenMode.hideTabs": false,\n    "window.zoomLevel": -1,\n    "gitlens.mode.active": "zen",\n    "workbench.editor.enablePreview": false\n}\n\n')))}u.isMDXComponent=!0}}]);