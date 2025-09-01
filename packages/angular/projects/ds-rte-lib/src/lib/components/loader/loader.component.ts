import { LoaderProps } from './../../../../../../../core/components/loader/loader.interface.d';
import { loaderSize } from './../../../../../../../core/components/loader/loader.constants'
import {CommonModule} from "@angular/common"
import { ChangeDetectionStrategy, Component, input } from "@angular/core"
import { computed } from '@angular/core';

@Component({
    selector:"rte-loader",
    imports: [CommonModule],
    standalone: true,
    templateUrl: "./loader.component.html",
    styleUrl: "./loader.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent{
    readonly appearance = input<LoaderProps["appearance"]>("brand")
    readonly size = input<LoaderProps["size"]>("medium")
    readonly showLabel = input(true)
    readonly label = input("")
    readonly labelPosition = input<LoaderProps["labelPosition"]>("right")

    sizeOfLoader = computed(() => loaderSize[this.size() || "medium"]);

}