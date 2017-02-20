// libs
import { Component,ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

// app
import { Config, ILang } from '../../core/index';
import { LogService } from '../../core/services/log.service';
import { IAppState } from '../../ngrx/index';
import { ElectronEventService } from '../../electron/index';
import * as multilingual from '../index';

@Component({
  moduleId: module.id,
  selector: 'lang-switcher',
  templateUrl: 'lang-switcher.component.html',
  styleUrls: ['lang-switcher.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LangSwitcherComponent {

  public lang: string;
  public supportedLanguages: Array<ILang> = multilingual.MultilingualService.SUPPORTED_LANGUAGES;

  constructor(private log: LogService, private store: Store<IAppState>) {
    store.take(1).subscribe((s: any) => {
      // s && s.18n - ensures testing works in all cases (since some tests dont use i18n state)
      this.lang = s && s.i18n ? s.i18n.lang : '';
    });

    if (Config.IS_DESKTOP()) {
      // allow electron menu to talk to component
      ElectronEventService.on('changeLang').subscribe((e: any) => {
        // alert(e);
        this.changeLang({ target: { value: e.detail.value } });
      });
    }
  }

  changeLang(e: any) {
    // alert(e);
    let lang = this.supportedLanguages[e].code; // fallback to default 'en'

    if (Config.IS_MOBILE_NATIVE()) {
      if (e) {
        lang = this.supportedLanguages[e].code;
      }
    } 
    this.log.debug(`Language change: ${lang}`);
    this.store.dispatch(new multilingual.ChangeAction(lang));
  }
}
