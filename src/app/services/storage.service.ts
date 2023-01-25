import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    constructor() {}

    /**
     * Получение данных из LocalStorage или SessionStorage
     * @param {string} key - Ключ параметра
     * @param {string} type - Тип хранилища, по умолчанию LocalStorage
     * @returns {any}
     */
    public getDataFromStorage(key: string | null = null, type: string = 'local'): any {
        if (key === null) {
            return null;
        }
        let data: any = JSON.stringify(null);
        switch (type) {
            case 'local':
                data = localStorage.getItem(key);
                break;
            case 'session':
                data = sessionStorage.getItem(key);
                break;
            default:
                break;
        }

        return data !== 'undefined' ? JSON.parse(data) : null;
    }

    /**
     * Сохранение данных в LocalStorage или SessionStorage
     * @param {string} key - Ключ параметра
     * @param {string} data - Сохраняемый объект
     * @param {string} type - Тип хранилища, по умолчанию LocalStorage
     * @returns {any}
     */
    public putDataToStorage(key: string | null = null, data: any, type: string = 'local'): any {
        if (key === null) {
            return {};
        }
        switch (type) {
            case 'local':
                data = localStorage.setItem(key, JSON.stringify(data));
                break;
            case 'session':
                data = sessionStorage.setItem(key, JSON.stringify(data));
                break;
            default:
                break;
        }
    }

    /**
     * Удаление данных в LocalStorage или SessionStorage
     * @param {string} key - Ключ параметра
     * @param {string} type - Тип хранилища, по умолчанию LocalStorage
     * @returns {any}
     */
    public removeItemFromStorage(key: string | null = null, type: string = 'local'): any {
        if (key === null) {
            return {};
        }
        switch (type) {
            case 'local':
                localStorage.removeItem(key);
                break;
            case 'session':
                sessionStorage.removeItem(key);
                break;
            default:
                break;
        }
    }
}
