// src/components/HotelMap.jsx
import React from 'react';

const HotelMap = () => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d358.8614218687695!2d9.699470892897162!3d4.04167249456082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061130001e8b345%3A0xa2b91be88395aca4!2sGrand%20Hotel%20City!5e1!3m2!1sfr!2scm!4v1778082580606!5m2!1sfr!2scm" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        width="100%" 
        height="100%" 
        style={{ border: 0, minHeight: '450px' }}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation exacte du Grand Hôtel Luxe - Douala"
        className="rounded-xl"
      />
    </div>
  );
};

export default HotelMap;