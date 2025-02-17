import React, { useRef, useState } from 'react'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import Earth from './canvas/Earth'
import EarthCanvas from './canvas/Earth'
import emailjs from '@emailjs/browser'



const Contact = () => {

  const [form, setForm] = useState({name: "", email: "", message: ""})
  const [loading, setLoading] = useState(false)
  const formRef = useRef()

  const handleChange = (e)=>{
    const  {name, value} = e.target
    setForm({...form, [name]: value})
    
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true)
    
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
     {
      from_name : form.name,
      to_name : "Oreva",
      from_email : form.email,
      to_email : "awusijohn@gmail.com",
      message : form.message,

     },
     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setLoading(false)

      setTimeout(() => {
        setForm({ name: "", email: "", message: "" })

        alert('Message received! I will get back to you!!!')
      
      }, [2000]);
      // Todo
    }).catch((error)=>{
      setLoading(false)
      
      console.error(error);
      // Todo alert Error massage
      
    })
  }


  return (
    <section className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl">

        <p className={styles.heroSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text' name="name" onChange={handleChange} value={form.name} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type='text' name="email" onChange={handleChange} value={form.email} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows="7"  name="message" onChange={handleChange} value={form.message} placeholder="What do u want to say?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>

          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading? 'sending...' : 'send'}
          </button>
          
        </form>

      </motion.div>

      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >

        <EarthCanvas />

      </motion.div>

    </section>
  )
}



export default SectionWrapper(Contact, "contact")