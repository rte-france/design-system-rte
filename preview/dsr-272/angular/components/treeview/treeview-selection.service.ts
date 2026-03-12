import { Injectable, signal } from "@angular/core";

@Injectable()
export class TreeviewSelectionService {
  readonly selectedId = signal<string | undefined>(undefined);

  select(id: string | undefined): void {
    this.selectedId.set(id);
  }
}
