import React from 'react';
import landingStyles from '@/app/styles/LandingPage.module.css';
import ClientLogo from './ClientLogo';
import { clients } from './clientsData';

const Clients = () => {
    return (
        <section className={`${landingStyles.site_container_padding} ${landingStyles.clientele_c} ${landingStyles.top_bottom_spacing}`}>
            <div className={landingStyles.clientele_heading_container}>
                <h2 className={landingStyles.clientele_heading}>
                    Clientele
                </h2>
            </div>

            <div className={landingStyles.clientele_logo_container}>
                {clients.map((client) => (
                    <div key={client.id} className={`${landingStyles.client_logo} textAnim`}>
                        <ClientLogo
                            src={client.logo}
                            alt={`${client.name} Logo`}
                            className={`${landingStyles.lazy} animTxt`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;