import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  save(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  getKey(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  check(key: string): boolean {
    if (sessionStorage.getItem(key)) {
      return true;
    }

    return false;
  }

  clear(key: string) {
    sessionStorage.removeItem(key);
  }
}
