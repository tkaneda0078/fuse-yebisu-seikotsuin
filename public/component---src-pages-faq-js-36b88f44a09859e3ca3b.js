(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,a,t){"use strict";t.r(a);var n=t(7),l=t.n(n),r=t(0),i=t.n(r),s=t(153),u=t.n(s),o=t(152),c=t(154),m=t.n(c),f=t(159),d=t(158),p=t(161),v=t(170),E=t.n(v),g=t(156),w=t.n(g),q=t(157),k=t.n(q),h=function(e){return i.a.createElement(m.a,null,i.a.createElement(E.a,{variant:"flush"},e.faqData.map(function(e,a){var t=12,n=12;return(e.img||e.url)&&(t=7,n=5),i.a.createElement(E.a.Item,{key:a},i.a.createElement("div",{className:"faq-content"},i.a.createElement(w.a,{className:"mb-5"},i.a.createElement(k.a,{sm:t},i.a.createElement(w.a,null,i.a.createElement(k.a,null,i.a.createElement("div",{className:"question"},i.a.createElement("i",{className:"fab fa-quora fa-2x"}),i.a.createElement("p",{className:"ml-4"},e.question)))),i.a.createElement(w.a,null,i.a.createElement(k.a,null,i.a.createElement("div",{className:"answer"},i.a.createElement("i",{className:"fa fa-font fa-2x"}),i.a.createElement("p",{className:"ml-4"},e.answer))))),i.a.createElement(k.a,{sm:n},e.img&&i.a.createElement(o.a,{className:"img",filename:e.img,alt:""}),e.url&&i.a.createElement(p.Link,{className:"btn btn-outline-info w-100 btn-postion mt-3",to:e.url},e.linkTitle)))))})))},N=t(267),b=function(e){function a(){var a;return(a=e.call(this)||this).state={faqData:a.getFaqData()},a}l()(a,e);var t=a.prototype;return t.getFaqData=function(){return N},t.render=function(){return i.a.createElement(f.a,null,i.a.createElement(d.a,{title:"よくある質問",keywords:["よくある質問","整骨院","布施"]}),i.a.createElement(u.a,{fluid:!0},i.a.createElement(o.a,{className:"img",filename:"img-point007.jpg",alt:""})),i.a.createElement(m.a,null,i.a.createElement("div",{className:"faq-contents"},i.a.createElement("h1",{className:"h1 my-5 text-color"},"よくある質問"),i.a.createElement("div",{className:"caption"},i.a.createElement("p",{className:"m-0"},"普段、患者さんよりお問い合わせの多い質問についてまとめてみました。"),i.a.createElement("p",null,"ご参考までにご覧ください。"),i.a.createElement("p",null,"また、当てはまるものがない場合はお気軽にお問い合わせください。")),i.a.createElement(h,{faqData:this.state.faqData}))," "))},a}(r.Component);a.default=b},153:function(e,a,t){"use strict";var n=t(8);a.__esModule=!0,a.default=void 0;var l=n(t(148)),r=n(t(149)),i=n(t(7)),s=n(t(0)),u=n(t(150)),o=t(151),c=function(e){function a(){return e.apply(this,arguments)||this}return(0,i.default)(a,e),a.prototype.render=function(){var e,a=this.props,t=a.as,n=a.className,i=a.fluid,o=a.bsPrefix,c=(0,r.default)(a,["as","className","fluid","bsPrefix"]),m=((e={})[o]=!0,e[o+"-fluid"]=i,e);return s.default.createElement(t,(0,l.default)({},c,{className:(0,u.default)(n,m)}))},a}(s.default.Component);c.defaultProps={as:"div",fluid:!1};var m=(0,o.createBootstrapComponent)(c,"jumbotron");a.default=m,e.exports=a.default},170:function(e,a,t){"use strict";var n=t(8);a.__esModule=!0,a.default=void 0;var l=n(t(148)),r=n(t(149)),i=n(t(7)),s=n(t(150)),u=n(t(0)),o=n(t(165)),c=t(151),m=n(t(167)),f=n(t(171)),d=function(e){function a(){return e.apply(this,arguments)||this}return(0,i.default)(a,e),a.prototype.render=function(){var e=this.props,a=e.className,t=e.bsPrefix,n=e.variant,i=(0,r.default)(e,["className","bsPrefix","variant"]);return u.default.createElement(m.default,(0,l.default)({},i,{className:(0,s.default)(a,t,n&&t+"-"+n)}))},a}(u.default.Component);d.defaultProps={as:"div",variant:null};var p=(0,o.default)((0,c.createBootstrapComponent)(d,"list-group"),{activeKey:"onSelect"});p.Item=f.default;var v=p;a.default=v,e.exports=a.default},171:function(e,a,t){"use strict";var n=t(8);a.__esModule=!0,a.default=void 0;var l=n(t(148)),r=n(t(149)),i=n(t(7)),s=n(t(150)),u=n(t(0)),o=n(t(168)),c=t(163),m=t(151),f=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).handleClick=function(e){var t=a.props,n=t.onClick;if(t.disabled)return e.preventDefault(),void e.stopPropagation();n&&n(e)},a}return(0,i.default)(a,e),a.prototype.render=function(){var e=this.props,a=e.bsPrefix,t=e.active,n=e.disabled,i=e.className,m=e.variant,f=e.action,d=e.as,p=e.eventKey,v=(0,r.default)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey"]);return u.default.createElement(o.default,(0,l.default)({},v,{eventKey:(0,c.makeEventKey)(p,v.href),as:d||(f?v.href?"a":"button":"div"),onClick:this.handleClick,className:(0,s.default)(i,a,t&&"active",n&&"disabled",m&&a+"-"+m,f&&a+"-action")}))},a}(u.default.Component);f.defaultProps={variant:null,active:!1,disabled:!1};var d=(0,m.createBootstrapComponent)(f,"list-group-item");a.default=d,e.exports=a.default},267:function(e){e.exports=[{question:"整骨院ってどんなところですか？",answer:"柔道整復師という国家資格をもっている施術者が、捻挫・脱臼・骨折などを施術する場所です。\\n他にもさまざまな症状に対応します。",img:"img-faq001.jpg",url:"",linkTitle:""},{question:"骨盤矯正はできますか？",answer:"自費治療になりますが可能です。",img:"",url:"/service",linkTitle:"自費治療について"},{question:"猫背の改善はできますか？",answer:"自費治療にはなりますが可能です。\\n一度の治療で効果を実感できますが、症状によって期間と継続が必要になります。",img:"",url:"/service",linkTitle:"自費治療について"},{question:"健康保険は使えるんですか？",answer:"はい、取り扱っております。詳しくは「保険治療」をご覧ください。",img:"",url:"",linkTitle:""},{question:"「整骨院」と「整形外科」の違いはなんですか？",answer:"整骨院では、お薬の処方やレントゲン撮影・MRA・CTなどの検査は取り扱っていません。",img:"",url:"",linkTitle:""},{question:"施術って痛いイメージがあるんですが、痛くないですか？",answer:"痛くありません。人によっては若干の感じ方は違いますが、基本的に痛い施術は行っていません。",img:"img-faq002.jpg",url:"",linkTitle:""},{question:"施術を受けるにあたって、どんな服装で行けばいいですか？",answer:"基本的にこちらから服装の指定はありませんが、動きやすい服装の方が施術を受けやすいです。",img:"",url:"",linkTitle:""},{question:"必ず予約する必要はありますか？",answer:"基本「予約優先」です。予約なしで直接のご来院でも大丈夫ですが、予約患者様を優先とさせていただいておりますので、お待ちしていただくことになります。あらかじめご了承ください。※ご予約をしていただいた方が、スムーズにご案内できます。",img:"",url:"",linkTitle:""},{question:"どんな症状の時、整骨が必要ですか？",answer:"肩・腰の痛み、その他いろいろな症状に対応できます。特に肩の痛み・腰痛やひざ痛に自信があります。ご自身で判断できないときは、まずはお気軽にお電話にてご相談ください。",img:"",url:"",linkTitle:""},{question:"どんな治療をしてもらえますか？",answer:"症状によって異なりますが、整体と整骨院の違い、整体師の免許は民間の団体が発行している資格で、国家資格ではありません。当院の先生は「柔道整復師」という国家資格を持っています。",img:"",url:"",linkTitle:""},{question:"予約の方法を教えてください。",answer:"ご予約方法は以下の方法をお選びください。 お電話 (06)6188-6770 エキテン(当院のページ) https://www.ekiten.jp/shop_87335253/",img:"",url:"",linkTitle:""},{question:"交通事故治療は可能でしょうか？",answer:"可能です。詳しくは「交通事故治療」をご覧ください。",img:"",url:"/service#traffic_accident_medical_treatment",linkTitle:"交通事故治療について"},{question:"病院と整骨院を併用しても大丈夫なのでしょうか？",answer:"そのあとご加入中の保険会社に「ふせ ゑびす整骨院の交通事故治療で通院したい」と伝えて頂ければ大丈夫です。",img:"",url:"",linkTitle:""},{question:"交通事故治療を受けるためにはどうすればいいのか？",answer:"はい、大丈夫です。",img:"",url:"",linkTitle:""},{question:"同じ日に病院と整骨院への通院はできますか？",answer:"別日であれば問題ありません。",img:"",url:"",linkTitle:""}]}}]);
//# sourceMappingURL=component---src-pages-faq-js-36b88f44a09859e3ca3b.js.map