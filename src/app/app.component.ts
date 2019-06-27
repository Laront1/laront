import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { from, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Malange',
      url: '/home',
      icon: 'md-pin'
    },
    {
      title: 'Namibe',
      url: '/list',
      icon: 'md-planet'
    },

    {
      title: 'Bengo',
      url: '/bengo',
      icon: 'list'
    },

   

  ];

  Splash = true;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

ionViewDidLoad(){
    setTimeout(() => {
      this.Splash = false;
      
    }, 4000);

}


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(()=> this.Splash = false)
    });
  }
}
