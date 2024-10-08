import React from 'react'
import { IconType } from 'react-icons'
import Icon from './Icon';

interface FeatureProps{
    icon:IconType;
    name:string;


}
const Feature = ({icon:featureIcon,name}:FeatureProps) => {
  return (
    <div className='w-32 p-3 flex-center flex-col'>
        <Icon icon={featureIcon}/>
        <p className='mt-4 uppearcase text-xs text-center text-slate-300'>{name}</p>
    </div>
  )
}
export default Feature