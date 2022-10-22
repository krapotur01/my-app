import React from 'react';
import info from "./InfoUpload.module.css";

const InfoUpload = (props) => {
    return (
        <section className={info.info}>
            <p className={info.paragraph}>
                Важная информация для корректного заполнения заявления:
                <br/>Centre name: BKC-ih Moscow IELTS Test Centre
                <br/>Centre number: RU087
                <br/>Candidate number:  Цифры в верхнем правом углу сертификата/можно не заполнять, если сертификат еще не получен.
            </p>
        </section>
    );
}

export default InfoUpload;