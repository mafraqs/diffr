(self.webpackJsonp=self.webpackJsonp||[]).push([[1],{119:function(e,t,o){var content=o(171);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(69).default)("84455a9e",content,!0,{sourceMap:!1})},126:function(e,t,o){"use strict";o(35),o(15),o(23),o(41),o(42);var r=o(8),n=o(13),d=(o(11),o(22),o(27),o(111),o(36));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var l={computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(d.b)({themeName:function(e){return e.theme.name}})),watch:{themeName:"applyTheme"},created:function(){var e="light";window.localStorage.getItem("theme")?e=window.localStorage.getItem("theme"):window.matchMedia("(prefers-color-scheme: dark)").matches&&(e="dark"),this.$store.commit("theme/set",e)},mounted:function(){this.applyTheme()},methods:{generateVars:function(e){return{"--background":e["editor.background"],"--foreground":e["editor.foreground"],"--context-menu-background":e["editor.contextMenuBackground"],"--shadow":e["editor.foreground"].slice(0,7)+"33","--shadow-light":e["editor.foreground"].slice(0,7)+"11","--remove":e["diffEditor.removedTextBackground"],"--remove-text":e["diffEditor.removedTextForeground"],"--add":e["diffEditor.insertedTextBackground"],"--add-text":e["diffEditor.insertedTextForeground"],"--selection":e["editor.selectionBackground"],"--highlight":e["editor.hoverHighlightBackground"],"--highlight-strong":e["editor.hoverHighlightBackground"].slice(0,7)}},generateVarsCssString:function(e){return Object.entries(e).map((function(e){var t=Object(r.a)(e,2),o=t[0],n=t[1];return"".concat(o,": ").concat(n)})).join(";")},generateRules:function(e){return'\n      :root[data-theme="light"] {\n        '.concat(this.generateVarsCssString(this.generateVars(this.$store.state.theme.all.light.colors)),"\n      }\n\n      @media (prefers-color-scheme: light) {\n        :root {\n          ").concat(this.generateVarsCssString(this.generateVars(this.$store.state.theme.all.light.colors)),'\n        }\n      }\n\n      :root[data-theme="dark"] {\n        ').concat(this.generateVarsCssString(this.generateVars(this.$store.state.theme.all.dark.colors)),"\n      }\n\n      @media (prefers-color-scheme: dark) {\n        :root {\n          ").concat(this.generateVarsCssString(this.generateVars(this.$store.state.theme.all.dark.colors)),"\n        }\n      }\n      ")},applyTheme:function(){document.documentElement.dataset.theme=this.$store.state.theme.name}}},f=(o(170),o(38)),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("script",{domProps:{innerHTML:e._s("\n    // Set theme as early as possible\n    if (window.localStorage.getItem('theme')) {\n      document.documentElement.dataset.theme = window.localStorage.getItem(\n        'theme'\n      )\n    }\n\n    // Use correct height for mobile devices\n    const adjustVh = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)\n    adjustVh()\n    window.addEventListener('resize', adjustVh)\n  ")}}),e._v(" "),e._m(0),e._v(" "),o("nuxt")],1)}),[function(){var e=this,t=e.$createElement;return(e._self._c||t)("style",{domProps:{innerHTML:e._s(e.generateRules())}})}],!1,null,null,null);t.a=component.exports},133:function(e,t,o){e.exports=o(134)},170:function(e,t,o){"use strict";o(119)},171:function(e,t,o){var r=o(68)(!1);r.push([e.i,'html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}[type=button],[type=reset],[type=submit],button,input,optgroup,select,textarea{font-size:inherit;font-family:inherit;font-weight:inherit;font-style:inherit;color:inherit;border:none;line-height:1;padding:0;margin:0;background:none;box-sizing:border-box}input,optgroup,select,textarea{border:1px solid #ddd}[type=button],[type=reset],[type=submit],button{cursor:pointer}[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled,button:disabled{cursor:default}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto;cursor:pointer}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}[hidden],template{display:none}body{background-color:var(--background);color:var(--foreground);transition:color .2s,background-color .2s}.link{color:var(--highlight-strong);transition:color .2s;border-radius:.1em}.link:focus{outline:none}.link[data-focus]{box-shadow:0 0 0 2px var(--background),0 0 0 4px var(--highlight-strong)}.list{padding-left:1.5em}.list li{list-style-type:none;margin-bottom:.5em}.list li:before{content:"";position:absolute;transform:translateX(-100%) translateX(-.5em) translateY(.5em);width:.55em;height:.55em;background-color:var(--highlight-strong);-webkit-clip-path:url(\'data:image/svg+xml;utf8,<svg width="46" height="24" viewBox="0 0 46 24" xmlns="http://www.w3.org/2000/svg"><path d="M34.69.69L46 12 34.69 23.31 23.37 12 34.7.69zm-22.63 0L23.37 12 12.06 23.31.75 12 12.05.69z" style="fill: var(--highlight-strong)" fill-rule="evenodd"/></svg>\');clip-path:url(\'data:image/svg+xml;utf8,<svg width="46" height="24" viewBox="0 0 46 24" xmlns="http://www.w3.org/2000/svg"><path d="M34.69.69L46 12 34.69 23.31 23.37 12 34.7.69zm-22.63 0L23.37 12 12.06 23.31.75 12 12.05.69z" style="fill: var(--highlight-strong)" fill-rule="evenodd"/></svg>\');-webkit-clip-path:polygon(0 50%,50% 0,100% 50%,50% 100%);clip-path:polygon(0 50%,50% 0,100% 50%,50% 100%)}.ruler{background-color:var(--shadow);border:none;height:1px;padding:0;margin:2em 0}::selection{background-color:var(--selection)}',""]),e.exports=r},172:function(e,t,o){"use strict";o.r(t),o.d(t,"state",(function(){return h})),o.d(t,"getters",(function(){return m})),o.d(t,"mutations",(function(){return y}));o(35),o(15),o(23),o(41),o(42);var r=o(13),n=(o(11),o(65)),d=o(66);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={light:l(l({},n),{},{colors:l({},n.colors),tokens:n.rules}),dark:l(l({},d),{},{colors:l({},d.colors),tokens:d.rules})},h=function(){return{name:"light",all:f}},m={raw:function(e){return f[e.name]},colors:function(e){return f[e.name].colors},tokens:function(e){return f[e.name].tokens}},y={set:function(e,t){e.name=t}}},65:function(e){e.exports=JSON.parse('{"base":"vs","colors":{"focusBorder":"#47b5e8","foreground":"#686968","editorGroup.emptyBackground":"#F3F4F5","editor.selectionBackground":"#47b5e844","editor.background":"#FAFBFC","editor.foreground":"#565869","editorWhitespace.foreground":"#ADB1C255","editor.contextMenuBackground":"#ffffff","editor.findMatchBackground":"#00E6E06A","editor.findMatchHighlightBackground":"#00E6E02A","editor.hoverHighlightBackground":"#47b5e844","input.border":"#E9EAEB","editorLink.activeForeground":"#47b5e8","textLink.foreground":"#47b5e8","diffEditor.insertedTextBackground":"#2DAE5824","diffEditor.insertedTextForeground":"#2DAE5899","diffEditor.removedTextBackground":"#FFAEAC44","diffEditor.removedTextForeground":"#FFAEAC","editorLineNumber.foreground":"#9194A2aa"},"rules":[{"token":"","foreground":"565869"}]}')},66:function(e){e.exports=JSON.parse('{"base":"vs-dark","colors":{"diffEditor.insertedTextBackground":"#95e6cb40","diffEditor.insertedTextForeground":"#95e6cb99","diffEditor.removedTextBackground":"#f0717844","diffEditor.removedTextForeground":"#f07178bb","editor.contextMenuBackground":"#2c3340","editor.background":"#212733","editor.findMatchBackground":"#ffcc6633","editor.findMatchHighlightBackground":"#ffcc6633","editor.foreground":"#d9d7ce","editor.hoverHighlightBackground":"#2fb1f088","editor.selectionBackground":"#47b5e866","editorLineNumber.foreground":"#3d4752","editorLink.activeForeground":"#2fb1f0","editorWhitespace.foreground":"#3d475288","focusBorder":"#2fb1f088","foreground":"#d9d7ce","input.border":"#7386994c","textLink.foreground":"#2fb1f0"},"rules":[{"token":"","foreground":"f3f2ef"}]}')},88:function(e,t,o){"use strict";o(9),o(51),o(52);o(1).a.mixin({computed:{PUBLIC_PATH:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return"/diffr"})),POSSIBLY_EMPTY_PUBLIC_PATH:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return"/diffr"}))}})}},[[133,5,2,6]]]);