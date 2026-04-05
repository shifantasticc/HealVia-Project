import React, { useState } from 'react';
import { emergencyPageStyles as styles } from './EmergencyPage.js';
import {
  Phone,
  Shield,
  Video,
  AlertCircle,
  MapPin,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';

const EmergencyPage = () => {
  const [activeTab, setActiveTab] = useState('map');

  const tabs = [
    {
      id: 'map',
      label: 'Nearby Hospitals',
      icon: <MapPin size={16} className="inline mb-1" />,
    },
    {
      id: 'helplines',
      label: 'Helplines',
      icon: <Phone size={16} className="inline mb-1" />,
    },
    {
      id: 'complaints',
      label: 'Complaints',
      icon: <Shield size={16} className="inline mb-1" />,
    },
    {
      id: 'actions',
      label: 'Quick Actions',
      icon: <AlertCircle size={16} className="inline mb-1" />,
    },
    {
      id: 'videos',
      label: 'Aid & Awareness',
      icon: <Video size={16} className="inline mb-1" />,
    },
  ];

  const helplines = [
    { title: 'Emergency', desc: 'All-in-one emergency number', num: '112' },
    { title: 'Police', desc: 'Immediate police assistance', num: '100' },
    { title: 'Fire', desc: 'Fire emergency services', num: '101' },
    { title: 'Ambulance', desc: 'Medical emergency', num: '108' },
    { title: 'Women Helpline', desc: 'Safety support for women', num: '1091' },
    { title: 'Women Distress', desc: 'Emergency women support', num: '181' },
    { title: 'Childline', desc: 'Help for children', num: '1098' },
    { title: 'Senior Citizen', desc: 'Elder support helpline', num: '14567' },
    { title: 'Mental Health', desc: 'Emotional support', num: '9152987821' },
  ];

  const complaints = [
    {
      title: 'Women Complaint',
      desc: 'National Commission for Women',
      link: 'https://www.ncw.gov.in/',
    },
    {
      title: 'Cyber Crime',
      desc: 'Report online fraud or cybercrime',
      link: 'https://cybercrime.gov.in/',
    },
    {
      title: 'Consumer Complaint',
      desc: 'Report product/service issues',
      link: 'https://consumerhelpline.gov.in/',
    },
  ];

  const videos = [
    {
      id: 'Plse2FOkV4Q?si=9RMzACRfEtyMRMYa',
      title: 'How to Perform CPR',
      desc: 'First Aid : A Step-by-Step Guide of CPR',
    },
    {
      id: 'G0zJGDokyWQ?si=EKb-UuiTnmVZcZzG',
      title: 'What is Mental Health',
      desc: 'Awareness Guide : Mental Health Awareness',
    },
    {
      id: 'p9KHec6xfuw?si=JW74vjN-RMaGYC8A',
      title: 'Bleeding Control',
      desc: 'First Aid : How To Treat Severe bleeding',
    },
    {
      id: 'XGnLkUty69g?si=NrbBBDQUGS_pk4vU',
      title: 'Burn Treatment',
      desc: 'First Aid : How to treat burns',
    },
    {
      id: 'HGBBu4zr8sM?si=LJxF66Irf7zUeyPQ',
      title: 'Choking Help',
      desc: 'First Aid : How to treat someone who is Choking',
    },
    {
      id: 'sxui3wU7WBM?si=8vc5MTd0UgA4UDgt',
      title: 'Fractures',
      desc: 'First Aid : How to Handle broken bones',
    },
    { id: 'gDwt7dD3awc?si=YtvQbuw-NNX9Ox7K', title: 'Heart Attack Symptoms', desc: 'How to treat a Heart Attack' },
    { id: 'PhH9a0kIwmk?si=VdLTdC-fIgOXAWdw', title: 'Stroke Symptoms & Signs', desc: 'What to do if someone has a Stroke' },
    {
      id: 'Ovsw7tdneqE?si=dYEdSauxTCMnVENt',
      title: 'Seizure Help',
      desc: 'First Aid : What to do if someone has a Seizure',
    },
    {
      id: 'b2ieb8BZJuY?si=c6UTddr2oGCUpBKW',
      title: 'Poisoning',
      desc: 'First Aid : Immediate steps',
    },
  ];

  const quickActions = [
    {
      title: 'Send Emergency SMS',
      desc: 'Quick SMS to alert authorities',
      action: () =>
        (window.location.href = 'sms:112?body=Emergency! Need help.'),
    },
    {
      title: 'WhatsApp Alert',
      desc: 'Send alert message via WhatsApp',
      action: () =>
        window.open('https://wa.me/?text=Emergency! Need help.', '_blank'),
    },
    {
      title: 'Share Location',
      desc: 'Share your current location with authorities',
      action: () =>
        navigator.geolocation.getCurrentPosition((pos) => {
          alert(
            `Share this location:\nhttps://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`,
          );
        }),
    },
  ];

  const openHospitalDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        window.open(
          `https://www.google.com/maps/dir/?api=1&destination=hospital&origin=${latitude},${longitude}`,
          '_blank',
        );
      });
    } else {
      alert('Geolocation not supported in this browser');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <ShieldCheck size={35} className="inline mr-1" />
        Emergency Dashboard
      </h1>

      <div className={styles.highlightBox}>
        <ShieldAlert size={19} className="inline mb-1" /> Call <b>112</b>{' '}
        immediately in life-threatening situations.
      </div>

      {/* MENU */}
      <div className={styles.menuContainer}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.menuItem} ${
              activeTab === tab.id ? styles.menuActive : styles.menuInactive
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon} {tab.label}
          </div>
        ))}
      </div>

      {/* TAB CONTENT */}
      {activeTab === 'map' && (
        <div className={styles.section}>
          <div className={styles.mapContainer}>
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=hospitals+near+me&output=embed"
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={openHospitalDirections}
              className={styles.mapButton}
            >
              <MapPin size={20} className="inline mb-1" /> Get Directions
            </button>
          </div>
        </div>
      )}

      {activeTab === 'helplines' && (
        <div className={styles.section}>
          <div className={styles.grid}>
            {helplines.map((item, i) => (
              <div key={i} className={styles.card}>
                <div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
                <a href={`tel:${item.num}`} className={styles.cardButton}>
                  <Phone size={16} className="inline mr-1" /> Call {item.num}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'complaints' && (
        <div className={styles.section}>
          <div className={styles.grid}>
            {complaints.map((item, i) => (
              <div key={i} className={styles.card}>
                <div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardButton}
                >
                  Visit
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'actions' && (
        <div className={styles.section}>
          <div className={styles.grid}>
            {quickActions.map((item, i) => (
              <div key={i} className={styles.card} onClick={item.action}>
                <div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'videos' && (
        <div className={styles.section}>
          <div className={styles.videoGrid}>
            {videos.map((vid, i) => (
              <div key={i} className={styles.videoCard}>
                <div className={styles.videoFrame}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${vid.id}`}
                    title={vid.title}
                    allowFullScreen
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{vid.title}</h3>
                  <p className="text-sm text-gray-600">{vid.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyPage;
