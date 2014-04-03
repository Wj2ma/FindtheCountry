/*!CK:255585611!*//*1395033884,178130527*/

if (self.CavalryLogger) { CavalryLogger.start_js(["eGQgv"]); }

__d("PageStars",["Event","Locale","Style","copyProperties"],function(a,b,c,d,e,f,g,h,i,j){var k=5;function l(m,n,o,p,q,r,s,t){this.myRating=q;this.avgRating=p;this.avgStars=n;this.myStars=o;this.margin=t;this.width=r;this.height=s;for(var u=0;u<m.length;u++){var v=m[u],w=u+1;for(var x=0;x<v.length;x++){if(!v[x])continue;g.listen(v[x],'mouseenter',this._hover.bind(this,w));g.listen(v[x],'mouseleave',this._mouseout.bind(this,w));g.listen(v[x],'click',this._click.bind(this,w));}}}j(l.prototype,{onClick:function(m){this.callback=m;},_updateUI:function(){if(this.hovered||this.myRating){this.avgStars&&this._setClip(this.avgStars,0);this.myStars&&this._setClip(this.myStars,this.hovered||this.myRating);}else{this.myStars&&this._setClip(this.myStars,0);this.avgStars&&this._setClip(this.avgStars,this.avgRating||0);}},_setClip:function(m,n){var o=Math.round(n*this.width+Math.floor(n)*this.margin),p=0;if(h.isRTL()){p=Math.round((k-n)*this.width+Math.floor(k-n)*this.margin);o+=p;}var q='rect(0px, '+o+'px, '+this.height+'px, '+p+'px)';i.set(m,'clip',q);},_click:function(m){this.myRating=m;this._updateUI();return this.callback&&this.callback(m);},_hover:function(m){this.hovered=m;this._updateUI();},_mouseout:function(m){if(this.hovered===m){this.hovered=null;this._updateUI();}},setAverageRating:function(m){this.avgRating=m;this._updateUI();},setMyRating:function(m){this.myRating=m;this._updateUI();}});e.exports=l;});
__d("ReviewsController",["Arbiter","Dialog","Event","ReactDOM","React","Image.react","Run","DOM","csx","fbt","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r={},s={},t={},u={},v={},w={registerRevealProfanity:function(x,y,z){i.listen(y,'click',function(){x.style.display='none';z.style.display='inline';});},registerButton:function(x,y){r[y]=r[y]||[];r[y].push(x);},registerViewerReview:function(x,y){s[y]=s[y]||[];s[y].push(x);},registerComposer:function(x,y){t[y]=t[y]||[];t[y].push(x);},registerToggle:function(x,y,z,aa){u[x]=u[x]||[];u[x].push([y,z,aa]);},addUserReview:function(x,y,z,aa){this._updateState(true,x,y,z,aa);},deleteUserReview:function(x){this._updateState(false,x);},_updateState:function(x,y,z,aa,ba){var ca,da=s[y]||[];for(ca=0;ca<da.length;ca++)n.remove(da[ca]);var ea=u[y]||[];for(ca=0;ca<ea.length;ca++){var fa=ea[ca],ga=fa[x?1:2];n.setContent(fa[0],ga);}var ha=t[y]||[];for(ca=0;ca<ha.length;ca++){var ia=ha[ca];if(x){ia.hide();}else{ia.clear();ia.show();}}var ja=r[y]||[];for(ca=0;ca<ja.length;ca++){var ka=ja[ca],la=n.find(ka,'.uiButtonText'),ma=n.find(ka,'i'),na,oa;if(x){na=q('/images/icons/buttons/check.png');oa="Reviewed";}else{na=q('/images/icons/buttons/feature.png');oa="Review";}var pa=n.create('span'),qa={"padding-right":"5px"};k.renderComponent(j.div(null,oa),la);k.renderComponent(l({src:na,style:qa}),pa);n.replace(ma,pa);}if(x){var ra=n.scry(document.body,'.tlPagesTipsList')[0];if(ra)n.prependContent(ra,z);var sa=n.scry(document,'#page_recommendations_browse_list')[0];if(sa)n.prependContent(sa,aa);var ta="div._vt ul._5kjr",ua=n.scry(document,ta)[0];if(ua)n.prependContent(ua,ba);}},registerPhotoUpload:function(x,y){g.subscribe('multi-upload/images-upload-completed/'+y,function(){v[y]=false;});g.subscribe('multi-upload/images-upload-start/'+y,function(){v[y]=true;});i.listen(x,'submit',function(){if(v[y]){new h().setTitle("Photos Are Uploading").setSemiModal(true).setButtons(h.OK).setBody("Please wait until photo is uploaded before posting.").show();return false;}return true;}.bind(this));}};m.onLeave(function(){r={};s={};t={};u={};v={};});e.exports=w;});
__d("PageReviewInlineComposer",["Arbiter","CSS","Event","Input","ReviewsController","Run","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(o,p,q,r,s,t,u,v){"use strict";if(!v)s&&i.listen(s,'focus',function(){h.addClass(s,'expand');q&&h.show(q);s.setAttribute('rows',6);});l.onBeforeUnload(this.$PageReviewInlineComposer0.bind(this));u.onClick(function(w,x){w.setAttribute('value',x);s.focus();}.bind(null,r));this.$PageReviewInlineComposer1=p;this.$PageReviewInlineComposer2=u;this.$PageReviewInlineComposer3=s;this.$PageReviewInlineComposer4=t;k.registerComposer(this,o);k.registerPhotoUpload(p,t);}n.prototype.$PageReviewInlineComposer0=function(){"use strict";if(this.$PageReviewInlineComposer3.offsetParent!==null&&!j.isEmpty(this.$PageReviewInlineComposer3)&&!(a.Dialog&&a.Dialog.getCurrent()))return "You haven't finished your review yet. Do you want to leave without finishing?";};n.prototype.hide=function(){"use strict";h.hide(this.$PageReviewInlineComposer1);};n.prototype.show=function(){"use strict";h.show(this.$PageReviewInlineComposer1);};n.prototype.clear=function(){"use strict";this.$PageReviewInlineComposer2.setMyRating(0);this.$PageReviewInlineComposer3.value='';if(this.$PageReviewInlineComposer4!==null)g.inform('multi-upload/composer-reset/'+this.$PageReviewInlineComposer4,this,g.BEHAVIOUR_PERSISTENT);};e.exports=n;});
__d("CovercardArrow",["ContextualDialogArrow","CSS","DOMQuery","Locale","Style","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=-45,o=45,p=12;if(j.isRTL()){n=-n;o=-o;}function q(s){"use strict";this._layer=s;}q.prototype.enable=function(){"use strict";this._layer.enableBehavior(g);var s=this._layer.getContentRoot();this._arrowWrapper=i.scry(s,"._7lh")[0];if(!this._arrowWrapper)return;this._arrowShadow=i.scry(this._arrowWrapper,"._7li")[0];if(!this._arrowShadow)return;var t=null;if(r(this._arrowWrapper))t=this._renderArrowWithRotate.bind(this);if(!t)return;if(j.isRTL())h.addClass(s,"_7lf");this._subscription=this._layer.subscribe('reposition',function(u,v){var w=v.getPosition()=='below';h.conditionClass(s,"_53ih",w);w&&t(v);});};q.prototype.disable=function(){"use strict";this._subscription&&this._subscription.unsubscribe();this._subscription=null;};q.prototype._calculateArrowOffset=function(s){"use strict";var t=g.getOffsetPercent(s),u=g.getOffset(s,t,this._layer),v=k.get(this._layer.getContentRoot(),'width');return parseInt(v,10)*(t/100)+u;};q.prototype._renderArrowWithRotate=function(s){"use strict";var t=i.scry(this._arrowWrapper,"._7lj")[0];if(!t)return;var u=r(this._arrowWrapper);if(!u)return;var v=this._calculateArrowOffset(s),w=p+v;if(j.isRTL())w=-w;this._arrowWrapper.style[u]='translate('+w+'px, -'+p+'px) '+'rotate('+o+'deg)';t.style[u]='rotate('+n+'deg) '+'translate('+(-w)+'px, 0px)';};function r(s){if(!s)s=document.body;var t=['transform','WebkitTransform','msTransform','MozTransform','OTransform'],u;while(u=t.shift())if(s.style[u]!==undefined)return u;return null;}e.exports=q;});