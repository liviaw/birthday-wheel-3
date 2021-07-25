import React, { ReactHTML, useEffect, useState } from 'react'
import styles from "./SendGift.module.css";
// import sendEmail from '../../Images/sendEmail.mp4';
import mail from '../../Images/mail.gif';

type Props = {
}

export const SendGift: React.FC<Props> = ({

}) => {
    return(
        <div className={styles.root}>
            <h1>yay! your prize will be sent to you shortly</h1>
            <img src={mail}/>
        </div>
    )
}
