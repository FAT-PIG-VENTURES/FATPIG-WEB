'use client';

import Button from '../ui/Button';

export default function JobListing({ title, location, type, id }) {
  return (
    <div style={{
      backgroundColor: 'var(--bg-elevated)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'var(--border-hover)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--border-default)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{title}</h3>
          <div style={{ display: 'flex', gap: '16px', color: 'var(--text-secondary)', fontSize: '14px' }}>
            <span>📍 {location}</span>
            <span>⏱ {type}</span>
          </div>
        </div>
      </div>
      
      <div style={{ borderTop: '1px solid rgba(79,101,241,0.08)', paddingTop: '20px' }}>
        {/* Placeholder for Apply logic until User provides ATS link or fallback */}
        <Button 
          variant="secondary" 
          onClick={(e) => {
            e.preventDefault();
            alert('Application system pending integration. Please email careers@fatpigventures.com');
          }}
        >
          View & Apply
        </Button>
      </div>
    </div>
  );
}
