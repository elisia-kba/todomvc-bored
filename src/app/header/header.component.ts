import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../todos.service';
import { BoredService } from '../services/bored.service'; // Importez le service BoredService

@Component({
  standalone: true,
  selector: 'app-todo-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private todosService = inject(TodosService);
  private boredService = inject(BoredService); // Injection du service BoredService

  title = '';

  // Ajout d'une nouvelle tâche avec un titre saisi par l'utilisateur
  addTodo() {
    if (this.title) {
      this.todosService.addItem(this.title);
      this.title = ''; // Réinitialiser le champ
    }
  }

  // Ajout d'une nouvelle tâche basée sur une activité aléatoire
  addRandomActivity() {
    this.boredService.getActivity().subscribe((activity) => {
      if (activity?.activity) {
        this.todosService.addItem(activity.activity); // Ajouter l'activité comme tâche
      }
    });
  }
}
