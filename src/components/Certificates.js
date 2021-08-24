import React from "react"
import {CodeIcon } from "@heroicons/react/solid";
import {certificates} from "../data";
 
export default function Certificates(){
    return (
        <section id="certificates" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <CodeIcon className="mx-auto inline-block w-10 mb-4"/>
                 <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Certificates
                 </h1>
                 <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                         I am always eager to learn new things, challenge myself and build my skillsets
                 </p>
            </div>

            <div className= "flex flex-wrap -m-4">
                {certificates.map((certificate)=>(
                    <a
                     /*href={project.link}*/
                     key={certificate.image}
                     className="sm:w-1/2 w-100 p-4">
                     <div className="flex relative">

                         <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={certificate.image}/>

                         <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100" >
                             <h2 className="tracking-widest text-sm title-font font-medium text-pink-600 mb-1">
                                 {certificate.subtitle}
                             </h2>

                             <h1 className="title-font text-lg font-medium text-white mb-3"> 
                               {certificate.title}
                             </h1>

                             <p className ="leading-relaxed">{certificate.description}</p>

                         </div>
                     </div>
                    </a>

                ))}

            </div>
        </div>
    </section>
    )   
}