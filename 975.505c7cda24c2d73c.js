"use strict";(self.webpackChunkangular_test_clone_news=self.webpackChunkangular_test_clone_news||[]).push([[975],{8975:(h,l,n)=>{n.r(l),n.d(l,{UserComponent:()=>u});var a=n(6895),e=n(4650),o=n(9299),c=n(529);class i{constructor(t){this._httpClient=t,this.apiUrl="https://hn.algolia.com/api/v1/"}getUser(t){return this._httpClient.get(`${this.apiUrl}users/${t}`)}static#e=this.\u0275fac=function(s){return new(s||i)(e.LFG(c.eN))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}class u{constructor(t,s){this._route=t,this._usersService=s,this.userProfile$={}}ngOnInit(){this.getUser()}getUser(){const t=this._route.snapshot.paramMap.get("username");this._usersService.getUser(t).subscribe(s=>{this.userProfile$=s})}static#e=this.\u0275fac=function(s){return new(s||u)(e.Y36(o.gz),e.Y36(i))};static#t=this.\u0275cmp=e.Xpm({type:u,selectors:[["app-user"]],standalone:!0,features:[e.jDz],decls:11,vars:7,consts:[[1,"user"],[3,"innerHTML"]],template:function(s,r){1&s&&(e.TgZ(0,"ul",0)(1,"li"),e._uU(2),e.qZA(),e.TgZ(3,"li"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"li"),e._uU(7),e.qZA(),e.TgZ(8,"li"),e._uU(9,"about: "),e._UZ(10,"span",1),e.qZA()()),2&s&&(e.xp6(2),e.hij("user: ",null==r.userProfile$?null:r.userProfile$.username,""),e.xp6(2),e.hij("created: ",e.xi3(5,4,null==r.userProfile$?null:r.userProfile$.created_at,"mediumDate"),""),e.xp6(3),e.hij("karma: ",null==r.userProfile$?null:r.userProfile$.karma,""),e.xp6(3),e.Q6J("innerHTML",null==r.userProfile$?null:r.userProfile$.about,e.oJD))},dependencies:[a.ez,a.uU],styles:[".user[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:4px 0;padding-left:18px}"]})}}}]);