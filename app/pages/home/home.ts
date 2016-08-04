import {Page, NavController} from 'ionic-angular';
import {AddPage} from "../add/add";
 
@Page({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
 
    public todoList: Array<string>;
 
    constructor(private nav: NavController) { }
 
    onPageDidEnter() {
        this.todoList = JSON.parse(localStorage.getItem("todos"));
        if(!this.todoList) {
            this.todoList = [];
        }
    }
 
    delete(index: number) {
        this.todoList.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(this.todoList));
    }
 
    add() {
        this.nav.push(AddPage);
    }
 
}