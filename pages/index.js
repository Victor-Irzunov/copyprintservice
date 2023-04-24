import Heading from '@component/components/Heading'
import { HeaderInfo } from '@component/components/header/headerInfo/HeaderInfo'
import Head from 'next/head'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { motion } from 'framer-motion'
// import Image from 'next/image'
import ServiceSection from '@component/components/sections/ServiceSection'
import { FloatButton } from 'antd'
import Image from 'next/image'


{/* <EnvironmentOutlined /> */ }
// export const getStaticProps = async () => {

// };

const Home = () => {
  const [isActive, setIsActive] = useState(true)

  return (
    <>
      <Head>
        <title>
          My app page Home
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>



      <main className="" id='main'>
        <FloatButton.BackTop />
        <div className='w-full h-screen fon bg-cover bg-center'>
        </div>
        <div className=''>
          {
            isActive ?
              <motion.div
                className=''
                initial="hidden"
                whileInView="visible"
              >
                <HeaderInfo />
              </motion.div>
              :
              null
          }



          <div
            className={`text-center z-10 relative mt-3 ${!isActive ? 'animate-bounce' : ''}`}
            onClick={() => setIsActive(i => !i)}
          >
            {
              isActive ?
                <UpOutlined className='text-white' />
                :
                <div className='flex flex-col text-white'>
                  <p className='font-light'>инфо</p>
                  <DownOutlined />
                </div>

            }
          </div>

          <div className='container mx-auto z-20 relative'>
            <Heading text='Печатный центр в Минске' size='text-4xl' />
            <div className='h-32'></div>
          </div>



          <ServiceSection />
        </div>
      </main >
    </>
  )
}
export default Home




