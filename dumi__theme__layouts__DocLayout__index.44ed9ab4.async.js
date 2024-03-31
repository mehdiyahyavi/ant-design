"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[367],{49313:function(zn,I,n){n.d(I,{Z:function(){return sn},f:function(){return S}});var Y=n(667294),S=Y.createContext(!1);function sn(){return Y.useContext(S)}},438746:function(zn,I,n){n.d(I,{Z:function(){return m}});var Y=n(97857),S=n.n(Y),sn=n(952677),v=n.n(sn),C=n(805574),F=n.n(C),pn=n(385956),a=n(667294),R=n(302559);function M(O){return O.replace("-cn","").replace(/\/$/,"")}function m(){var O=(0,pn.useLocation)(),en=O.search,rn=(0,R.default)(),s=F()(rn,2),o=s[1],u=a.useCallback(function(e,x){var g=M(e);if(o==="cn"&&(g="".concat(g,"-cn")),en&&(g="".concat(g).concat(en)),x){var j;v()(x)==="object"?j=x[o]:j=x,g="".concat(g,"#").concat(j)}return g},[o,en]);return S()(S()({},O),{},{pathname:M(O.pathname),getLink:u})}},361446:function(zn,I,n){var Y=n(805574),S=n.n(Y),sn=n(719632),v=n.n(sn),C=n(667294),F=n(844183),pn=n(566254),a=n(385956),R=n(472638),M=n(438746),m=n(785893),O=function(s){var o=s.before,u=s.after,e=s.link,x=s.title,g=s.subtitle,j=s.search,Z=s.tag,G=Z===void 0?"":Z,c=s.className;return!o&&!u?(0,m.jsxs)(R.Z,{to:"".concat(e).concat(j),style:G?{display:"flex",alignItems:"center",justifyContent:"space-between"}:void 0,className:c,children:[(0,m.jsxs)("span",{children:[x,g&&(0,m.jsx)("span",{className:"chinese",children:g})]}),G&&(0,m.jsx)(F.Z,{bordered:!1,color:G==="New"?"success":"processing",style:{marginBlockEnd:0},children:G.replace("VERSION",pn.Z)})]}):(0,m.jsxs)(R.Z,{to:"".concat(e).concat(j),className:c,children:[o,x,g&&(0,m.jsx)("span",{className:"chinese",children:g}),u]})},en=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=(0,a.useFullSidebarData)(),u=(0,M.Z)(),e=u.pathname,x=u.search,g=(0,a.useSidebarData)(),j=s.before,Z=s.after,G=(0,C.useMemo)(function(){var c,E=v()(g!=null?g:[]);if(e.startsWith("/docs/spec")){var W=E.splice(0,1);E.push.apply(E,v()(W))}if(e.startsWith("/docs/react")){var D,L=(D=Object.entries(o).find(function(U){var T=S()(U,1),B=T[0];return B.startsWith("/changelog")}))===null||D===void 0?void 0:D[1];L&&E.splice(1,0,L[0])}if(e.startsWith("/changelog")){var X,$=(X=Object.entries(o).find(function(U){var T=S()(U,1),B=T[0];return B.startsWith("/docs/react")}))===null||X===void 0?void 0:X[1];$&&(E.unshift($[0]),E.push.apply(E,v()($.slice(1))))}return(c=E==null?void 0:E.reduce(function(U,T){if(T!=null&&T.title)if(e.startsWith("/docs/spec")){var B,q,mn=T.children.reduce(function(w,f){var d,b,k=(d=(b=f.frontmatter)===null||b===void 0?void 0:b.type)!==null&&d!==void 0?d:"default";return w[k]||(w[k]=[]),w[k].push(f),w},{}),dn=[];dn.push.apply(dn,v()((B=(q=mn.default)===null||q===void 0?void 0:q.map(function(w){return{label:(0,m.jsxs)(R.Z,{to:"".concat(w.link).concat(x),children:[j,w==null?void 0:w.title,Z]}),key:w.link.replace(/(-cn$)/g,"")}}))!==null&&B!==void 0?B:[])),Object.entries(mn).forEach(function(w){var f=S()(w,2),d=f[0],b=f[1];d!=="default"&&dn.push({type:"group",label:d,key:d,children:b==null?void 0:b.map(function(k){return{label:(0,m.jsxs)(R.Z,{to:"".concat(k.link).concat(x),children:[j,k==null?void 0:k.title,Z]}),key:k.link.replace(/(-cn$)/g,"")}})})}),U.push({label:T==null?void 0:T.title,key:T==null?void 0:T.title,children:dn})}else{var yn;U.push({type:"group",label:T==null?void 0:T.title,key:T==null?void 0:T.title,children:(yn=T.children)===null||yn===void 0?void 0:yn.map(function(w){var f,d;return{label:(0,m.jsx)(O,{before:j,after:Z,link:w.link,title:w==null?void 0:w.title,subtitle:(f=w.frontmatter)===null||f===void 0?void 0:f.subtitle,search:x,tag:(d=w.frontmatter)===null||d===void 0?void 0:d.tag}),key:w.link.replace(/(-cn$)/g,"")}})})}else{var H=T.children||[];H.every(function(w){var f;return w==null||(f=w.frontmatter)===null||f===void 0?void 0:f.date})&&H.sort(function(w,f){var d,b;return((d=w.frontmatter)===null||d===void 0?void 0:d.date)>((b=f.frontmatter)===null||b===void 0?void 0:b.date)?-1:1}),U.push.apply(U,v()(H.map(function(w){var f;return{label:(0,m.jsx)(O,{before:j,after:Z,link:w.link,title:w==null?void 0:w.title,search:x,tag:(f=w.frontmatter)===null||f===void 0?void 0:f.tag}),key:w.link.replace(/(-cn$)/g,"")}})))}return U},[]))!==null&&c!==void 0?c:[]},[g,o,e,x,s]);return[G,e]};I.Z=en},148050:function(zn,I,n){n.r(I);var Y=n(168400),S=n.n(Y),sn=n(667294),v=n(639389),C=n.n(v),F=n(879587),pn=n(647759),a=n(785893),R,M="https://github.com/ant-design/ant-design/edit/master/",m=(0,pn.kc)(function(en){var rn=en.token,s=en.css,o=rn.colorIcon,u=rn.colorText,e=rn.iconCls;return{editButton:s(R||(R=S()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),e,o,u)}}),O=function(rn){var s=rn.title,o=rn.filename,u=m(),e=u.styles;return(0,a.jsx)(F.Z,{title:s,children:(0,a.jsx)("a",{className:e.editButton,href:"".concat(M).concat(o),target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(v.EditOutlined,{})})})};I.default=O},787729:function(zn,I,n){n.r(I),n.d(I,{default:function(){return co}});var Y=n(805574),S=n.n(Y),sn=n(693967),v=n.n(sn),C=n(727484),F=n.n(C),pn=n(533852),a=n(667294),R=n(75529),M=n(715778),m=n(385956),O=n(302559),en=n(438746),rn=n(168400),s=n.n(rn),o=n(370917),u=n(647759),e=n(785893),x,g={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},j=function(){var t=(0,u.Fg)(),r=function h(y){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return p<=10?`
.palette-`.concat(y,"-").concat(p,` {
  background: `).concat(t["".concat(y,"-").concat(p)],`;
}
`).concat(h(y,p+1),`
    `):""},i=function h(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return y<=13?`
.palette-gray-`.concat(y,` {
  background: `).concat(g[y],`;
}
`).concat(h(y+1),`
    `):""};return(0,e.jsx)(o.xB,{styles:(0,o.iv)(x||(x=s()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),t.colorError,r("blue"),r("purple"),r("cyan"),r("green"),r("magenta"),r("red"),r("volcano"),r("orange"),r("gold"),r("yellow"),r("lime"),r("geekblue"),i())})},Z=j,G,c=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(G||(G=s()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},E,W=function(){var l=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(E||(E=s()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),l.colorText,l.fontSize,l.fontFamily,l.lineHeight,l.colorBgContainer)})},D,L=function(){var l=(0,u.Fg)(),t=l.anchorTop;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(D||(D=s()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),t)})},X=n(510274),$,U=function(){var t=(0,u.Fg)(),r=t.antCls,i=t.colorPrimary;return(0,e.jsx)(o.xB,{styles:(0,o.iv)($||($=s()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),t.colorText,t.colorTextHeading,t.fontFamily,t.colorTextHeading,t.fontFamily,t.colorSplit,r,r,t.siteMarkdownCodeBg,t.colorSplit,t.codeFamily,t.siteMarkdownCodeBg,t.borderRadius,t.colorText,Math.max(t.fontSize-1,12),t.siteMarkdownCodeBg,t.borderRadius,t.colorTextSecondary,t.colorSplit,t.colorSplit,r,t.colorTextSecondary,t.colorText,t.colorSplit,t.colorSplit,t.colorSplit,t.colorSplit,Math.max(t.fontSize-1,12),t.codeFamily,t.lineHeight,t.colorSplit,t.colorText,t.magenta7,Math.max(t.fontSize-1,12),Math.max(t.fontSize-1,12),Math.max(t.fontSize-1,12),r,r,r,i,new X.C(i).setAlpha(.75).toHex8String(),r,r,t.colorWhite,r,new X.C(i).setAlpha(.75).toHexString(),r,r,new X.C(i).setAlpha(.75).toHexString(),r,r,r,r,new X.C(i).setAlpha(.6).toHexString(),r,r,r)})},T=U,B,q=function(){var l=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(B||(B=s()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: `,`;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),l.colorText,l.fontSize,l.borderRadius,l.colorText)})},mn,dn=function(){var t=(0,u.Fg)(),r=t.antCls,i=t.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(mn||(mn=s()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: calc(100% - `,`px);
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          &.code-box-simplify {
            border-radius: 0;
            margin-bottom: 0;

            .code-box-demo {
              padding: 0;
              border-bottom: 0;
            }
          }

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),t.lineWidth*2,t.colorBgContainer,t.colorSplit,t.borderRadiusLG,t.colorText,t.colorBgContainer,t.colorBgContainer,t.borderRadiusLG,t.borderRadiusLG,t.colorPrimary,t.colorBgContainer,t.borderRadius,t.borderRadius,t.colorText,t.fontSize,i,t.colorTextSecondary,t.colorText,r,r,t.colorText,t.colorSplit,t.fontSize,t.borderRadius,t.borderRadius,t.colorSplit,r,r,t.borderRadius,t.borderRadius,t.colorBgContainer,t.colorSplit,t.colorSplit,t.colorTextSecondary,t.colorText,i,t.colorBgContainer,i,t.green6,t.colorBgContainer,t.purple3,t.purple6,r)})},yn=dn,H,w=function(){var l=(0,u.Fg)(),t=l.antCls,r=l.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(H||(H=s()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),r,t,l.colorPrimary,r,t)})},f,d=function(){var l=(0,u.Fg)(),t=l.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(f||(f=s()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),l.colorIcon,l.colorIconHover,l.colorBorder,l.colorTextSecondary,t,l.colorLinkHover)})},b,k=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(b||(b=s()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},A,tn=function(){var l=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(A||(A=s()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),l.screenLG,l.colorBgContainer,l.colorSplit,l.colorLink,l.colorBgContainer)})},an,xn=function(){var l=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(an||(an=s()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),l.colorPrimary,l.colorPrimary,l.colorPrimary,l.colorPrimary,l.colorPrimary)})},wn,Cn=function(){var l=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(wn||(wn=s()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),l.colorPrimary,l.colorError,l.colorText,l.colorTextSecondary,l.colorBgContainer,l.borderRadius,l.colorBgContainer,l.colorBgContainer)})},gn,hn="dumi-default-",En=function(){var l=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(gn||(gn=s()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),hn,l.colorText,l.colorBgContainer,l.colorBgContainer,l.colorTextPlaceholder,hn,l.colorBgElevated,l.colorBgElevated,hn,l.controlItemBgActive,l.controlItemBgHover,l.colorText,l.colorText)})},An,Mn=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(An||(An=s()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},Tn=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(W,{}),(0,e.jsx)(L,{}),(0,e.jsx)(T,{}),(0,e.jsx)(q,{}),(0,e.jsx)(yn,{}),(0,e.jsx)(w,{}),(0,e.jsx)(d,{}),(0,e.jsx)(k,{}),(0,e.jsx)(tn,{}),(0,e.jsx)(xn,{}),(0,e.jsx)(Cn,{}),(0,e.jsx)(Mn,{}),(0,e.jsx)(Z,{}),(0,e.jsx)(c,{}),(0,e.jsx)(En,{})]})},Ln=Tn,On=n(97857),z=n.n(On),J=n(9783),kn=n.n(J),jn=n(639389),Zn=n.n(jn),Nn=n(469181),Vn=n(344682),Wn=n(11739),$n=n(709894),In=n(883458),ie=n(722449),le="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",Gn="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",Xn=function(t){var r=t.direction;return(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,e.jsx)("path",{d:r==="ltr"?le:Gn})})},se=function(t){return(0,e.jsx)(Zn(),z()(z()({},t),{},{component:function(){return(0,e.jsx)(Xn,{direction:t.direction})}}))},me=se,ot=n(840070),Bn=n(373638),ee=n(438199),ge,he,rt=(0,u.kc)(function(l){var t=l.token,r=l.css,i=t.headerHeight,h=t.colorTextHeading,y=t.fontFamily,p=t.mobileMaxWidth;return{logo:r(ge||(ge=s()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,h,y,i,h,p),title:r(he||(he=s()([`
      line-height: 32px;
    `])))}}),at=function(t){var r=t.isZhCN,i=(0,m.useLocation)(),h=i.search,y=rt(),p=y.styles;return(0,e.jsx)("h1",{children:(0,e.jsxs)(m.Link,{to:Bn.J1("/",r,h),className:p.logo,children:[(0,e.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,e.jsx)("span",{className:p.title,children:"Ant Design"})]})})},it=at,lt=n(719632),st=n.n(lt),fe=n(24768),Jn=n(472638),xe,ve,dt={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},ct=(0,u.kc)(function(l){var t=l.token,r=t.antCls,i=t.iconCls,h=t.fontFamily,y=t.headerHeight,p=t.menuItemBorder,N=t.colorPrimary,P=t.colorText;return{nav:(0,u.iv)(xe||(xe=s()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: '';
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),h,r,r,r,40+12*2,y,y,p,P,r,i,r,N,r,r),popoverMenuNav:(0,u.iv)(ve||(ve=s()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),r,r,r,r,r)}}),ut=function(t){var r,i,h=t.isZhCN,y=t.isMobile,p=t.responsive,N=t.directionText,P=t.onLangChange,_=t.onDirectionChange,nn=(0,m.useLocation)(),vn=nn.pathname,Q=nn.search,ln=(0,O.default)(dt),bn=S()(ln,1),fn=bn[0],V=(0,m.useFullSidebarData)(),cn=((r=V["/docs/blog"])===null||r===void 0||(r=r[0])===null||r===void 0?void 0:r.children)||[],K=ct(),Sn=K.styles,Fn=y?"inline":"horizontal",Rn=vn.split("/").filter(Boolean).slice(0,-1).join("/"),un=Rn||"home";vn.startsWith("/changelog")?un="docs/react":vn.startsWith("/docs/resources")&&(un="docs/resources");var Pn,Hn=[{label:(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,e.jsx)(m.FormattedMessage,{id:"app.header.lang"}),onClick:P,key:"switch-lang"},{label:N,onClick:_,key:"switch-direction"}];y?Pn=Hn:p==="crowded"&&(Pn=[{label:(0,e.jsx)(jn.MenuOutlined,{}),key:"additional",children:[].concat(Hn)}]);var Qn=[{label:(0,e.jsx)(Jn.Z,{to:Bn.J1("/docs/spec/introduce",h,Q),children:fn.design}),key:"docs/spec"},{label:(0,e.jsx)(Jn.Z,{to:Bn.J1("/docs/react/introduce",h,Q),children:fn.development}),key:"docs/react"},{label:(0,e.jsx)(Jn.Z,{to:Bn.J1("/components/overview/",h,Q),children:fn.components}),key:"components"},cn.length?{label:(0,e.jsx)(Jn.Z,{to:Bn.J1(cn.sort(function(ue,oe){var Yn,qn;return((Yn=ue.frontmatter)===null||Yn===void 0?void 0:Yn.date)>((qn=oe.frontmatter)===null||qn===void 0?void 0:qn.date)?-1:1})[0].link,h,Q),children:fn.blog}),key:"docs/blog"}:null,{label:(0,e.jsx)(Jn.Z,{to:Bn.J1("/docs/resources",h,Q),children:fn.resources}),key:"docs/resources"},h?{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,e.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(st()((i=Pn)!==null&&i!==void 0?i:[]));return(0,e.jsx)(fe.Z,{mode:Fn,selectedKeys:[un],className:Sn.nav,disabledOverflow:!0,items:Qn})},pt=ut,mt=n(879587),be,ye,we,Ce,je,Kn="1.2em",gt=(0,u.kc)(function(l){var t=l.token,r=l.css,i=t.colorText,h=t.colorBorder,y=t.colorBgContainer,p=t.colorBgTextHover,N=t.borderRadius,P=t.controlHeight,_=t.motionDurationMid;return{btn:r(be||(be=s()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,h,P,P,N,_,_,p,Kn,Kn,Kn),innerDiv:r(ye||(ye=s()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Kn,Kn),labelStyle:r(we||(we=s()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Kn,i,i),label1Style:r(Ce||(Ce=s()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,y),label2Style:r(je||(je=s()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),ht=function(t){var r=t.label1,i=t.label2,h=t.tooltip1,y=t.tooltip2,p=t.value,N=t.pure,P=t.onClick,_=gt(),nn=_.styles,vn=nn.btn,Q=nn.innerDiv,ln=nn.labelStyle,bn=nn.label1Style,fn=nn.label2Style,V=(0,e.jsx)("button",{onClick:P,className:vn,"aria-label":t["aria-label"],children:(0,e.jsxs)("div",{className:"btn-inner",children:[N&&(p===1?r:i),!N&&(0,e.jsxs)("div",{className:Q,children:[(0,e.jsx)("span",{className:v()(ln,p===1?bn:fn),children:r}),(0,e.jsx)("span",{className:v()(ln,p===1?fn:bn),children:i})]})]})},"lang-button");return h||y?(0,e.jsx)(mt.Z,{title:p===1?h:y,children:V}):V},de=ht,Se,ke,Me,Ee,Te,Be,Ae=1120,Le=1200,ft={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},xt=(0,u.kc)(function(l){var t=l.token,r=l.css,i="#ced4d9";return{header:r(Se||(Se=s()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),t.colorBgContainer,t.boxShadowTertiary,t.mobileMaxWidth,i,i,i),menuRow:r(ke||(ke=s()([`
      display: flex;
      align-items: center;
      margin: 0;
      column-gap: 12px;
      > * {
        flex: none;
        margin: 0;
        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:r(Me||(Me=s()([`
      width: 16px;
    `]))),popoverMenu:kn()({width:300},"".concat(t.antCls,"-popover-inner-content"),{padding:0}),banner:r(Ee||(Ee=s()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:r(Te||(Te=s()([`
      margin-inline-start: 10px;
      @media only screen and (max-width: `,`px) {
        margin-inline-start: 0;
      }
    `])),t.mobileMaxWidth),versionSelect:r(Be||(Be=s()([`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-color: unset;
        }
      }
    `])))}}),vt=function(){var t=(0,O.default)(ft),r=S()(t,2),i=r[0],h=r[1],y=(0,m.useSiteData)(),p=y.pkg,N=(0,Bn.Is)(),P=(0,a.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),_=S()(P,2),nn=_[0],vn=_[1],Q=(0,a.useContext)(ee.Z),ln=Q.direction,bn=Q.isMobile,fn=Q.bannerVisible,V=Q.updateSiteConfig,cn=(0,a.useRef)(null),K=(0,m.useLocation)(),Sn=K.pathname,Fn=K.search,Rn=xt(),un=Rn.styles,Pn=(0,a.useCallback)(function(){vn(function(on){return z()(z()({},on),{},{menuVisible:!1})})},[]),Hn=(0,a.useCallback)(function(){vn(function(on){return z()(z()({},on),{},{windowWidth:window.innerWidth})})},[]),Qn=(0,a.useCallback)(function(){vn(function(on){return z()(z()({},on),{},{menuVisible:!0})})},[]),ue=(0,a.useCallback)(function(on){vn(function(Dn){return z()(z()({},Dn),{},{menuVisible:on})})},[]),oe=function(){V({direction:ln!=="rtl"?"rtl":"ltr"})},Yn=function(){V({bannerVisible:!1}),Bn.Fy()&&localStorage.setItem(ot.ANT_DESIGN_NOT_SHOW_BANNER,F()().toISOString())};(0,a.useEffect)(function(){Pn()},[K]),(0,a.useEffect)(function(){return Hn(),window.addEventListener("resize",Hn),function(){window.removeEventListener("resize",Hn),cn.current&&clearTimeout(cn.current)}},[]);var qn=(0,a.useCallback)(function(on){var Dn=window.location.href,ae=window.location.pathname;if(/overview/.test(ae)&&/0?[1-39][0-3]?x/.test(on)){window.location.href=Dn.replace(window.location.origin,on).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(on)?"":"/react","/introduce")).replace(/\/$/,"");return}var ne=new URL(Dn.replace(window.location.origin,on));ne.host.includes("antgroup")?(ne.pathname="".concat(ne.pathname.replace(/\/$/,""),"/"),window.location.href=ne.toString()):window.location.href=ne.href.replace(/\/$/,"")},[]),Je=(0,a.useCallback)(function(){var on="".concat(window.location.protocol,"//"),Dn=window.location.href.slice(on.length);Bn.Fy()&&localStorage.setItem("locale",Bn.KE(Sn)?"en-US":"zh-CN"),window.location.href=on+Dn.replace(window.location.pathname,Bn.J1(Sn,!Bn.KE(Sn),Fn).pathname)},[K]),uo=(0,a.useMemo)(function(){return ln!=="rtl"?"RTL":"LTR"},[ln]),po=(0,a.useMemo)(function(){return ln==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[ln]),mo=nn.menuVisible,re=nn.windowWidth,Qe=nn.searching,Ye=z()(kn()({},p.version,p.version),N==null?void 0:N.docVersions),go=Object.keys(Ye).map(function(on){return{value:Ye[on],label:on}}),qe=["","index","index-cn"].includes(Sn),_e=h==="cn",ho=ln==="rtl",pe=null;re<Ae?pe="crowded":re<Le&&(pe="narrow");var fo=v()(un.header,"clearfix",{"home-header":qe}),nt={isZhCN:_e,isRTL:ho},et=(0,e.jsx)(pt,z()(z()({},nt),{},{responsive:pe,isMobile:bn,directionText:uo,onLangChange:Je,onDirectionChange:oe}),"nav"),_n=[et,(0,e.jsx)(Nn.Z,{size:"small",className:un.versionSelect,defaultValue:p.version,onChange:qn,dropdownStyle:po,popupMatchSelectWidth:!1,getPopupContainer:function(Dn){return Dn.parentNode},options:go},"version"),(0,e.jsx)(de,{onClick:Je,value:Bn.KE(Sn)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,e.jsx)(de,{onClick:oe,value:ln==="rtl"?2:1,label1:(0,e.jsx)(me,{className:un.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.jsx)(me,{className:un.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,e.jsx)(de,{value:1,label1:(0,e.jsx)(jn.GithubOutlined,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];re<Ae?_n=Qe?[]:[et]:re<Le&&(_n=Qe?[]:_n);var tt=qe?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.jsxs)("header",{className:fo,children:[bn&&(0,e.jsx)(Vn.Z,{overlayClassName:un.popoverMenu,placement:"bottomRight",content:_n,trigger:"click",open:mo,arrow:{pointAtCenter:!0},onOpenChange:ue,children:(0,e.jsx)(jn.MenuOutlined,{className:"nav-phone-icon",onClick:Qn})}),_e&&fn&&(0,e.jsx)(R.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,e.jsx)(Wn.Z,{className:un.banner,message:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:bn?i.shortMessage:i.message}),(0,e.jsx)("a",{className:un.link,href:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var Dn,ae;(Dn=(ae=window).gtag)===null||Dn===void 0||Dn.call(ae,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i.link})},children:i.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:Yn})}),(0,e.jsxs)($n.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,e.jsx)(In.Z,z()(z()({},tt[0]),{},{children:(0,e.jsx)(it,z()(z()({},nt),{},{location:K}))})),(0,e.jsxs)(In.Z,z()(z()({},tt[1]),{},{className:un.menuRow,children:[(0,e.jsx)("div",{className:"nav-search-wrapper",children:(0,e.jsx)(ie.ZP,{})}),!bn&&_n]}))]})]})},bt=vt,xo=n(945462),Pe=n(777502),yt=function(t){var r=t.children,i=t.title,h=t.desc;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(m.Helmet,{children:[(0,e.jsx)("title",{children:i}),(0,e.jsx)("meta",{property:"og:title",content:i}),h&&(0,e.jsx)("meta",{name:"description",content:h})]}),(0,e.jsx)("div",{style:{minHeight:"100vh"},children:r}),(0,e.jsx)(Pe.default,{})]})},wt=yt,Ct=n(86198),De=n(700781),ze=n(49313),jt=function(){var t=(0,m.useRouteMeta)(),r=a.useMemo(function(){var p;if(!t.frontmatter.subtitle&&!t.frontmatter.title)p="404 Not Found - Ant Design";else{var N;p="".concat(t.frontmatter.subtitle||""," ").concat(((N=t.frontmatter)===null||N===void 0?void 0:N.title)||""," - Ant Design")}var P=t.frontmatter.description||"";return[p,P]},[t]),i=S()(r,2),h=i[0],y=i[1];return(0,e.jsxs)(m.Helmet,{children:[(0,e.jsx)("title",{children:h}),(0,e.jsx)("meta",{property:"og:title",content:h}),y&&(0,e.jsx)("meta",{name:"description",content:y})]})},Fe=jt,St=n(148050),kt=n(468990),Mt=n(823493),Et=n.n(Mt),Tt=n(658192),Oe,Ne,Ie,Re=["scroll","resize"],Bt=(0,u.kc)(function(l){var t=l.token,r=l.css,i=t.boxShadowSecondary,h=t.antCls;return{affixTabs:r(Oe||(Oe=s()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1001;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition:
        opacity 0.3s,
        transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,h,h,h),affixTabsFixed:r(Ne||(Ne=s()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:r(Ie||(Ie=s()([`
      text-transform: capitalize;
    `])))}}),He=32,At=function(){var t=a.useRef(null),r=a.useRef([]),i=a.useState(!1),h=S()(i,2),y=h[0],p=h[1],N=a.useState(void 0),P=S()(N,2),_=P[0],nn=P[1],vn=Bt(),Q=vn.styles,ln=Q.affixTabs,bn=Q.affixTabsFixed,fn=Q.span;function V(K){var Sn=document.getElementById(K);if(Sn){var Fn=Sn.offsetTop-t.current.offsetHeight-He;(0,Tt.Z)(Fn)}}a.useEffect(function(){var K=document.querySelectorAll("h2[id]");r.current=Array.from(K).map(function(Sn){var Fn=Sn.id;return Fn}),p(!0)},[]),a.useEffect(function(){var K=decodeURIComponent((location.hash||"").slice(1));K&&V(K)},[y]);var cn=a.useMemo(function(){function K(){for(var Sn=window,Fn=Sn.scrollY,Rn=t.current.offsetHeight,un=r.current.length-1;un>=0;un-=1){var Pn=r.current[un],Hn=document.getElementById(Pn),Qn=Hn.offsetTop-Rn-He;if(Qn<=Fn){nn(Pn);return}}nn(void 0)}return Et()(K)},[]);return a.useEffect(function(){return Re.forEach(function(K){return window.addEventListener(K,cn)}),cn(),function(){Re.forEach(function(K){return window.removeEventListener(K,cn)})}},[]),(0,e.jsx)("div",{className:v()(ln,_&&bn),ref:t,children:(0,e.jsx)(kt.Z,{activeKey:_,centered:!0,size:"large",onChange:V,items:r.current.map(function(K){return{key:K,label:(0,e.jsx)("span",{className:fn,children:K.replace(/-/g," ")})}})})})},Lt=At,Ze,We,$e,Ue=40,te=1208,ce=24,Pt=function(){var t=(0,ze.Z)();return(0,u.kc)(function(r){var i=r.token,h=r.css,y=i.antCls;return{resourcePage:h(Ze||(Ze=s()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-right: 0;
            padding-left: 0;
          }
        }
      `])),te),resourceContent:h(We||(We=s()([`
        padding: 0 `,`px;
        max-width: `,`px;
        margin: 0 auto;
        box-sizing: content-box;
        min-height: 100vh;

        @media only screen and (max-width: 767.99px) {
          & {
            article {
              padding: 0 `,`px;
            }

            `,`-col {
              padding-top: 16px !important;
              padding-bottom: 16px !important;
            }
          }
        }
      `])),Ue,te,ce,y),banner:h($e||($e=s()([`
        padding: 0 `,`px;
        overflow: hidden;
        `,`
        background-size: cover;

        h1 {
          box-sizing: content-box;
          max-width: `,`px;
          margin: 56px auto 16px;
        }

        section {
          max-width: `,`px;
          margin: 0 auto 56px;
          font-weight: 200;
          font-size: 16px;
          line-height: 24px;
        }

        @media only screen and (max-width: 767.99px) {
          & {
            margin: 0 -`,`px;
            padding: 0 `,`px;
          }
        }
      `])),Ue,t?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",te,te,ce,ce)}})()},Dt=function(t){var r,i=t.children,h=Pt(),y=h.styles,p=(0,m.useRouteMeta)(),N=(0,ze.Z)(),P=(0,e.jsxs)(Ct.Z,{children:[(0,e.jsx)(Fe,{}),(0,e.jsxs)("div",{id:"resources-page",className:y.resourcePage,children:[(0,e.jsx)(Lt,{}),(0,e.jsxs)("div",{className:y.banner,children:[(0,e.jsxs)(De.Z.Title,{style:{fontSize:30},children:[(r=p.frontmatter)===null||r===void 0?void 0:r.title,(0,e.jsx)(St.default,{title:(0,e.jsx)(m.FormattedMessage,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})]}),(0,e.jsx)("section",{children:p.frontmatter.description})]}),(0,e.jsx)("div",{className:y.resourceContent,children:i}),(0,e.jsx)(Pe.default,{})]})]});return N?P:(0,e.jsx)(R.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:P})},zt=Dt,Ft=n(106750),Ot=n(217187),Nt=n(340908),It=n(524229),Rt=n(548657),Ht=n(442708),Zt=function(t){var r=t.children,i=t.fallback,h=i===void 0?(0,e.jsx)(Rt.Z.Input,{active:!0,size:"small"}):i,y=t.delay,p=y===void 0?200:y;return(0,e.jsx)(Ht.df,{triggerOnce:!0,delay:p,children:function(P){var _=P.inView,nn=P.ref;return(0,e.jsx)("div",{ref:nn,children:(0,e.jsx)(a.Suspense,{fallback:h,children:_?r:(0,e.jsx)("span",{})})})}})},Un=Zt,Ve,Wt=a.lazy(function(){return Promise.all([n.e(3156),n.e(7721)]).then(n.bind(n,617721))}),$t=a.lazy(function(){return n.e(9148).then(n.bind(n,349148))}),Ut=a.lazy(function(){return n.e(8301).then(n.bind(n,368301))}),Vt=a.lazy(function(){return n.e(8598).then(n.bind(n,458598))}),Kt=a.lazy(function(){return Promise.resolve().then(n.bind(n,777502))}),Gt=a.lazy(function(){return n.e(6720).then(n.bind(n,366720))}),Xt=a.lazy(function(){return Promise.all([n.e(9285),n.e(5926)]).then(n.bind(n,615926))}),Jt=a.lazy(function(){return Promise.resolve().then(n.bind(n,148050))}),Qt=(0,u.kc)(function(l){var t=l.token,r=l.css;return{articleWrapper:r(Ve||(Ve=s()([`
    padding: 0 170px 32px 64px;
    &.rtl {
      padding: 0 64px 144px 170px;
    }
    @media only screen and (max-width: `,`px) {
      &,
      &.rtl {
        padding: 0 48px;
      }
    }
  `])),t.screenLG)}}),Yt=function(t){var r,i,h,y=t.children,p=(0,m.useRouteMeta)(),N=(0,en.Z)(),P=N.pathname,_=N.hash,nn=(0,a.useContext)(ee.Z),vn=nn.direction,Q=Qt(),ln=Q.styles,bn=(0,Ot.Z)(!1),fn=S()(bn,2),V=fn[0],cn=fn[1],K=(0,a.useMemo)(function(){var un;return((un=p.toc)===null||un===void 0?void 0:un.filter(function(Pn){return Pn._debug_demo}).map(function(Pn){return Pn.id}))||[]},[p]),Sn=K.includes(_.slice(1));(0,a.useLayoutEffect)(function(){cn(Sn)},[]);var Fn=(0,a.useMemo)(function(){return{showDebug:V,setShowDebug:cn}},[V,K]),Rn=vn==="rtl";return(0,e.jsx)(It.Z.Provider,{value:Fn,children:(0,e.jsxs)(In.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,e.jsx)(Un,{fallback:null,children:(0,e.jsx)(Ut,{showDebug:V,debugDemos:K})}),(0,e.jsxs)("article",{className:v()(ln.articleWrapper,{rtl:Rn}),children:[(r=p.frontmatter)!==null&&r!==void 0&&r.title?(0,e.jsxs)(De.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,e.jsxs)(Ft.Z,{gap:"small",children:[(0,e.jsx)("div",{children:(i=p.frontmatter)===null||i===void 0?void 0:i.title}),(0,e.jsx)("div",{children:(h=p.frontmatter)===null||h===void 0?void 0:h.subtitle}),!P.startsWith("/components/overview")&&(0,e.jsx)(Un,{fallback:null,children:(0,e.jsx)(Jt,{title:(0,e.jsx)(m.FormattedMessage,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})})]}),P.startsWith("/components/")&&(0,e.jsx)(Un,{fallback:null,children:(0,e.jsx)(Xt,{pathname:P})})]}):null,(0,e.jsx)(Un,{fallback:null,children:(0,e.jsx)(Vt,{})}),!p.frontmatter.__autoDescription&&p.frontmatter.description,p.frontmatter.category==="Components"&&String(p.frontmatter.showImport)!=="false"&&(0,e.jsx)(Nt.Z,{component:p.frontmatter.title,source:!0,filename:p.frontmatter.filename}),(0,e.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:y}),(0,e.jsx)(Un,{children:(0,e.jsx)($t,{zhihuLink:p.frontmatter.zhihu_url,yuqueLink:p.frontmatter.yuque_url,juejinLink:p.frontmatter.juejin_url})}),(0,e.jsx)(Un,{fallback:(0,e.jsx)("div",{style:{height:50,marginTop:120}}),children:(0,e.jsx)(Wt,{filename:p.frontmatter.filename})})]}),(0,e.jsx)(Un,{fallback:null,children:(0,e.jsx)(Gt,{rtl:Rn})}),(0,e.jsx)(Kt,{})]})})},qt=Yt,_t=n(650010),no=n(361446),Ke,Ge,eo=(0,u.kc)(function(l){var t=l.token,r=l.css,i=t.antCls,h=t.fontFamily,y=t.colorSplit;return{asideContainer:r(Ke||(Ke=s()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
          > `,`-menu-submenu
          > `,`-menu-submenu-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item,
          &`,`-menu-inline
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),h,i,i,i,i,i,i,y,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),mainMenu:r(Ge||(Ge=s()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
        scrollbar-width: thin;
        scrollbar-color: unset;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),t.headerHeight+t.contentMarginTop,t.headerHeight+t.contentMarginTop)}}),to=function(){var t=(0,m.useSidebarData)(),r=(0,a.useContext)(ee.Z),i=r.isMobile,h=r.theme,y=eo(),p=y.styles,N=(0,no.Z)(),P=S()(N,2),_=P[0],nn=P[1],vn=h.includes("dark"),Q=(0,u.Fg)(),ln=Q.colorBgContainer,bn=(0,e.jsx)(R.ZP,{theme:{components:{Menu:{itemBg:ln,darkItemBg:ln}}},children:(0,e.jsx)(fe.Z,{items:_,inlineIndent:30,className:p.asideContainer,mode:"inline",theme:vn?"dark":"light",selectedKeys:[nn],defaultOpenKeys:t==null?void 0:t.map(function(fn){var V=fn.title;return V}).filter(Boolean)})});return i?(0,e.jsx)(_t.Z,{children:bn},"Mobile-menu"):(0,e.jsx)(In.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:p.mainMenu,children:(0,e.jsx)("section",{className:"main-menu-inner",children:bn})})},oo=to,Xe,ro=(0,u.kc)(function(l){var t=l.css,r=l.token;return{main:t(Xe||(Xe=s()([`
    display: flex;
    margin-top: `,`px;
  `])),r.contentMarginTop)}}),ao=function(t){var r=t.children,i=ro(),h=i.styles;return(0,e.jsxs)("main",{className:h.main,children:[(0,e.jsx)(Fe,{}),(0,e.jsx)(oo,{}),(0,e.jsx)(qt,{children:r})]})},io=ao,lo={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},so=function(){var t=(0,m.useOutlet)(),r=(0,en.Z)(),i=r.pathname,h=r.search,y=r.hash,p=(0,O.default)(lo),N=S()(p,2),P=N[0],_=N[1],nn=(0,a.useRef)(null),vn=(0,a.useContext)(ee.Z),Q=vn.direction,ln=(0,m.useSiteData)(),bn=ln.loading;(0,a.useLayoutEffect)(function(){_==="cn"?F().locale("zh-cn"):F().locale("en")},[]),(0,a.useEffect)(function(){var V=document.getElementById("nprogress-style");V&&(nn.current=setTimeout(function(){var cn;(cn=V.parentNode)===null||cn===void 0||cn.removeChild(V)},0))},[]),(0,a.useEffect)(function(){var V=y.replace("#","");if(V){var cn;(cn=document.getElementById(decodeURIComponent(V)))===null||cn===void 0||cn.scrollIntoView()}},[bn,y]),(0,a.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+h)},[r]);var fn=a.useMemo(function(){return["","/"].some(function(V){return V===i})||["/index"].some(function(V){return i.startsWith(V)})?(0,e.jsx)(wt,{title:P.title,desc:P.description,children:t}):i.startsWith("/docs/resource")?(0,e.jsx)(zt,{children:t}):i.startsWith("/theme-editor")?t:(0,e.jsx)(io,{children:t})},[i,t]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(m.Helmet,{encodeSpecialCharacters:!1,children:[(0,e.jsx)("html",{lang:_==="cn"?"zh-CN":_,"data-direction":Q,className:v()({rtl:Q==="rtl"})}),(0,e.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,e.jsx)("meta",{property:"og:description",content:P.description}),(0,e.jsx)("meta",{property:"og:type",content:"website"}),(0,e.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,e.jsxs)(R.ZP,{direction:Q,locale:_==="cn"?M.default:void 0,children:[(0,e.jsx)(Ln,{}),(0,e.jsx)(bt,{}),fn]})]})},co=so},840070:function(zn,I,n){n.r(I),n.d(I,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return L},default:function(){return U}});var Y=n(97857),S=n.n(Y),sn=n(805574),v=n.n(sn),C=n(667294),F=n(900210),pn=n(368655),a=n(359020),R=n(965516),M=n(471232),m=n(385956),O=n(49313),en=n(217187),rn=n(438746),s=n(513769),o=n.n(s),u=n(75529),e=n(647759),x=n(438199),g=n(785893),j=["children","theme"],Z=64,G=38,c=function(B){var q=B.children,mn=B.theme,dn=o()(B,j),yn=(0,C.useContext)(u.ZP.ConfigContext),H=yn.getPrefixCls,w=yn.iconPrefixCls,f=H(),d=R.Z.useToken(),b=d.token,k=(0,C.useContext)(x.Z),A=k.bannerVisible;return C.useEffect(function(){u.ZP.config({theme:mn})},[mn]),(0,g.jsx)(e.f6,S()(S()({},dn),{},{theme:mn,customToken:{headerHeight:Z,bannerHeight:G,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:b.colorFillTertiary,antCls:".".concat(f),iconCls:".".concat(w),marginFarXS:b.marginXXL/6*7,marginFarSM:b.marginXXL/3*5,marginFar:b.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:Z+b.margin+(A?G:0)},children:q}))},E=c,W=C.lazy(function(){return Promise.all([n.e(7898),n.e(4137),n.e(263)]).then(n.bind(n,531434))}),D=768,L="ANT_DESIGN_NOT_SHOW_BANNER",X=function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return B.map(function(q){return q==="dark"?R.Z.darkAlgorithm:q==="compact"?R.Z.compactAlgorithm:null}).filter(Boolean)},$=function(){var B=(0,m.useOutlet)(),q=(0,rn.Z)(),mn=q.pathname,dn=(0,m.useSearchParams)(),yn=v()(dn,2),H=yn[0],w=yn[1],f=(0,en.Z)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),d=v()(f,2),b=d[0],k=b.theme,A=k===void 0?[]:k,tn=b.direction,an=b.isMobile,xn=b.bannerVisible,wn=xn===void 0?!1:xn,Cn=d[1],gn=(0,C.useCallback)(function(J){Cn(function(Zn){return S()(S()({},Zn),J)});var kn=H.toString(),jn=H;Object.entries(J).forEach(function(Zn){var Nn=v()(Zn,2),Vn=Nn[0],Wn=Nn[1];if(Vn==="direction"&&(Wn==="rtl"?jn.set("direction","rtl"):jn.delete("direction")),Vn==="theme"){var $n;jn=(0,m.createSearchParams)(S()(S()({},jn),{},{theme:Wn.filter(function(In){return In!=="light"})})),($n=document.querySelector("html"))===null||$n===void 0||$n.setAttribute("data-prefers-color",Wn.includes("dark")?"dark":"light")}}),jn.toString()!==kn&&w(jn)},[H,w]),hn=function(){gn({isMobile:window.innerWidth<D})};(0,C.useEffect)(function(){var J=H.getAll("theme"),kn=H.get("direction");return Cn({theme:J,direction:kn==="rtl"?"rtl":"ltr"}),document.documentElement.setAttribute("data-prefers-color",J.includes("dark")?"dark":"light"),hn(),window.addEventListener("resize",hn),function(){window.removeEventListener("resize",hn)}},[]);var En=C.useMemo(function(){return{direction:tn,updateSiteConfig:gn,theme:A,isMobile:an,bannerVisible:wn}},[an,tn,gn,A,wn]),An=C.useMemo(function(){return{algorithm:X(A),token:{motion:!A.includes("motion-off")},cssVar:!0,hashed:!1}},[A]),Mn=C.useState(function(){return(0,F.createCache)()}),Tn=v()(Mn,1),Ln=Tn[0];(0,m.useServerInsertedHTML)(function(){var J=(0,F.extractStyle)(Ln,{plain:!0,types:"style"});return(0,g.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:J}})}),(0,m.useServerInsertedHTML)(function(){var J=(0,F.extractStyle)(Ln,{plain:!0,types:["cssVar","token"]});return(0,g.jsx)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:J}})}),(0,m.useServerInsertedHTML)(function(){return(0,g.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,a.$Z)()}})});var On=mn.startsWith("/~demos"),z=B;return On||(z=(0,g.jsxs)(M.Z,{children:[B,(0,g.jsx)(C.Suspense,{children:(0,g.jsx)(W,{value:A,onChange:function(kn){return gn({theme:kn})}})})]})),(0,g.jsx)(O.f.Provider,{value:A.includes("dark"),children:(0,g.jsx)(F.StyleProvider,{cache:Ln,linters:[F.legacyNotSelectorLinter,F.parentSelectorLinter,F.NaNLinter],children:(0,g.jsx)(x.Z.Provider,{value:En,children:(0,g.jsx)(E,{theme:An,children:(0,g.jsx)(pn.HappyProvider,{disabled:!A.includes("happy-work"),children:z})})})})})},U=$},777502:function(zn,I,n){n.r(I),n.d(I,{default:function(){return E}});var Y=n(805574),S=n.n(Y),sn=n(168400),v=n.n(sn),C=n(639389),F=n(510274),pn=n(647759),a=n(385956),R=n(391298),M=n(667294),m=n(630770),O=n(302559),en=n(438746),rn=n(438199),s=n(693399),o=n(785893),u="ant-where-checker",e={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function x(){var W=(0,O.default)(e),D=S()(W,1),L=D[0],X=M.useState(!0),$=S()(X,2),U=$[0],T=$[1];return M.useEffect(function(){var B=document.createElement("p");B.className=u,B.style.position="fixed",B.style.pointerEvents="none",B.style.visibility="hidden",B.style.width="0",document.body.appendChild(B),(0,s.updateCSS)(`
:where(.`.concat(u,`) {
  content: "__CHECK__";
}
    `),u);var q=getComputedStyle(B),mn=q.content;T(String(mn).includes("CHECK")),document.body.removeChild(B),(0,s.removeCSS)(u)},[]),U?null:(0,o.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,o.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[L.whereNotSupport," ",(0,o.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:L.whereDocUrl,children:L.whereDocTitle})]})})}var g,j,Z={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},G=function(){var D=(0,M.useContext)(rn.Z),L=D.isMobile;return(0,pn.kc)(function(X){var $=X.token,U=X.css,T=new F.C((0,m.Z)("#f0f3fa","#fff")).onBackground($.colorBgContainer).toHexString();return{holder:U(g||(g=v()([`
      background: `,`;
    `])),T),footer:U(j||(j=v()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),T,$.colorTextSecondary,$.colorText,L?60:0,L?20:0,$.marginXXL,$.fontSize)}})()},c=function(){var D=(0,en.Z)(),L=(0,O.default)(Z),X=S()(L,2),$=X[0],U=X[1],T=G(),B=T.styles,q=D.getLink,mn=M.useMemo(function(){var dn=U==="cn",yn={title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:dn?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:dn?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:dn?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},H={title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,o.jsx)(C.AntDesignOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,o.jsx)(C.MediumOutlined,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,o.jsx)(C.TwitterOutlined,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,o.jsx)(C.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,o.jsx)(C.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};dn&&H.items.push({icon:(0,o.jsx)(C.UsergroupAddOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.work_with_us"}),url:q("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:a.Link});var w={title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,o.jsx)(C.GithubOutlined,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,o.jsx)(C.HistoryOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.change-log"}),url:q("/changelog"),LinkComponent:a.Link},{icon:(0,o.jsx)(C.QuestionCircleOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.faq"}),url:q("/docs/react/faq"),LinkComponent:a.Link},{icon:(0,o.jsx)(C.BugOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,o.jsx)(C.IssuesCloseOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,o.jsx)(C.MessageOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,o.jsx)(C.QuestionCircleOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,o.jsx)(C.QuestionCircleOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},f={icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean"}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.galacean"}),description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,o.jsx)(C.BgColorsOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.theme"}),url:q("/theme-editor"),LinkComponent:a.Link}]};return[yn,H,w,f]},[U,D.search]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(R.Z,{columns:mn,className:B.footer,bottom:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,o.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,o.jsx)("div",{children:$.owner})]})}),(0,o.jsx)(x,{})]})},E=c},373638:function(zn,I,n){n.d(I,{J1:function(){return M},Is:function(){return s},Fy:function(){return O},KE:function(){return R},qE:function(){return m}});var Y=n(661227),S=n(805574),sn=n(97857),v=n(385564),C=n(842348),F=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),pn={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":F?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function a(o,u,e,x){var g=o.map(function(c){return c.meta}).filter(function(c){return!c.skip}),j=[],Z=function(E,W){return(E.order||0)-(W.order||0)};g.sort(Z).forEach(function(c){if(c.category&&(c.category=c.category[u]||c.category),c.type&&(c.type=c.type[u]||c.type),c!=null&&c.title&&(c.title=c.title[u]||c.title),!c.category){j.push(c);return}if(c.category==="Components"&&c.type){var E=j.find(function(L){return(L==null?void 0:L.title)===c.type});E||(E={type:"type",title:c.type,children:[],order:x[c.type]},j.push(E)),E.children=E.children||[],E.children.push(c);return}var W=j.find(function(L){return(L==null?void 0:L.title)===c.category});if(W||(W={type:"category",title:c.category,children:[],order:e[c.category]},j.push(W)),W.children=W.children||[],c.type){var D=W.children.filter(function(L){return(L==null?void 0:L.title)===c.type})[0];D||(D={type:"type",title:c.type,children:[],order:x[c.type]},W.children.push(D)),D.children=D.children||[],D.children.push(c)}else W.children.push(c)});function G(c){return c.sort(Z).map(function(E){return E.children?_objectSpread(_objectSpread({},E),{},{children:G(E.children)}):E})}return G(j)}function R(o){return/-cn\/?$/.test(o)}function M(o,u,e,x){var g=o.startsWith("/")?o:"/".concat(o),j;if(u?g==="/"?j="/index-cn":g.endsWith("/")?j=g.replace(/\/$/,"-cn/"):(j="".concat(g,"-cn"),j=j.replace(/(-cn)+/,"-cn")):j=/\/?index-cn/.test(g)?"/":g.replace("-cn",""),x){var Z=x[u?"zhCN":"enUS"];j+="#".concat(Z)}return{pathname:j,search:e}}function m(o){var u="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",e=new Image,x,g=function(Z){x||(x=!0,e.src="",o(Z))};return e.onload=function(){return g("responded")},e.onerror=function(){return g("error")},e.src=u,setTimeout(function(){return g("timeout")},1500)}function O(){var o="test",u=window.localStorage;try{return u.setItem(o,"1"),u.removeItem(o),!0}catch(e){return!1}}function en(o){return new Promise(function(u,e){var x=document.createElement("script");x.type="text/javascript",x.src=o,x.onload=u,x.onerror=e,document.head.appendChild(x)})}function rn(o){var u=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(o))return"";var e=flattenDeep(o.filter(function(x){if(Array.isArray(x)){var g=_slicedToArray(x,1),j=g[0];return j==="p"}return!1}).map(function(x){var g=flatten(x),j=_toArray(g),Z=j[0],G=j.slice(1),c=G.filter(function(E){return typeof E=="string"&&!u.includes(E)}).join("");return[Z,c]})).find(function(x){return x&&typeof x=="string"&&!u.includes(x)});return e}var s=function(){return pn}},647727:function(zn,I,n){n.d(I,{Z:function(){return Y.Z}});var Y=n(843534)},471232:function(zn,I,n){n.d(I,{Z:function(){return Z}});var Y=n(97857),S=n.n(Y),sn=n(805574),v=n.n(sn),C=n(667294),F=n(693967),pn=n.n(F),a=n(73287),R=n(215570),M=n(269924),m=n(890887),O=n(414466),en=n(9783),rn=n.n(en),s=n(286665),o=function(c){var E=c.componentCls,W=c.colorText,D=c.fontSize,L=c.lineHeight,X=c.fontFamily;return rn()({},E,{color:W,fontSize:D,lineHeight:L,fontFamily:X})},u=function(){return{}},e=(0,s.I$)("App",o,u),x=n(785893),g=function(){return C.useContext(O.Z)},j=function(c){var E=c.prefixCls,W=c.children,D=c.className,L=c.rootClassName,X=c.message,$=c.notification,U=c.style,T=c.component,B=T===void 0?"div":T,q=(0,C.useContext)(a.E_),mn=q.getPrefixCls,dn=mn("app",E),yn=e(dn),H=v()(yn,3),w=H[0],f=H[1],d=H[2],b=pn()(f,dn,D,L,d),k=(0,C.useContext)(O.J),A=C.useMemo(function(){return{message:S()(S()({},k.message),X),notification:S()(S()({},k.notification),$)}},[X,$,k.message,k.notification]),tn=(0,R.Z)(A.message),an=v()(tn,2),xn=an[0],wn=an[1],Cn=(0,m.Z)(A.notification),gn=v()(Cn,2),hn=gn[0],En=gn[1],An=(0,M.Z)(),Mn=v()(An,2),Tn=Mn[0],Ln=Mn[1],On=C.useMemo(function(){return{message:xn,notification:hn,modal:Tn}},[xn,hn,Tn]),z=B===!1?C.Fragment:B,J={className:b,style:U};return w((0,x.jsx)(O.Z.Provider,{value:On,children:(0,x.jsx)(O.J.Provider,{value:A,children:(0,x.jsxs)(z,S()(S()({},B===!1?void 0:J),{},{children:[Ln,wn,En,W]}))})}))};j.useApp=g;var Z=j},86198:function(zn,I,n){n.d(I,{Z:function(){return w}});var Y=n(719632),S=n.n(Y),sn=n(9783),v=n.n(sn),C=n(805574),F=n.n(C),pn=n(513769),a=n.n(pn),R=n(97857),M=n.n(R),m=n(667294),O=n(693967),en=n.n(O),rn=n(518475),s=n(73287),o=n(121790),u=n(45598),e=n(296708);function x(f,d,b){if(typeof b=="boolean")return b;if(f.length)return!0;var k=(0,u.default)(d);return k.some(function(A){return A.type===e.Z})}var g=n(900210),j=n(286665),Z=function(d){var b=d.componentCls,k=d.bodyBg,A=d.lightSiderBg,tn=d.lightTriggerBg,an=d.lightTriggerColor;return v()({},"".concat(b,"-sider-light"),v()(v()({background:A},"".concat(b,"-sider-trigger"),{color:an,background:tn}),"".concat(b,"-sider-zero-width-trigger"),{color:an,background:tn,border:"1px solid ".concat(k),borderInlineStart:0}))},G=Z,c=function(d){var b=d.antCls,k=d.componentCls,A=d.colorText,tn=d.triggerColor,an=d.footerBg,xn=d.triggerBg,wn=d.headerHeight,Cn=d.headerPadding,gn=d.headerColor,hn=d.footerPadding,En=d.triggerHeight,An=d.zeroTriggerHeight,Mn=d.zeroTriggerWidth,Tn=d.motionDurationMid,Ln=d.motionDurationSlow,On=d.fontSize,z=d.borderRadius,J=d.bodyBg,kn=d.headerBg,jn=d.siderBg;return v()(v()(v()(v()({},k,M()(M()(v()(v()(v()({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:J,"&, *":{boxSizing:"border-box"}},"&".concat(k,"-has-sider"),v()({flexDirection:"row"},"> ".concat(k,", > ").concat(k,"-content"),{width:0})),"".concat(k,"-header, &").concat(k,"-footer"),{flex:"0 0 auto"}),"".concat(k,"-sider"),{position:"relative",minWidth:0,background:jn,transition:"all ".concat(Tn,", background 0s"),"&-children":v()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(b,"-menu").concat(b,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:En},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:En,color:tn,lineHeight:(0,g.unit)(En),textAlign:"center",background:xn,cursor:"pointer",transition:"all ".concat(Tn)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:wn,insetInlineEnd:d.calc(Mn).mul(-1).equal(),zIndex:1,width:Mn,height:An,color:tn,fontSize:d.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:jn,borderStartStartRadius:0,borderStartEndRadius:z,borderEndEndRadius:z,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(Ln," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(Ln),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:d.calc(Mn).mul(-1).equal(),borderStartStartRadius:z,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:z}}}}),G(d)),{},{"&-rtl":{direction:"rtl"}})),"".concat(k,"-header"),v()({height:wn,padding:Cn,color:gn,lineHeight:(0,g.unit)(wn),background:kn},"".concat(b,"-menu"),{lineHeight:"inherit"})),"".concat(k,"-footer"),{padding:hn,color:A,fontSize:On,background:an}),"".concat(k,"-content"),{flex:"auto",color:A,minHeight:0})},E=function(d){var b=d.colorBgLayout,k=d.controlHeight,A=d.controlHeightLG,tn=d.colorText,an=d.controlHeightSM,xn=d.marginXXS,wn=d.colorTextLightSolid,Cn=d.colorBgContainer,gn=A*1.25;return{colorBgHeader:"#001529",colorBgBody:b,colorBgTrigger:"#002140",bodyBg:b,headerBg:"#001529",headerHeight:k*2,headerPadding:"0 ".concat(gn,"px"),headerColor:tn,footerPadding:"".concat(an,"px ").concat(gn,"px"),footerBg:b,siderBg:"#001529",triggerHeight:A+xn*2,triggerBg:"#002140",triggerColor:wn,zeroTriggerWidth:A,zeroTriggerHeight:A,lightSiderBg:Cn,lightTriggerBg:Cn,lightTriggerColor:tn}},W=(0,j.I$)("Layout",function(f){return[c(f)]},E,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),D=n(785893),L=["prefixCls","suffixCls","className","tagName"],X=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function $(f){var d=f.suffixCls,b=f.tagName,k=f.displayName;return function(A){var tn=m.forwardRef(function(an,xn){return(0,D.jsx)(A,M()({ref:xn,suffixCls:d,tagName:b},an))});return tn}}var U=m.forwardRef(function(f,d){var b=f.prefixCls,k=f.suffixCls,A=f.className,tn=f.tagName,an=a()(f,L),xn=m.useContext(s.E_),wn=xn.getPrefixCls,Cn=wn("layout",b),gn=W(Cn),hn=F()(gn,3),En=hn[0],An=hn[1],Mn=hn[2],Tn=k?"".concat(Cn,"-").concat(k):Cn;return En((0,D.jsx)(tn,M()({className:en()(b||Tn,A,An,Mn),ref:d},an)))}),T=m.forwardRef(function(f,d){var b=m.useContext(s.E_),k=b.direction,A=m.useState([]),tn=F()(A,2),an=tn[0],xn=tn[1],wn=f.prefixCls,Cn=f.className,gn=f.rootClassName,hn=f.children,En=f.hasSider,An=f.tagName,Mn=f.style,Tn=a()(f,X),Ln=(0,rn.default)(Tn,["suffixCls"]),On=m.useContext(s.E_),z=On.getPrefixCls,J=On.layout,kn=z("layout",wn),jn=x(an,hn,En),Zn=W(kn),Nn=F()(Zn,3),Vn=Nn[0],Wn=Nn[1],$n=Nn[2],In=en()(kn,v()(v()({},"".concat(kn,"-has-sider"),jn),"".concat(kn,"-rtl"),k==="rtl"),J==null?void 0:J.className,Cn,gn,Wn,$n),ie=m.useMemo(function(){return{siderHook:{addSider:function(Gn){xn(function(Xn){return[].concat(S()(Xn),[Gn])})},removeSider:function(Gn){xn(function(Xn){return Xn.filter(function(se){return se!==Gn})})}}}},[]);return Vn((0,D.jsx)(o.V.Provider,{value:ie,children:(0,D.jsx)(An,M()(M()({ref:d,className:In,style:M()(M()({},J==null?void 0:J.style),Mn)},Ln),{},{children:hn}))}))}),B=$({tagName:"div",displayName:"Layout"})(T),q=$({suffixCls:"header",tagName:"header",displayName:"Header"})(U),mn=$({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(U),dn=$({suffixCls:"content",tagName:"main",displayName:"Content"})(U),yn=B,H=yn;H.Header=q,H.Footer=mn,H.Content=dn,H.Sider=e.Z,H._InternalSiderContext=e.D;var w=H},715778:function(zn,I,n){n.r(I),n.d(I,{default:function(){return O}});var Y=n(174219),S=n(97857),sn=n.n(S),v=n(585369),C={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},F=C,pn={lang:sn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},v.Z),timePickerLocale:sn()({},F)};pn.lang.ok="\u786E\u5B9A";var a=pn,R=a,M="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",m={locale:"zh-cn",Pagination:Y.Z,DatePicker:a,TimePicker:F,Calendar:R,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00",collapse:"\u6536\u8D77"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:M,method:M,array:M,object:M,number:M,date:M,boolean:M,integer:M,float:M,regexp:M,email:M,url:M,hex:M},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0",scanned:"\u5DF2\u626B\u63CF"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},O=m}}]);
