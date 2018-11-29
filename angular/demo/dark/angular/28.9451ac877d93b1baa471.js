(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{pWuH:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),r=function(){},o=u("gIcY"),t=function(){function l(){this.formRules={nonEmpty:"^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$",usernameMin:5,passwordMin:6,passwordPattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"},this.formErrors={firstName:"",lastName:"",username:"",email:"",password:"",confirmPassword:"",accept:!1},this.errorMessages={firstName:{required:"First name is required"},lastName:{required:"Last name is required"},username:{required:"Username is required",minLength:"'Username must be "+this.formRules.usernameMin+" characters or more"},email:{required:"required",email:"Invalid email address"},password:{required:"Password is required",pattern:"Password must contain: numbers, uppercase and lowercase letters",minLength:"Password must be at least "+this.formRules.passwordMin+" characters"},confirmPassword:{required:"Password confirmation is required",passwordMismatch:"Passwords must match"},accept:{requiredTrue:"You have to accept our Terms and Conditions"}}}return l.ngInjectableDef=e.defineInjectable({factory:function(){return new l},token:l,providedIn:"root"}),l}(),a=function(l){var n=l.get("password"),u=l.get("confirmPassword");return n&&u&&n.value===u.value?null:{passwordMismatch:!0}},i=function(){function l(l,n){this.fb=l,this.vf=n,this.submitted=!1,this.formErrors=this.vf.errorMessages,this.createForm()}return l.prototype.createForm=function(){this.simpleForm=this.fb.group({firstName:["",[o.Validators.required]],lastName:["",[o.Validators.required]],username:["",[o.Validators.required,o.Validators.minLength(this.vf.formRules.usernameMin),o.Validators.pattern(this.vf.formRules.nonEmpty)]],email:["",[o.Validators.required,o.Validators.email]],password:["",[o.Validators.required,o.Validators.minLength(this.vf.formRules.passwordMin),o.Validators.pattern(this.vf.formRules.passwordPattern)]],confirmPassword:["",[o.Validators.required]],accept:[!1,[o.Validators.requiredTrue]]},{validator:a})},Object.defineProperty(l.prototype,"f",{get:function(){return this.simpleForm.controls},enumerable:!0,configurable:!0}),l.prototype.onReset=function(){this.submitted=!1,this.simpleForm.reset()},l.prototype.onSubmit=function(){this.submitted=!0,this.simpleForm.invalid||(console.warn(this.simpleForm.value),alert("SUCCESS!"))},l}(),s=u("pMnS"),d=u("Ip0R"),m=e["\u0275crt"]({encapsulation:0,styles:[[".btn[_ngcontent-%COMP%]:disabled{cursor:auto}"]],data:{}});function c(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["First Name is required"]))],null,null)}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,c)),e["\u0275did"](2,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.f.firstName.errors.required)},null)}function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Last Name is required"]))],null,null)}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](2,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.f.lastName.errors.required)},null)}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Username is required"]))],null,null)}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.formErrors.username.minLength)})}function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](2,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](4,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.f.username.errors.required),l(n,4,0,u.f.username.errors.minlength)},null)}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Email is required"]))],null,null)}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.formErrors.email.email)})}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](2,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](4,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.f.email.errors.required),l(n,4,0,u.f.email.errors.email)},null)}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Password is required"]))],null,null)}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.formErrors.password.minLength)})}function V(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.formErrors.password.pattern)})}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](2,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,I)),e["\u0275did"](4,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,V)),e["\u0275did"](6,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.f.password.errors.required),l(n,4,0,u.f.password.errors.minlength),l(n,6,0,u.f.password.errors.pattern)},null)}function q(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.formErrors.confirmPassword.passwordMismatch)})}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,q)),e["\u0275did"](2,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.simpleForm.errors.passwordMismatch)},null)}function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["You have to accept our Terms and Conditions"]))],null,null)}function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,S)),e["\u0275did"](2,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.f.accept.errors.required)},null)}function F(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,153,"div",[["class","animated fadeIn"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,152,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,151,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,150,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,8,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,0,"i",[["class","icon-note"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Form Validation "])),(l()(),e["\u0275eld"](7,0,null,null,1,"a",[["class","badge badge-danger"],["href","https://coreui.io/pro/"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["CoreUI Pro Component"])),(l()(),e["\u0275eld"](9,0,null,null,3,"div",[["class","card-header-actions"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,2,"a",[["class","card-header-action"],["href","https://angular.io/guide/form-validation"],["target","_blank"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,1,"small",[["class","text-muted"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["docs"])),(l()(),e["\u0275eld"](13,0,null,null,140,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Angular Form Validation "])),(l()(),e["\u0275eld"](15,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,137,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,121,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Simple Form"])),(l()(),e["\u0275eld"](20,0,null,null,118,"form",[["class","needs-validation"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var r=!0,o=l.component;return"submit"===n&&(r=!1!==e["\u0275nov"](l,22).onSubmit(u)&&r),"reset"===n&&(r=!1!==e["\u0275nov"](l,22).onReset()&&r),"ngSubmit"===n&&(r=!1!==o.onSubmit()&&r),r},null,null)),e["\u0275did"](21,16384,null,0,o["\u0275angular_packages_forms_forms_bg"],[],null,null),e["\u0275did"](22,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),e["\u0275did"](24,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(l()(),e["\u0275eld"](25,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,1,"label",[["class","col-form-label"],["for","firstName"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["First name"])),(l()(),e["\u0275eld"](28,0,null,null,9,"input",[["autocomplete","given-name"],["autofocus",""],["class","form-control"],["formControlName","firstName"],["id","firstName"],["placeholder","First name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var r=!0;return"input"===n&&(r=!1!==e["\u0275nov"](l,29)._handleInput(u.target.value)&&r),"blur"===n&&(r=!1!==e["\u0275nov"](l,29).onTouched()&&r),"compositionstart"===n&&(r=!1!==e["\u0275nov"](l,29)._compositionStart()&&r),"compositionend"===n&&(r=!1!==e["\u0275nov"](l,29)._compositionEnd(u.target.value)&&r),r},null,null)),e["\u0275did"](29,16384,null,0,o.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275did"](30,16384,null,0,o.RequiredValidator,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,o.NG_VALIDATORS,function(l){return[l]},[o.RequiredValidator]),e["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.DefaultValueAccessor]),e["\u0275did"](33,671744,null,0,o.FormControlName,[[3,o.ControlContainer],[6,o.NG_VALIDATORS],[8,null],[6,o.NG_VALUE_ACCESSOR],[2,o["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,o.NgControl,null,[o.FormControlName]),e["\u0275did"](35,16384,null,0,o.NgControlStatus,[[4,o.NgControl]],null,null),e["\u0275did"](36,278528,null,0,d.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](37,{"is-invalid":0,"is-valid":1}),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](39,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](40,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,1,"label",[["class","col-form-label"],["for","lastName"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Last name"])),(l()(),e["\u0275eld"](43,0,null,null,9,"input",[["autocomplete","family-name"],["class","form-control"],["formControlName","lastName"],["id","lastName"],["placeholder","Last name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var r=!0;return"input"===n&&(r=!1!==e["\u0275nov"](l,44)._handleInput(u.target.value)&&r),"blur"===n&&(r=!1!==e["\u0275nov"](l,44).onTouched()&&r),"compositionstart"===n&&(r=!1!==e["\u0275nov"](l,44)._compositionStart()&&r),"compositionend"===n&&(r=!1!==e["\u0275nov"](l,44)._compositionEnd(u.target.value)&&r),r},null,null)),e["\u0275did"](44,16384,null,0,o.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275did"](45,16384,null,0,o.RequiredValidator,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,o.NG_VALIDATORS,function(l){return[l]},[o.RequiredValidator]),e["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.DefaultValueAccessor]),e["\u0275did"](48,671744,null,0,o.FormControlName,[[3,o.ControlContainer],[6,o.NG_VALIDATORS],[8,null],[6,o.NG_VALUE_ACCESSOR],[2,o["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,o.NgControl,null,[o.FormControlName]),e["\u0275did"](50,16384,null,0,o.NgControlStatus,[[4,o.NgControl]],null,null),e["\u0275did"](51,278528,null,0,d.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](52,{"is-invalid":0,"is-valid":1}),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](54,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](55,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](56,0,null,null,1,"label",[["class","col-form-label"],["for","username"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Username"])),(l()(),e["\u0275eld"](58,0,null,null,9,"input",[["autocomplete","username"],["class","form-control"],["formControlName","username"],["id","username"],["placeholder","Username"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var r=!0;return"input"===n&&(r=!1!==e["\u0275nov"](l,59)._handleInput(u.target.value)&&r),"blur"===n&&(r=!1!==e["\u0275nov"](l,59).onTouched()&&r),"compositionstart"===n&&(r=!1!==e["\u0275nov"](l,59)._compositionStart()&&r),"compositionend"===n&&(r=!1!==e["\u0275nov"](l,59)._compositionEnd(u.target.value)&&r),r},null,null)),e["\u0275did"](59,16384,null,0,o.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275did"](60,16384,null,0,o.RequiredValidator,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,o.NG_VALIDATORS,function(l){return[l]},[o.RequiredValidator]),e["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.DefaultValueAccessor]),e["\u0275did"](63,671744,null,0,o.FormControlName,[[3,o.ControlContainer],[6,o.NG_VALIDATORS],[8,null],[6,o.NG_VALUE_ACCESSOR],[2,o["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,o.NgControl,null,[o.FormControlName]),e["\u0275did"](65,16384,null,0,o.NgControlStatus,[[4,o.NgControl]],null,null),e["\u0275did"](66,278528,null,0,d.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](67,{"is-invalid":0,"is-valid":1}),(l()(),e["\u0275and"](16777216,null,null,1,null,N)),e["\u0275did"](69,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](70,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](71,0,null,null,1,"label",[["class","col-form-label"],["for","email"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Email"])),(l()(),e["\u0275eld"](73,0,null,null,9,"input",[["autocomplete","email"],["class","form-control"],["formControlName","email"],["id","email"],["placeholder","Email"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var r=!0;return"input"===n&&(r=!1!==e["\u0275nov"](l,74)._handleInput(u.target.value)&&r),"blur"===n&&(r=!1!==e["\u0275nov"](l,74).onTouched()&&r),"compositionstart"===n&&(r=!1!==e["\u0275nov"](l,74)._compositionStart()&&r),"compositionend"===n&&(r=!1!==e["\u0275nov"](l,74)._compositionEnd(u.target.value)&&r),r},null,null)),e["\u0275did"](74,16384,null,0,o.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275did"](75,16384,null,0,o.RequiredValidator,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,o.NG_VALIDATORS,function(l){return[l]},[o.RequiredValidator]),e["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.DefaultValueAccessor]),e["\u0275did"](78,671744,null,0,o.FormControlName,[[3,o.ControlContainer],[6,o.NG_VALIDATORS],[8,null],[6,o.NG_VALUE_ACCESSOR],[2,o["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,o.NgControl,null,[o.FormControlName]),e["\u0275did"](80,16384,null,0,o.NgControlStatus,[[4,o.NgControl]],null,null),e["\u0275did"](81,278528,null,0,d.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](82,{"is-invalid":0,"is-valid":1}),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](84,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](85,0,null,null,30,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](86,0,null,null,14,"div",[["class","form-group col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](87,0,null,null,1,"label",[["class","col-form-label"],["for","password"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Password"])),(l()(),e["\u0275eld"](89,0,null,null,9,"input",[["autocomplete","new-password"],["class","form-control"],["formControlName","password"],["id","password"],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var r=!0;return"input"===n&&(r=!1!==e["\u0275nov"](l,90)._handleInput(u.target.value)&&r),"blur"===n&&(r=!1!==e["\u0275nov"](l,90).onTouched()&&r),"compositionstart"===n&&(r=!1!==e["\u0275nov"](l,90)._compositionStart()&&r),"compositionend"===n&&(r=!1!==e["\u0275nov"](l,90)._compositionEnd(u.target.value)&&r),r},null,null)),e["\u0275did"](90,16384,null,0,o.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275did"](91,16384,null,0,o.RequiredValidator,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,o.NG_VALIDATORS,function(l){return[l]},[o.RequiredValidator]),e["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.DefaultValueAccessor]),e["\u0275did"](94,671744,null,0,o.FormControlName,[[3,o.ControlContainer],[6,o.NG_VALIDATORS],[8,null],[6,o.NG_VALUE_ACCESSOR],[2,o["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,o.NgControl,null,[o.FormControlName]),e["\u0275did"](96,16384,null,0,o.NgControlStatus,[[4,o.NgControl]],null,null),e["\u0275did"](97,278528,null,0,d.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](98,{"is-invalid":0,"is-valid":1}),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](100,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](101,0,null,null,14,"div",[["class","form-group col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](102,0,null,null,1,"label",[["class","col-form-label"],["for","confirmPassword"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Confirm password"])),(l()(),e["\u0275eld"](104,0,null,null,9,"input",[["autocomplete","new-password"],["class","form-control"],["formControlName","confirmPassword"],["id","confirmPassword"],["placeholder","Confirm password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var r=!0;return"input"===n&&(r=!1!==e["\u0275nov"](l,105)._handleInput(u.target.value)&&r),"blur"===n&&(r=!1!==e["\u0275nov"](l,105).onTouched()&&r),"compositionstart"===n&&(r=!1!==e["\u0275nov"](l,105)._compositionStart()&&r),"compositionend"===n&&(r=!1!==e["\u0275nov"](l,105)._compositionEnd(u.target.value)&&r),r},null,null)),e["\u0275did"](105,16384,null,0,o.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275did"](106,16384,null,0,o.RequiredValidator,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,o.NG_VALIDATORS,function(l){return[l]},[o.RequiredValidator]),e["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.DefaultValueAccessor]),e["\u0275did"](109,671744,null,0,o.FormControlName,[[3,o.ControlContainer],[6,o.NG_VALIDATORS],[8,null],[6,o.NG_VALUE_ACCESSOR],[2,o["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,o.NgControl,null,[o.FormControlName]),e["\u0275did"](111,16384,null,0,o.NgControlStatus,[[4,o.NgControl]],null,null),e["\u0275did"](112,278528,null,0,d.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](113,{"is-invalid":0,"is-valid":1}),(l()(),e["\u0275and"](16777216,null,null,1,null,E)),e["\u0275did"](115,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](116,0,null,null,15,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](117,0,null,null,14,"div",[["class","custom-control custom-checkbox"]],null,null,null,null,null)),(l()(),e["\u0275eld"](118,0,null,null,9,"input",[["class","custom-control-input"],["formControlName","accept"],["id","accept"],["required",""],["type","checkbox"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var r=!0;return"change"===n&&(r=!1!==e["\u0275nov"](l,119).onChange(u.target.checked)&&r),"blur"===n&&(r=!1!==e["\u0275nov"](l,119).onTouched()&&r),r},null,null)),e["\u0275did"](119,16384,null,0,o.CheckboxControlValueAccessor,[e.Renderer2,e.ElementRef],null,null),e["\u0275did"](120,16384,null,0,o.CheckboxRequiredValidator,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,o.NG_VALIDATORS,function(l){return[l]},[o.CheckboxRequiredValidator]),e["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.CheckboxControlValueAccessor]),e["\u0275did"](123,671744,null,0,o.FormControlName,[[3,o.ControlContainer],[6,o.NG_VALIDATORS],[8,null],[6,o.NG_VALUE_ACCESSOR],[2,o["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,o.NgControl,null,[o.FormControlName]),e["\u0275did"](125,16384,null,0,o.NgControlStatus,[[4,o.NgControl]],null,null),e["\u0275did"](126,278528,null,0,d.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](127,{"is-invalid":0,"is-valid":1}),(l()(),e["\u0275eld"](128,0,null,null,1,"label",[["class","custom-control-label"],["for","accept"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["I accept the terms of use"])),(l()(),e["\u0275and"](16777216,null,null,1,null,A)),e["\u0275did"](131,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](132,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](133,0,null,null,1,"button",[["class","btn btn-primary mr-1"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Submit"])),(l()(),e["\u0275eld"](135,0,null,null,1,"button",[["class","btn btn-success mr-1"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Validate"])),(l()(),e["\u0275eld"](137,0,null,null,1,"button",[["class","btn btn-danger"],["type","reset"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onReset()&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Reset"])),(l()(),e["\u0275eld"](139,0,null,null,14,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](140,0,null,null,13,"div",[["class","card bg-secondary"]],null,null,null,null,null)),e["\u0275did"](141,278528,null,0,d.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](142,{"bg-info":0}),(l()(),e["\u0275eld"](143,0,null,null,10,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](144,0,null,null,4,"pre",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Value: "])),(l()(),e["\u0275eld"](146,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](147,null,["",""])),e["\u0275pid"](0,d.JsonPipe,[]),(l()(),e["\u0275eld"](149,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](150,null,[" Status: "," "])),(l()(),e["\u0275eld"](151,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](152,null,[" Errors: "," "])),e["\u0275pid"](0,d.JsonPipe,[])],function(l,n){var u=n.component;l(n,22,0,u.simpleForm),l(n,30,0,""),l(n,33,0,"firstName"),l(n,36,0,"form-control",l(n,37,0,u.submitted&&u.f.firstName.errors,u.f.firstName.touched&&!u.f.firstName.errors)),l(n,39,0,u.submitted&&u.f.firstName.errors),l(n,45,0,""),l(n,48,0,"lastName"),l(n,51,0,"form-control",l(n,52,0,u.submitted&&u.f.lastName.errors,u.f.lastName.touched&&!u.f.lastName.errors)),l(n,54,0,u.submitted&&u.f.lastName.errors),l(n,60,0,""),l(n,63,0,"username"),l(n,66,0,"form-control",l(n,67,0,u.submitted&&u.f.username.errors,u.f.username.touched&&!u.f.username.errors)),l(n,69,0,u.submitted&&u.simpleForm.controls.username.errors),l(n,75,0,""),l(n,78,0,"email"),l(n,81,0,"form-control",l(n,82,0,u.submitted&&u.f.email.errors,u.f.email.touched&&!u.f.email.errors)),l(n,84,0,u.submitted&&u.f.email.errors),l(n,91,0,""),l(n,94,0,"password"),l(n,97,0,"form-control",l(n,98,0,u.submitted&&u.f.password.errors,u.f.password.touched&&!u.f.password.errors)),l(n,100,0,u.submitted&&u.f.password.errors),l(n,106,0,""),l(n,109,0,"confirmPassword"),l(n,112,0,"form-control",l(n,113,0,u.submitted&&u.simpleForm.errors,u.f.confirmPassword.touched&&!u.simpleForm.errors)),l(n,115,0,u.submitted&&u.simpleForm.errors),l(n,120,0,""),l(n,123,0,"accept"),l(n,126,0,"custom-control-input",l(n,127,0,u.submitted&&u.f.accept.errors,!u.f.accept.errors)),l(n,131,0,u.submitted&&u.f.accept.errors),l(n,141,0,"card bg-secondary",l(n,142,0,u.simpleForm.valid))},function(l,n){var u=n.component;l(n,20,0,e["\u0275nov"](n,24).ngClassUntouched,e["\u0275nov"](n,24).ngClassTouched,e["\u0275nov"](n,24).ngClassPristine,e["\u0275nov"](n,24).ngClassDirty,e["\u0275nov"](n,24).ngClassValid,e["\u0275nov"](n,24).ngClassInvalid,e["\u0275nov"](n,24).ngClassPending),l(n,28,0,e["\u0275nov"](n,30).required?"":null,e["\u0275nov"](n,35).ngClassUntouched,e["\u0275nov"](n,35).ngClassTouched,e["\u0275nov"](n,35).ngClassPristine,e["\u0275nov"](n,35).ngClassDirty,e["\u0275nov"](n,35).ngClassValid,e["\u0275nov"](n,35).ngClassInvalid,e["\u0275nov"](n,35).ngClassPending),l(n,43,0,e["\u0275nov"](n,45).required?"":null,e["\u0275nov"](n,50).ngClassUntouched,e["\u0275nov"](n,50).ngClassTouched,e["\u0275nov"](n,50).ngClassPristine,e["\u0275nov"](n,50).ngClassDirty,e["\u0275nov"](n,50).ngClassValid,e["\u0275nov"](n,50).ngClassInvalid,e["\u0275nov"](n,50).ngClassPending),l(n,58,0,e["\u0275nov"](n,60).required?"":null,e["\u0275nov"](n,65).ngClassUntouched,e["\u0275nov"](n,65).ngClassTouched,e["\u0275nov"](n,65).ngClassPristine,e["\u0275nov"](n,65).ngClassDirty,e["\u0275nov"](n,65).ngClassValid,e["\u0275nov"](n,65).ngClassInvalid,e["\u0275nov"](n,65).ngClassPending),l(n,73,0,e["\u0275nov"](n,75).required?"":null,e["\u0275nov"](n,80).ngClassUntouched,e["\u0275nov"](n,80).ngClassTouched,e["\u0275nov"](n,80).ngClassPristine,e["\u0275nov"](n,80).ngClassDirty,e["\u0275nov"](n,80).ngClassValid,e["\u0275nov"](n,80).ngClassInvalid,e["\u0275nov"](n,80).ngClassPending),l(n,89,0,e["\u0275nov"](n,91).required?"":null,e["\u0275nov"](n,96).ngClassUntouched,e["\u0275nov"](n,96).ngClassTouched,e["\u0275nov"](n,96).ngClassPristine,e["\u0275nov"](n,96).ngClassDirty,e["\u0275nov"](n,96).ngClassValid,e["\u0275nov"](n,96).ngClassInvalid,e["\u0275nov"](n,96).ngClassPending),l(n,104,0,e["\u0275nov"](n,106).required?"":null,e["\u0275nov"](n,111).ngClassUntouched,e["\u0275nov"](n,111).ngClassTouched,e["\u0275nov"](n,111).ngClassPristine,e["\u0275nov"](n,111).ngClassDirty,e["\u0275nov"](n,111).ngClassValid,e["\u0275nov"](n,111).ngClassInvalid,e["\u0275nov"](n,111).ngClassPending),l(n,118,0,e["\u0275nov"](n,120).required?"":null,e["\u0275nov"](n,125).ngClassUntouched,e["\u0275nov"](n,125).ngClassTouched,e["\u0275nov"](n,125).ngClassPristine,e["\u0275nov"](n,125).ngClassDirty,e["\u0275nov"](n,125).ngClassValid,e["\u0275nov"](n,125).ngClassInvalid,e["\u0275nov"](n,125).ngClassPending),l(n,133,0,u.simpleForm.pristine||u.simpleForm.invalid),l(n,135,0,u.simpleForm.valid),l(n,137,0,u.simpleForm.pristine&&!u.submitted),l(n,147,0,e["\u0275unv"](n,147,0,e["\u0275nov"](n,148).transform(u.simpleForm.value))),l(n,150,0,u.simpleForm.status),l(n,152,0,e["\u0275unv"](n,152,0,e["\u0275nov"](n,153).transform(u.simpleForm.errors)))})}var D=e["\u0275ccf"]("ng-component",i,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"ng-component",[],null,null,null,F,m)),e["\u0275prd"](512,null,t,t,[]),e["\u0275did"](2,49152,null,0,i,[o.FormBuilder,t],null,null)],null,null)},{},{},[]),T=u("ZYCi"),O={title:"Form Validation"},y=function(){};u.d(n,"ValidationFormsModuleNgFactory",function(){return k});var k=e["\u0275cmf"](r,[i],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,D]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_i"],o["\u0275angular_packages_forms_forms_i"],[]),e["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[e.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),e["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_bb"],o["\u0275angular_packages_forms_forms_bb"],[]),e["\u0275mpd"](1073742336,o.FormsModule,o.FormsModule,[]),e["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),e["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,T.p,T.p,[[2,T.v],[2,T.l]]),e["\u0275mpd"](1073742336,y,y,[]),e["\u0275mpd"](1073742336,r,r,[]),e["\u0275mpd"](1024,T.j,function(){return[[{path:"",component:i,data:O}]]},[])])})}}]);