import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar';
import Header from './components/header';
import Services from './components/services';
import WorkFlow from './components/workflow';
import Aboutus from './components/aboutus';
import ContactUs from './components/contoct';
import Footer from './components/footer';


export default function Home() {
  return (
    <>
      <div style={{
          display: 'grid',
          justifySelf:'center',
          maxWidth:'1400px'
      }}>
        <Navbar/>
        <Header/>
        <Services/>
        <WorkFlow/>
        <Aboutus/>
        <ContactUs/>
      </div>

        <Footer/>
    </>
  )
}
