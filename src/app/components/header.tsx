'use client';
import styles from '../styles/header.module.css';
import styled from "styled-components";
import Image from 'next/image';

const Img = styled.img`
  width: 100%;
  aspect-ratio: 1;
`;

const Header = ()=>{
    return (
        <div className={styles.container}>
          <div className={styles.leftColumn}>
            <div className={styles.mainText}>
            Covert your Idea's Into Reality
            </div>
            <div className='captionText'>hear is some text sample text, hear is some text sample text hear is some text sample text</div>
            <div style={{
              marginRight: 30,
              justifyContent:'right',
              alignContent:'flex-end',
              display:'flex'
              
            }}>
            <div className={styles.getSterted}>Get Started</div>
            </div>
            
          </div>
          <div className={styles.rightColumn}>
            <Img
            src='/header_illistration.png'
            alt='Header Image'

            />
          </div>
        </div>
      );
}
export default Header;