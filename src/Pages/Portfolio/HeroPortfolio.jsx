import { motion } from "motion/react";

const HeroPortfolio = () => {

const floatingCards = [
{
title:"SEO Traffic",
value:"+320%",
left:"58%",
top:"22%"
},
{
title:"Leads Generated",
value:"12K+",
left:"70%",
top:"70%"
}
]

return (

<section className="relative overflow-hidden bg-[#070B17] min-h-screen text-white">

{/* Aurora Background */}

<div className="absolute inset-0">

<div className="absolute w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[160px] -top-44 -left-44"/>

<div className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[180px] bottom-[-250px] right-[-150px]"/>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff08_1px,transparent_1px)] bg-[length:32px_32px] opacity-30"/>

</div>

<div className="max-w-7xl mx-auto px-6 pt-36 relative z-10">

<div className="grid lg:grid-cols-[45%_55%] items-center gap-8">

{/* LEFT */}

<motion.div

initial={{opacity:0,x:-80}}

animate={{opacity:1,x:0}}

transition={{duration:0.8}}

>

<span className="uppercase tracking-[4px] text-purple-400 text-sm">

OUR PORTFOLIO

</span>

<h1 className="mt-6 text-6xl font-bold leading-tight">

We Don't Just Build

<br/>

Websites,

<br/>

<span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">

We Build Digital Success Stories

</span>

</h1>

<p className="mt-8 text-gray-400 text-lg max-w-xl">

Explore our premium portfolio of websites,

landing pages,

SEO campaigns and digital marketing

projects that generate measurable business growth.

</p>

<div className="flex gap-5 mt-10">

<button

className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition"

>

Explore Projects →

</button>

<button

className="px-8 py-4 rounded-xl border border-gray-700 hover:border-purple-500 transition"

>

Book Consultation

</button>

</div>

<div className="flex items-center gap-10 mt-12">

<div>

<div className="flex -space-x-3">

<img src="https://i.pravatar.cc/40?1" className="rounded-full border"/>

<img src="https://i.pravatar.cc/40?2" className="rounded-full border"/>

<img src="https://i.pravatar.cc/40?3" className="rounded-full border"/>

</div>

<p className="mt-3">

⭐ 4.9 / 5

</p>

</div>

<div>

<p className="text-gray-300">

Trusted by

</p>

<p className="text-xl font-semibold">

100+ Clients

</p>

</div>

</div>

</motion.div>

{/* RIGHT */}

<motion.div

initial={{opacity:0,x:80}}

animate={{opacity:1,x:0}}

transition={{duration:0.8}}

className="relative"

>

<img

src="/portfolio/HeroPortfolio.png"

className="w-full"

/>

{/* <img

src="/portfolio/HeroPortfolio.png"

className="absolute right-[-40px] bottom-10 w-40"

/> */}

{floatingCards.map((card,index)=>(

<motion.div

key={index}

animate={{y:[0,-10,0]}}

transition={{

repeat:Infinity,

duration:3,

delay:index

}}

style={{

left:card.left,

top:card.top

}}

className="absolute backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-5"

>

<p className="text-sm text-gray-300">

{card.title}

</p>

<h3 className="text-3xl font-bold mt-2">

{card.value}

</h3>

</motion.div>

))}

</motion.div>

</div>

</div>

{/* Scroll */}

<motion.div

animate={{y:[0,12,0]}}

transition={{repeat:Infinity,duration:2}}

className="absolute bottom-8 left-1/2 -translate-x-1/2"

>

<div className="w-8 h-14 rounded-full border border-purple-500 flex justify-center">

<div className="w-2 h-2 rounded-full bg-purple-400 mt-3"/>

</div>

</motion.div>

</section>

)

}

export default HeroPortfolio;