package sample.aad.repository;

import com.microsoft.azure.spring.data.cosmosdb.repository.DocumentDbRepository;
import sample.aad.model.TodoItem;

public interface TodoItemRepository extends DocumentDbRepository<TodoItem, String> {
}
