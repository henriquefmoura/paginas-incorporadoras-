import { HeroSection } from './components/HeroSection';
import { ChallengeSection } from './components/ChallengeSection';
import { PillarsSection } from './components/PillarsSection';
import { ModelsSection } from './components/ModelsSection';
import { ApplicationSection } from './components/ApplicationSection';
import { CTASection } from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ChallengeSection />
      <PillarsSection />
      <ModelsSection />
      <ApplicationSection />
      <CTASection />
    </div>
  );
}
