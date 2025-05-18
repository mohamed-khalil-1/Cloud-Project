import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-environment-banner',
  template: `
    <div class="environment-banner" [style.background]="environment.environmentColor">
      <span style="font-weight:bold;">{{ environment.environmentName }} Mode</span>
      <span style="float:right;">v{{ environment.version }}</span>
    </div>
  `,
  styles: [`
    .environment-banner {
      width: 100vw;
      padding: 8px 0;
      color: white;
      text-align: center;
      font-size: 16px;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
    }
  `]
})
export class EnvironmentBannerComponent {
  environment = environment;
} 