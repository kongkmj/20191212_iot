function dashboard(){}const express=require("express"),router=express.Router();router.get("/dashboard",function(r,e){var a=new dashboard;a.name="김민재",a.bulb="OFF",a.bulbIcon=!1,a.air="OFF",a.airIcon=!1,a.temp="0",a.humi="0",e.render("partials/body/dashboard",{name:a.name,bulb:a.bulb,bulbIcon:a.bulbIcon,air:a.air,airIcon:a.airIcon,temp:a.temp,humi:a.humi})}),module.exports=router;
