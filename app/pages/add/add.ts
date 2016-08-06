import {Page, NavController} from 'ionic-angular';
import { AngularFire } from 'angularfire2';
@Page({
    templateUrl: 'build/pages/add/add.html'
})
export class AddPage {
 
    public todoList: Array<string>;
    public todoItem: string;
 
    constructor(public af:AngularFire,private nav: NavController) {
        this.todoList = JSON.parse(localStorage.getItem("todos"));
        if(!this.todoList) {
            this.todoList = [];
        }
        this.todoItem = "";
    }
 
    save() {
        if(this.todoItem != "") {
            this.todoList.push(this.todoItem);
            var textItems = this.af.database.list('/textItems');
        textItems.push({
            "title": "Ionic 2 with Firebase and Typescript",
            "description": "Test Message from ionic app",
            // auth data from the navParam object...
            "user": "Aaqib Hussain",
            "timestamp": (new Date()).getTime()
        }).then((_data) => {
            console.log(_data)
            alert("Item Successfully Added")
        
        }).catch((_error) => {
            console.log(_error)
            alert("Error Adding Item")
        })
    }
            localStorage.setItem("todos", JSON.stringify(this.todoList));
            this.nav.pop();
        }
    }
 
