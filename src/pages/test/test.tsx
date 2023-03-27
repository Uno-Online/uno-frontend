import { SpinnerCard } from '@/components';

export function TestPage() {
  return (
    <div style={{ background: '#212121', height: '100vh' }}>
      <SpinnerCard rotate flow='clockwise'>
        <img
          src='https://imgs.search.brave.com/X75HPK0RqMMZPMjn15cwnjbz-OzXulHIYKVxf6ozIeQ/rs:fit:161:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/TzRaMHFlNjJFTTZT/dS1HR2puOVl3QUFB/QSZwaWQ9QXBp'
          alt=''
        />
      </SpinnerCard>
    </div>
  );
}
