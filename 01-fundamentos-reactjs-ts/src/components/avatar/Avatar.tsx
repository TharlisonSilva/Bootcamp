import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean; 
}

export function Avatar({hasBorder = true, ...props }: AvatarProps){
    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props} // esse ...pros é o expred operator, é uma foram de passar os parametros automaticos
            />         // Dessa forma não preciso encher o meu metodo de varias vareaveis ma desestruturação
    );
}