import { toDoTasksComponent } from "../components/toDoTasksComponent";
import { toDoTasksComponentHelper } from "../helpers/toDoTasksComponentHelper";

class HomePage {
    toDoTasksComponent = toDoTasksComponent
    toDoTasksComponentHelper = toDoTasksComponentHelper

    goToBaseUrl(){
        cy.visit('/')
    }
}

export const homePage = new HomePage()