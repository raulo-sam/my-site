```js title="keybindings.json"
 [ 
     // Coloque sus atajos de teclado en este archivo para sobreescribir los valores predeterminadosauto[]
    // emmet
    {
        "key": "alt+e",
        "command": "editor.emmet.action.wrapWithAbbreviation"
    },
    {
        "key": "ctrl+k ctrl+oem_4",
        "command": "editor.action.selectToBracket"
    },
    {
        "key": "ctrl+alt+oem_period",
        "command": "editor.emmet.action.matchTag"
    },
    {
        "key": "shift+alt+oem_5",
        "command": "editor.emmet.action.selectPrevItem"
    },
    {
        "key": "shift+alt+q",
        "command": "editor.emmet.action.removeTag"
    },
    {
        "key": "ctrl+alt+numpad_add",
        "command": "editor.emmet.action.updateTag"
    },
    {
        "key": "ctrl+alt+l",
        "command": "editor.emmet.action.mergeLines"
    },
    // Transform upper / Lower
    {
        "key": "shift+alt+u",
        "command": "editor.action.transformToUppercase"
    },
    {
        "key": "shift+alt+l",
        "command": "editor.action.transformToLowercase"
    },
    {
        "key": "ctrl+alt+t",
        "command": "editor.action.inspectTMScopes"
    },
    // Navigation
    {
        "key": "alt+oem_plus",
        "command": "workbench.action.focusFirstEditorGroup"
    },
    {
        "key": "ctrl+2",
        "command": "workbench.action.focusFirstEditorGroup"
    },
    {
        "key": "alt+oem_plus",
        "command": "workbench.action.navigateRight"
    },
    {
        "key": "alt+oem_2",
        "command": "workbench.action.navigateLeft"
    },
    {
        "key": "ctrl+alt+oem_3",
        "command": "workbench.action.navigateDown"
    },
    {
        "key": "ctrl+alt+oem_8",
        "command": "workbench.action.navigateUp"
    },
    // Explorer
    {
        "key": "alt+n",
        "command": "explorer.newFile",
        "when": "filesExplorerFocus"
    },
    {
        "key": "ctrl+alt+c",
        "command": "workbench.files.action.collapseExplorerFolders"
    },
    // behavior suggestion with neovim
    {
        "key": "alt+j",
        "command": "selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "alt+k",
        "command": "selectPrevSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "Tab",
        "command": "selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "Shift+Tab",
        "command": "selectPrevSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "Enter",
        "command": "acceptSelectedSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    // POSIBLE BUG
    // {
    //     "key": "backspace",
    //     "command": "backspaceAndInsertMode",
    //     "when": "editorTextFocus && vim.active && vim.mode == 'Normal' && editorTextFocus"
    // },
    {
        "key": "backspace",
        "command": "vim.remap",
        "when": "editorTextFocus && vim.active && vim.mode == 'Normal'",
        "args": {
          "after": ["a", "backspace" ]
        }
      },
    // POSIBLE BUGh
    {
        "key": "ctrl+backspace",
        "command": "deleteWordLeft",
        "when": "editorTextFocus && vim.active && vim.mode == 'Normal' && editorTextFocus"
    },
    // move cursor insert mode
    {
        "key": "alt+h",
        "command": "cursorLeft",
        "when": "vim.active && vim.mode == 'Insert' && editorTextFocus"
    },
    {
        "key": "alt+l",
        "command": "cursorRight",
        "when": "vim.active && vim.mode == 'Insert' && editorTextFocus"
    },
    {
        "key": "alt+j",
        "command": "cursorDown",
        "when": "vim.mode == 'Insert' && editorTextFocus && !suggestWidgetVisible"
    },
    {
        "key": "alt+k",
        "command": "cursorUp",
        "when": "vim.mode == 'Insert' && editorTextFocus && !suggestWidgetVisible"
    },
    // enter in insert mode
    {
        "key": "alt+o",
        "command": "editor.action.insertLineAfter",
        "when": "vim.mode == 'Insert' && editorTextFocus && !suggestWidgetVisible"
    },
    {
        "key": "alt+j",
        "command": "editor.action.moveLinesDownAction",
        "when": "vim.mode != 'Insert' && editorTextFocus && !suggestWidgetVisible"
    },
    {
        "key": "alt+k",
        "command": "editor.action.moveLinesUpAction",
        "when": "vim.mode != 'Insert' && editorTextFocus"
    },
    // indent
    {
        "key": "tab",
        "command": "editor.action.indentLines",
        "when": "vim.mode != 'Insert' && editorTextFocus"
    },
    {
        "key": "shift+tab",
        "command": "editor.action.outdentLines",
        "when": "editorTextFocus && vim.mode != 'Insert'"
    },
    // cambiar pestaña
    {
        "key": "alt+shift+h",
        "command": "workbench.action.previousEditor"
    },
    {
        "key": "alt+shift+l",
        "command": "workbench.action.nextEditor"
    },
    {
        "key": "alt+shift+h",
        "command": "vim.remap",
        "when": "vim.mode && inputFocus && editorTextFocus",
        "args": {
            "after": ["<Esc>",":","v","s","c", " ", "w", "o", "r", "k", "b", "e", "n", "c", "h", ".", "a", "c", "t", "i", "o", "n", ".", "p", "r", "e", "v", "i", "o", "u", "s", "E", "d", "i", "t", "o", "r", "<CR>"]
        }
    },
    {
        "key": "alt+shift+l",
        "command": "vim.remap",
        "when": "vim.mode && inputFocus && editorTextFocus",
        "args": {
            "after": ["<Esc>",":","v","s","c", " ", "w", "o", "r", "k", "b", "e", "n", "c", "h", ".", "a", "c", "t", "i", "o", "n", ".","n", "e", "x", "t", "E", "d", "i", "t", "o", "r", "<CR>"]
        }
    },
    // multicursor
    {
        "key": "shift+alt+j",
        "command": "editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+alt+k",
        "command": "editor.action.copyLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+alt+up",
        "command": "editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+alt+down",
        "command": "editor.action.copyLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    // behavior copy paste
    {
      "key": "ctrl+c",
      "command": "editor.action.clipboardCopyAction",
      "when": "editorTextFocus"
    },
    {
        "key": "ctrl+v",
        "command": "vim.remap",
        "when": "editorTextFocus && !editorReadonly && vim.active && vim.mode != 'Insert'",
        "args": {
          "after": ["p", "<Esc>"]
        }
    },
    {
        "key": "ctrl+v",
        "when": "editorTextFocus && !editorReadonly && vim.active && vim.mode == 'Insert'",
        "command": "editor.action.clipboardPasteAction",
    },
    {
        "key": "ctrl+x",
        "command": "vim.remap",
        "when": "inputFocus && vim.mode != 'Insert' && hasSelection",
        "args": {
            "after": ["y", "g", "v", "d"]
        }
    },
    {
        "key": "ctrl+b",
        "command": "-extension.vim_ctrl+b",
        "when": "editorTextFocus && vim.active && vim.use<C-b> && !inDebugRepl && vim.mode != 'Insert'"
    },
    {
        "key": "ctrl+f",
        "command": "-extension.vim_ctrl+f",
        "when": "editorTextFocus && vim.active && vim.use<C-f> && !inDebugRepl && vim.mode != 'Insert'"
    },
    // Behavior insert mode selection doesnt work yank only ctrl+c
    {
        "key": "alt+w",
        "command": "cursorWordEndRight",
        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == 'Insert'"
    },
    {
        "key": "alt+b",
        "command": "cursorWordEndLeft",
        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == 'Insert'"
    },
    {
        "key": "alt+n",
        "command": "editor.action.wordHighlight.next",
        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == 'Insert'"
    },
    {
        "key": "alt+shift+n",
        "command": "editor.action.wordHighlight.prev",
        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == 'Insert'"
    },
    {
        "key": "alt+ctrl+l",
        "command": "cursorWordEndRightSelect",
        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == 'Insert'"
    },
    {
        "key": "alt+ctrl+h",
        "command": "cursorWordEndLeftSelect",
        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == 'Insert'"
    },
    // salta / retroceder ultima posicion del cursor
    {
        "key": "alt+h",
        "command": "workbench.action.navigateBack",
        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == 'Normal'"
    },
    {
        "key": "alt+l",
        "command": "workbench.action.navigateForward",
        "when": "textInputFocus && !accessibilityModeEnabled && vim.mode == 'Normal'"
    },
    // best behavior of neovim mode
    {
        "key": "ctrl+shift+l",
        "command": "editor.action.selectHighlights",
        "when": "editorFocus"
    },
    // jump fast up/down
    // {
    //     "key": "ctrl+alt+j",
    //     "commands":["<Esc>","extension.vim_ctrl+d"],
    //     "when": "editorTextFocus"
    // },
    {
        "key": "ctrl+alt+j",
        "command": "vim.remap",
        "when": "(vim.mode == 'Normal' || vim.mode == 'Insert')",
        "args": {
            "after": ["<Esc>", "<C-d>"]
        }
    },
    {
        "key": "ctrl+alt+k",
        "command": "vim.remap",
        "when": "(vim.mode == 'Normal' || vim.mode == 'Insert')",
        "args": {
            "after": ["<Esc>", "<C-u>"]
        }
    },
    {
        "key": "ctrl+alt+j",
        "when": "editorFocus  && (vim.mode != 'Normal' || vim.mode != 'Insert')",
        "command": "extension.vim_ctrl+d",
        // "args": {
        //     "after": ["<C-d>"]
        // }
    },
    {
        "key": "ctrl+alt+k",
        "when": "editorFocus && (vim.mode != 'Normal' || vim.mode != 'Insert')",
        "command": "extension.vim_ctrl+u",
        // "args": {
        //     "after": ["<C-u>"]
        // }
    },
    // {
    //     "key": "ctrl+alt+k",
    //     "command": "extension.vim_ctrl+u",
    //     "when": "editorTextFocus"
    // },
    //breadcumps navigation
    {
        "key": "alt+l",
        "command": "breadcrumbs.focusNext",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "l",
        "command": "list.expand",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "alt+h",
        "command": "breadcrumbs.focusPrevious",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "ctrl+shift+s",
        "command": "-workbench.action.files.saveAs"
    },
    // which key
    {
        "key": "alt+m",
        "command": "whichkey.show"
        // "when": "textInputFocus && vim.mode == 'Normal'"
    },
    // navigation in openquick
    {
        "key": "alt+k",
        "command": "workbench.action.quickOpenNavigatePrevious",
        "when": "inQuickOpen"
    },
    {
        "key": "alt+j",
        "command": "workbench.action.quickOpenNavigateNext",
        "when": "inQuickOpen"
    },
    {
        "key": "shift+alt+s",
        "command": "workbench.action.files.saveAll"
    },
    {
        "key": "ctrl+k s",
        "command": "-workbench.action.files.saveAll"
    },
    {
        "key": "shift+alt+u",
        "command": "-extension.updateSettings"
    },
    {
        "key": "shift+alt+d",
        "command": "-extension.downloadSettings"
    },
    {
        "key": "ctrl+l",
        "command": "-extension.vim_navigateCtrlL",
        "when": "editorTextFocus && vim.active && vim.use<C-l> && !inDebugRepl"
    },
    {
        "key": "ctrl+l",
        "command": "-extension.smoothscroll_scrollCenter",
        "when": "editorTextFocus && !suggestWidgetVisible"
    },
    {
        "key": "ctrl+alt+k",
        "command": "-bookmarks.toggle",
        "when": "editorTextFocus"
    },
    // {
    //     "key": "ctrl+alt+j",
    //     "command": "-bookmarks.jumpToPrevious",
    //     "when": "editorTextFocus"
    // },
    {
        "key": "ctrl+j",
        "command": "-workbench.action.togglePanel"
    },
    //activitus bar
    {
        "when": "activitusbar",
        "command": "activitusbar.toggleExplorerView",
        "key": "ctrl+shift+E"
    },
    {
        "when": "activitusbar",
        "command": "activitusbar.showSearchViewWithSelection",
        "key": "ctrl+shift+F"
    },
    // search
    {
        "key": "alt+f",
        "command": "search.action.openNewEditor",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+oem_4",
        "command": "toggle.diff.renderSideBySide"
    },
    //align vertical
    {
        "key": "alt+v",
        "command": "extension.alignVertically"
    },
    // git
    {
        "key": "ctrl+g ctrl+g",
        "command": "git.openChange",
        "when": "editorTextFocus && !isInDiffEditor"
    },
    {
        "key": "ctrl+g ctrl+g",
        "command": "git.openFile",
        "when": "editorTextFocus && isInDiffEditor"
    },
    {
        "key": "ctrl+g ctrl+b",
        "command": "gitlens.showBranchesView",
        "when": "!gitlens:disabled"
    },
    {
        "key": "ctrl+g ctrl+c",
        "command": "gitlens.showCommitsView",
        "when": "!gitlens:disabled"
    },
    {
        "key": "ctrl+g ctrl+e",
        "command": "workbench.action.focusActiveEditorGroup",
    },
    {
        "key": "ctrl+g ctrl+s",
        "command": "gitlens.views.stashes.focus",
        "when": "!gitlens:disabled"
    },
    // resize groups editor
    {
        "key": "alt+enter",
        "command": "workbench.action.toggleEditorWidths",
        "when": "editorTextFocus || isInDiffEditor"
    },
    {
        "key": "alt+enter",
        "command": "workbench.action.toggleMaximizedPanel",
        "when": "terminalFocus"
    },
    // select all
    {
        "key": "ctrl+a",
        "when": "vim.mode != 'Normal'",
        "command": "editor.action.selectAll"
    },
    {
        "key": "ctrl+a",
        "command": "vim.remap",
        "when": "inputFocus && vim.mode == 'Normal'",
        "args": {
            "after": ["g", "g", "V", "G"]
        }
    },
    {
        "key": "ctrl+shift+v",
        "command": "vim.remap",
        "when": "inputFocus && vim.mode == 'Normal'",
        "args": {
            "after": ["<C-V>"]
        }
    },
    // Split join editor group
    {
        "key": "ctrl+2",
        "command": "workbench.action.focusFirstSideEditor",
        "when": "sideBySideEditorActive"
    },
    {
        "key": "ctrl+3",
        "command": "workbench.action.focusSecondSideEditor",
        "when": "sideBySideEditorActive"
    },
    {
        "key": "ctrl+alt+n",
        "command": "explorer.newFolder",
        "when": "filesExplorerFocus"
    },
    // {
    //     "key": "ctrl+s",
    //     "command": "multiCommand.saveAndEscape",
    //     "when"   : "vim.mode == 'Insert' && editorTextFocus",
    // },
    {
        "key": "ctrl+k ctrl+i",
        "command": "editor.action.showDefinitionPreviewHover",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+k ctrl+i",
        "command": "-editor.action.showHover",
        "when": "editorTextFocus"
    },
    {
        "key": "up",
        "command": "-extension.vim_up",
        "when": "editorTextFocus && vim.active && !inDebugRepl && !parameterHintsVisible && !suggestWidgetVisible"
    },
    {
        "key": "down",
        "command": "-extension.vim_down",
        "when": "editorTextFocus && vim.active && !inDebugRepl && !parameterHintsVisible && !suggestWidgetVisible"
    },
    {
        "key": "ctrl+d",
        "command": "-extension.vim_ctrl+d",
        "when": "editorTextFocus && vim.active && vim.use<C-d> && !inDebugRepl"
    },
    {
        "key": "ctrl+alt+m",
        "command": "workbench.action.moveView"
    },
    {
        "key": "ctrl+g ctrl+n",
        "command": "gitlens.copyCurrentBranch",
        // "when": "terminalFocus && terminalHasBeenCreated && terminalTextSelected && !terminalFindVisible || terminalFocus && terminalProcessSupported && terminalTextSelected && !terminalFindVisible"
    },
    {
        "key": "ctrl+w",
        "command": "extension.vim_ctrl+w",
        "when": "editorTextFocus && vim.active && vim.use<C-w> && !inDebugRepl && vim.mode === 'Normal'"
    },
    {
        "key": "ctrl+w",
        "command": "-extension.vim_ctrl+w",
        "when": "editorTextFocus && vim.active && vim.use<C-w> && !inDebugRepl"
    },
    {
        "key": "ctrl+shift+space",
        "command": "bookmarks.toggle",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+numpad_add",
        "command": "bookmarks.jumpToNext",
        "when": "editorTextFocus"
    },
    {
        "key": "alt+a",
        "command": "cursorEnd",
        "when": "textInputFocus"
    },
    {
        "key": "end",
        "command": "-cursorEnd",
        "when": "textInputFocus"
    },
    {
        "key": "alt+i",
        "command": "cursorHome",
        "when": "textInputFocus"
    },
    {
        "key": "home",
        "command": "-cursorHome",
        "when": "textInputFocus"
    },
    {
        "key": "Escape",
        "command": "vim.remap",
        "when": "textInputFocus && vim.mode == 'VisualLine'",
        "args": {
            "after": ["<Esc>", "<Esc>"]
        }
    },
    // close find
    {
        "key": "alt+f",
        "command": "closeFindWidget",
        "when": "editorFocus && findWidgetVisible && !isComposing"
    },
    {
        "key": "shift+3",
        "command": "-wrapSelection.quote.double",
        "when": "editorHasSelection && editorTextFocus"
    },
    {
        "key": "[Minus]",
        "command": "-wrapSelection.quote.single",
        "when": "editorHasSelection && editorTextFocus"
    },
    {
        "key": "ctrl+shift+v",
        "command": "-markdown.showPreview",
        "when": "!notebookEditorFocused && editorLangId == 'markdown'"
    },
    {
        "key": "ctrl+shift+v",
        "command": "-markdown-preview-enhanced.openPreview",
        "when": "editorLangId == 'markdown'"
    },
    {
        "key": "ctrl+shift+v",
        "command": "-notebook.cell.pasteAbove",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "key": "ctrl+shift+v",
        "command": "-workbench.action.terminal.paste",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+shift+v",
        "command": "-workbench.action.terminal.paste",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported || terminalFocus && terminalHasBeenCreated && terminalProcessSupported"
    },
    {
        "key": "`",
        "command": "-wrapSelection.quote.backtick",
        "when": "editorHasSelection && editorTextFocus"
    },
    {
        "key": "ctrl+q",
        "command": "-workbench.action.quickOpenView"
    },
    {
        "key": "ctrl+o",
        "command": "workbench.action.files.openFile",
        "when": "false"
    },
    {
        "key": "ctrl+o",
        "command": "-workbench.action.files.openFile",
        "when": "true"
    },
    // close panel marker when open is with [g,e]
    {
        "key": "j",
        "command": "closeMarkersNavigation",
        "when": "vim.mode == 'Normal' && editorFocus && markersNavigationVisible"
    },
    {
        "key": "k",
        "command": "closeMarkersNavigation",
        "when": "vim.mode == 'Normal' && editorFocus && markersNavigationVisible"
    },
    {
        "key": "ctrl+q",
        "command": "-workbench.action.quit"
    },
    {
        "key": "shift+alt+left",
        "command": "-editor.action.smartSelect.shrink",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+[Comma]",
        "command": "editor.action.smartSelect.expand",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+right",
        "command": "-editor.action.smartSelect.expand",
        "when": "editorTextFocus"
    },
    {
        "key": "m",
        "command": "editor.action.wordHighlight.next",
        "when": "vim.mode == 'Normal' && editorTextFocus && hasWordHighlights",
    },
    {
        "key": "shift+m",
        "command": "editor.action.wordHighlight.prev",
        "when": "vim.mode == 'Normal' && editorTextFocus && hasWordHighlights && textInputFocus && !accessibilityModeEnabled",
    },
    {
        "key": "alt+oem_3",
        "command": "angular.goToComponentWithTemplateFile",
        // "when": "vim.mode == 'Normal' && editorTextFocus && hasWordHighlights && textInputFocus && !accessibilityModeEnabled",
    },
    {
        "key": "alt+oem_8",
        "command": "angular.goToTemplateForComponent",
    },
    {
        "key": "ctrl+alt+j",
        "command": "-bookmarks.jumpToPrevious",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+g",
        "command": "-workbench.action.gotoLine"
    },
    // terminal
    {
        "key": "ctrl+alt+oem_3",
        "command": "workbench.action.terminal.split",
        "when": "terminalFocus"
    },
    {
        "key": "ctrl+w",
        "command": "workbench.action.terminal.kill",
        "when": "terminalFocus"
    },

    // quick open tabs
    {
        "key": "alt+p",
        "command": "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
    },
]
```