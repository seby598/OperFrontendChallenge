import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators  } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class SettingsComponent {
  itemCountControl: FormControl;
  tooltipVisible = false;

  constructor(private configService: ConfigService) {
    this.itemCountControl = new FormControl(this.configService.defaultItemCount, {
      validators: [Validators.required, Validators.min(1), Validators.max(20)],
    });
    

    this.itemCountControl.valueChanges.subscribe((value) => {
      if (value && Number.isInteger(value) && value > 0  && value <= 20) {
        this.configService.defaultItemCount = value;
      }
    });
  }

  toggleTooltip() {
    this.tooltipVisible = !this.tooltipVisible;
  }
}
