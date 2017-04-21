import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkService } from '../../service/work_service';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the CreateCookData page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-cook-data',
  templateUrl: 'create-cook-data.html'
})
export class CreateCookDataPage {

  title = '';
  items = [1,2,3,2];
  foods = [1,1,1];
  isReordering: boolean = false;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public WorkService: WorkService) {
    this.title = this.WorkService._title;
    //this.showPrompt();
  }

  reorderItems(indexes) {
    let element = this.items[indexes.from];
    this.items.splice(indexes.from, 1);
    this.items.splice(indexes.to, 0, element);
  }

  edit() {
    this.isReordering = !this.isReordering;
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: '食材',
      message: "输入你要添加的材料和用量，例如：鸡蛋，一只",
      inputs: [
        {
          name: 'name',
          placeholder: '材料：如鸡蛋'
        },
        {
          name: 'len',
          placeholder: '用量：如一只'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
          }
        },
        {
          text: '添加',
          handler: data => {
            this.foods.push(1); 
            //alert(data.name);
            //alert(data.len);
          }
        }
      ]
    });
    prompt.present();
  }

  //发布
  send(){
    this.navCtrl.popToRoot();
  }

  //长按删除事件
  pressEvent(idx){
    //alert(idx);
    this.showConfirm();
  }

  //删除步骤／食材提示
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCookDataPage');
  }

}
