import {
    Component, OnInit, trigger, state, style, transition, animate, Optional, Inject,
    OpaqueToken, OnDestroy
}                                                           from '@angular/core';

import { NotificationBarService }                           from './notification-bar.service';
import { Notification, NotificationType }                   from '../index';
import { MessagesConfig }                                   from './message-config';
import { Subscription }                                     from 'rxjs';

export const MESSAGES_CONFIG = new OpaqueToken('notification-bar.messages.config');

@Component({
    selector: 'notification-bar',
    styles: [`
        :host {
          position: relative;
          display: block;
        }
        
        .notifications-container {
          position: fixed;
          top: 0px;
          right: 0;
          left: 0;
          line-height: 25px;
          width: 100%;
          z-index: 6;
          overflow: hidden;
        }
        
        .notification {
          position: relative;
          text-align: center;
          font-size: 12px;
          color: #fff;
        }
        
        .message {
          padding: 0 12px;
        }
        
        .error {
          background-color: #F64747;
          border-bottom: 1px solid #f31515;
        }
        
        .success {
          background-color: #03C9A9;
          border-bottom: 1px solid #02aa8f;
        }
        
        .warning {
          background-color: #F7CA18;
          border-bottom: 1px solid #e7ba08;
        }
        
        .info {
          background-color: #0c6997;
          border-bottom: 1px solid #0c6997;
        }
        
        .close-click {
            font-size: 22px;
            cursor: pointer;
            padding: 10px;
            position: relative;
            top: 2px;
            margin: 0 auto;
        }

        .copy-click {
            font-size: 12px;
            cursor: pointer;
            padding: 10px;
            position: relative;
            top: 2px;
            margin: 0 auto;
          }
    `],
    template: `
        <div class="notifications-container">
            <div *ngFor="let notification of notifications; let i = index;"
                 class="notification {{notification.typeValue}}"
                 (mouseover)="hideOnHover(notification)"
                 [@flyDown]>
                <span *ngIf="notification.isHtml" class="message" [innerHTML]="notification.message"></span>
                <span *ngIf="!notification.isHtml" class="message">{{notification.message}}</span>
                <span class="copy-click" *ngIf="notification.allowClose" (click)="hideNotification(notification)"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAACAWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmRVg9Imh0dHA6Ly9jaXBhLmpwL2V4aWYvMS4wLyIKICAgIHhtbG5zOmF1eD0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC9hdXgvIgogICB0aWZmOkltYWdlTGVuZ3RoPSI1MTIiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTEyIgogICBleGlmRVg6TGVuc01vZGVsPSIiCiAgIGF1eDpMZW5zPSIiLz4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4RbzW+AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kd8rg1EYxz+GJiZEceFiaVxtYmpxo2wJJa2Z8utme/dL7cfb+25puVVuV5S48euCv4Bb5VopIiXlzjVxw3o976a2ZM/pOc/nfM95ns55DliCSSWlNwxBKp3VAlNe++LSst36go1urHTgDCm6OuH3z1LTPu+pM+Oty6xV+9y/1hKJ6grUNQmPK6qWFZ4Wnl3PqibvCHcpiVBE+EzYqckFhe9MPVzmV5PjZf42WQsGfGBpF7bHqzhcxUpCSwnLy3Gkkjnl9z7mS2zR9MK8xD7xXnQCTOHFzgyT+PAwzJjMHly4GZQVNfKHSvlzZCRXkVklj8YacRJkcYqak+pRiTHRozKS5M3+/+2rHhtxl6vbvND4bBjv/WDdhmLBML6ODKN4DPVPcJmu5GcOYfRD9EJFcxxA2yacX1W08C5cbEHPoxrSQiWpXtwSi8HbKbQuQecNNK+Ue/a7z8kDBDfkq65hbx8G5Hzb6g9PXmfbHNxW7wAAAAlwSFlzAAALEwAACxMBAJqcGAAAAf5JREFUOI2N1D1rFVEQBuBnr5twiYkRERTtTLAQCwULtUhhEfwDdtY2/gJra0UQf0aw1kYtAoJBSGMjaCFpFDWJxmi+1uLMIXuPuzEvHGbu3Nl3Ps7MqYxiiBo/cRYPcQkNduK/XSziDsbDvucADHEs9LkgayJI03Eyxg5Leq2HIONEYZ+MzPMZw6AkvRwfvcbNFsFJzIY+XxBXHcHHB1Lf1nEdb+OPq2HPWMW3DgI9VW0NpB7OSRfyspXBsOW4hyMF0RvdvW+wUGMCr8J5GY9w2n7pgjQHysRXpJbdxsWwL+EdbsC9ML7viLwcJGdC1mFfCfm8ow2fsAFPdPcpI7dmzOikrEYyMINzoW9grcafFskpbElL0EjTsoLpIIKpkNP4GPp6K+A2qtro1mzgdxBPFaTtC8y+Oak9xdi1R0pELdfzRciBf1v2I+SOYgNL4owqsiYtzSIeSO9Gnucaj0Pf/h/xcftjNSFuN4ifxilxFJvhP0LcJl9p6V9b+kzI2bA3UdEWfumYqjbxPC5I/Woi8zxOeSK+x/kvauly7uLZAX6bhyEriRd0v1AZjdR70mR0+ValPb8VeR4HLTnEWvweDzkl9bULk/gS3+3UUpk5k3wJ5SwvhfzQQ6qVxDLO97WgisibDn5H+vC5b0Ea++t7S3oad6VK+gLlqivc/wuWx5Fs+io4YAAAAABJRU5ErkJggg==" width="16" height="16"> copy to clipboard</span>
                <span class="close-click" *ngIf="notification.allowClose" (click)="hideNotification(notification)">×</span>
            </div>
        </div>
    `,
    animations: [
        trigger('flyDown', [
            state('in', style({
                opacity: 1,
                transform: 'translateY(0)'
            })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateY(-100%)'
                }),
                animate('600ms ease-in')
            ]),
            transition('* => void', [
                animate('200ms ease-out', style({
                    opacity: 0,
                    transform: 'translateY(-100%)'
                }))
            ])
        ])
    ]
})
export class NotificationBarComponent implements OnInit, OnDestroy {

    notifications: Notification[] = [];

    allowCopy: boolean = false;

    defaults = {
        message: '',
        type: NotificationType.Info,
        autoHide: true,
        hideDelay: 3000,
        isHtml: false,
        allowClose: false,
        hideOnHover: true
    };

    subscription: Subscription;

    constructor(
        private notificationBarService: NotificationBarService,
        @Inject(MESSAGES_CONFIG) @Optional() private config?: MessagesConfig
    ) {
        this.subscription = this.notificationBarService.onCreate.subscribe(this.addNotification.bind(this));
    }

    ngOnInit() { }

    addNotification(notification: Notification) {
        let newNotification = Object.assign({}, this.defaults, notification);
        newNotification.typeValue = NotificationType[newNotification.type].toLowerCase();
        if (this.config && this.config.messages) {
            newNotification.message = this.config.messages[notification.message] || notification.message;
        }

        this.notifications.push(newNotification);

        if (newNotification.autoHide) {
            window.setTimeout(() => {
                this.hideNotification(newNotification);
            }, newNotification.hideDelay);
        }
    }

    hideNotification(notification: Notification) {
        let index = this.notifications.indexOf(notification);

        this.copyNotificationToClipboard(notification.message);

        this.notifications.splice(index, 1);
    }

    copyNotification(notification: Notification): void {
        this.copyNotificationToClipboard(notification.message);
    }

    copyNotificationToClipboard(text) {
        var txtArea = document.createElement("textarea");

        txtArea.style.position = 'fixed';
        txtArea.value = text;
        document.body.appendChild(txtArea);
        txtArea.select();
        
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            
            console.log('Copying text command was ' + msg);
            
            if (successful) {
                return true;
            }
        } catch (err) {
            console.log('Oops, unable to copy');
        }
        
        document.body.removeChild(txtArea);

        return false;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    hideOnHover(notification: Notification) {
        if (notification.hideOnHover) {
            this.hideNotification(notification);
        }
    }
}
