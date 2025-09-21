import { h } from '../../jsx/runtime';

export interface Trail {
  name: string;
  location: string;
  distance: string;
  elevation: string;
  time: string;
  description: string;
  image: string;
}

export function TrailCard(trail: Trail): string {
  return (
    <div class="trail-card">
      <img src={trail.image} alt={trail.name} class="trail-image" />
      <div class="trail-content">
        <h3>{trail.name}</h3>
        <div class="trail-location">{trail.location}</div>
        <div class="trail-stats">
          <div class="trail-stat">
            Distance<br />
            <span>{trail.distance}</span>
          </div>
          <div class="trail-stat">
            Elevation<br />
            <span>{trail.elevation}</span>
          </div>
          <div class="trail-stat">
            Time<br />
            <span>{trail.time}</span>
          </div>
        </div>
        <div class="trail-description">{trail.description}</div>
        <div class="gpx-mini">
          <div class="elevation-mini"></div>
        </div>
      </div>
    </div>
  );
}
