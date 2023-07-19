"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1572],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>k});var o=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var m=o.createContext({}),s=function(n){var e=o.useContext(m),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},d=function(n){var e=s(n.components);return o.createElement(m.Provider,{value:e},n.children)},l="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,m=n.parentName,d=a(n,["components","mdxType","originalType","parentName"]),l=s(t),h=i,k=l["".concat(m,".").concat(h)]||l[h]||u[h]||r;return t?o.createElement(k,c(c({ref:e},d),{},{components:t})):o.createElement(k,c({ref:e},d))}));function k(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,c=new Array(r);c[0]=h;var a={};for(var m in e)hasOwnProperty.call(e,m)&&(a[m]=e[m]);a.originalType=n,a[l]="string"==typeof n?n:i,c[1]=a;for(var s=2;s<r;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7786:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var o=t(7462),i=(t(7294),t(3905));const r={},c=void 0,a={unversionedId:"personal-notes/VsCode/My configuration/keybindings",id:"personal-notes/VsCode/My configuration/keybindings",title:"keybindings",description:"",source:"@site/docs/personal-notes/VsCode/My configuration/keybindings.md",sourceDirName:"personal-notes/VsCode/My configuration",slug:"/personal-notes/VsCode/My configuration/keybindings",permalink:"/docs/personal-notes/VsCode/My configuration/keybindings",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"personalNotes",previous:{title:"Neovim plugin",permalink:"/docs/personal-notes/Neovim plugin"},next:{title:"settings",permalink:"/docs/personal-notes/VsCode/My configuration/settings"}},m={},s=[],d={toc:s},l="wrapper";function u(n){let{components:e,...t}=n;return(0,i.kt)(l,(0,o.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="keybindings.json"',title:'"keybindings.json"'},' [ \n     // Coloque sus atajos de teclado en este archivo para sobreescribir los valores predeterminadosauto[]\n    // emmet\n    {\n        "key": "alt+e",\n        "command": "editor.emmet.action.wrapWithAbbreviation"\n    },\n    {\n        "key": "ctrl+k ctrl+oem_4",\n        "command": "editor.action.selectToBracket"\n    },\n    {\n        "key": "ctrl+alt+oem_period",\n        "command": "editor.emmet.action.matchTag"\n    },\n    {\n        "key": "shift+alt+oem_5",\n        "command": "editor.emmet.action.selectPrevItem"\n    },\n    {\n        "key": "shift+alt+q",\n        "command": "editor.emmet.action.removeTag"\n    },\n    {\n        "key": "ctrl+alt+numpad_add",\n        "command": "editor.emmet.action.updateTag"\n    },\n    {\n        "key": "ctrl+alt+l",\n        "command": "editor.emmet.action.mergeLines"\n    },\n    // Transform upper / Lower\n    {\n        "key": "shift+alt+u",\n        "command": "editor.action.transformToUppercase"\n    },\n    {\n        "key": "shift+alt+l",\n        "command": "editor.action.transformToLowercase"\n    },\n    {\n        "key": "ctrl+alt+t",\n        "command": "editor.action.inspectTMScopes"\n    },\n    // Navigation\n    {\n        "key": "alt+oem_plus",\n        "command": "workbench.action.focusFirstEditorGroup"\n    },\n    {\n        "key": "ctrl+2",\n        "command": "workbench.action.focusFirstEditorGroup"\n    },\n    {\n        "key": "alt+oem_plus",\n        "command": "workbench.action.navigateRight"\n    },\n    {\n        "key": "alt+oem_2",\n        "command": "workbench.action.navigateLeft"\n    },\n    {\n        "key": "ctrl+alt+oem_3",\n        "command": "workbench.action.navigateDown"\n    },\n    {\n        "key": "ctrl+alt+oem_8",\n        "command": "workbench.action.navigateUp"\n    },\n    // Explorer\n    {\n        "key": "alt+n",\n        "command": "explorer.newFile",\n        "when": "filesExplorerFocus"\n    },\n    {\n        "key": "ctrl+alt+c",\n        "command": "workbench.files.action.collapseExplorerFolders"\n    },\n    // behavior suggestion with neovim\n    {\n        "key": "alt+j",\n        "command": "selectNextSuggestion",\n        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"\n    },\n    {\n        "key": "alt+k",\n        "command": "selectPrevSuggestion",\n        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"\n    },\n    {\n        "key": "Tab",\n        "command": "selectNextSuggestion",\n        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"\n    },\n    {\n        "key": "Shift+Tab",\n        "command": "selectPrevSuggestion",\n        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"\n    },\n    {\n        "key": "Enter",\n        "command": "acceptSelectedSuggestion",\n        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"\n    },\n    // POSIBLE BUG\n    // {\n    //     "key": "backspace",\n    //     "command": "backspaceAndInsertMode",\n    //     "when": "editorTextFocus && vim.active && vim.mode == \'Normal\' && editorTextFocus"\n    // },\n    {\n        "key": "backspace",\n        "command": "vim.remap",\n        "when": "editorTextFocus && vim.active && vim.mode == \'Normal\'",\n        "args": {\n          "after": ["a", "backspace" ]\n        }\n      },\n    // POSIBLE BUGh\n    {\n        "key": "ctrl+backspace",\n        "command": "deleteWordLeft",\n        "when": "editorTextFocus && vim.active && vim.mode == \'Normal\' && editorTextFocus"\n    },\n    // move cursor insert mode\n    {\n        "key": "alt+h",\n        "command": "cursorLeft",\n        "when": "vim.active && vim.mode == \'Insert\' && editorTextFocus"\n    },\n    {\n        "key": "alt+l",\n        "command": "cursorRight",\n        "when": "vim.active && vim.mode == \'Insert\' && editorTextFocus"\n    },\n    {\n        "key": "alt+j",\n        "command": "cursorDown",\n        "when": "vim.mode == \'Insert\' && editorTextFocus && !suggestWidgetVisible"\n    },\n    {\n        "key": "alt+k",\n        "command": "cursorUp",\n        "when": "vim.mode == \'Insert\' && editorTextFocus && !suggestWidgetVisible"\n    },\n    // enter in insert mode\n    {\n        "key": "alt+o",\n        "command": "editor.action.insertLineAfter",\n        "when": "vim.mode == \'Insert\' && editorTextFocus && !suggestWidgetVisible"\n    },\n    {\n        "key": "alt+j",\n        "command": "editor.action.moveLinesDownAction",\n        "when": "vim.mode != \'Insert\' && editorTextFocus && !suggestWidgetVisible"\n    },\n    {\n        "key": "alt+k",\n        "command": "editor.action.moveLinesUpAction",\n        "when": "vim.mode != \'Insert\' && editorTextFocus"\n    },\n    // indent\n    {\n        "key": "tab",\n        "command": "editor.action.indentLines",\n        "when": "vim.mode != \'Insert\' && editorTextFocus"\n    },\n    {\n        "key": "shift+tab",\n        "command": "editor.action.outdentLines",\n        "when": "editorTextFocus && vim.mode != \'Insert\'"\n    },\n    // cambiar pesta\xf1a\n    {\n        "key": "alt+shift+h",\n        "command": "workbench.action.previousEditor"\n    },\n    {\n        "key": "alt+shift+l",\n        "command": "workbench.action.nextEditor"\n    },\n    {\n        "key": "alt+shift+h",\n        "command": "vim.remap",\n        "when": "vim.mode && inputFocus && editorTextFocus",\n        "args": {\n            "after": ["<Esc>",":","v","s","c", " ", "w", "o", "r", "k", "b", "e", "n", "c", "h", ".", "a", "c", "t", "i", "o", "n", ".", "p", "r", "e", "v", "i", "o", "u", "s", "E", "d", "i", "t", "o", "r", "<CR>"]\n        }\n    },\n    {\n        "key": "alt+shift+l",\n        "command": "vim.remap",\n        "when": "vim.mode && inputFocus && editorTextFocus",\n        "args": {\n            "after": ["<Esc>",":","v","s","c", " ", "w", "o", "r", "k", "b", "e", "n", "c", "h", ".", "a", "c", "t", "i", "o", "n", ".","n", "e", "x", "t", "E", "d", "i", "t", "o", "r", "<CR>"]\n        }\n    },\n    // multicursor\n    {\n        "key": "shift+alt+j",\n        "command": "editor.action.copyLinesDownAction",\n        "when": "editorTextFocus && !editorReadonly"\n    },\n    {\n        "key": "shift+alt+k",\n        "command": "editor.action.copyLinesUpAction",\n        "when": "editorTextFocus && !editorReadonly"\n    },\n    {\n        "key": "shift+alt+up",\n        "command": "editor.action.copyLinesDownAction",\n        "when": "editorTextFocus && !editorReadonly"\n    },\n    {\n        "key": "shift+alt+down",\n        "command": "editor.action.copyLinesUpAction",\n        "when": "editorTextFocus && !editorReadonly"\n    },\n    // behavior copy paste\n    {\n      "key": "ctrl+c",\n      "command": "editor.action.clipboardCopyAction",\n      "when": "editorTextFocus"\n    },\n    {\n        "key": "ctrl+v",\n        "command": "vim.remap",\n        "when": "editorTextFocus && !editorReadonly && vim.active && vim.mode != \'Insert\'",\n        "args": {\n          "after": ["p", "<Esc>"]\n        }\n    },\n    {\n        "key": "ctrl+v",\n        "when": "editorTextFocus && !editorReadonly && vim.active && vim.mode == \'Insert\'",\n        "command": "editor.action.clipboardPasteAction",\n    },\n    {\n        "key": "ctrl+x",\n        "command": "vim.remap",\n        "when": "inputFocus && vim.mode != \'Insert\' && hasSelection",\n        "args": {\n            "after": ["y", "g", "v", "d"]\n        }\n    },\n    {\n        "key": "ctrl+b",\n        "command": "-extension.vim_ctrl+b",\n        "when": "editorTextFocus && vim.active && vim.use<C-b> && !inDebugRepl && vim.mode != \'Insert\'"\n    },\n    {\n        "key": "ctrl+f",\n        "command": "-extension.vim_ctrl+f",\n        "when": "editorTextFocus && vim.active && vim.use<C-f> && !inDebugRepl && vim.mode != \'Insert\'"\n    },\n    // Behavior insert mode selection doesnt work yank only ctrl+c\n    {\n        "key": "alt+w",\n        "command": "cursorWordEndRight",\n        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == \'Insert\'"\n    },\n    {\n        "key": "alt+b",\n        "command": "cursorWordEndLeft",\n        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == \'Insert\'"\n    },\n    {\n        "key": "alt+n",\n        "command": "editor.action.wordHighlight.next",\n        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == \'Insert\'"\n    },\n    {\n        "key": "alt+shift+n",\n        "command": "editor.action.wordHighlight.prev",\n        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == \'Insert\'"\n    },\n    {\n        "key": "alt+ctrl+l",\n        "command": "cursorWordEndRightSelect",\n        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == \'Insert\'"\n    },\n    {\n        "key": "alt+ctrl+h",\n        "command": "cursorWordEndLeftSelect",\n        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == \'Insert\'"\n    },\n    // salta / retroceder ultima posicion del cursor\n    {\n        "key": "alt+h",\n        "command": "workbench.action.navigateBack",\n        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == \'Normal\'"\n    },\n    {\n        "key": "alt+l",\n        "command": "workbench.action.navigateForward",\n        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == \'Normal\'"\n    },\n    // best behavior of neovim mode\n    {\n        "key": "ctrl+shift+l",\n        "command": "editor.action.selectHighlights",\n        "when": "editorFocus"\n    },\n    // jump fast up/down\n    // {\n    //     "key": "ctrl+alt+j",\n    //     "commands":["<Esc>","extension.vim_ctrl+d"],\n    //     "when": "editorTextFocus"\n    // },\n    {\n        "key": "ctrl+alt+j",\n        "command": "vim.remap",\n        "when": "(vim.mode == \'Normal\' || vim.mode == \'Insert\')",\n        "args": {\n            "after": ["<Esc>", "<C-d>"]\n        }\n    },\n    {\n        "key": "ctrl+alt+k",\n        "command": "vim.remap",\n        "when": "(vim.mode == \'Normal\' || vim.mode == \'Insert\')",\n        "args": {\n            "after": ["<Esc>", "<C-u>"]\n        }\n    },\n    {\n        "key": "ctrl+alt+j",\n        "when": "editorFocus  && (vim.mode != \'Normal\' || vim.mode != \'Insert\')",\n        "command": "extension.vim_ctrl+d",\n        // "args": {\n        //     "after": ["<C-d>"]\n        // }\n    },\n    {\n        "key": "ctrl+alt+k",\n        "when": "editorFocus && (vim.mode != \'Normal\' || vim.mode != \'Insert\')",\n        "command": "extension.vim_ctrl+u",\n        // "args": {\n        //     "after": ["<C-u>"]\n        // }\n    },\n    // {\n    //     "key": "ctrl+alt+k",\n    //     "command": "extension.vim_ctrl+u",\n    //     "when": "editorTextFocus"\n    // },\n    //breadcumps navigation\n    {\n        "key": "alt+l",\n        "command": "breadcrumbs.focusNext",\n        "when": "breadcrumbsActive && breadcrumbsVisible"\n    },\n    {\n        "key": "l",\n        "command": "list.expand",\n        "when": "breadcrumbsActive && breadcrumbsVisible"\n    },\n    {\n        "key": "alt+h",\n        "command": "breadcrumbs.focusPrevious",\n        "when": "breadcrumbsActive && breadcrumbsVisible"\n    },\n    {\n        "key": "ctrl+shift+s",\n        "command": "-workbench.action.files.saveAs"\n    },\n    // which key\n    {\n        "key": "alt+m",\n        "command": "whichkey.show"\n        // "when": "textInputFocus && vim.mode == \'Normal\'"\n    },\n    // navigation in openquick\n    {\n        "key": "alt+k",\n        "command": "workbench.action.quickOpenNavigatePrevious",\n        "when": "inQuickOpen"\n    },\n    {\n        "key": "alt+j",\n        "command": "workbench.action.quickOpenNavigateNext",\n        "when": "inQuickOpen"\n    },\n    {\n        "key": "shift+alt+s",\n        "command": "workbench.action.files.saveAll"\n    },\n    {\n        "key": "ctrl+k s",\n        "command": "-workbench.action.files.saveAll"\n    },\n    {\n        "key": "shift+alt+u",\n        "command": "-extension.updateSettings"\n    },\n    {\n        "key": "shift+alt+d",\n        "command": "-extension.downloadSettings"\n    },\n    {\n        "key": "ctrl+l",\n        "command": "-extension.vim_navigateCtrlL",\n        "when": "editorTextFocus && vim.active && vim.use<C-l> && !inDebugRepl"\n    },\n    {\n        "key": "ctrl+l",\n        "command": "-extension.smoothscroll_scrollCenter",\n        "when": "editorTextFocus && !suggestWidgetVisible"\n    },\n    {\n        "key": "ctrl+alt+k",\n        "command": "-bookmarks.toggle",\n        "when": "editorTextFocus"\n    },\n    // {\n    //     "key": "ctrl+alt+j",\n    //     "command": "-bookmarks.jumpToPrevious",\n    //     "when": "editorTextFocus"\n    // },\n    {\n        "key": "ctrl+j",\n        "command": "-workbench.action.togglePanel"\n    },\n    //activitus bar\n    {\n        "when": "activitusbar",\n        "command": "activitusbar.toggleExplorerView",\n        "key": "ctrl+shift+E"\n    },\n    {\n        "when": "activitusbar",\n        "command": "activitusbar.showSearchViewWithSelection",\n        "key": "ctrl+shift+F"\n    },\n    // search\n    {\n        "key": "alt+f",\n        "command": "search.action.openNewEditor",\n        "when": "editorTextFocus"\n    },\n    {\n        "key": "shift+alt+oem_4",\n        "command": "toggle.diff.renderSideBySide"\n    },\n    //align vertical\n    {\n        "key": "alt+v",\n        "command": "extension.alignVertically"\n    },\n    // git\n    {\n        "key": "ctrl+g ctrl+g",\n        "command": "git.openChange",\n        "when": "editorTextFocus && !isInDiffEditor"\n    },\n    {\n        "key": "ctrl+g ctrl+g",\n        "command": "git.openFile",\n        "when": "editorTextFocus && isInDiffEditor"\n    },\n    {\n        "key": "ctrl+g ctrl+b",\n        "command": "gitlens.showBranchesView",\n        "when": "!gitlens:disabled"\n    },\n    {\n        "key": "ctrl+g ctrl+c",\n        "command": "gitlens.showCommitsView",\n        "when": "!gitlens:disabled"\n    },\n    {\n        "key": "ctrl+g ctrl+e",\n        "command": "workbench.action.focusActiveEditorGroup",\n    },\n    {\n        "key": "ctrl+g ctrl+s",\n        "command": "gitlens.views.stashes.focus",\n        "when": "!gitlens:disabled"\n    },\n    // resize groups editor\n    {\n        "key": "alt+enter",\n        "command": "workbench.action.toggleEditorWidths",\n        "when": "editorTextFocus || isInDiffEditor"\n    },\n    {\n        "key": "alt+enter",\n        "command": "workbench.action.toggleMaximizedPanel",\n        "when": "terminalFocus"\n    },\n    // select all\n    {\n        "key": "ctrl+a",\n        "when": "vim.mode != \'Normal\'",\n        "command": "editor.action.selectAll"\n    },\n    {\n        "key": "ctrl+a",\n        "command": "vim.remap",\n        "when": "inputFocus && vim.mode == \'Normal\'",\n        "args": {\n            "after": ["g", "g", "V", "G"]\n        }\n    },\n    {\n        "key": "ctrl+shift+v",\n        "command": "vim.remap",\n        "when": "inputFocus && vim.mode == \'Normal\'",\n        "args": {\n            "after": ["<C-V>"]\n        }\n    },\n    // Split join editor group\n    {\n        "key": "ctrl+2",\n        "command": "workbench.action.focusFirstSideEditor",\n        "when": "sideBySideEditorActive"\n    },\n    {\n        "key": "ctrl+3",\n        "command": "workbench.action.focusSecondSideEditor",\n        "when": "sideBySideEditorActive"\n    },\n    {\n        "key": "ctrl+alt+n",\n        "command": "explorer.newFolder",\n        "when": "filesExplorerFocus"\n    },\n    // {\n    //     "key": "ctrl+s",\n    //     "command": "multiCommand.saveAndEscape",\n    //     "when"   : "vim.mode == \'Insert\' && editorTextFocus",\n    // },\n    {\n        "key": "ctrl+k ctrl+i",\n        "command": "editor.action.showDefinitionPreviewHover",\n        "when": "editorTextFocus"\n    },\n    {\n        "key": "ctrl+k ctrl+i",\n        "command": "-editor.action.showHover",\n        "when": "editorTextFocus"\n    },\n    {\n        "key": "up",\n        "command": "-extension.vim_up",\n        "when": "editorTextFocus && vim.active && !inDebugRepl && !parameterHintsVisible && !suggestWidgetVisible"\n    },\n    {\n        "key": "down",\n        "command": "-extension.vim_down",\n        "when": "editorTextFocus && vim.active && !inDebugRepl && !parameterHintsVisible && !suggestWidgetVisible"\n    },\n    {\n        "key": "ctrl+d",\n        "command": "-extension.vim_ctrl+d",\n        "when": "editorTextFocus && vim.active && vim.use<C-d> && !inDebugRepl"\n    },\n    {\n        "key": "ctrl+alt+m",\n        "command": "workbench.action.moveView"\n    },\n    {\n        "key": "ctrl+g ctrl+n",\n        "command": "gitlens.copyCurrentBranch",\n        // "when": "terminalFocus && terminalHasBeenCreated && terminalTextSelected && !terminalFindVisible || terminalFocus && terminalProcessSupported && terminalTextSelected && !terminalFindVisible"\n    },\n    {\n        "key": "ctrl+w",\n        "command": "extension.vim_ctrl+w",\n        "when": "editorTextFocus && vim.active && vim.use<C-w> && !inDebugRepl && vim.mode === \'Normal\'"\n    },\n    {\n        "key": "ctrl+w",\n        "command": "-extension.vim_ctrl+w",\n        "when": "editorTextFocus && vim.active && vim.use<C-w> && !inDebugRepl"\n    },\n    {\n        "key": "ctrl+shift+space",\n        "command": "bookmarks.toggle",\n        "when": "editorTextFocus"\n    },\n    {\n        "key": "ctrl+alt+numpad_add",\n        "command": "bookmarks.jumpToNext",\n        "when": "editorTextFocus"\n    },\n    {\n        "key": "alt+a",\n        "command": "cursorEnd",\n        "when": "textInputFocus"\n    },\n    {\n        "key": "end",\n        "command": "-cursorEnd",\n        "when": "textInputFocus"\n    },\n    {\n        "key": "alt+i",\n        "command": "cursorHome",\n        "when": "textInputFocus"\n    },\n    {\n        "key": "home",\n        "command": "-cursorHome",\n        "when": "textInputFocus"\n    },\n    {\n        "key": "Escape",\n        "command": "vim.remap",\n        "when": "textInputFocus && vim.mode == \'VisualLine\'",\n        "args": {\n            "after": ["<Esc>", "<Esc>"]\n        }\n    },\n    // close find\n    {\n        "key": "alt+f",\n        "command": "closeFindWidget",\n        "when": "editorFocus && findWidgetVisible && !isComposing"\n    },\n    {\n        "key": "shift+3",\n        "command": "-wrapSelection.quote.double",\n        "when": "editorHasSelection && editorTextFocus"\n    },\n    {\n        "key": "[Minus]",\n        "command": "-wrapSelection.quote.single",\n        "when": "editorHasSelection && editorTextFocus"\n    },\n    {\n        "key": "ctrl+shift+v",\n        "command": "-markdown.showPreview",\n        "when": "!notebookEditorFocused && editorLangId == \'markdown\'"\n    },\n    {\n        "key": "ctrl+shift+v",\n        "command": "-markdown-preview-enhanced.openPreview",\n        "when": "editorLangId == \'markdown\'"\n    },\n    {\n        "key": "ctrl+shift+v",\n        "command": "-notebook.cell.pasteAbove",\n        "when": "notebookEditorFocused && !inputFocus"\n    },\n    {\n        "key": "ctrl+shift+v",\n        "command": "-workbench.action.terminal.paste",\n        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"\n    },\n    {\n        "key": "ctrl+shift+v",\n        "command": "-workbench.action.terminal.paste",\n        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported || terminalFocus && terminalHasBeenCreated && terminalProcessSupported"\n    },\n    {\n        "key": "`",\n        "command": "-wrapSelection.quote.backtick",\n        "when": "editorHasSelection && editorTextFocus"\n    },\n    {\n        "key": "ctrl+q",\n        "command": "-workbench.action.quickOpenView"\n    },\n    {\n        "key": "ctrl+o",\n        "command": "workbench.action.files.openFile",\n        "when": "false"\n    },\n    {\n        "key": "ctrl+o",\n        "command": "-workbench.action.files.openFile",\n        "when": "true"\n    },\n    // close panel marker when open is with [g,e]\n    {\n        "key": "j",\n        "command": "closeMarkersNavigation",\n        "when": "vim.mode == \'Normal\' && editorFocus && markersNavigationVisible"\n    },\n    {\n        "key": "k",\n        "command": "closeMarkersNavigation",\n        "when": "vim.mode == \'Normal\' && editorFocus && markersNavigationVisible"\n    },\n    {\n        "key": "ctrl+q",\n        "command": "-workbench.action.quit"\n    },\n    {\n        "key": "shift+alt+left",\n        "command": "-editor.action.smartSelect.shrink",\n        "when": "editorTextFocus"\n    },\n    {\n        "key": "ctrl+alt+[Comma]",\n        "command": "editor.action.smartSelect.expand",\n        "when": "editorTextFocus"\n    },\n    {\n        "key": "shift+alt+right",\n        "command": "-editor.action.smartSelect.expand",\n        "when": "editorTextFocus"\n    },\n    {\n        "key": "m",\n        "command": "editor.action.wordHighlight.next",\n        "when": "vim.mode == \'Normal\' && editorTextFocus && hasWordHighlights",\n    },\n    {\n        "key": "shift+m",\n        "command": "editor.action.wordHighlight.prev",\n        "when": "vim.mode == \'Normal\' && editorTextFocus && hasWordHighlights && textInputFocus && !accessibilityModeEnabled",\n    },\n    {\n        "key": "alt+oem_3",\n        "command": "angular.goToComponentWithTemplateFile",\n        // "when": "vim.mode == \'Normal\' && editorTextFocus && hasWordHighlights && textInputFocus && !accessibilityModeEnabled",\n    },\n    {\n        "key": "alt+oem_8",\n        "command": "angular.goToTemplateForComponent",\n    },\n    {\n        "key": "ctrl+alt+j",\n        "command": "-bookmarks.jumpToPrevious",\n        "when": "editorTextFocus"\n    },\n    {\n        "key": "ctrl+g",\n        "command": "-workbench.action.gotoLine"\n    },\n    // terminal\n    {\n        "key": "ctrl+alt+oem_3",\n        "command": "workbench.action.terminal.split",\n        "when": "terminalFocus"\n    },\n    {\n        "key": "ctrl+w",\n        "command": "workbench.action.terminal.kill",\n        "when": "terminalFocus"\n    },\n\n    // quick open tabs\n    {\n        "key": "alt+p",\n        "command": "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",\n    },\n]\n')))}u.isMDXComponent=!0}}]);