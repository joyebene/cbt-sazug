"use client";

import { Clock3 } from "lucide-react";
import { useEffect, useState } from "react";

export default function ExamTimer() {

const [seconds,setSeconds]=useState(5400);

useEffect(()=>{

const timer=setInterval(()=>{

setSeconds(prev=>prev-1);

},1000);

return()=>clearInterval(timer);

},[]);

const hour=Math.floor(seconds/3600);

const min=Math.floor((seconds%3600)/60);

const sec=seconds%60;

return(

<div className="bg-white border border-border rounded-xl p-5 flex justify-between">

<div>

<h2 className="font-bold">

CSC301

</h2>

<p className="text-muted">

Computer Science II

</p>

</div>

<div className="flex items-center gap-3">

<Clock3 className="text-primary"/>

<span className="font-bold text-xl">

{hour.toString().padStart(2,"0")}:

{min.toString().padStart(2,"0")}:

{sec.toString().padStart(2,"0")}

</span>

</div>

</div>

)

}