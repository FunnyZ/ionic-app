import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// 页面
import { TabsPage } from '../tabs/tabs';
// 服务
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public form: FormGroup; // form表单
  public slidesBackground: Array<string> = [  // 滑动背景图src集合
    'assets/backgroundImages/cat-background-1.jpg',
    'assets/backgroundImages/cat-background-4.jpg',
    'assets/backgroundImages/cat-background-5.jpg',
    'assets/backgroundImages/cat-background-7.jpg',
  ];

  constructor(
    public formBuilder: FormBuilder,
    public storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public authService: AuthService,
  ) {
    this.form = formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      remember: false,
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // 登录
  login(form) {
    this.authService.login(form.username, form.password);
    // this.navCtrl.push(TabsPage);  // 跳转,即使隐藏了返回按钮，安卓手机也是可以使用返回键跳回上一个页面的
    let modal = this.modalCtrl.create(TabsPage);
    modal.present();
  }

}
