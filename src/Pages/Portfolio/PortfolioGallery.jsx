import { useState } from "react";
import { motion } from "motion/react";
import {
  ExternalLink,
  ArrowRight
} from "lucide-react";

const categories = [
  "All",
  "Website",
  "Landing Page",
  "SEO",
  "Marketing",
];

const gallery = [
  {
    title: "Shavide",
    category: "Website",
    image: "/portfolio/shavide.jpg",
    size: "large",
    color: "hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.35)]",
  },

  {
    title: "Braventa Infra",
    category: "Landing Page",
    image: "/portfolio/braventa.png",
    size: "small",
    color: "hover:border-pink-400 hover:shadow-[0_0_35px_rgba(255,105,180,.35)]",
  },

  {
    title: "Instant Doc",
    category: "Website",
    image: "/portfolio/instantdoc.png",
    size: "medium",
    color: "hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,.35)]",
  },

  {
    title: "Ankit Electrical",
    category: "Website",
    image: "/portfolio/ankit.png",
    size: "medium",
    color: "hover:border-green-400 hover:shadow-[0_0_35px_rgba(74,222,128,.35)]",
  },

  {
    title: "Yuvi Driving",
    category: "Landing Page",
    image: "/portfolio/yuvi.png",
    size: "large",
    color: "hover:border-orange-400 hover:shadow-[0_0_35px_rgba(251,146,60,.35)]",
  },

  {
    title: "MS99 Realty",
    category: "Website",
    image: "/portfolio/ms99.png",
    size: "small",
    color: "hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(250,204,21,.35)]",
  },

  {
    title: "Gaur Bento",
    category: "Landing Page",
    image: "/portfolio/gaurbento.png",
    size: "medium",
    color: "hover:border-red-400 hover:shadow-[0_0_35px_rgba(248,113,113,.35)]",
  },

  {
    title: "Godrej Arden",
    category: "Website",
    image: "/portfolio/gordrejarden.png",
    size: "large",
    color: "hover:border-indigo-400 hover:shadow-[0_0_35px_rgba(129,140,248,.35)]",
  },
];

const PortfolioGallery = () => {

const [active,setActive]=useState("All");

const filtered =
active==="All"
? gallery
: gallery.filter(item=>item.category===active);

const height=(size)=>{

switch(size){

case "large":
return "h-[480px]";

case "medium":
return "h-[380px]";

default:
return "h-[300px]";
}

}

return(

<section className="bg-[#070B17] py-28 px-6">

<div className="max-w-7xl mx-auto">

{/* Heading */}

<div className="text-center">

<p className="uppercase tracking-[5px] text-purple-400">

Portfolio Gallery

</p>

<h2 className="text-5xl font-bold text-white mt-4">

Discover.

<span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">

 Explore.

</span>

Get Inspired.

</h2>

<p className="text-gray-400 max-w-2xl mx-auto mt-6">

Browse through some of our latest
website, SEO and marketing work.

</p>

</div>

{/* Filter */}

<div className="flex justify-center gap-4 flex-wrap mt-14">

{categories.map(cat=>(

<button

key={cat}

onClick={()=>setActive(cat)}

className={`

px-6

py-3 text-white

rounded-full

transition

border

${
active===cat

?

"bg-gradient-to-r from-purple-600 to-blue-600 border-transparent"

:

"bg-white/5 border-white/10 hover:border-purple-500"

}

`}

>

{cat}

</button>

))}

</div>

{/* Gallery */}

<div className="columns-1 md:columns-2 lg:columns-3 gap-8 mt-16">

{filtered.map((item,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

transition={{delay:index*.08}}

className={`

mb-8

break-inside-avoid

rounded-3xl

overflow-hidden

group

border

border-white/10

bg-[#111827]

transition

duration-500

${item.color}

`}

>

<div className={`relative overflow-hidden ${height(item.size)}`}>

<img

src={item.image}

className="

w-full

h-full

object-cover

transition

duration-700

group-hover:scale-110

"

/>

<div className="absolute inset-0 bg-gradient-to-t from-[#070B17] via-transparent to-transparent"/>

{/* Shine */}

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">

<div className="absolute -left-32 top-0 h-full w-20 bg-white/20 rotate-12 blur-xl group-hover:left-[130%] transition-all duration-1000"/>

</div>

{/* Badge */}

<div className="absolute top-5 left-5">

<div className="bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full text-xs">

{item.category}

</div>

</div>

{/* Bottom */}

<div className="absolute bottom-6 left-6 right-6">

<h3 className="text-3xl font-bold text-white">

{item.title}

</h3>

<div className="flex justify-between items-center mt-5">

<button className="text-purple-400 flex items-center gap-2">

Visit

<ExternalLink size={18}/>

</button>

<div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">

<ArrowRight/>

</div>

</div>

</div>

</div>

</motion.div>

))}

</div>

{/* Button */}

<div className="text-center mt-20">

<button className="

px-10

py-4

rounded-full

bg-gradient-to-r

from-purple-600

to-cyan-500

hover:scale-105

transition

">

View More Projects

</button>

</div>

</div>

</section>

)

}

export default PortfolioGallery;