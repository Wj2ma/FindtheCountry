/*!CK:1479377045!*//*1395624751,178134551*/

if (self.CavalryLogger) { CavalryLogger.start_js(["RapC7"]); }

__d("PopoverMenu.react",["CSS","InlineBlock.react","Popover","PopoverMenu","React","ReactPropTypes","SubscriptionsHandler","cx","joinClasses","areEqual"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=k.createClass({displayName:'ReactPopoverMenu',statics:{getFirstChild:function(r){var s=r.children;return Array.isArray(s)?s[0]:s;},getButtonSize:function(r){var s=q.getFirstChild(r);return s&&s.type.getButtonSize(s.props);}},propTypes:{alignh:l.oneOf(['left','center','right']),alignv:l.oneOf(['baseline','bottom','middle','top']),layerBehaviors:l.array,menu:l.object,disabled:l.bool},getDefaultProps:function(){return {alignv:'middle'};},_menuSubscriptions:null,componentDidMount:function(){var r=this.refs.root.getDOMNode(),s=r.firstChild;g.addClass(s,"_p");this._popover=new i(r,s,this.props.layerBehaviors,{alignh:this.props.alignh,disabled:this.props.disabled});this._popoverMenu=new j(this._popover,s,this._createMenu(this.props.menu),this.props.behaviors);},componentDidUpdate:function(r){if(!p(r.menu,this.props.menu)){if(this._menuSubscriptions){this._menuSubscriptions.release();this._menuSubscriptions=null;}this._popoverMenu.setMenu(this._createMenu(this.props.menu));}if(this.props.alignh!==r.alignh)this._popoverMenu.getPopover().getLayer().setAlignment(this.props.alignh);if(this.props.disabled!==r.disabled)if(this.props.disabled){this._popoverMenu.disable();}else this._popoverMenu.enable();},render:function(){var r=q.getFirstChild(this.props);r.props.className=o(r.props.className||'',"_p");return this.transferPropsTo(h({className:"uiPopover",ref:"root",disabled:null},this.props.children));},componentWillUnmount:function(){if(this._menuSubscriptions){this._menuSubscriptions.release();this._menuSubscriptions=null;}},_createMenu:function(r){var s=new r.ctor(r.menuitems,r.config);this._menuSubscriptions=new m();if(r.onItemClick)this._menuSubscriptions.addSubscriptions(s.subscribe('itemclick',r.onItemClick));if(r.onItemFocus)this._menuSubscriptions.addSubscriptions(s.subscribe('focus',r.onItemFocus));if(r.onItemBlur)this._menuSubscriptions.addSubscriptions(s.subscribe('blur',r.onItemBlur));if(r.onChange)this._menuSubscriptions.addSubscriptions(s.subscribe('change',r.onChange));if(this.props.onShow)this._menuSubscriptions.addSubscriptions(this._popover.subscribe('show',this.props.onShow));if(this.props.onHide)this._menuSubscriptions.addSubscriptions(this._popover.subscribe('hide',this.props.onHide));return s;},getMenu:function(){return this._popoverMenu.getMenu();},showPopover:function(r){this._popover.showLayer();if(r){var s=this._popoverMenu.getMenu();s.blur();s.focusAnItem(r);}},hidePopover:function(){this._popover.hideLayer();},getFocusedItem:function(){var r=this._popoverMenu.getMenu();return r.getFocusedItem();}});e.exports=q;});
__d("ReactMenu",["Menu","MenuItem","MenuSelectableItem","MenuTheme","SelectableMenu","cx","flattenArray","joinClasses","merge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=Array.prototype.slice,q=function(){};q.prototype.mountComponentIntoNode=function(){};function r(t){t.type=q;}function s(t,u){if(!Array.isArray(u))u=p.call(arguments,1);var v={ctor:g,menuitems:m(u||[]),config:{theme:j,maxheight:t?t.maxheight:null,className:t?t.className:null}};return o(v,t);}s.SelectableMenu=function(t,u){if(!Array.isArray(u))u=p.call(arguments,1);var v={ctor:k,menuitems:m(u),config:{className:n("_57di",t?t.className:null),theme:j,multiple:t&&t.multiple,maxheight:t?t.maxheight:null}};return o(v,t);};s.Item=function(t,u){if(!Array.isArray(u))u=p.call(arguments,1);var v={ctor:h,reactChildren:u};r(v);return o(v,t);};s.SelectableItem=function(t,u){if(!Array.isArray(u))u=p.call(arguments,1);var v={ctor:i,reactChildren:u};r(v);return o(v,t);};s.putOnReactComponentCostume=r;e.exports=s;});
__d("XUIMenuWithSquareCorner",["CSS","cx"],function(a,b,c,d,e,f,g,h){function i(j){"use strict";this.$XUIMenuWithSquareCorner0=j;}i.prototype.enable=function(){"use strict";g.addClass(this.$XUIMenuWithSquareCorner0.getRoot(),"_2n_z");};i.prototype.disable=function(){"use strict";g.removeClass(this.$XUIMenuWithSquareCorner0.getRoot(),"_2n_z");};e.exports=i;});
__d("ReactXUIMenu",["ReactMenu","XUIMenuTheme","XUIMenuWithSquareCorner"],function(a,b,c,d,e,f,g,h,i){function j(k,l){if(!Array.isArray(l))l=Array.prototype.slice.call(arguments,1);var m=g.apply(null,arguments);m.config.theme=h;if(!k||k.withsquarecorner!==false)m.config.behaviors=[i];return m;}j.SelectableMenu=function(k,l){if(!Array.isArray(l))l=Array.prototype.slice.call(arguments,1);var m=g.SelectableMenu(k,l);m.config.theme=h;if(!k||k.withsquarecorner!==false)m.config.behaviors=[i];return m;};j.Item=g.Item;j.SelectableItem=g.SelectableItem;e.exports=j;});
__d("UFIOrderingModeSelector.react",["InlineBlock.react","Link.react","LoadingIndicator.react","React","Image.react","ReactXUIMenu","PopoverMenu.react","cx","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=l.SelectableMenu,q=l.SelectableItem,r=j.createClass({displayName:'UFIOrderingModeSelector',getInitialState:function(){var s=null;this.props.orderingmodes.map(function(t){if(t.selected)s=t;});return {selectedMode:s};},onMenuItemClick:function(s,t){var u=t.item.getValue();this.props.orderingmodes.map(function(v){if(v.value===u)this.setState({selectedMode:v});}.bind(this));this.props.onOrderChanged(u);},render:function(){var s=null;if(this.props.currentOrderingMode!=this.state.selectedMode.value)s=i({className:"UFIOrderingModeSelectorLoading",color:"white",size:"small"});var t=p({onItemClick:this.onMenuItemClick},this.props.orderingmodes.map(function(u){return (q({key:u.value,value:u.value,selected:u.value===this.state.selectedMode.value},u.name));}.bind(this)));return (j.DOM.div({className:"UFIOrderingModeSelector"},s,g(null,m({className:"UFIOrderingModeSelectorPopover",menu:t,alignh:"right"},h(null,this.state.selectedMode.name,k({className:"UFIOrderingModeSelectorDownCaret",src:o('/images/ui/xhp/link/more/down_caret.gif')}))))));}});e.exports=r;});