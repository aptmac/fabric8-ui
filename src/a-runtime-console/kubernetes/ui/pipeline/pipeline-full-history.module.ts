import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MomentModule } from 'angular2-moment';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-modal';
import { Fabric8CommonModule } from '../../../common/common.module';
import { KubernetesComponentsModule } from '../../components/components.module';
import { BuildConfigDialogsModule } from '../buildconfig/delete-dialog/buildconfig.dialogs.module';
import { PipelinesFullHistoryPage } from './full-history-page/full-history-page.pipeline.component';
import { PipelineModule } from './pipeline.module';

const routes: Routes = [
  { path: '', component: PipelinesFullHistoryPage }
];

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    CommonModule,
    FormsModule,
    ModalModule,
    MomentModule,
    RouterModule.forChild(routes),
    Fabric8CommonModule,
    KubernetesComponentsModule,
    BuildConfigDialogsModule,
    PipelineModule
  ],
  declarations: [
  ],
  entryComponents: [
  ],
  exports: [
  ],
  providers: [
    BsDropdownConfig
  ]
})
export class PipelineFullHistoryModule {
}
