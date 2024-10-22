import 'react'
import { CONTACT } from '../constants'
import {  motion } from "framer-motion"


const Contect = () => {
  return (
    <>

<div className='border-b border-neutral-900 pb-24 ' >
<motion.h1

whileInView={{Opacity : 1 , y :0 }}
initial={{y : -100,Opacity:0 }}
transition={{duration:0.5 }}
className='my-20 text-center text-4xl'> 
Get in Touch 
</motion.h1>


<div className='text-center tracking-tighter'>
    <motion.p
      whileInView={{Opacity : 1 ,   x :0 }}
      initial={{x : -100,Opacity:0 }}
      transition={{duration:1 }}
    className='my-4'> {CONTACT.address}</motion.p>
    <motion.p 
       whileInView={{Opacity : 1 ,   x :0 }}
       initial={{ x : 100,Opacity:0 }}
       transition={{duration:1 }}
    className='my-4'  > {CONTACT.phoneNo}</motion.p>

<motion.p 
whileInView={{Opacity : 1 , y :0 }}
initial={{y : 100,Opacity:0 }}
transition={{duration:0.5 }}

   >

        <a href="#" className='border-b'>{CONTACT.email} </a>
 
    </motion.p>
  
  

</div>






    </div>  
    </>
  )
}

export default Contect ;
