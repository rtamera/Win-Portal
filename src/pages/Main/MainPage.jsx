import React from 'react';
import { applications } from '../../config';

// Import app icons
import winbiLogo from '../../assets/WINBinobg.png';
import aswinsightLogo from '../../assets/ASWINSIGHTnobg.png';
import winsustainableLogo from '../../assets/WINsustainableChoicesnobg.png';
import wincrmLogo from '../../assets/WINCRMnobg.png';
import winservicelevelLogo from '../../assets/WinLevelServicenobg.png';
import winscoreLogo from '../../assets/WinScorenobg.png';
import winbrandLogo from '../../assets/WinBrandnobg.png';
import linkbiLogo from '../../assets/Linkbinobg.png';

// Map icon keys to imported images
const iconMap = {
  winbi: winbiLogo,
  aswinsight: aswinsightLogo,
  winsustainable: winsustainableLogo,
  wincrm: wincrmLogo,
  winservice: winservicelevelLogo,
  winscore: winscoreLogo,
  winbrand: winbrandLogo,
  linkbi: linkbiLogo,
};

export default function MainPage() {
  // Filter only enabled apps
  const enabledApps = applications.filter(app => app.enabled);

  return (
    <div className="app-grid">
      {enabledApps.map((app) => (
        <a
          key={app.id}
          href={app.url}
          className="app-card"
        >
          <div className="app-card__logo">
            <img
              src={iconMap[app.iconKey]}
              alt={app.name}
              loading="lazy"
            />
          </div>
          <span className="app-card__name">{app.name}</span>
          <p className="app-card__description">{app.description}</p>
        </a>
      ))}
    </div>
  );
}
