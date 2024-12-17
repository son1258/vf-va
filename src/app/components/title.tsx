import React from 'react';
import { TitleProps } from '../types/commonTypes';
import Image from 'next/image';
import ArrowBackIcon from '../../../public/arrow-back.svg';

const Title: React.FC<TitleProps> = ({ title, containerStyles, titleStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            <Image src={ArrowBackIcon} alt='Arrow back icon' />
            <p className={`${titleStyles}`}>{title}</p>
        </div>
    )
}

export default Title;
