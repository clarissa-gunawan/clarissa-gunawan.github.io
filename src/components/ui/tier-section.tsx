import { h } from '../../jsx/runtime';
import { TrailCard, Trail } from './trail-card.tsx';

export interface TierData {
  name: string;
  description: string;
  trails: Trail[];
}

export interface TierSectionProps {
  tierKey: string;
  tierData: TierData;
}

export function TierSection({ tierKey, tierData }: TierSectionProps): string {
  const tierLetter = tierKey.toUpperCase();

  return (
    <div class={`tier-section tier-${tierKey}`}>
      <div class="tier-header">
        <div class="tier-info">
          <div class="tier-badge">{tierLetter}</div>
          <div class="tier-details">
            <h2>{tierData.name}</h2>
            <p class="tier-description">{tierData.description}</p>
          </div>
        </div>
        <div class="tier-count">{tierData.trails.length} Trails</div>
      </div>
      <div class="trail-grid">
        {tierData.trails.map((trail) => (
          <TrailCard {...trail} />
        ))}
      </div>
    </div>
  );
}
