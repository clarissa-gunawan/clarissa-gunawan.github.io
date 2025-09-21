import { h } from '../../jsx/runtime';

export interface StatsData {
  totalMiles: number;
  feetClimbed: number;
  statesExplored: number;
  hoursHiking: number;
}

export function StatsSummary(stats: StatsData): string {
  return (
    <div class="stats-summary">
      <div class="summary-stat">
        <div class="summary-number">{stats.totalMiles}</div>
        <div class="summary-label">Total Miles</div>
      </div>
      <div class="summary-stat">
        <div class="summary-number">{stats.feetClimbed.toLocaleString()}</div>
        <div class="summary-label">Feet Climbed</div>
      </div>
      <div class="summary-stat">
        <div class="summary-number">{stats.statesExplored}</div>
        <div class="summary-label">States Explored</div>
      </div>
      <div class="summary-stat">
        <div class="summary-number">{stats.hoursHiking}</div>
        <div class="summary-label">Hours Hiking</div>
      </div>
    </div>
  );
}
