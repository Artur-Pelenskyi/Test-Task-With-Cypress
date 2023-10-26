class ToDoTasksComponent {
    get toDoAppModal() {
        return cy.get('.todoapp')
    }

    get newToDoInput() {
        return cy.get('.new-todo')
    }

    get toDoTasksList() {
        return cy.get('.todo-list')
    }

    get toDoTask() {
        return cy.get('.todo-list .view')
    }

    toDoTaskByText(toDoTaskText) {
        return this.toDoTasksList.find('.view label').contains(toDoTaskText)
    }

    toDoTaskDeleteButton(toDoTaskText) {
        return this.toDoTaskByText(toDoTaskText).next('.destroy')
    }

    toDoTaskCheckBox(toDoTaskText) {
        return this.toDoTaskByText(toDoTaskText).prev('.toggle')
    }

    get toggleAllButton() {
        return cy.get('#toggle-all')
    }

    get clearCompletedTasksButton() {
        return cy.get('.clear-completed')
    }

    get doToItemsCount() {
        return cy.get('.todo-count')
    }

    get allTasksFilter() {
        return cy.get('.filters a').contains('All')
    }

    get activeTasksFilter() {
        return cy.get('.filters a[href*="active"]')
    }

    get completedTasksFilter() {
        return cy.get('.filters a[href*="completed"]')
    }
}

export const toDoTasksComponent = new ToDoTasksComponent()