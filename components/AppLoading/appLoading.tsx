'use client'
import Image from 'next/image';
import Icons from '../../app/icons';

interface IAppLoading {
  size: number,
  className?: string
}

export default function AppLoading(props: IAppLoading) {

  return ( 
    <div className={props.className}>
      <Image 
        src={Icons.loading}
        alt="Loading Icon" 
        width={props.size}
        height={props.size}                    
        priority
      />
    </div>   
     
  ) 
}