"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[3211],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(4137));const o={sidebar_position:3},r="Decomposition of app",l={unversionedId:"reference/units/decomposition",id:"reference/units/decomposition",title:"Decomposition of app",description:"Group: Layers",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/units/decomposition.md",sourceDirName:"reference/units",slug:"/reference/units/decomposition",permalink:"/docs/reference/units/decomposition",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/units/decomposition.md",tags:[],version:"current",lastUpdatedAt:1665349132,formattedLastUpdatedAt:"Oct 9, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"referenceSidebar",previous:{title:"Segment",permalink:"/docs/reference/units/segments"},next:{title:"Isolation of modules",permalink:"/docs/reference/isolation/"}},s={},p=[{value:"Group: <code>Layers</code>",id:"group-layers",level:2},{value:"Layers order",id:"layers-order",level:3},{value:"By the level of knowledge/responsibility",id:"by-the-level-of-knowledgeresponsibility",level:4},{value:"By the level of danger of changes",id:"by-the-level-of-danger-of-changes",level:4},{value:"Group: <code>Slices</code>",id:"group-slices",level:2},{value:"Rules",id:"rules",level:3},{value:"Low Coupling &amp; High Cohesion",id:"low-coupling--high-cohesion",level:4},{value:"Grouping",id:"grouping",level:4},{value:"Group: <code>Segments</code>",id:"group-segments",level:2},{value:"Limitations",id:"limitations",level:3},{value:"General rules",id:"general-rules",level:4},{value:"Application for layers",id:"application-for-layers",level:4},{value:"See also",id:"see-also",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"decomposition-of-app"},"Decomposition of app"),(0,i.kt)("h2",{id:"group-layers"},"Group: ",(0,i.kt)("inlineCode",{parentName:"h2"},"Layers")),(0,i.kt)("p",null,"The first level of separation: according to the ",(0,i.kt)("strong",{parentName:"p"},"scope of responsibility")," of the module"),(0,i.kt)("admonition",{title:"Self-check",type:"note"},(0,i.kt)("p",{parentName:"admonition"},'"Which application layer does the module belong to?"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u2514\u2500\u2500 src/\n    \u251c\u2500\u2500 app/                    # Initializing application logic\n    \u251c\u2500\u2500 processes/              # (Optional) Application processes running over pages\n    \u251c\u2500\u2500 pages/                  # Application pages\n    \u251c\u2500\u2500 widgets/                # Independent and self-contained blocks for pages\n    \u251c\u2500\u2500 features/               # (Optional) Processing of user scenarios\n    \u251c\u2500\u2500 entities/               # (Optional) Business entities that domain logic operates with\n    \u2514\u2500\u2500 shared/                 # Reused modules, non business specific\n")),(0,i.kt)("h3",{id:"layers-order"},"Layers order"),(0,i.kt)("p",null,"If you look at the order of the layers , you can distinguish two general patterns:"),(0,i.kt)("h4",{id:"by-the-level-of-knowledgeresponsibility"},"By the level of knowledge/responsibility"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"app")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"processes")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"pages")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"features")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"entities")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"shared")),(0,i.kt)("p",null,'The module "knows" only about itself and the underlying modules, but not the ones lying above'),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This also affects the allowed imports")),(0,i.kt)("h4",{id:"by-the-level-of-danger-of-changes"},"By the level of danger of changes"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"shared")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"entities")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"features")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"pages")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"processes")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"app")),(0,i.kt)("p",null,"The lower the module is located , the more dangerous it is to make changes to it"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Because most likely it is used in many overlying layers")),(0,i.kt)("h2",{id:"group-slices"},"Group: ",(0,i.kt)("inlineCode",{parentName:"h2"},"Slices")),(0,i.kt)("p",null,"The second level of separation is by ",(0,i.kt)("strong",{parentName:"p"},"specific BL functionality")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The methodology has almost no effect on this level and much depends ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/feature-sliced/documentation/discussions/65"},"on the specific project"))),(0,i.kt)("admonition",{title:"Self-check",type:"note"},(0,i.kt)("p",{parentName:"admonition"},'"What scope of BL does the module affect?"'),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"Before that , it is necessary to determine the scope of responsibility (layer)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 app/\n|   # Does not have specific slices, \n|   # Because it contains meta-logic on the project and its initialization\n\u251c\u2500\u2500 processes/\n|   # Slices implementing processes on pages\n|   \u251c\u2500\u2500 payment\n|   \u251c\u2500\u2500 auth\n|   \u251c\u2500\u2500 quick-tour\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 pages/\n|   # Slices implementing application pages\n|   # At the same time, due to the specifics of routing, they can be invested in each other\n|   \u251c\u2500\u2500 profile\n|   \u251c\u2500\u2500 sign-up\n|   \u251c\u2500\u2500 feed\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 widgets/\n|   # Slices implementing independent page blocks\n|   \u251c\u2500\u2500 header\n|   \u251c\u2500\u2500 feed\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 features/\n|   # Slices implementing user scenarios on pages\n|   \u251c\u2500\u2500 auth-by-phone\n|   \u251c\u2500\u2500 inline-post\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 entities/\n|   # Slices of business entities for implementing a more complex BL\n|   \u251c\u2500\u2500 viewer\n|   \u251c\u2500\u2500 posts\n|   \u251c\u2500\u2500 i18n\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 shared/\n|    # Does not have specific slices\n|    # is rather a set of commonly used segments, without binding to the BL\n")),(0,i.kt)("h3",{id:"rules"},"Rules"),(0,i.kt)("p",null,"Since a slice is a specific level of abstraction, the methodology is obliged to impose certain rules on it"),(0,i.kt)("h4",{id:"low-coupling--high-cohesion"},"Low Coupling & High Cohesion"),(0,i.kt)("p",null,"Slices of the same layer ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/isolation/coupling-cohesion"},"cannot use each other directly"),", and their interaction and composition should be determined on the upper layer, relative to their current one"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=features/baz/ui.tsx",title:"features/baz/ui.tsx"},'// Bad: the feature imports another feature (slices of the same layer)\nimport { Bar } from "features/bar"\n\nfunction Baz({ foo, ...barProps}) {\n    ...\n    <Bar {...barProps} />\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=pages/foo/ui.tsx",title:"pages/foo/ui.tsx"},'// Good: features are compiled on the page (overlying layer)\nimport { Baz } from "features/baz"\nimport { Bar } from "features/bar"\n\nfunction Foo() {\n    ...\n    <Baz {...fooProps}>\n        <Bar {...barProps} />\n    </Baz>\n}\n')),(0,i.kt)("h4",{id:"grouping"},"Grouping"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In most cases, you should avoid nesting in slices, and use only ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/units/layers/features#structural-grouping-features"},"structural grouping by folders"),", without additional coupling logic"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"features/order/           # Feature group\n   \u251c\u2500\u2500 add-to-cart        # Full-fledged feature\n   \u251c\u2500\u2500 total-info         # Full-fledged feature\n-  \u251c\u2500\u2500 model.ts           # General logic for the group\n-  \u251c\u2500\u2500 hooks.ts           # General hooks for the group\n   \u2514\u2500\u2500 index.ts           # Public API with feature re-export\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At the same time, some layers (e.g., pages) initially require nesting due to the requirements of the project / framework"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pages/\n   \u251c\u2500\u2500 order/\n   |    \u251c\u2500\u2500 cart/\n   |    \u251c\u2500\u2500 checkout/\n   |    |    \u251c\u2500\u2500 delivery/\n   |    |    \u2514\u2500\u2500 payment/\n   |    \u251c\u2500\u2500 result/\n   |    \u2514\u2500\u2500 index.tsx\n   \u251c\u2500\u2500 auth/\n   |    \u251c\u2500\u2500 sign-in/\n   |    \u2514\u2500\u2500 sign-up/\n   \u251c\u2500\u2500 home/\n   \u251c\u2500\u2500 catalog/\n")))),(0,i.kt)("admonition",{title:"Important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Nested slices should be avoided as much as possible, but even if you have to use them (for example, for pages), you need to ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/isolation/coupling-cohesion"},"link them explicitly"),", to avoid unforeseen consequences")),(0,i.kt)("h2",{id:"group-segments"},"Group: ",(0,i.kt)("inlineCode",{parentName:"h2"},"Segments")),(0,i.kt)("p",null,"The third level of separation: by ",(0,i.kt)("strong",{parentName:"p"},"the purpose of the module in the code and implementation")),(0,i.kt)("admonition",{title:"Self-check",type:"note"},(0,i.kt)("p",{parentName:"admonition"},'"What part of the technical implementation of the logic affects the module?"'),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"Before that, it is necessary to determine the scope of influence (layer) and domain affiliation (slice)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"{layer}/\n    \u251c\u2500\u2500 {slice}/\n    |   \u251c\u2500\u2500 ui/                     # UI-logic (components, ui-widgets,...)\n    |   \u251c\u2500\u2500 model/                  # Business logic (store, actions, effects, reducers,...)\n    |   \u251c\u2500\u2500 lib/                    # Infrastructure logic (utils/helpers)\n    |   \u251c\u2500\u2500 config*/                # Configuration (of the project / slice)\n    |   \u2514\u2500\u2500 api*/                   # Logic of API requests (api instances, requests,...)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"At the same time, each segment can be represented ",(0,i.kt)("strong",{parentName:"em"},"as a file, or as a separate directory")," - depending on the complexity and size")),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"The methodology was developed with the aim of not limiting and not bothering developers with the rules for choosing abstractions ",(0,i.kt)("em",{parentName:"p"},"(it's desirable to use ",(0,i.kt)("strong",{parentName:"em"},"any segment in any layer"),")")),(0,i.kt)("p",null,"However, as a result of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions/"},"discussions and analysis of extensive experience")," - it was determined that it is better and more practical ",(0,i.kt)("strong",{parentName:"p"},"to limit each layer to segments used internally"),"."),(0,i.kt)("h4",{id:"general-rules"},"General rules"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"higher")," the layer is located , the more it knows about the BL of the application and vice versa"),(0,i.kt)("li",{parentName:"ol"},"API logic ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/66"},"recommended")," should be put in ",(0,i.kt)("inlineCode",{parentName:"li"},"shared")," so that the logic is not scattered around the project")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Usually, it is common and presented as single instances",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},'Edge-case "exceptions"'),": ",(0,i.kt)("em",{parentName:"li"},"GraphQL"),", ",(0,i.kt)("em",{parentName:"li"},"react-query hooks"))))),(0,i.kt)("h4",{id:"application-for-layers"},"Application for layers"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Layer"),(0,i.kt)("th",{parentName:"tr",align:null},"Content"),(0,i.kt)("th",{parentName:"tr",align:null},"Allowed Segments"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"app")),(0,i.kt)("td",{parentName:"tr",align:null},"Does not include slices and contains initialization logic"),(0,i.kt)("td",{parentName:"tr",align:null},"The existing segments are not quite suitable, and therefore ",(0,i.kt)("inlineCode",{parentName:"td"},"/providers (/hoc, ...)"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"/styles"),", etc. are usually used. It depends very much on the project and is unlikely to be solved by the methodology")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"processes")),(0,i.kt)("td",{parentName:"tr",align:null},"The slices inside include only business logic, without displaying (1)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ui")," ",(0,i.kt)("inlineCode",{parentName:"td"},"lib")," ",(0,i.kt)("inlineCode",{parentName:"td"},"model")," (",(0,i.kt)("inlineCode",{parentName:"td"},"api"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"pages")),(0,i.kt)("td",{parentName:"tr",align:null},"The slices inside include a ui and model composition of various features for a specific page"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ui")," ",(0,i.kt)("inlineCode",{parentName:"td"},"lib")," ",(0,i.kt)("inlineCode",{parentName:"td"},"model")," (",(0,i.kt)("inlineCode",{parentName:"td"},"api"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"features")),(0,i.kt)("td",{parentName:"tr",align:null},"The slices inside include the composition of entities and the implementation of BL in the model + display"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ui")," ",(0,i.kt)("inlineCode",{parentName:"td"},"lib")," ",(0,i.kt)("inlineCode",{parentName:"td"},"model")," (",(0,i.kt)("inlineCode",{parentName:"td"},"api"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"entities")),(0,i.kt)("td",{parentName:"tr",align:null},"The slices inside represent a disparate set of submodules for using"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ui")," ",(0,i.kt)("inlineCode",{parentName:"td"},"lib")," ",(0,i.kt)("inlineCode",{parentName:"td"},"model")," (",(0,i.kt)("inlineCode",{parentName:"td"},"api"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"shared")),(0,i.kt)("td",{parentName:"tr",align:null},"Contains only infrastructure logic without BL (1)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ui")," ",(0,i.kt)("inlineCode",{parentName:"td"},"lib")," ",(0,i.kt)("inlineCode",{parentName:"td"},"api"))))),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/31"},"(Discussion) Methodology abstractions, their goals and naming")),(0,i.kt)("li",{parentName:"ul"},"Discussions on naming entities",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-464894"},"Naming survey")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/20"},(0,i.kt)("inlineCode",{parentName:"a"},"processes")," vs ",(0,i.kt)("inlineCode",{parentName:"a"},"flows")," vs ..."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/68"},(0,i.kt)("inlineCode",{parentName:"a"},"model")," vs ",(0,i.kt)("inlineCode",{parentName:"a"},"store")," vs ...")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/atomicdesign/18951"},"Primary description of abstractions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pluralsight.com/guides/how-to-organize-your-react-+-redux-codebase"},"(Article) About the organization of the code base ",(0,i.kt)("em",{parentName:"a"},"with a complete comparison of several approaches"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://alexmngn.medium.com/why-react-developers-should-modularize-their-applications-d26d381854c1"},"(Article) About project modularization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/units/layers"},"(Reference) Layers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/units/segments"},"(Reference) Segments"))))}u.isMDXComponent=!0}}]);