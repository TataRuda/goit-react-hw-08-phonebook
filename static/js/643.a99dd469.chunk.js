"use strict";(self.webpackChunkgoit_phonebook_react=self.webpackChunkgoit_phonebook_react||[]).push([[643],{6643:function(e,i,r){r.r(i),r.d(i,{default:function(){return m}});var n=r(9434),l=r(9273),a=r(5325),o=r(7298),t=r(9163),s=r(9055),d=r(184),u=function(){var e=(0,n.I0)(),i=function(i){i.preventDefault();var r=i.currentTarget;e((0,l.vz)({email:r.elements.email.value,password:r.elements.password.value})),r.reset()};return(0,d.jsx)("form",{onSubmit:i,autoComplete:"off",children:(0,d.jsxs)(a.NI,{onSubmit:i,autoComplete:"off",isRequired:!0,color:"secondary",children:[(0,d.jsx)(o.l,{htmlFor:"emailId",children:"Email"}),(0,d.jsx)(t.I,{id:"emailId",type:"email",name:"email",placeholder:"Enter your email",bg:"white"}),(0,d.jsx)(o.l,{htmlFor:"passwordId",pt:"10px",children:"Password"}),(0,d.jsx)(t.I,{id:"passwordId",type:"password",name:"password",placeholder:"Enter your password",bg:"white"}),(0,d.jsx)(s.z,{mt:"40px",type:"submit",size:"lg",variant:"solid",color:"secondary",_hover:{bgColor:"active"},children:"Log In"})]})})},c=r(824),v=r(2791);function m(){return(0,v.useEffect)((function(){document.title="Login MyPhonebook"}),[]),(0,d.jsx)(c.xu,{bg:"background",align:"center",h:"500px",p:"50px",borderRadius:"10px",children:(0,d.jsx)(u,{})})}},7298:function(e,i,r){r.d(i,{l:function(){return m}});var n=r(1413),l=r(4925),a=r(5325),o=r(5597),t=r(6232),s=r(2996),d=r(5812),u=r(6992),c=r(184),v=["className","children","requiredIndicator","optionalIndicator"],m=(0,o.G)((function(e,i){var r,o=(0,t.mq)("FormLabel",e),m=(0,s.Lr)(e),f=(m.className,m.children),h=m.requiredIndicator,b=void 0===h?(0,c.jsx)(p,{}):h,x=m.optionalIndicator,I=void 0===x?null:x,Z=(0,l.Z)(m,v),g=(0,a.NJ)(),y=null!=(r=null==g?void 0:g.getLabelProps(Z,i))?r:(0,n.Z)({ref:i},Z);return(0,c.jsxs)(d.m.label,(0,n.Z)((0,n.Z)({},y),{},{className:(0,u.cx)("chakra-form__label",m.className),__css:(0,n.Z)({display:"block",textAlign:"start"},o),children:[f,(null==g?void 0:g.isRequired)?b:I]}))}));m.displayName="FormLabel";var p=(0,o.G)((function(e,i){var r=(0,a.NJ)(),l=(0,a.e)();if(!(null==r?void 0:r.isRequired))return null;var o=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,n.Z)((0,n.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,i)),{},{__css:l.requiredIndicator,className:o}))}));p.displayName="RequiredIndicator"},5325:function(e,i,r){r.d(i,{NI:function(){return q},NJ:function(){return k},Q6:function(){return F},e:function(){return Z}});var n=r(1413),l=r(4925),a=r(9439),o=r(9886),t=r(4591),s=r(5597),d=r(6232),u=r(2996),c=r(5812),v=r(6992),m=r(2791),p=r(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],b=(0,o.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,a.Z)(b,2),I=x[0],Z=x[1],g=(0,o.k)({strict:!1,name:"FormControlContext"}),y=(0,a.Z)(g,2),R=y[0],k=y[1];var q=(0,s.G)((function(e,i){var r=(0,d.jC)("Form",e),o=function(e){var i=e.id,r=e.isRequired,o=e.isInvalid,s=e.isDisabled,d=e.isReadOnly,u=(0,l.Z)(e,f),c=(0,m.useId)(),p=i||"field-".concat(c),h="".concat(p,"-label"),b="".concat(p,"-feedback"),x="".concat(p,"-helptext"),I=(0,m.useState)(!1),Z=(0,a.Z)(I,2),g=Z[0],y=Z[1],R=(0,m.useState)(!1),k=(0,a.Z)(R,2),q=k[0],F=k[1],N=(0,m.useState)(!1),_=(0,a.Z)(N,2),j=_[0],C=_[1],P=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:x},e),{},{ref:(0,t.lq)(i,(function(e){e&&F(!0)}))})}),[x]),w=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:i,"data-focus":(0,v.PB)(j),"data-disabled":(0,v.PB)(s),"data-invalid":(0,v.PB)(o),"data-readonly":(0,v.PB)(d),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:p})}),[p,s,j,o,d,h]),T=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:b},e),{},{ref:(0,t.lq)(i,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[b]),O=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)((0,n.Z)({},e),u),{},{ref:i,role:"group"})}),[u]),D=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:i,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!o,isReadOnly:!!d,isDisabled:!!s,isFocused:!!j,onFocus:function(){return C(!0)},onBlur:function(){return C(!1)},hasFeedbackText:g,setHasFeedbackText:y,hasHelpText:q,setHasHelpText:F,id:p,labelId:h,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:P,getErrorMessageProps:T,getRootProps:O,getLabelProps:w,getRequiredIndicatorProps:D}}((0,u.Lr)(e)),s=o.getRootProps,b=(o.htmlProps,(0,l.Z)(o,h)),x=(0,v.cx)("chakra-form-control",e.className);return(0,p.jsx)(R,{value:b,children:(0,p.jsx)(I,{value:r,children:(0,p.jsx)(c.m.div,(0,n.Z)((0,n.Z)({},s({},i)),{},{className:x,__css:r.container}))})})}));q.displayName="FormControl";var F=(0,s.G)((function(e,i){var r=k(),l=Z(),a=(0,v.cx)("chakra-form__helper-text",e.className);return(0,p.jsx)(c.m.div,(0,n.Z)((0,n.Z)({},null==r?void 0:r.getHelpTextProps(e,i)),{},{__css:l.helperText,className:a}))}));F.displayName="FormHelperText"},9163:function(e,i,r){r.d(i,{I:function(){return h}});var n=r(1413),l=r(4925),a=r(5325),o=r(6992),t=["isDisabled","isInvalid","isReadOnly","isRequired"],s=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var i=function(e){var i,r,t,d=(0,a.NJ)(),u=e.id,c=e.disabled,v=e.readOnly,m=e.required,p=e.isRequired,f=e.isInvalid,h=e.isReadOnly,b=e.isDisabled,x=e.onFocus,I=e.onBlur,Z=(0,l.Z)(e,s),g=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&g.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&g.push(d.helpTextId);return(0,n.Z)((0,n.Z)({},Z),{},{"aria-describedby":g.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(i=null!=c?c:b)?i:null==d?void 0:d.isDisabled,isReadOnly:null!=(r=null!=v?v:h)?r:null==d?void 0:d.isReadOnly,isRequired:null!=(t=null!=m?m:p)?t:null==d?void 0:d.isRequired,isInvalid:null!=f?f:null==d?void 0:d.isInvalid,onFocus:(0,o.v0)(null==d?void 0:d.onFocus,x),onBlur:(0,o.v0)(null==d?void 0:d.onBlur,I)})}(e),r=i.isDisabled,d=i.isInvalid,u=i.isReadOnly,c=i.isRequired,v=(0,l.Z)(i,t);return(0,n.Z)((0,n.Z)({},v),{},{disabled:r,readOnly:u,required:c,"aria-invalid":(0,o.Qm)(d),"aria-required":(0,o.Qm)(c),"aria-readonly":(0,o.Qm)(u)})}var u=r(5597),c=r(6232),v=r(2996),m=r(5812),p=r(184),f=["htmlSize"],h=(0,u.G)((function(e,i){var r=e.htmlSize,a=(0,l.Z)(e,f),t=(0,c.jC)("Input",a),s=d((0,v.Lr)(a)),u=(0,o.cx)("chakra-input",e.className);return(0,p.jsx)(m.m.input,(0,n.Z)((0,n.Z)({size:r},s),{},{__css:t.field,ref:i,className:u}))}));h.displayName="Input",h.id="Input"}}]);
//# sourceMappingURL=643.a99dd469.chunk.js.map