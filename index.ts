export * from './src/notification-bar.module';
export * from './src/notification-bar.service';
export * from './src/message-config';

export enum NotificationType { Info, Success, Error, Warning }

export interface Notification {
    message: string;
    error: string;
    type?: NotificationType;
    typeValue?: string;
    autoHide?: boolean;
    hideDelay?: number;
    isHtml?: boolean;
    allowClose?: boolean;
    allowCopy?: boolean;
    hideOnHover?: boolean;
}
