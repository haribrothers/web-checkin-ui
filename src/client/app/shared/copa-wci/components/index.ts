import { NavbarComponent } from './navbar.component';
import { ToolbarComponent } from './toolbar.component';
import {BubbleProgressComponent} from "./bubble-progress.component";
import {FooterComponent} from "./footer.component";
import {Accordion, AccordionGroup} from "./accordion.component";
import {SelectionCardComponent} from "./selection-card.component";
import {DataFieldComponent, DataContent,DataLabel, DataSubContent} from "./data-field.component";
import {AlertMessageComponent} from "./alert-message.component"

export const COPA_WCI_COMPONENTS: any[] = [
  NavbarComponent,
  ToolbarComponent,
  BubbleProgressComponent,
  FooterComponent,
  Accordion,
  AccordionGroup,
  SelectionCardComponent,
  DataFieldComponent, 
  DataContent,
  DataLabel, 
  DataSubContent,
  AlertMessageComponent
];

export * from './navbar.component';
export * from './toolbar.component';
export * from './bubble-progress.component';
export * from './footer.component';
export * from './accordion.component';
export * from "./selection-card.component";
export * from "./data-field.component";
export * from "./alert-message.component"