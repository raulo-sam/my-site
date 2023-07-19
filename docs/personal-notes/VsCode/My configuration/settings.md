```javascript title="settings.json"
{
    // vim
    "vim.disableExtension": false,
    "vim.vimrc.enable": false,
    "vim.vimrc.path": "c:\\Users\\rdiazlar\\.vscodevimrc",
    "vim.timeout": 250,
    "vim.useSystemClipboard": true,
    "vim.easymotion": true,
    "vim.neovimConfigPath": "C:\\Users\\rdiazlar\\.vscodevimrc",
    "vim.cursorStylePerMode.insert": "line-thin",
    "vim.cursorStylePerMode.visual": "line-thin",
    "vim.cursorStylePerMode.normal": "block",
    "vim.highlightedyank.color": "#f79a32",
    "vim.useCtrlKeys": true,
    "vim.leader": "<space>",
    "vim.foldfix": true,
    "vim.sneak": false,
    "vim.highlightedyank.enable": true,
    "vim.highlightedyank.duration": 100,
    "window.customMenuBarAltFocus": false,
    "window.enableMenuBarMnemonics": false,
    "vim.overrideCopy": false,
    "vim.startInInsertMode": false,
    "vim.surround": true,
    "vim.statusBarColorControl": false,
    "vim.statusBarColors.normal": ["#6e583b", "#CCCCCC"],
    "vim.statusBarColors.insert": ["#889b4a", "#CCCCCC"],
    "vim.statusBarColors.visual": ["#6e583b", "#CCCCCC"],
    "vim.statusBarColors.visualline": ["#572c55", "#CCCCCC"],
    "vim.statusBarColors.visualblock": "#A3BE8C",
    "vim.statusBarColors.replace": "#D08770",
    "vim.statusBarColors.commandlineinprogress": "#007ACC",
    "vim.statusBarColors.searchinprogressmode": "#007ACC",
    "vim.statusBarColors.surroundinputmode": "#007ACC",
    "vim.mouseSelectionGoesIntoVisualMode": true,
    "vim.camelCaseMotion.enable": true,
    "vim.autoindent": true,
    "vim.smartRelativeLine": true,
    "vim.operatorPendingModeKeyBindings": [
        {
            "before": ["i", "e"],
            "after": ["i", "w"]
        },
    ],
    "vim.handleKeys": {
        "<C-d>": true,
        "<C-f>": false,
        "<C-y>": false,
        "<C-z>": false,
        "<C-o>": false,
        "<C-x>": false,
        "<C-c>": false,
    },
    // VISUAL
    "vim.visualModeKeyBindingsNonRecursive": [
        // Add escape to paste action
        {
            "before": ["p"],
            "commands": [
                "editor.action.clipboardPasteAction",
                "extension.vim_escape"
            ],
            "silent": true
        },
        // Fix bug, don't copy current clipboard
        {
            "before": ["c"],
            "after": ["\"", "_", "c"]
        },
        // Fix bug, don't copy current clipboard
        {
            "before": ["d"],
            "after": ["\"", "_", "d"]
        },
        // Fix don't copy into current clipboard
        {
            "before": ["s"],
            "after": ["\"", "_", "s"]
        },
        // fix bug select all page
        {
            "before": ["i", "e"],
            "after": []
        },

    ],
    "vim.visualModeKeyBindings": [
        // correct behavior in visual line go back to Normal
        {
            "before": ["v"],
            "after": ["<Esc>"]
        },
        // movement to bookmarks
        {
            "before": ["leader", "k"],
            "commands": ["bookmarks.expandSelectionToPrevious"]
        },
        {
            "before": ["leader", "j"],
            "commands": ["bookmarks.expandSelectionToNext"]
        },
        // behavior with ctrl+d in insert.mode
        {
            "before": ["I"],
            "after": ["v", "i"]
        },
        {
            "before": ["A"],
            "after": ["v", "a"]
        },
        // add behavior backspace and enter to insert.mode
        {
            "before": ["backspace"],
            "commands": ["deleteLeft"]
        },
        // behavior enter
        {
            "before": ["enter"],
            "after": ["<Esc>", "a", "enter"]
        },
        // show menu contextual right click
        {
            "before": ["g", "enter"],
            "commands": ["editor.action.showContextMenu"],
            "silent": true
        },
        // format selection
        {
            "before": ["g", "f"],
            "commands": ["editor.action.formatSelection"],
            "silent": true
        },
        // indent lines
        {
            "before": ["g", "j"],
            "commands": ["editor.action.outdentLines"],
            "silent": true
        },
        {
            "before": ["g", "k"],
            "commands": ["editor.action.indentLines"],
            "silent": true
        },
        {
            "before": ["g", "r"],
            "commands": ["editor.action.startFindReplaceAction"]
        },
        {
            "before": ["g", "L"],
            "commands": ["editor.action.selectHighlights"],
            "silent": true
        },
        // Decrement selection with smart select functionality
        {
            "before": ["N"],
            "commands": ["editor.action.smartSelect.shrink"],
            "silent": true
        },
        // Increment selection with smart select functionality
        {
            "before": ["n"],
            "commands": ["editor.action.smartSelect.grow"],
            "silent": true
        },
        {
            "before": ["u"],
            "after": [],
            "silent": true
        },
        {
            "before": ["g","h"],
            "after":["0"],
            "silent": true
        },
        {
            "before": ["g","l"],
            "after":["$", "h"],
            "silent": true
        },
        {
            "before": ["g","c"],
            "commands": ["editor.action.commentLine"],
            // "silent": true
        },
        // emmet next Item
        {
            "before": ["t", "l"],
            "commands": ["editor.emmet.action.selectNextItem"],
            "silent": true
        },
        // emmet prev item
        {
            "before": ["t", "h"],
            "commands": ["editor.emmet.action.selectPrevItem"],
            "silent": true
        },
        {
            "before": ["t", "u"],
            "commands": ["editor.emmet.action.updateTag"],
            "silent": true
        },
        
    ],
    // INSERT
    "vim.insertModeKeyBindings": [
    ],

    "vim.insertModeKeyBindingsNonRecursive": [

        // Escape in insert.mode
        {
            "before": ["j", "j"],
            "after": ["<Esc>"]
        },
        // Escape in insert.mode
        {
            "before": ["k", "k"],
            "after": ["<Esc>"]
        },
        // Escape in insert.mode
        {
            "before": ["h", "h"],
            "after": ["<Esc>"]
        },
        // Execute one command in Normal mode go back to Insert.mode
        {
            "before": ["j", "k"],
            "after": ["<C-o>"]
        },
        // Execute one command in Normal mode go back to Insert.mode
        {
            "before": ["k", "j"],
            "after": ["<C-o>"]
        }
    ],
    // NORMAL
    "vim.normalModeKeyBindingsNonRecursive": [
        // Fix don't copy into current clipboard
        {
            "before": ["c"],
            "after": ["\"", "_", "c"]
        },
        // Fix don't copy into current clipboard
        {
            "before": ["C"],
            "after": ["\"", "_", "C"]
        },
        // Fix don't copy into current clipboard
        {
            "before": ["d"],
            "after": ["\"", "_", "d"]
        },
        // Fix don't copy into current clipboard
        {
            "before": ["D"],
            "after": ["\"", "_", "D"]
        },
        // Fix don't copy into current clipboard
        {
            "before": ["s"],
            "after": ["\"", "_", "s"]
        },
        // Fix don't copy into current clipboard
        {
            "before": ["S"],
            "after": ["\"", "_", "S"]
        },
    ],
    "vim.normalModeKeyBindings": [
        // Decrement selection with smart select functionality
        {
            "before": ["N"],
            "commands": ["editor.action.smartSelect.shrink"],
            "silent": true
        },
        // Increment selection with smart select functionality
        {
            "before": ["n"],
            "commands": ["editor.action.smartSelect.grow"],
            "silent": true
        },
        // replace find vim by easymotion
        {
            "before": ["U"],
            "after": ["leader","leader", "b"],
            "silent": true
        },
        {
            "before": ["u"],
            "after": ["leader","leader", "w"],
            "silent": true
        },

        // salto de line y volver al modo normal
        {
            "before": ["enter"],
            "after": ["a", "enter"]
        },
        // focus explorer
        {
            "before": ["leader", "e"],
            "commands": ["workbench.explorer.fileView.focus"],
            "silent": true
        },
        // focus open editors menu
        {
            "before": ["leader", "o"],
            "commands": ["workbench.files.action.focusOpenEditorsView"],
            "silent": true
        },
        //  Show quick open view
        {
            "before": ["leader", "h"],
            "commands": ["workbench.action.quickOpenView"],
            "silent": true
        },
        // Show current tabs open is
        {
            "before": ["leader", "t"],
            "commands": [
                "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup"
            ],
            "silent": true
        },
        // Fold/Unfold action
        {
            "before": ["leader", "p"],
            "commands": ["editor.toggleFold"],
            "silent": true
        },
        // Focus git in sidebar
        {
            "before": ["leader", "g"],
            "commands": ["workbench.scm.focus"],
            "silent": true
        },
        // Show breadcrumbs
        {
            "before": ["leader", "b"],
            "commands": ["breadcrumbs.focusAndSelect"],
            "silent": true
        },
        // Show zen mode
        {
            "before": ["leader", "z"],
            "commands": ["workbench.action.toggleZenMode"],
            "silent": true
        },
        // Add boomark action with extesion
        {
            "before": ["leader", "m"],
            "commands": ["bookmarks.toggle"]
        },
        // Jump prev bookmar
        {
            "before": ["leader", "k"],
            "commands": ["bookmarks.jumpToPrevious"]
        },
        // Jump next bookmar
        {
            "before": ["leader", "j"],
            "commands": ["bookmarks.jumpToNext"]
        },
        {
            "before": ["leader", "v"],
            "after": ["I", "<Esc>", "v", "$"]
        },
        // select group editor [ctrl + nº ]
        {
            "before": ["leader", "1"],
            "commands": ["workbench.action.focusFirstEditorGroup"],
            "silent": true
        },
        {
            "before": ["leader", "2"],
            "commands": ["workbench.action.focusSecondEditorGroup"],
            "silent": true
        },
        {
            "before": ["leader", "3"],
            "commands": ["workbench.action.focusThirdEditorGroup"],
            "silent": true
        },
        {
            "before": ["leader", "4"],
            "commands": ["workbench.action.focusFourthEditorGroup"],
            "silent": true
        },
        {
            "before": ["leader", "5"],
            "commands": ["workbench.action.focusFifthEditorGroup"],
            "silent": true
        },
        //go to ts or html angular
        {
          "before": ["leader", "leader", "t"],
          "commands": ["angular.goToComponentWithTemplateFile"]
        },
        {
          "before": ["leader", "leader", "h"],
          "commands": ["angular.goToTemplateForComponent"]
        },
        // Fix Copy into clipboard
        {
            "before": ["X"],
            "after": ["y", "y", "d", "d"]
        },
        // Comentado porque añade al hacer vi" añade " a la palabra
        // {
        //   "before": ["\""],
        //   "after": ["v", "i", "\""]
        // },
        // {
        //   "before": ["'"],
        //   "after": ["v", "i", "'"]
        // },
        {
            "before": ["("],
            "after": ["v", "i", "("]
        },
        {
            "before": ["{"],
            "after": ["v", "i", "{"]
        },
        {
            "before": ["["],
            "after": ["v", "i", "["]
        },
        {
            "before": [")"],
            "after": ["v", "a", "("]
        },
        {
            "before": ["}"],
            "after": ["v", "a", "{"]
        },
        {
            "before": ["]"],
            "after": ["v", "a", "["]
        },
        {
            "before": ["leader", "f"],
            "after": ["$", "V", "%"]
        },
        {
            "before": ["<C-W>"],
            "commands": ["workbench.action.closeActiveEditor"]
        },
        {
            "before": ["g", "t"],
            "commands": ["editor.emmet.action.matchTag"],
            "silent": true
        },
        {
            "before": ["g", "f"],
            "commands": ["actions.find"],
            "silent": true
        },
        {
            "before": ["g", "F"],
            "commands": ["workbench.action.findInFiles"],
            "silent": true
        },
        {
            "before": ["g", "r"],
            "commands": ["editor.action.startFindReplaceAction"]
        },
        {
            "before": ["g", "e"],
            "commands": ["editor.action.marker.next"]
        },
        // Go to sho Definition
        // {
        //     "before": ["g", "i"],
        //     "commands": ["editor.action.showDefinitionPreviewHover"],
        //     "silent": true
        // },
        {
            "before": ["g", "i"],
            "commands": [
                "editor.action.peekDefinition",
                "togglePeekWidgetFocus"
            ],
            "silent": true
        },
        {
            "before": ["g", "u"],
            "commands": [
                "editor.action.showDefinitionPreviewHover",
            ],
            "silent": true
        },
        // Go to line equal ctrl + p and :
        // {
        //     "before": ["g", "l"],
        //     "commands": ["workbench.action.gotoLine"],
        //     "silent": true
        // },
        {
            "before": ["g","l"],
            "commands":["cursorEnd"],
            "silent": true
        },
        {
            "before": ["g","h"],
            "commands":["cursorHome"],
            "silent": true
        },
        
        // show menu contextual right click
        {
            "before": ["g", "enter"],
            "commands": ["editor.action.showContextMenu"],
            "silent": true
        },
        // Show code actions
        {
            "before": ["g", "."],
            "commands": ["editor.action.quickFix"],
            "silent": true
        },
        //surround change double quotes by simple
        {
            "before": ["g", "'"],
            "after": ["c", "s", "\"", "'"]
        },
        //surround change simple quotes by doubles
        {
            "before": ["g", "\""],
            "after": ["c", "s", "'", "\""]
        },
        // avoid erase all page
        {
            "before": ["c", "i", "e"],
            "commands": []
        },
        // equal to ctrl+p
        {
            "before": ["g", "p"],
            "commands": ["workbench.action.quickOpen"],
            "silent": true
        },
        // Search symbol editor: equal ctrl+f+@
        {
            "before": ["g", "o"],
            "commands": ["workbench.action.gotoSymbol"],
            "silent": true
        },
        {
            "before": ["g", "d"],
            "commands": ["editor.action.revealDefinition"],
            "silent": true
        },

        {
            "before": ["g", "j"],
            "commands": ["editor.action.outdentLines"],
            "silent": true
        },
        {
            "before": ["g", "k"],
            "commands": ["editor.action.indentLines"],
            "silent": true
        },
        {
            "before": ["g", "L"],
            "commands": ["editor.action.selectHighlights"],
            "silent": true
        },
        {
            "before": ["g", "a"],
            "commands": ["references-view.findReferences"],
            "silent": true
        },
        // surround
        {
            "before": ["<leader>", "("],
            "after": ["y", "s", "s", "("]
        },
        {
            "before": ["<leader>", ")"],
            "after": ["y", "s", "i", "e", ")"]
        },
        {
            "before": ["<leader>", "{"],
            "after": ["y", "s", "s", "{"]
        },
        {
            "before": ["<leader>", "}"],
            "after": ["y", "s", "a", "w", "}"]
        },
        // Go to next Hightlight
        // {
        //     "before": ["m"],
        //     "commands": ["editor.action.wordHighlight.next"],
        //     "silent": true

        // },
        // Go to prev Hightlight
        // {
            // "before": ["M"],
            // "commands": ["editor.action.wordHighlight.prev"],
            // "silent": true
        // },
        // tags emmet

        // update tag
        {
            "before": ["t", "u"],
            "commands": ["editor.emmet.action.updateTag"],
            "silent": true
        },
        // add around tag
        {
            "before": ["t", "e"],
            "commands": ["editor.emmet.action.wrapWithAbbreviation"],
            "silent": true
        },
        // emmet next Item
        {
            "before": ["t", "l"],
            "commands": ["editor.emmet.action.selectNextItem"],
            "silent": true
        },
        // emmet prev item
        {
            "before": ["t", "h"],
            "commands": ["editor.emmet.action.selectPrevItem"],
            "silent": true
        },
        // emmet next Item
        {
            "before": ["t", "j"],
            "commands": ["editor.emmet.action.nextEditPoint"],
            "silent": true
        },
        {
            "before": ["d", "b"],
            "commands": ["editor.action.removeBrackets"],
            "silent": true
        },
    ],
    "whichkey.bindings": [
        {
            "key": ",",
            "name": "--> OPTIONS LEADER",
            "type": "command",
            "bindings": [
                {
                    "key": "b",
                    "name": "--> Breadcrumbs focus",
                    "type": "command",
                    "commands": ["breadcrumbs.focusAndSelect"]
                },
                {
                    "key": "e",
                    "name": "--> Explorer focus",
                    "type": "command",
                    "commands": ["workbench.explorer.fileView.focus"]
                },
                {
                    "key": "f",
                    "name": "--> Select all function ( not execute command )"
                },
                {
                    "key": "g",
                    "name": "--> Git focus",
                    "type": "command",
                    "commands": ["workbench.view.scm"],
                    "when": "workbench.scm.active && !gitlens:disabled && config.gitlens.keymap == 'chorded'"
                },
                {
                    "key": "h",
                    "name": "--> Open quick view",
                    "type": "command",
                    "commands": ["workbench.action.quickOpenView"]
                },
                {
                    "key": "j",
                    "name": "--> Jump to next boomark",
                    "type": "command",
                    "commands": ["bookmarks.jumpToNext"]
                },
                {
                    "key": "k",
                    "name": "--> Jump to previous boomark",
                    "type": "command",
                    "commands": ["bookmarks.jumpToPrevious"]
                },
                {
                    "key": "m",
                    "name": "--> Toogle boomarks",
                    "type": "command",
                    "commands": ["bookmarks.toggle"]
                },
                {
                    "key": "p",
                    "name": "--> Toogle fold",
                    "type": "command",
                    "commands": ["editor.toggleFold"]
                },
                {
                    "key": "o",
                    "name": "--> Open editor focus",
                    "type": "command",
                    "commands": ["workbench.files.action.focusOpenEditorsView"]
                },
                {
                    "key": "q",
                    "name": "--> Close editor",
                    "type": "command",
                    "commands": ["workbench.action.closeActiveEditor"]
                },
                {
                    "key": "t",
                    "name": "--> Open quick editors in group",
                    "type": "command",
                    "commands": [
                        "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup"
                    ]
                },
                {
                    "key": "w",
                    "name": "--> Save",
                    "type": "command",
                    "commands": ["workbench.action.files.save"]
                },
                {
                    "key": "z",
                    "name": "--> Toogle zen mode",
                    "type": "command",
                    "commands": ["workbench.action.toggleZenMode"]
                },
                {
                    "key": "1",
                    "name": "--> Focus 1 editor",
                    "type": "command",
                    "commands": ["workbench.action.focusFirstEditorGroup"]
                },
                {
                    "key": "2",
                    "name": "--> Focus 2 editor group",
                    "type": "command",
                    "commands": ["workbench.action.focusSecondEditorGroup"]
                },
                {
                    "key": "3",
                    "name": "--> Focus 3 editor group",
                    "type": "command",
                    "commands": ["workbench.action.focusThirdEditorGroup"]
                },
                {
                    "key": "4",
                    "name": "--> Focus 4 editor group",
                    "type": "command",
                    "commands": ["workbench.action.focusFourthEditorGroup"]
                }
            ]
        },
        {
            "key": "m",
            "name": "--> Bookmarks+",
            "type": "command",
            "bindings": [
                {
                    "key": "m",
                    "name": "--> Set BookMark",
                    "type": "command",
                    "commands": ["bookmarks.toggle"]
                },
                {
                    "key": "l",
                    "name": "--> List BookMarks",
                    "type": "command",
                    "commands": ["bookmarks.list"]
                },
                {
                    "key": "e",
                    "name": "--> Explorer BookMarks",
                    "type": "command",
                    "commands": ["bookmarksExplorer.focus"]
                },
                {
                    "key": ["c"],
                    "name": "--> Clean BookMarks current file",
                    "type": "command",
                    "commands": ["bookmarks.clear"]
                }
            ]
        },
        {
            "key": "e",
            "name": "--> Emmet+",
            "type": "bindings",
            "bindings": [
                {
                    "key": "e",
                    "name": "--> Emmet: Encapsular con abreviatura",
                    "type": "command",
                    "command": "editor.emmet.action.wrapWithAbbreviation"
                },
                {
                    "key": "u",
                    "name": "--> Emmet: Update tag",
                    "type": "command",
                    "command": "editor.emmet.action.updateTag"
                },
                {
                    "key": "r",
                    "name": "--> Emmet: Remove Tag",
                    "type": "command",
                    "command": "editor.emmet.action.removeTag"
                }
            ]
        },
        {
            "key": "s",
            "name": "--> Show+",
            "type": "bindings",
            "bindings": [
                {
                    "key": "e",
                    "name": "--> Show in Explorer",
                    "type": "command",
                    "commands": ["revealFileInOS"]
                },
                {
                    "key": "m",
                    "name": "--> Minimap Toggle",
                    "type": "command",
                    "command": "editor.action.toggleMinimap"
                },
                {
                    "key": "c",
                    "name": "--> Compare with file saved",
                    "type": "command",
                    "command": "workbench.files.action.compareWithSaved"
                }
            ]
        },
        {
            "key": "g",
            "name": "--> Git+",
            "type": "bindings",
            "bindings": [
                {
                    "key": "a",
                    "name": "--> STAGE current file",
                    "type": "command",
                    "command": "git.stage"
                },
                {
                    "key": "u",
                    "name": "--> UNSTAGE current file",
                    "type": "command",
                    "command": "git.unstage"
                },
                {
                    "key": "d",
                    "name": "--> DISCARD current file",
                    "type": "command",
                    "command": "git.clean"
                },
                {
                    "key": "o",
                    "name": "--> OPEN all files changes",
                    "type": "command",
                    "command": "git.openAllChanges"
                }
            ]
        }
    ],
    "gitlens.statusBar.reduceFlicker": false,
    "[html]": {
        "editor.tabSize": 4,
        "editor.insertSpaces": true,
        "editor.defaultFormatter": "mohd-akram.vscode-html-format"
    },
    "gitlens.mode.statusBar.enabled": true,
    "sync.gist": "685c1b624b4f6853750584ab07293189",
    "prettier.endOfLine": "auto",
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "peacock.affectStatusBar": false,
    "peacock.affectActivityBar": false,
    // "workbench.colorTheme": "Visual Studio Dark",
    "editor.fontFamily": "Ubuntu Medium Nerd Font Complete, JetBrains Mono NL Extralight, Consolas, 'Courier New', monospace",
    "editor.cursorStyle": "line",
    "typescript.tsserver.log": "verbose",
    "[typescriptreact]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "background.enabled": true,
    "background.customImages": ["file:///c:\\spiderman1.jpg"],
    "background.loop": false,
    "background.useDefault": false,
    "background.useFront": false,
    "background.style": {
        "background-size": "center",
        "background-repeat": "no-repeat",
        "width": "100vw",
        "height": "100vh",
        "opacity": ".1"
    },
    "wrapSelection.patterns": {
        "log": "console.log(`${text}`, ${text})",
        "promise": "new Promise((yeah, nah) => yeah(${text}))",
        "=>": "() => ${text}"
    },
    "customizeUI.stylesheet": {
        "#vscodevim\\.vim\\.primary[aria-label=\"-- INSERT --\"]": "background-color: #aab533 !important; border-radius: 20px",
        // "#vscodevim\\.vim\\.primary[aria-label=\"-- VISUAL --\"]": "background-color: #b16286 !important;border-radius: 20px",
        "#vscodevim\\.vim\\.primary[aria-label=\"-- VISUAL --\"]": "background-color: #4A235A  !important;border-radius: 20px",
        "#vscodevim\\.vim\\.primary[aria-label=\"-- VISUAL LINE --\"]": "background-color: #7D3C98 !important;border-radius: 20px",
        "#vscodevim\\.vim\\.primary[aria-label=\"-- VISUAL --  MULTI CURSOR\"]": "background-color: #b16286 !important;border-radius: 20px",
        "#vscodevim\\.vim\\.primary[aria-label=\"-- EASYMOTION INPUT --\"]": "background-color: #A93226 !important;border-radius: 20px"
    },
    "editor.lineNumbers": "on",
    "sonarlint.ls.javaHome": "C:\\Program Files\\Java\\jdk-17.0.2",
    "sonarlint.connectedMode.connections.sonarcloud": [
        {
            "connectionId": "skmo",
            "organizationKey": "teamserviceskmo"
        }
    ],
    "terminal.integrated.defaultProfile.windows": "Git Bash",
    "workbench.colorCustomizations": {
        "editor.lineHighlightBackground": "#6e583b32",
        "statusBar.background": "#6e583b",
        "statusBar.noFolderBackground": "#889b4a",
        "statusBar.debuggingBackground": "#889b4a",
        "statusBar.foreground": "#CCCCCC",
        "statusBar.debuggingForeground": "#CCCCCC",
        "bookmarks.overviewRuler": "#b62e2e",
        "bookmarks.lineBorder": "#6e583b",
        "bookmarks.lineBackground": "#1515fb23",
        "tab.activeBackground": "#6e583b",
        "tab.activeBorder": "#f79a32"
    },
    "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": false,
    "javascript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": false,
    "javascript.format.semicolons": "insert",
    "typescript.format.semicolons": "insert",
    "typescript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": false,
    "html.format.wrapAttributes": "preserve",
    "prettier.tabWidth": 4,
    "javascript.referencesCodeLens.showOnAllFunctions": true,
    "js/ts.implicitProjectConfig.checkJs": true,
    "search.searchOnType": false,
    "html.format.enable": false,
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.minimap.enabled": false,
    "sonarlint.rules": {
        "typescript:S1874": {
            "level": "off"
        },
        "typescript:S1871": {
            "level": "off"
        }
    },
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "editor.accessibilitySupport": "off",
    "errorLens.excludeBySource": [
        "ts(2794)"
    ],
    "git.enableSmartCommit": true,
    "[scss]": {
        "editor.defaultFormatter": "vscode.css-language-features"
    },
    "gitlens.views.commitDetails.files.layout": "list",
    "editor.unicodeHighlight.ambiguousCharacters": false,
    "editor.multiCursorLimit": 25000,
    "vim.history": 200,
    "editor.multiCursorModifier": "ctrlCmd",
    "zenMode.hideStatusBar": false,
    "zenMode.hideLineNumbers": false,
    "zenMode.hideActivityBar": false,
    "zenMode.hideTabs": false,
    "window.zoomLevel": -1,
    "gitlens.mode.active": "zen",
    "workbench.editor.enablePreview": false
}

```