import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './RefactoredKPI.module.css';


const colorsVariants = {
    success: styles.Success,
    error: styles.Erro,
    alert: styles.Alert
}

const fontType ={
    number: styles.Number,
    kilogram: styles.Kilogram,
    money: styles.Money,
    text: styles.Text
}   

export default function RefactoredKPI({color, font, value, message}) {
    const variantColor = colorsVariants[color] || styles.Success;
    const fontTypeValue = fontType[font] || styles.Number;
    return(
        <div className={variantColor}>

        </div>
    );
}

//TODO pensar em como fazer o texto aparecer no KPI conforme figma
