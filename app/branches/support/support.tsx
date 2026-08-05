"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function FundraisingWidget() {
  const [frequency, setFrequency] = useState('one-time');
  const [customAmount, setCustomAmount] = useState('');

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '4px',
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
      padding: '40px 32px', /* Increased padding for an expansive, spacious feel */
      width: '100%',
      maxWidth: '460px', /* 🚀 Expanded card width to cover a prominent 1/3 layout slice */
      fontFamily: 'sans-serif',
      boxSizing: 'border-box'
    }}>
      {/* Title */}
      <h3 style={{
        fontSize: '18px', /* Scaled up text sizing to match the larger canvas */
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        margin: '0 0 20px 0',
        color: '#111111',
        textAlign: 'center'
      }}>
        Support Community
      </h3>

      {/* Step Tracker Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <span style={{ fontSize: '11px', fontWeight: '700', color: '#666' }}>STEP 1/3</span>
        <div style={{ width: '80%', height: '6px', backgroundColor: '#eaeaea', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ width: '33%', height: '100%', backgroundColor: '#b71c1c' }} />
        </div>
      </div>

      {/* Frequency Toggle Buttons Layout */}
      <div style={{ display: 'flex', border: '1px solid #dcdcdc', borderRadius: '2px', marginBottom: '20px', overflow: 'hidden' }}>
        <button 
          onClick={() => setFrequency('one-time')}
          style={{
            flex: 1, padding: '14px 0', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', border: 'none', cursor: 'pointer',
            backgroundColor: frequency === 'one-time' ? '#b71c1c' : '#ffffff',
            color: frequency === 'one-time' ? '#ffffff' : '#111111',
            transition: 'all 0.2s'
          }}
        >
          One-Time
        </button>
        <button 
          onClick={() => setFrequency('monthly')}
          style={{
            flex: 1, padding: '14px 0', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', border: 'none', cursor: 'pointer',
            backgroundColor: frequency === 'monthly' ? '#b71c1c' : '#ffffff',
            color: frequency === 'monthly' ? '#ffffff' : '#111111',
            transition: 'all 0.2s'
          }}
        >
          Monthly
        </button>
      </div>

      {/* Open Custom Amount Form Input Group Frame */}
      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #111111', borderRadius: '2px', padding: '0 16px', marginBottom: '20px' }}>
        <span style={{ fontSize: '18px', color: '#111111', marginRight: '10px', fontWeight: 'bold' }}>$</span>
        <input 
          type="number"
          placeholder="Enter contribution amount"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          style={{ width: '100%', border: 'none', padding: '14px 0', fontSize: '16px', outline: 'none', color: '#111111' }}
        />
      </div>

      {/* Dynamic Descriptive Frame Information Copy */}
      <p style={{ fontSize: '13px', color: '#555555', textAlign: 'center', lineHeight: '1.6', margin: '0 0 24px 0', minHeight: '40px' }}>
        {customAmount 
          ? `Your support of $${customAmount} directly drives sustainable healthcare infrastructure improvements and regional programs.`
          : "Please enter any amount above to support our community programs, localized health tracking frameworks, and data initiatives."}
      </p>

      {/* Action Buttons Stacking Layout Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Support Submit CTA Button */}
        <button style={{
          width: '100%', backgroundColor: '#008080', color: '#ffffff', border: 'none', borderRadius: '4px',
          padding: '16px 0', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
        }}>
          ▼ Support Initiative
        </button>
        <Link href="/branches/contactus" style={{ textDecoration: 'none', width: '100%' }}>
          <button style={{
            width: '100%', backgroundColor: '#ffffff', color: '#333333', border: '1px solid #dcdcdc', borderRadius: '4px',
            padding: '16px 0', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background-color 0.2s'
          }}>
            📞 Call Us
          </button>
        </Link>
      </div>

  
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <div style={{ fontSize: '10px', color: '#777777', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', fontWeight: '600' }}>
          Secure Processing Gateway
        </div>
        <div style={{ fontSize: '11px', color: '#555555', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
          <span>🔒</span> Verified secure infrastructure transaction
        </div>
      </div>
    </div>
  );
}
