import React from 'react';
import styles from '../../styles/Process.module.css';

function Process() {
    const cardsData = [
        {
            title: '1. Design',
            content: 'We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we\'re all on the same page.',
        },
        {
            title: '2. Development',
            content: 'Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.',
        },
        {
            title: '3. Marketing',
            content: 'A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.',
        },
        {
            title: '4. Support',
            content: 'Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we\'ve created a system to ensure that we\'re always available.',
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>OUR PROCESS</h1>
            </div>
            <p className={styles.subtitle}>
                Akeshya will serve as your consultant and development partner to help you turn your idea into a reality.
            </p>
            <div className={styles.cardsContainer}>
                {cardsData.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardContent}>{card.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Process;
