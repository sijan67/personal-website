import React from "react"


export default function Contact(){

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data){
        return Object.keys(data).map((key)=>encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("/",{
            method:"POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({"form-name": "contact", name, email, message}),
        }
        ).then(()=> alert("Message sent!"))
        .catch((error)=>alert(error));
    }

    return (
       <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <img 
                  className="object-cover object-center rounded"
                  alt= "hero"
                  src="./me.svg"
                  />

            <form 
                 netlify
                 name="contact"
                 onSubmit={handleSubmit}
                  className="lg-w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                 >
                
                 <h2 className="text-pink-600 sm:text-4xl text-3xl mb-1 font-medium title-font">
                     Contact Me
                 </h2>
                 <p className="leading-relaxed mb-5">
                     I am currently looking for an internship opportunities. Feel free to send me a message at <span><i><strong>sijuichi@gmail.com</strong></i></span> or through form below if you would like to hire me or know more about me.
                 </p>
                 <div className="relative mb-4">
                     <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                         Name
                     </label>
                     <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange={(e) => setName(e.target.value)}
                      />
                 </div>

                 <div className="relative mb-4">
                     <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                         Email
                     </label>
                     <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange={(e) => setEmail(e.target.value)}
                     />
                 </div>

                 <div className="relative mb-4">
                     <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-400"
                      >
                          Message
                     </label>
                     <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setMessage(e.target.value)}
                     />
                 </div>

                 <button
                  type="submit"
                  className="text-white bg-pink-800 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded"
                 >
                     Submit
                </button>

                </form>

            </div>

           <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
               <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start relative">
                   <iframe
                     width="100%"
                     height="100%"
                     title="map"
                     className="absolute inset-0"
                     frameBorder={0}
                     marginHeight={0}
                     marginWidth={0}
                     style={{filter: "opacity(0.7)"}}
                     src="https://www.google.com/maps/embed/v1/place?q=Marine+Drive+,+UBC&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
                     <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                         <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS-1
                            </h2>
                            <p className="mt-1">
                                Lower Mall, Vancouver, Canada
                            </p>
                         </div>
                     </div>    

               </div>

               <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start relative">
                   <iframe
                     width="100%"
                     height="100%"
                     title="map"
                     className="absolute inset-0"
                     frameBorder={0}
                     marginHeight={0}
                     marginWidth={0}
                     style={{filter: "opacity(0.7)"}}
                     src="https://www.google.com/maps/embed/v1/place?q=Ojima+,+Koto-ku,+Japan&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
                     <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                         <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS-2
                            </h2>
                            <p className="mt-1">
                                Ojima , Koto City, Japan (東京都江東区大島)
                            </p>
                         </div>
                     </div>    
                </div>

           </div>

          
       </section>
    )
    
    
}