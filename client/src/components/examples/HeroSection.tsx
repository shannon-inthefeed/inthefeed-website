import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection 
      onCtaClick={() => console.log('Hero CTA clicked')}
      onVideoClick={() => console.log('Video button clicked')}
    />
  );
}
