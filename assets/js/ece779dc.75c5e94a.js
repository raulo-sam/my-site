"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7893],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),y=o,m=p["".concat(c,".").concat(y)]||p[y]||g[y]||a;return t?r.createElement(m,s(s({ref:n},l),{},{components:t})):r.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=y;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},8736:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={},s=void 0,i={unversionedId:"tech-notes/Angular/Custom decorators",id:"tech-notes/Angular/Custom decorators",title:"Custom decorators",description:"",source:"@site/docs/tech-notes/Angular/Custom decorators.md",sourceDirName:"tech-notes/Angular",slug:"/tech-notes/Angular/Custom decorators",permalink:"/docs/tech-notes/Angular/Custom decorators",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"techNotes",previous:{title:"Angular Notes",permalink:"/docs/category/angular-notes"},next:{title:"General Notes",permalink:"/docs/tech-notes/Angular/General Notes"}},c={},u=[],l={toc:u},p="wrapper";function g(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { SimpleChanges } from \"@angular/core\";\n\nexport const Required = (target: unknown, propertyKey: string): void => {\n    Object.defineProperty(target, propertyKey, {\n        get() {\n            throw new Error(`Attribute ${propertyKey} is required!`);\n        },\n        set(value) {\n            Object.defineProperty(target, propertyKey, {\n                value,\n                writable: true,\n                configurable: true,\n            });\n        },\n        configurable: true,\n    });\n};\n\n\nexport enum ChangesStrategy {\n    Each = 'each',\n    First = 'first',\n    NonFirst = 'nonfirst'\n}\n\n\nexport function TrackChanges<Type>(key: string, methodName: string, strategy: ChangesStrategy = ChangesStrategy.Each): Function {\n    return function (targetClass: any, functionName: string, descriptor: any): Function {\n        const source = descriptor.value;\n        descriptor.value = function (changes: SimpleChanges): Function {\n            if (changes && changes[key] && changes[key].currentValue !== undefined) {\n                const isFirstChange = changes[key].firstChange;\n                if (strategy === ChangesStrategy.Each ||\n                    (strategy === ChangesStrategy.First && isFirstChange) ||\n                    (strategy === ChangesStrategy.NonFirst && !isFirstChange)) {\n                    if (targetClass[methodName]) {\n                        targetClass[methodName].call(this, changes[key].currentValue as Type);\n                    } else {\n                        throw Error('Does not exist function with name: ' + methodName);\n                    }\n                }\n            }\n            return source.call(this, changes);\n        };\n        return descriptor;\n    };\n}\n\n\n\nexport function OutsideZone(targetClass, functionName: string, descriptor) {\n    const source = descriptor.value;\n    descriptor.value = function (...data): Function {\n        console.log(this);\n        if (!this.ngZone) {\n            throw new Error(\"Class with 'OutsideZone' decorator should have 'ngZone' class property with 'NgZone' class. Please add { private ngZone: NgZone } in constructor\");\n        }\n        return this.ngZone.runOutsideAngular(() => source.call(this, ...data));\n    };\n    return descriptor;\n}\n\nenum StorageType {\n    Local = \"local\"\n}\n\n\nexport function Storage<Type>(key: string, storageType: StorageType = StorageType.Local, defaultValue: Type): Function {\n  return (target: object, propName: string) => {\n    let _val: Type = target[propName];\n    Object.defineProperty(\n      target,\n      propName, {\n        get(): Type | unknown {\n          if (_val) {\n            return _val;\n          }\n          let item = localStorage.getItem(key);\n          if (!item) {\n            item = defaultValue as any;\n            _val = defaultValue;\n            localStorage.setItem(key, JSON.stringify(item));\n          }\n          return item;\n        },\n        set(item: Type): void {\n          _val = item;\n          localStorage.setItem(key, JSON.stringify(item));\n        }\n      }\n    );\n  };\n}\n\n\n// no entra en set cuando seteas un objecto interno, solo cuando seteas el objeto en si\nfunction DelayTimeSet<T>(delay: number = 10): Function {\n  return (target: object, propName: string) => {\n    let _val: T = (target as any)[propName];\n    Object.defineProperty(\n      target,\n      propName, {\n      get() {\n        return _val;\n      },\n      set(item) {\n        setTimeout(() => {\n          console.log('debug set value')\n          _val = item;\n        }, delay);\n      }\n    }\n    );\n  };\n}\n\n")))}g.isMDXComponent=!0}}]);