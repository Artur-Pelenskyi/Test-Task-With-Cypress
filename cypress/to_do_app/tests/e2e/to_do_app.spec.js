import { homePage } from "../../pages/homePage";

describe('TODO MVC', () => {
    beforeEach('Check the application is open', () => {
        homePage.goToBaseUrl()
        homePage.toDoTasksComponentHelper.checkToDoAppModalIsVisible()
    })

    it('Verify user is able to add a new task', () => {
        homePage.toDoTasksComponent.newToDoInput.should('be.visible')
        homePage.toDoTasksComponentHelper.checkAddingNewToDoTask()
    })

    it('Verify user is able to complete the task', () => {
        homePage.toDoTasksComponent.newToDoInput.should('be.visible')
        homePage.toDoTasksComponentHelper.checkMarkingToDoTaskAsDone()
    })

    it('Verify user is able to delete the task', () => {
        homePage.toDoTasksComponent.newToDoInput.should('be.visible')
        homePage.toDoTasksComponentHelper.checkToDoTaskDeleting()
    })

    it('Verify user is able to filter tasks list', () => {
        homePage.toDoTasksComponent.newToDoInput.should('be.visible')
        homePage.toDoTasksComponentHelper.checkToDoTasksListFiltering()
    })

    afterEach('Clean up all to do tasks', () => {
        homePage.toDoTasksComponentHelper.deleteAllTasksFromTheList()
    })
})