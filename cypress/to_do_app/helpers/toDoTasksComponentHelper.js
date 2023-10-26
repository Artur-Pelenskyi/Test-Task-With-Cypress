import { toDoTasksComponent } from "../components/toDoTasksComponent";
import { utils } from "../../utils/Utils";
import { taskFilters } from "../../support/constants";

class ToDoTasksComponentHelper {

    checkToDoAppModalIsVisible() {
        toDoTasksComponent.toDoAppModal.should('be.visible')
    }
    createNewToDoTask(newTaskName) {
        toDoTasksComponent.newToDoInput.type(newTaskName)
        toDoTasksComponent.newToDoInput.realPress('Enter')
    }

    checkToDoTaskIsVisible(taskName, isVisible = true) {
        if(isVisible) {
            toDoTasksComponent.toDoTaskByText(taskName).should('be.visible')
        } else {
            toDoTasksComponent.toDoTaskByText(taskName).should('not.exist')
        }
    }

    getTasksNumber() {
        toDoTasksComponent.doToItemsCount.should('be.visible')
        return cy.wrap(toDoTasksComponent.doToItemsCount).invoke("text")
    }

    checkAddingNewToDoTask(taskNameLength = 5) {
        const newTaskName = utils.getRandomString(taskNameLength)
        this.createNewToDoTask(newTaskName)
        this.checkToDoTaskIsVisible(newTaskName)
        toDoTasksComponent.doToItemsCount.should('be.visible')
        toDoTasksComponent.doToItemsCount.should('contain.text', '1')

    }

    markToDoTaskAsCompleted(toDoTaskName) {
        this.checkToDoTaskIsVisible(toDoTaskName)
        toDoTasksComponent.toDoTaskCheckBox(toDoTaskName).click()
    }

    checkToDoTaskIsMarkedAsCompleted(toDoTaskName) {
        toDoTasksComponent.toDoTaskCheckBox(toDoTaskName).should('be.checked')
    }

    checkMarkingToDoTaskAsDone(taskNameLength = 5) {
        const newTaskName = utils.getRandomString(taskNameLength)
        this.createNewToDoTask(newTaskName)
        this.markToDoTaskAsCompleted(newTaskName)
        this.checkToDoTaskIsMarkedAsCompleted(newTaskName)
        this.checkToDoTaskIsVisible(newTaskName)
        toDoTasksComponent.doToItemsCount.should('be.visible')
        toDoTasksComponent.doToItemsCount.should('contain.text', '0')
    }

    deleteToDoTask(toDoTaskName) {
        toDoTasksComponent.toDoTaskDeleteButton(toDoTaskName).click()
    }

    checkToDoTaskDeleting(taskNameLength = 5) {
        const newTaskName = utils.getRandomString(taskNameLength)
        this.createNewToDoTask(newTaskName)
        toDoTasksComponent.doToItemsCount.should('contain.text', '1')
        toDoTasksComponent.toDoTaskByText(newTaskName).realHover()
        this.deleteToDoTask(newTaskName)
        toDoTasksComponent.doToItemsCount.should('not.exist')
    }

    filerTasksListByFilter(filterName) {
        if(filterName === taskFilters.ALL) {
            toDoTasksComponent.allTasksFilter.click()
            toDoTasksComponent.allTasksFilter.should('have.attr', 'class', 'selected')
        } else if(filterName === taskFilters.ACTIVE) {
            toDoTasksComponent.activeTasksFilter.click()
            toDoTasksComponent.activeTasksFilter.should('have.attr', 'class', 'selected')
        } else if(filterName === taskFilters.COMPLETED) {
            toDoTasksComponent.completedTasksFilter.click()
            toDoTasksComponent.completedTasksFilter.should('have.attr', 'class', 'selected')
        }
    }

    checkToDoTasksListFiltering(tasksNameLength = 6, numberOfTasks = 3) {
        const taskNamesArray = []
        while (numberOfTasks > 0) {
            taskNamesArray.push(utils.getRandomString(tasksNameLength))
            numberOfTasks--
        }
        taskNamesArray.forEach(task => {
            this.createNewToDoTask(task)
            this.checkToDoTaskIsVisible(task)
        })
        this.markToDoTaskAsCompleted(taskNamesArray[taskNamesArray.length-1])
        this.filerTasksListByFilter(taskFilters.ACTIVE)
        for(let i = 0; i < taskNamesArray.length-1; i++){
            this.checkToDoTaskIsVisible(taskNamesArray[i])
        }
        this.checkToDoTaskIsVisible(taskNamesArray[taskNamesArray.length-1], false)
        this.filerTasksListByFilter(taskFilters.COMPLETED)
        for(let i = 0; i < taskNamesArray.length-1; i++){
            this.checkToDoTaskIsVisible(taskNamesArray[i], false)
        }
        this.checkToDoTaskIsVisible(taskNamesArray[taskNamesArray.length-1])
        this.filerTasksListByFilter(taskFilters.ALL)
        taskNamesArray.forEach(task => {
            this.checkToDoTaskIsVisible(task)
        })
    }

    deleteAllTasksFromTheList() {
        toDoTasksComponent.toDoTask.if('visible').then(() => {
            toDoTasksComponent.toggleAllButton.click({force: true})
            toDoTasksComponent.clearCompletedTasksButton.if('exist').click()
                .else().then(() => {
                toDoTasksComponent.toggleAllButton.click({force: true})
                toDoTasksComponent.clearCompletedTasksButton.click()
            })
        })
        toDoTasksComponent.toDoTasksList.should('not.exist')
        toDoTasksComponent.doToItemsCount.should('not.exist')
    }
}

export const toDoTasksComponentHelper = new ToDoTasksComponentHelper()