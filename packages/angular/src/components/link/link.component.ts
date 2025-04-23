import { Component, input } from '@angular/core';

@Component({
    selector: 'rte-link',
    standalone: true,
    imports: [],
    templateUrl: './link.component.html',
    styleUrl: './link.component.scss'
})

export class LinkComponent {

    label = input('');
    href = input<string>('#');
    subtle = input<boolean>(false);
    externalLink = input<boolean>(false);

}