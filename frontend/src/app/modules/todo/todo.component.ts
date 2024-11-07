//  Components
import { BtnBasicComponent } from "@shared/components/btn-basic/btn-basic.component";
//  Interface
import { Observable } from "rxjs";
import { Task, TodoAction } from "@todo/interface/task.interface";
//  Store
import { TodoStore } from "@todo/store/todo.store";
//  Services
import { TasksManagerService } from "@todo/services/tasks-manager.service";
import { TodoApiService } from "@todo/services/todo-api.service";

import { LetDirective } from "@ngrx/component";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TaskEditorComponent } from "@todo/components/task-editor/task-editor.component";
import { TaskInputFieldComponent } from "@todo/components/task-input-field/task-input-field.component";
import { DividerXComponent } from "@shared/components/divider-x/divider-x.component";
import { ListTasksComponent } from "@todo/components/list-tasks/list-tasks.component";
import { provideComponentStore } from "@ngrx/component-store";
import { FilterPipe } from "@todo/pipes/filter.pipe";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [
    BtnBasicComponent,
    LetDirective,
    TaskEditorComponent,
    TaskInputFieldComponent,
    DividerXComponent,
    ListTasksComponent,
    FilterPipe,
  ],
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.css",
  providers: [
    TasksManagerService,
    TodoApiService,
    provideComponentStore(TodoStore),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  todos$: Observable<Task[]> = this.todoStore.todos$;
  isLoading$: Observable<boolean> = this.todoStore.isLoading$;
  currentFilter$: Observable<TodoAction> = this.todoStore.currentFilter$;

  constructor(private readonly todoStore: TodoStore) {}
}
