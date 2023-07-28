"use strict";(self.webpackChunkgoit_phonebook_react=self.webpackChunkgoit_phonebook_react||[]).push([[357],{4357:function(e,r,i){i.r(r),i.d(r,{default:function(){return v}});var n=i(9434),l=i(9273),a=i(5325),o=i(7298),t=i(9163),s=i(9055),d=i(184),u=function(){var e=(0,n.I0)();return(0,d.jsx)("form",{onSubmit:function(r){r.preventDefault();var i=r.currentTarget;e((0,l.a$)({name:i.elements.name.value,email:i.elements.email.value,password:i.elements.password.value})),i.reset()},autoComplete:"off",children:(0,d.jsxs)(a.NI,{isRequired:!0,color:"secondary",children:[(0,d.jsx)(o.l,{htmlFor:"nameId",children:"Username"}),(0,d.jsx)(t.I,{id:"nameId",type:"text",name:"name",placeholder:"Enter your name",bg:"white"}),(0,d.jsx)(o.l,{htmlFor:"emailId",pt:"10px",children:"Email"}),(0,d.jsx)(t.I,{id:"emailId",type:"email",name:"email",placeholder:"Enter your email",bg:"white"}),(0,d.jsx)(o.l,{htmlFor:"passwordId",pt:"10px",children:"Password"}),(0,d.jsx)(t.I,{id:"passwordId",type:"password",name:"password",placeholder:"Enter your password",bg:"white"}),(0,d.jsx)(s.z,{mt:"40px",type:"submit",size:"lg",variant:"solid",color:"secondary",_hover:{bgColor:"active"},children:"Register"})]})})},c=i(824),m=i(2791);function v(){return(0,m.useEffect)((function(){document.title="Register MyPhonebook"}),[]),(0,d.jsx)(c.xu,{bg:"background",align:"center",h:"500px",p:"50px",borderRadius:"10px",children:(0,d.jsx)(u,{})})}},7298:function(e,r,i){i.d(r,{l:function(){return v}});var n=i(1413),l=i(4925),a=i(5325),o=i(5597),t=i(6232),s=i(2996),d=i(5812),u=i(6992),c=i(184),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,o.G)((function(e,r){var i,o=(0,t.mq)("FormLabel",e),v=(0,s.Lr)(e),h=(v.className,v.children),f=v.requiredIndicator,b=void 0===f?(0,c.jsx)(p,{}):f,x=v.optionalIndicator,I=void 0===x?null:x,g=(0,l.Z)(v,m),Z=(0,a.NJ)(),y=null!=(i=null==Z?void 0:Z.getLabelProps(g,r))?i:(0,n.Z)({ref:r},g);return(0,c.jsxs)(d.m.label,(0,n.Z)((0,n.Z)({},y),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,n.Z)({display:"block",textAlign:"start"},o),children:[h,(null==Z?void 0:Z.isRequired)?b:I]}))}));v.displayName="FormLabel";var p=(0,o.G)((function(e,r){var i=(0,a.NJ)(),l=(0,a.e)();if(!(null==i?void 0:i.isRequired))return null;var o=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,n.Z)((0,n.Z)({},null==i?void 0:i.getRequiredIndicatorProps(e,r)),{},{__css:l.requiredIndicator,className:o}))}));p.displayName="RequiredIndicator"},5325:function(e,r,i){i.d(r,{NI:function(){return q},NJ:function(){return k},Q6:function(){return F},e:function(){return g}});var n=i(1413),l=i(4925),a=i(9439),o=i(9886),t=i(4591),s=i(5597),d=i(6232),u=i(2996),c=i(5812),m=i(6992),v=i(2791),p=i(184),h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],b=(0,o.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,a.Z)(b,2),I=x[0],g=x[1],Z=(0,o.k)({strict:!1,name:"FormControlContext"}),y=(0,a.Z)(Z,2),R=y[0],k=y[1];var q=(0,s.G)((function(e,r){var i=(0,d.jC)("Form",e),o=function(e){var r=e.id,i=e.isRequired,o=e.isInvalid,s=e.isDisabled,d=e.isReadOnly,u=(0,l.Z)(e,h),c=(0,v.useId)(),p=r||"field-".concat(c),f="".concat(p,"-label"),b="".concat(p,"-feedback"),x="".concat(p,"-helptext"),I=(0,v.useState)(!1),g=(0,a.Z)(I,2),Z=g[0],y=g[1],R=(0,v.useState)(!1),k=(0,a.Z)(R,2),q=k[0],F=k[1],N=(0,v.useState)(!1),j=(0,a.Z)(N,2),_=j[0],P=j[1],C=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:x},e),{},{ref:(0,t.lq)(r,(function(e){e&&F(!0)}))})}),[x]),w=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:r,"data-focus":(0,m.PB)(_),"data-disabled":(0,m.PB)(s),"data-invalid":(0,m.PB)(o),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:p})}),[p,s,_,o,d,f]),T=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:b},e),{},{ref:(0,t.lq)(r,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[b]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)((0,n.Z)({},e),u),{},{ref:r,role:"group"})}),[u]),D=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!o,isReadOnly:!!d,isDisabled:!!s,isFocused:!!_,onFocus:function(){return P(!0)},onBlur:function(){return P(!1)},hasFeedbackText:Z,setHasFeedbackText:y,hasHelpText:q,setHasHelpText:F,id:p,labelId:f,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:C,getErrorMessageProps:T,getRootProps:O,getLabelProps:w,getRequiredIndicatorProps:D}}((0,u.Lr)(e)),s=o.getRootProps,b=(o.htmlProps,(0,l.Z)(o,f)),x=(0,m.cx)("chakra-form-control",e.className);return(0,p.jsx)(R,{value:b,children:(0,p.jsx)(I,{value:i,children:(0,p.jsx)(c.m.div,(0,n.Z)((0,n.Z)({},s({},r)),{},{className:x,__css:i.container}))})})}));q.displayName="FormControl";var F=(0,s.G)((function(e,r){var i=k(),l=g(),a=(0,m.cx)("chakra-form__helper-text",e.className);return(0,p.jsx)(c.m.div,(0,n.Z)((0,n.Z)({},null==i?void 0:i.getHelpTextProps(e,r)),{},{__css:l.helperText,className:a}))}));F.displayName="FormHelperText"},9163:function(e,r,i){i.d(r,{I:function(){return f}});var n=i(1413),l=i(4925),a=i(5325),o=i(6992),t=["isDisabled","isInvalid","isReadOnly","isRequired"],s=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var r=function(e){var r,i,t,d=(0,a.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,p=e.isRequired,h=e.isInvalid,f=e.isReadOnly,b=e.isDisabled,x=e.onFocus,I=e.onBlur,g=(0,l.Z)(e,s),Z=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&Z.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&Z.push(d.helpTextId);return(0,n.Z)((0,n.Z)({},g),{},{"aria-describedby":Z.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(r=null!=c?c:b)?r:null==d?void 0:d.isDisabled,isReadOnly:null!=(i=null!=m?m:f)?i:null==d?void 0:d.isReadOnly,isRequired:null!=(t=null!=v?v:p)?t:null==d?void 0:d.isRequired,isInvalid:null!=h?h:null==d?void 0:d.isInvalid,onFocus:(0,o.v0)(null==d?void 0:d.onFocus,x),onBlur:(0,o.v0)(null==d?void 0:d.onBlur,I)})}(e),i=r.isDisabled,d=r.isInvalid,u=r.isReadOnly,c=r.isRequired,m=(0,l.Z)(r,t);return(0,n.Z)((0,n.Z)({},m),{},{disabled:i,readOnly:u,required:c,"aria-invalid":(0,o.Qm)(d),"aria-required":(0,o.Qm)(c),"aria-readonly":(0,o.Qm)(u)})}var u=i(5597),c=i(6232),m=i(2996),v=i(5812),p=i(184),h=["htmlSize"],f=(0,u.G)((function(e,r){var i=e.htmlSize,a=(0,l.Z)(e,h),t=(0,c.jC)("Input",a),s=d((0,m.Lr)(a)),u=(0,o.cx)("chakra-input",e.className);return(0,p.jsx)(v.m.input,(0,n.Z)((0,n.Z)({size:i},s),{},{__css:t.field,ref:r,className:u}))}));f.displayName="Input",f.id="Input"}}]);
//# sourceMappingURL=357.c2dc566a.chunk.js.map